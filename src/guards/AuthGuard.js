import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//? 페이지 접근 권한 설정
const AuthGuard = ({ children, roles }) => {
  const currentUser = useSelector((state) => state.user); //유저 정보를 가져옴

  const authorize = () => {
    if (!currentUser) {
      alert("로그인이 필요한 서비스입니다.");
      return <Navigate to={{ pathname: "/login" }} />;
    }
    if (roles?.indexOf(currentUser.role) === -1) {
      //권한이 없을 경우
      return <Navigate to={{ pathname: "/401" }} />; //notfound페이지
    }
    return children; //권한이 있음
  };
  return authorize();
};

export default AuthGuard;
