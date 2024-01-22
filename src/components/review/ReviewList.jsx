import React from "react";

const ReviewList = ({ review, idx }) => {
  return (
    <tr>
      <td>{idx + 1}</td>

      <td>{review?.createDate}</td>

      <td style={{ cursor: "pointer" }}>리뷰삭제</td>
    </tr>
  );
};

export default ReviewList;
