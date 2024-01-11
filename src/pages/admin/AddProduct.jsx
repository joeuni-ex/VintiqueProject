import { useRef, useState } from "react";
import "./AddProduct.css";
import { CiImageOn } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Product from "../../model/Product";
import { useEffect } from "react";
import addImageIcon from "../../assets/plusIcon.png";
import productService from "../../services/product.service";
import { useNavigate } from "react-router-dom";

// TODO 상품 추가 페이지 -> POST Product
const AddProduct = () => {
  const navigate = useNavigate();

  //select box
  const selectList = [
    { value: "default", name: "카테고리 선택" },
    { value: "bedroom", name: "Bedroom" },
    { value: "living", name: "Living" },
    { value: "bedroom", name: "Bedroom" },
  ];
  const [selected, setSelected] = useState("Category");

  //제품 정보 저장
  const [product, setProduct] = useState(new Product("", "", "", 0, 0, "", []));

  //이미지 입력 요소 참조 상태
  const ImageInputRef = useRef(null);
  const MainImageInputRef = useRef(null);

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
        mainImage: imageUrl,
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
        ["boardImageList"]: imageUrls,
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

  const onAddProductBtnClickHandler = (e) => {
    if (
      !product.name ||
      !product.category ||
      !product.price ||
      !product.stock ||
      !product.mainImage ||
      !product.description ||
      !product.boardImageList
    ) {
      return alert("작성되지 않은 정보가 있습니다.");
    }

    productService //백엔드에 제품 저장 요청
      .saveProduct(product)
      .then((response) => {
        alert("정상적으로 추가되었습니다.");
        navigate("/admin/product");
      })
      .catch((err) => {
        alert("제품 저장 시 에러 발생!");
        console.log(err);
      });
    setProduct(new Product("", "", "", 0, 0, "", []));
  };

  //effect: 마운트 시 실행 할 함수
  useEffect(() => {
    setProduct(new Product("", "", "", 0, 0, []));
  }, []);

  // console.log(product);
  return (
    <div className="board-write-wrapper base-color">
      <div className="board-write-container">
        <div className="board-write-title-box">
          <p>제품 추가</p>
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
                    placeholder="제품명을 입력하세요"
                  />
                  <label className="board-write-label">카테고리</label>
                  <select
                    onChange={handleChange}
                    name="category"
                    className="select-box board-write-input"
                    value={selected}
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
                    placeholder="제품 가격을 입력하세요"
                  />
                  <label className="board-write-label">재고</label>
                  <input
                    onChange={handleChange}
                    className="board-write-input"
                    name="stock"
                    type="text"
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

                    {imageUrls.map((imageUrl, index) => (
                      <div key={index} className="board-write-image-icon-side">
                        <img
                          className="board-write-image-side"
                          src={imageUrl}
                        />
                        <div
                          onClick={() => onImageCloseButtonClickHandler(index)}
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
                onChange={handleChange}
                name="description"
                className="board-write-content-textarea"
                placeholder="제품 상세 정보를 작성해주세요"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div className="basic-btn brown-btn" style={{ margin: "20px 0" }}>
                <div onClick={onAddProductBtnClickHandler}>
                  <p style={{ fontSize: "1rem" }}> 제품 추가</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
