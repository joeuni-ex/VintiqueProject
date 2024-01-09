import { useEffect, useState } from "react";
import Banner from "../../components/banner/Banner";
import "./MyPage.css";
const MyPage = () => {
  const title = "MyPage";

  return (
    <div className="shopContainer">
      <Banner title={title} />
    </div>
  );
};

export default MyPage;
