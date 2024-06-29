import BackgroundShadow1 from "./BackgroundShadow1";
import BackgroundShadow3 from "./BackgroundShadow3";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`backgroundshadow-container ${className}`}>
      <BackgroundShadow1
        bannerwebp="/bannerwebp-16@2x.png"
        apri2024GoogleRebate="February 2024 Xbox Rebate"
        date30042024="Date: 29.02.2024"
        propFlex="1"
        propMinWidth="263px"
      />
      <div className="backgroundshadow8">
        <div className="bannerwebp-wrapper">
          <img
            className="bannerwebp-icon9"
            alt=""
            src="/bannerwebp-17@2x.png"
          />
        </div>
        <div className="fourth-promotion-details">
          <div className="january-2024-xbox-container">
            <p className="january-2024-xbox">January 2024 Xbox Rebate</p>
            <p className="dealer-promotion9">Dealer Promotion</p>
          </div>
          <div className="date-31012024-wrapper">
            <div className="date-310120241">Date: 31.01.2024</div>
          </div>
        </div>
      </div>
      <BackgroundShadow3
        bannerwebp="/bannerwebp-18@2x.png"
        apri2024ITunesRebate="January 2024 Razer Rebate Bayi"
        date31032024="Date: 31.01.2024"
        propFlex="0.9794"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
