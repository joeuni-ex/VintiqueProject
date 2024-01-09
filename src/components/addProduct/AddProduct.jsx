import { useRef, useState } from "react";
import "./AddProduct.css";
import { CiImageOn } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

const AddProduct = () => {
  const contentRef = useRef(null);
  const imageInputRef = useRef(null);

  return (
    <div className="board-write-wrapper">
      <div className="board-write-container">
        <div className="board-write-box">
          <div className="board-write-title-box">
            <input
              className="board-write-title-input"
              type="text"
              placeholder="제목을 작성해주세요"
            />
          </div>
          <div className="divider"></div>
          <div className="board-write-content-box">
            <textarea
              ref={contentRef}
              className="board-write-content-textarea"
              placeholder="본문을 작성해주세요"
            />
            <div className="icon-button">
              <CiImageOn />
            </div>
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
            />
          </div>
          <div className="board-write-images-box">
            <div className="board-write-image-box">
              <img className="board-write-image" />
              <div className="icon-button image-close">
                <IoMdCloseCircleOutline />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
