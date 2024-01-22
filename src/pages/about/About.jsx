import Banner from "../../components/banner/Banner";
import mainImg from "../../assets/main.jpg";
import "./About.css";
const About = () => {
  const title = "About"; //배너 이름
  return (
    <div className="basic-container">
      {<Banner title={title} />}
      <div>
        <div className="about-content">
          <div className="about-content-img">
            <img src={mainImg} alt="aboutImg" />
          </div>
          <div>
            <h2>title</h2>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            architecto repellat quo id maiores, dolorem, necessitatibus maxime
            explicabo officia error ut aliquid! Deserunt iure ex incidunt
            laborum itaque, facilis optio!
          </div>
        </div>
      </div>
      <div>
        <div className="about-content">
          <div className="about-content-img">
            <img src={mainImg} alt="aboutImg" />
          </div>
          <div>
            <h2>title</h2>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            architecto repellat quo id maiores, dolorem, necessitatibus maxime
            explicabo officia error ut aliquid! Deserunt iure ex incidunt
            laborum itaque, facilis optio!
          </div>
        </div>
      </div>
      <div>
        <div className="about-content">
          <div className="about-content-img">
            <img src={mainImg} alt="aboutImg" />
          </div>
          <div>
            <h2>title</h2>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            architecto repellat quo id maiores, dolorem, necessitatibus maxime
            explicabo officia error ut aliquid! Deserunt iure ex incidunt
            laborum itaque, facilis optio!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
