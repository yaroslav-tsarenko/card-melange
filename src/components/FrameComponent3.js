import BackgroundShadow1 from "./BackgroundShadow1";
import BackgroundShadow3 from "./BackgroundShadow3";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-div ${className}`}>
      <BackgroundShadow1
        bannerwebp="/bannerwebp-22@2x.png"
        apri2024GoogleRebate="August 2023 Razer Rebate"
        date30042024="Date: 31.08.2023"
        propFlex="1"
        propMinWidth="263px"
      />
      <BackgroundShadow3
        bannerwebp="/bannerwebp-23@2x.png"
        apri2024ITunesRebate="July 2023 Razer Rebate"
        date31032024="Date: 31.07.2023"
        propFlex="0.9245"
      />
      <BackgroundShadow1
        bannerwebp="/bannerwebp-24@2x.png"
        apri2024GoogleRebate="June 2023 Razer Rebate"
        date30042024="Date: 30.06.2023"
        propFlex="1"
        propMinWidth="263px"
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
