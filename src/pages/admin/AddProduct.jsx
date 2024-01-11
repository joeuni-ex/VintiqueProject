import { useState } from "react";
import "./AddProduct.css";
import { CiImageOn } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

// TODO 상품 추가 페이지 -> POST Product
const AddProduct = () => {
  const [selectCategory, setSelectCategory] = useState("Category");

  // 게시물 이미지 미리보기 url 상태
  const [imageUrls, setImageUrls] = useState([]);
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

              <img className="board-write-image" />
              {/* <div className="icon-button">
                <CiImageOn />
              </div>
              <div className="icon-button image-close">
                <IoMdCloseCircleOutline />
              </div> */}
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
                    className="board-write-input"
                    type="text"
                    placeholder="제품명을 입력하세요"
                  />
                  <label className="board-write-label">카테고리</label>
                  <select
                    name="Category"
                    className="select-box board-write-input"
                    defaultValue={selectCategory}
                  >
                    <option value="Dining">Dining</option>
                    <option value="Living">Living</option>
                    <option value="Bedroom">Bedroom</option>
                  </select>
                  <label className="board-write-label">제품 가격</label>
                  <input
                    className="board-write-input"
                    type="text"
                    placeholder="제품 가격을 입력하세요"
                  />
                  <label className="board-write-label">재고</label>
                  <input
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
                  className="content-box-top-container "
                  style={{ marginLeft: "30px" }}
                >
                  <label className="board-write-label">대표 이미지</label>
                  <input type="file" accept="image/*" />
                  <div>
                    <img src="" alt="" />
                  </div>
                  <label className="board-write-label">추가 이미지1</label>
                  <input type="file" accept="image/*" />
                  <div>
                    <img src="" alt="" />
                  </div>
                  <label className="board-write-label">추가 이미지2</label>
                  <input type="file" accept="image/*" />
                  <div>
                    <img src="" alt="" />
                  </div>
                  <label className="board-write-label">추가 이미지3</label>
                  <input type="file" accept="image/*" />
                  <div>
                    <img src="" alt="" />
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
                className="board-write-content-textarea"
                placeholder="본문을 작성해주세요"
              />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div className="basic-btn brown-btn" style={{ margin: "20px 0" }}>
                <div>
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
