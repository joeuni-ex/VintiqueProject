import spinner from "../../assets/spinner.gif";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="로딩중.." />
    </div>
  );
};

export default Spinner;
