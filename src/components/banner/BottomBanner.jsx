import "./BottomBanner.css";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";

const BottomBanner = () => {
  return (
    <div className="bottom-banner-container">
      <div className="bottom-banner-contents-container">
        <div className="bottom-banner-content">
          <div>
            <HiOutlineTrophy className="bottom-banner-icon" />
          </div>
          <div className="bottom-banner-content-text">
            <p>
              <span className="bottom-banner-content-title">High Quality</span>
            </p>
          </div>
        </div>
        <div className="bottom-banner-content">
          <div>
            <HiOutlineBadgeCheck className="bottom-banner-icon" />
          </div>
          <div className="bottom-banner-content-text">
            <p>
              <span className="bottom-banner-content-title">
                Warranty Protection
              </span>
            </p>
          </div>
        </div>
        <div className="bottom-banner-content">
          <div>
            <MdOutlineLocalShipping className="bottom-banner-icon" />
          </div>
          <div className="bottom-banner-content-text">
            <span className="bottom-banner-content-title">Free Shipping</span>
          </div>
        </div>
        <div className="bottom-banner-content">
          <div>
            <MdOutlineSupportAgent className="bottom-banner-icon" />
          </div>
          <div className="bottom-banner-content-text">
            <span className="bottom-banner-content-title">24 / 7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
