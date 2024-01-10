import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children, roles }) => {
  const currentUser = useSelector((state) => state.user);

  //인증
  const authorize = () => {
    if (!currentUser) {
      //유저가 없을 경우
      return <Navigate to="/login" />; //로그인 페이지로 리턴
    }
    if (roles?.indexOf(currentUser.role) === -1) {
      // 같은 값이 있을 경우 양수로 나옴
      //props로 받아오는 roles의 인덱스가 -1일 경우 즉 권한이 없을 경우
      return <Navigate to="/401" />; // notfound페이지로 이동
    }
    return children; //권한이 있음
  };

  return authorize();
};

export default AuthGuard;
