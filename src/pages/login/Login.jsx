import "./Login.css";
import img from "../../assets/login.jpg";
import { Link } from "react-router-dom";

const Login = () => {
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
            <form>
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
                    color: "#dacbb6",
                  }}
                >
                  SignUp
                </Link>
              </div>

              <input
                className="LoginInput"
                type="text"
                placeholder="아이디를 입력해 주세요"
              />
              <input
                className="LoginInput"
                type="password"
                placeholder="비밀번호를 입력해 주세요"
              />
              <input className="LoginBtn" type="submit" value="Login" />
            </form>
          </div>
          <div>
            <p style={{ textAlign: "center" }}>
              계정이 없으신가요? <Link to="/signup">회원가입</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
