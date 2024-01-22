import { Link } from "react-router-dom";
import "./Error.css";
import { MdErrorOutline } from "react-icons/md";
const UnAuthorized = () => {
  return (
    <div className="basic-container error-page">
      <p className="error-name">
        <MdErrorOutline />
        Unauthorized
      </p>
      <p>접근 권한이 없는 페이지입니다.</p>

      <div className="basic-btn error-btn">
        <Link to="/">메인으로</Link>
      </div>
    </div>
  );
};

export default UnAuthorized;
