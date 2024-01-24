import Banner from "../../components/banner/Banner";
import aboutImg from "../../assets/about.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="basic-container">
      {/* 배너 */}
      <Banner title="About" />
      <div className="about-container">
        {/* 상단 */}
        <div className="about-content-top">
          <p className="about-content-top-title">
            "Lorem ipsum dolor sit, amet consectetur"
          </p>
          <div className="short-divider"></div>
          <div className="about-content-top-text">
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
          </div>
          <div className="about-content-top-text">
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
          </div>
        </div>
        {/* 이미지 영역 */}
        <div className="about-content-img">
          <img src={aboutImg} alt="aboutImg" />
        </div>
        {/* 하단 */}
        <div className="about-content-bottom">
          <p className="about-content-bottom-title">title</p>
          <div>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
          </div>
          <p className="about-content-bottom-title">title</p>
          <div>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
            <p>
              architecto repellat quo id maiores, dolorem, necessitatibus maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
