import "./Login.css";
import img from "../../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import User from "../../model/User";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginService } from "../../services/auth.service";
import { setCurrentUser } from "../../store/actions/user";

const Login = () => {
  const [user, setUser] = useState(new User("", "", "")); //유저 객체
  const [loading, setLoading] = useState(false); //로딩 상태
  const [errorMessage, setErrorMessage] = useState(""); //에러 메세지
  const curruntUser = useSelector((state) => state.user); //인증된 유저 정보
  const navigate = useNavigate();
  const dispatch = useDispatch(); //디스패치 -> 리덕스 state에 유저 값 업데이트

  //처음 실행 시 유저 정보 있을 경우 홈페이지로 이동
  useEffect(() => {
    if (curruntUser?.id) navigate("/");
  }, []);

  //입력 창 변경 시 유저 객체에 저장
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //로그인 시
  const handleLogin = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("아이디와 비밀번호를 입력해 주세요");
      return;
    }
    setLoading(true); //로딩 시작

    loginService(user) //로그인 서비스로 백엔드 요청
      .then((response) => {
        dispatch(setCurrentUser(response.data)); //디스패치로 액션->리듀서 전달 즉 로컬스토리지에 저장
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("아이디 또는 패스워드가 틀립니다.");
        setLoading(false);
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
            <form onSubmit={handleLogin}>
              <div className="loginTitle">
                <Link
                  to="/login"
                  style={{
                    borderBottom: "solid 3px  #b88e2f",
                    marginRight: "20px",
                    padding: "5px 10px",
                    color: "#b88e2f",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  style={{
                    marginRight: "20px",
                    padding: "5px 10px",
                    color: "#f5deb3",
                  }}
                >
                  SignUp
                </Link>
              </div>

              <input
                onChange={handleChange}
                className="LoginInput"
                name="username"
                type="text"
                placeholder="아이디를 입력해 주세요"
              />
              <input
                onChange={handleChange}
                className="LoginInput"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              {errorMessage && <em>{errorMessage}</em>}
              <input className="LoginBtn" type="submit" value="Login" />
            </form>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
