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
            "Make your space extraordinary."
          </p>

          <div className="short-divider"></div>
          <div className="about-content-top-text">
            <p>
              <span className="about-span">Vintique는</span> 빈티지한 감성에
              현대적인 심플함을 더한
              <span className="about-span"> 'Vintage' </span>와
              <span className="about-span"> 'Unique' </span>의 조합에서 영감을
              받아 창조된 브랜드입니다.
            </p>
            <p>
              고객들에게 특별한 공간을 만들어드리기 위해 다양하고 세련된
              소품들을 제공합니다.
            </p>
          </div>
          <div className="about-content-top-text">
            <p>
              감각적인 디자인과 고품질 소재로 만들어진 제품들은 집 안의 작은
              공간부터
            </p>
            <p>
              큰 공간까지 모두 어울리며,고객들에게 특별한 삶의 순간을 선사하도록
              노력하겠습니다.
            </p>
            <p></p>
          </div>
          <div className="about-content-top-text">
            <p>지금까지 없었던 감성적인 공간을 꾸미고 싶은 분들을 위해,</p>
            <p>
              우리 샵에서만 찾을 수 있는 독특하고 아름다운 소품들로 여러분의
              공간을 더욱 특별하게 만들어보세요.
            </p>
            <p></p>
          </div>
        </div>
        {/* 이미지 영역 */}
        <div className="about-content-img">
          <img src={aboutImg} alt="aboutImg" />
          <div className="about-content-img-text">
            <p> Vintique</p>
          </div>
        </div>
        {/* 하단 */}
        <div className="about-content-bottom">
          <p className="about-content-bottom-title">
            예술적인 감성과 실용성을 담다.
          </p>
          <div className="about-content-bottom-text">
            <p>
              예술적인 감성과 실용성이 조화를 이룬 특별한 소품들을 찾는 이들을
              위한 곳입니다.
            </p>
            <p>각 제품은 디자이너의 정성과 열정이 담겨 있으며,</p>
            <p>당신의 공간을 더 풍부하고 아름답게 만들어줄 것입니다.</p>
          </div>
          <p className="about-content-bottom-title">공간을 더욱 더 특별하게,</p>
          <div></div>{" "}
          <div className="about-content-bottom-text">
            <p>
              우리는 소소한 행복과 아름다움을 추구하는 이들을 위해 고안된
              소품들을 모았습니다.
            </p>
            <p>각각의 아이템은 특별한 이야기와 감성을 담아내어,</p>
            <p>여러분이 소유한 공간을 더욱 특별하게 만들어줄 것입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
