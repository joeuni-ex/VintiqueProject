import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import AdminCate from "../../components/userCategory/AdminCate";
import userService from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Role } from "../../model/Role";
import { clearCurrentUser } from "../../store/actions/user";
import MyPageCate from "../../components/userCategory/MyPageCate";

const UserRoleChange = () => {
  const currentUser = useSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const adminPassword = "1234";

  //권한 버튼 클릭 시
  const handleRoleChange = () => {
    const newRole = currentUser.role === Role.ADMIN ? Role.USER : Role.ADMIN;

    const adminPs = prompt("관리자 비밀번호를 입력하세요");
    if (adminPs === adminPassword) {
      userService
        .changeRole(newRole)
        .then(() => {
          dispatch(clearCurrentUser());
          alert("다시 로그인이 필요합니다.");
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
    <div className="basic-container">
      {/* 배너 */}
      <Banner title="MyPage" />
      <div className="userPage">
        <MyPageCate select="4" />
        <div className="user-content">
          <div className="role-contianer">
            <div style={{ marginBottom: "50px" }}>
              <p>{`현재 권한은 <${currentUser.role}>입니다.`}</p>
            </div>

            <button className="basic-btn brown-btn" onClick={handleRoleChange}>
              권한 변경
            </button>
            {errorMessage && <em>{errorMessage}</em>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleChange;
