import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./ReviewSave.css";
import reviewService from "../../services/review.service";
import Review from "../../model/Review";
import { IoCloseSharp } from "react-icons/io5";
import Star from "../rate/Star";
import Star2 from "../rate/Star2";
import { useNavigate } from "react-router-dom";

//리뷰 작성 모달창
const ReviewSave = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    //상위컴포넌트에서 변경
    showProductModal() {
      setTimeout(() => setShow(true), 0.2); //모달창 보여줌
    },
  }));

  const [review, setReview] = useState(
    new Review(props.orderItemId, "", 0, props.product)
  ); //model의 리뷰 객체
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setReview(new Review(props.orderItemId, "", 0, props.product));
  }, [props.product]);

  //평점 선택
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  //별점을 클릭하면 해당 인덱스가 넘어와서
  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates); // 별점 색상을 바꾼다.
    setReview((prevReview) => ({ ...prevReview, rate: index + 1 })); //리뷰 객체에 저장
  };

  //리뷰 작성 클릭 시 실행
  const saveReview = async (e) => {
    e.preventDefault();

    //리뷰 내용, 리뷰 평점 공백이면 리턴
    if (!review.reviewContent) {
      alert("상품평을 작성해 주세요!");
      return;
    }
    if (review.reviewContent <= 9) {
      alert("상품평을 10자 이상 작성해 주세요!!");
      return;
    }
    if (!review.rate) {
      alert("별점을 선택해 주세요!");
    }
    await reviewService //백엔드에 제품 저장 요청
      .saveReview(review)
      .then((response) => {
        alert("리뷰가 정상적으로 작성되었습니다.");
        // props.onSaved(response.data); //상위컴포넌트에 저장데이터 전달
        setShow(false); //모달창 사라짐
        navigate("/user/review");
      })
      .catch((err) => {
        setErrorMessage("제품 저장시 에러발생!");
        console.log(err);
      });

    //setReview(new Review("", 0, 0)); //초기화
  };

  //입력창 변경 시 실행
  const handleChange = (e) => {
    const { name, value } = e.target;

    setReview((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const closeModal = () => {
    setShow(false); //모달 닫기
    // setReview(new Review("", 0, 0)); //제품 초기화
  };

  return (
    <>
      {show && (
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-close" onClick={closeModal}>
              <IoCloseSharp style={{ width: "20px", height: "20px" }} />
            </div>
            <div className="modal-rate-container">
              <div>
                <p>상품은 만족하셨나요?</p>
              </div>
              <div style={{ display: "flex" }}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                    key={index}
                    onClick={(e) => handleStarClick(e, index)}
                  >
                    {clicked[index] ? <Star /> : <Star2 />}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-review-container">
              <p>{`만족도 ${review.rate}점을 주셨네요.`}</p>
              <p>어떤 점이 좋았나요?</p>
              <textarea
                onChange={handleChange}
                className="modal-review-textarea"
                name="reviewContent"
                placeholder="최소 10자 이상 남겨주세요."
              ></textarea>
            </div>
            <div className="modal-review-btn" onClick={saveReview}>
              리뷰 작성
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default ReviewSave;
