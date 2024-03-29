import { useNavigate, useParams } from "react-router-dom";
import "./AddProduct.css";
import { useEffect, useRef, useState } from "react";
import Product from "../../model/Product";
import productService from "../../services/product.service";
import addImageIcon from "../../assets/plusIcon.png";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { addDoc, arrayUnion, collection, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ModifyProduct = () => {
  const navigate = useNavigate();
  //select box
  const selectList = [
    { value: "default", name: "카테고리 선택" },
    { value: "dining", name: "Dining" },
    { value: "living", name: "Living" },
    { value: "bedroom", name: "Bedroom" },
  ];
  const [selected, setSelected] = useState("default");

  //제품 상세
  const [product, setProduct] = useState(new Product("", "", "", 0, 0, "", []));

  //이미지 입력 요소 참조 상태
  const ImageInputRef = useRef(null);
  const MainImageInputRef = useRef(null);

  const { id } = useParams(); //주소 변수 path Variable
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // 게시물 이미지 미리보기 url 상태
  const [imageUrls, setImageUrls] = useState([]);
  const [mainImageUrl, setMainImageUrl] = useState("");

  //event handler 메인 이미지 변경
  const onMainImageChangeHandler = (e) => {
    if (!e.target.files || !e.target.files.length) return;
    const file = e.target.files[0];

    const imageUrl = URL.createObjectURL(file);

    setMainImageUrl(imageUrl);

    setProduct((prevState) => {
      return {
        ...prevState,
        mainImage: file,
      };
    });
  };

  //event handler 사이드 이미지 변경
  const onImageChangeHandler = (e) => {
    if (!e.target.files || !e.target.files.length) return;
    const file = e.target.files[0];

    // 미리보기
    const imageUrl = URL.createObjectURL(file);
    const newImageUrls = [...imageUrls, imageUrl];

    // 최대 3개 이미지까지만 유지
    const trimmedImageUrls = newImageUrls.slice(0, 3);

    setImageUrls(trimmedImageUrls);

    //백엔드에 전달할 제품 객체에 추가하기
    setProduct((prevState) => {
      return {
        ...prevState,
        boardImageList: [...prevState.boardImageList, file],
      };
    });
  };

  //event handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setSelected(value);
    }
    setProduct((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //메인 이미지 업로드 버튼 클릭 이벤트 ->파일 선택
  const onMainImageUploadClickHandler = () => {
    if (!MainImageInputRef.current) return;
    MainImageInputRef.current.click();
  };

  //사이드 이미지 업로드 버튼 클릭 이벤트 ->파일 선택
  const onImageUploadClickHandler = () => {
    //3개까지만 선택 가능
    if (!ImageInputRef.current || imageUrls.length >= 3) return;
    ImageInputRef.current.click();
  };

  //사이드 이미지 삭제 버튼
  const onImageCloseButtonClickHandler = (deleteIndex) => {
    if (!ImageInputRef.current) return;
    ImageInputRef.current.value = "";

    const newImageUrls = imageUrls.filter(
      (url, index) => index !== deleteIndex
    );

    setImageUrls(newImageUrls);

    // 이미지 삭제 후 백엔드에 전달할 제품 객체 업데이트
    setProduct((prevState) => {
      return {
        ...prevState,
        ["boardImageList"]: newImageUrls,
      };
    });
  };

  //메인 이미지 삭제 버튼
  const onMainImageCloseButtonClickHandler = (deleteIndex) => {
    if (!MainImageInputRef.current) return;
    MainImageInputRef.current.value = "";

    const newImageUrl = setMainImageUrl("");

    // 이미지 삭제 후 백엔드에 전달할 제품 객체 업데이트
    setProduct((prevState) => {
      return {
        ...prevState,
        ["mainImage"]: newImageUrl,
      };
    });
  };

  //수정 버튼 클릭 시 실행
  const onModifyProductBtnClickHandler = async () => {
    //입력되지 않은 경우 리턴
    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.stock ||
      !product.description ||
      !product.mainImage ||
      !product.boardImageList
    ) {
      return alert("작성되지 않은 정보가 있습니다.");
    }
    setIsLoading(true); //로딩 시작

    try {
      //파이어 스토어에 tweet 저장하기 -> addDoc
      const doc = await addDoc(collection(db, "images"), {
        mainImage: product.name,
        sideImages: product.name,
      });

      //메인 이미지 업로드
      const locationRef = ref(storage, `vintique/${doc.id}/mainImage`);
      const result = await uploadBytes(locationRef, product.mainImage); //파일업로드
      const url = await getDownloadURL(result.ref); //파일의 주소
      await updateDoc(doc, {
        mainImage: url,
      });

      //사이드 이미지 업로드
      const boardImageFiles = await Promise.all(
        product.boardImageList.map(async (image, index) => {
          const imageLocationRef = ref(
            storage,
            `vintique/${doc.id}/sideImage_${index}`
          );

          const result = await uploadBytes(imageLocationRef, image);
          const imageUrl = await getDownloadURL(result.ref);

          await updateDoc(doc, {
            sideImages: arrayUnion(imageUrl),
          });

          return imageUrl;
        })
      );

      // 백엔드에서 리턴 된 URL 을 Product 객체에 업데이트
      const updatedProduct = {
        ...product,
        mainImage: url,
        boardImageList: boardImageFiles,
      };

      // 제품 저장
      await productService.modifyProduct(updatedProduct, id);

      setIsLoading(false);

      alert("정상적으로 수정되었습니다.");
      navigate("/admin/product");
    } catch (err) {
      setIsLoading(false);
      alert("제품 저장 시 에러 발생");
      console.error(err);
    }
  };

  //제품id에 맞게 제품 정보 가져오기

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await productService.getByIdProduct(id);
        const productData = response.data[0];
        const productDataForImage = response.data;

        let boardImageList = [];

        productDataForImage.forEach((productData) => {
          if (
            productData.boardImageList &&
            productData.boardImageList.length > 0
          ) {
            boardImageList = [...boardImageList, ...productData.boardImageList];
          }
        });
        //카테고리 세팅
        setSelected(productData.category);
        //메인 이미지 세팅
        setMainImageUrl(productData.mainImage ? [productData.mainImage] : []);
        //사이드 이미지 세팅
        setImageUrls(boardImageList);

        setProduct({
          name: productData.name || "",
          category: productData.category || "default",
          price: productData.price || 0,
          stock: productData.stock || 0,
          description: productData.description || "",
          mainImage: productData.mainImage || "",
          boardImageList: boardImageList,
        });

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setIsLoading(false);
      }
    };

    fetchData(); // Invoke the fetch function when the component mounts
  }, [id]);

  return (
    <div className="board-write-wrapper base-color">
      <div className="board-write-container">
        <div className="board-write-title-box">
          <p>제품 수정</p>
        </div>
        <div className="divider"></div>
        <div className="board-write-box">
          <div className="board-write-images-box">
            <div className="board-write-image-box">
              <div
                style={{ display: "flex", width: "100%", padding: "30px 30px" }}
              >
                <p style={{ fontWeight: "600" }}>제품 정보</p>
              </div>

              <div className="board-write-image-icon">
                {mainImageUrl && (
                  <img className="board-write-image" src={mainImageUrl} />
                )}
              </div>
            </div>
          </div>
          <div className="board-write-content-box">
            <div className="board-write-content-box-top">
              <div
                style={{ display: "flex", width: "100%", marginBottom: "30px" }}
              >
                <p style={{ fontWeight: "600" }}>기본 정보</p>
              </div>
              <div style={{ display: "flex" }}>
                <div className="content-box-top-container">
                  <label className="board-write-label">제품명</label>
                  <input
                    onChange={handleChange}
                    className="board-write-input"
                    name="name"
                    type="text"
                    value={product?.name || ""}
                    placeholder="제품명을 입력하세요"
                  />
                  <label className="board-write-label">카테고리</label>
                  <select
                    onChange={handleChange}
                    name="category"
                    className="select-box board-write-input"
                    value={selected || "default"}
                  >
                    {selectList.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <label className="board-write-label">제품 가격</label>
                  <input
                    onChange={handleChange}
                    className="board-write-input"
                    name="price"
                    type="text"
                    value={product?.price || ""}
                    placeholder="제품 가격을 입력하세요"
                  />
                  <label className="board-write-label">재고</label>
                  <input
                    onChange={handleChange}
                    className="board-write-input"
                    name="stock"
                    type="text"
                    value={product?.stock || ""}
                    placeholder="재고를 입력하세요"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                </div>
                <div
                  className="content-box-top-container"
                  style={{ marginLeft: "30px" }}
                >
                  <label className="board-write-label">대표 이미지</label>
                  {!mainImageUrl && (
                    <div
                      onClick={onMainImageUploadClickHandler}
                      className="board-write-image-icon-side "
                    >
                      <img className="add-main-img" src={addImageIcon} alt="" />
                    </div>
                  )}
                  <input
                    style={{ display: "none" }}
                    ref={MainImageInputRef}
                    name="file"
                    onChange={onMainImageChangeHandler}
                    type="file"
                    accept="image/*"
                  />

                  {mainImageUrl && (
                    <div className="board-write-image-icon-side">
                      <img
                        className="board-write-image-side"
                        src={mainImageUrl}
                      />
                      <div
                        onClick={onMainImageCloseButtonClickHandler}
                        className="icon-button image-close"
                      >
                        <IoMdCloseCircleOutline />
                      </div>
                    </div>
                  )}

                  <label className="board-write-label">추가 이미지</label>

                  <div style={{ display: "flex" }}>
                    {imageUrls.length < 3 ? (
                      <div
                        onClick={onImageUploadClickHandler}
                        className="board-write-image-icon-side "
                      >
                        <img
                          className="add-main-img"
                          src={addImageIcon}
                          alt=""
                        />
                      </div>
                    ) : (
                      ""
                    )}

                    <input
                      type="file"
                      accept="image/*"
                      ref={ImageInputRef}
                      onChange={onImageChangeHandler}
                      style={{ display: "none" }}
                    />

                    {imageUrls &&
                      imageUrls.map((imageUrl, index) => (
                        <div
                          key={index}
                          className="board-write-image-icon-side"
                        >
                          <img
                            className="board-write-image-side"
                            src={imageUrl}
                          />
                          <div
                            onClick={() =>
                              onImageCloseButtonClickHandler(index)
                            }
                            className="icon-button image-close"
                          >
                            <IoMdCloseCircleOutline />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="board-write-content-box-bottom">
              <div
                style={{ display: "flex", width: "100%", marginBottom: "30px" }}
              >
                <p style={{ fontWeight: "600" }}>제품 상세 정보</p>
              </div>
              <textarea
                value={product?.description || ""}
                onChange={handleChange}
                name="description"
                className="board-write-content-textarea"
                placeholder="제품 상세 정보를 작성해주세요"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div className="basic-btn brown-btn" style={{ margin: "20px 0" }}>
                <div onClick={onModifyProductBtnClickHandler}>
                  {isLoading ? (
                    <p style={{ fontSize: "1rem" }}> 로딩중</p>
                  ) : (
                    <p style={{ fontSize: "1rem" }}> 제품 수정</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyProduct;
