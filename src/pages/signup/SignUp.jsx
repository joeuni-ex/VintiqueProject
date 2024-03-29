import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/login.jpg";
import { useEffect, useState } from "react";
import User from "../../model/User";
import { useSelector } from "react-redux";
import { signupService } from "../../services/auth.service";
import userService from "../../services/user.service";

const SignUp = () => {
  const [user, setUser] = useState(new User("", "", "")); //유저 객체
  const [loading, setLoading] = useState(false); //로딩 상태
  const [error, setError] = useState(""); //에러 발생 시
  const [userIdCheck, setUserIdCheck] = useState(false);
  const [usernameError, setUsernameError] = useState(""); //아이디 에러메세지
  const [passwordError, setPasswordError] = useState(""); //비밀번호 에러메세지
  //스토어에서 유저 가져오기
  const currentUser = useSelector((state) => state.user); //state중에 user만가져오기

  const navigate = useNavigate();

  //한 번만 실행한다. 유저가 있으면 홈페이지로 이동
  useEffect(() => {
    if (currentUser?.id) {
      navigate("/");
    }
  }, []);

  //아이디 중복확인
  const userCheck = () => {
    setLoading(true);
    setUsernameError(""); //아이디 에러초기화
    if (user.username.trim().length < 6) {
      setUsernameError("아이디는 6자리 이상 입력이 필요합니다.");
    } else {
      userService
        .checkUser(user.username)
        .then((response) => {
          alert(`${user.username}은 사용 가능한 아이디입니다.`);
        })
        .catch((err) => {
          if (err?.response?.status === 409) {
            alert("이미 존재하는 아이디입니다.");
          }
        });
      setUserIdCheck(true);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState, //기존 User객체에
        [name]: value, //입력이 변경되면 그 내용이 추가된다.
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(""); //비밀번호 에러초기화

    //유저의 이름, 아이디,비밀번호, 비밀번호 재확인이 없을 경우 리턴
    if (!user.name || !user.username || !user.password || !user.password2) {
      alert("입력되지 않은 항목이 있습니다.");
      return;
    }

    if (userIdCheck === false) {
      alert("아이디 중복확인이 필요합니다.");
      return;
    }

    if (user.password !== user.password2) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setLoading(true); //로딩 시작

    signupService(user) //백엔드에 유저 정보 전달
      .then((ok) => {
        //정상 가입 완료
        navigate("/login"); //로그인 페이지로 이동
      })
      .catch((error) => {
        //에러 발생 시
        if (error?.response?.status === 409) {
          console.log(error.response.status);
        }
      });
  };

  return (
    <div className="container">
      <div className="loginSection">
        <div className="loginImg">
          <img src={img} alt="loginImg" />
        </div>
        <div className="loginContent">
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "#b88e2f ",
              marginLeft: "4rem",
            }}
          >
            <p>Welcome to Vintique!</p>
          </div>
          <div className="loginForm">
            <form onSubmit={handleSubmit}>
              <div className="loginTitle">
                <Link
                  to="/login"
                  style={{
                    marginRight: "20px",
                    padding: "5px 10px",
                    color: "#f5deb3",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{
                    borderBottom: "solid 3px  #b88e2f",
                    marginRight: "20px",
                    padding: "5px 10px",
                    color: "#b88e2f",
                  }}
                >
                  SignUp
                </Link>
              </div>
              <input
                className="LoginInput"
                name="name"
                type="text"
                placeholder="이름"
                onChange={handleChange}
              />
              <label style={{ width: "100%" }}>
                <input
                  className="LoginIdInput"
                  name="username"
                  type="text"
                  placeholder="아이디"
                  onChange={handleChange}
                />
                <input
                  onClick={userCheck}
                  className="LoginIdBtn"
                  type="button"
                  value="중복확인"
                />
              </label>
              {usernameError && (
                <em style={{ color: "red" }}> {usernameError}</em>
              )}
              <input
                className="LoginInput"
                name="password"
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
              />
              <input
                className="LoginInput"
                name="password2"
                type="password"
                placeholder="비밀번호 재확인"
                onChange={handleChange}
              />
              {passwordError && (
                <em style={{ color: "red", fontWeight: "600" }}>
                  {passwordError}
                </em>
              )}
              <input className="LoginBtn" type="submit" value="SignUp" />
            </form>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
