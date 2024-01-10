import { useDispatch, useSelector } from "react-redux";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import userService from "../../services/user.service";
import { clearCurrentUser } from "../../store/actions/user";
import { useState } from "react";
import { Role } from "../../model/Role";

const RoleChange = () => {
  const currentUser = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleChange = () => {
    const adminPassword = "admin1111";
    const newRole = currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

    const adminPs = prompt("관리자 비밀번호를 입력하세요");
    if (adminPs === adminPassword) {
      userService
        .changeRole(newRole)
        .then(() => {
          dispatch(clearCurrentUser());
          navigate("/login");
        })
        .catch((err) => {
          setErrorMessage("예기치 않은 에러가 발생했습니다. ");
          console.log(err);
        });
    } else {
      alert("비밀번호가 틀렸습니다!");
      return;
    }
  };
  return (
    <div className="role-contianer">
      <button onClick={handleRoleChange}>권한 변경</button>
      {errorMessage && <em>{errorMessage}</em>}
    </div>
  );
};

export default RoleChange;
