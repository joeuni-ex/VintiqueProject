import { Link } from "react-router-dom";
import "./Error.css";
import { MdErrorOutline } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="basic-container error-page">
      <p className="error-name">
        <MdErrorOutline />
        Page not found
      </p>
      <p>존재하지 않는 주소를 입력하셨거나, </p>
      <p>요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다. </p>

      <div className="basic-btn error-btn">
        <Link to="/">메인으로</Link>
      </div>
    </div>
  );
};

export default NotFound;
