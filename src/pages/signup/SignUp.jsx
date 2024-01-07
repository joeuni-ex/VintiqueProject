import { Link } from "react-router-dom";
import img from "../../assets/login.jpg";

const SignUp = () => {
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
                    marginRight: "20px",
                    padding: "5px 10px",
                    color: "#dacbb6",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/signin"
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
                type="text"
                placeholder="이름을 입력해 주세요"
              />
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
