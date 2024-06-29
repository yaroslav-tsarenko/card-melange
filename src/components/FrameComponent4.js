import BackgroundShadow3 from "./BackgroundShadow3";
import BackgroundShadow1 from "./BackgroundShadow1";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`backgroundshadow-parent1 ${className}`}>
      <BackgroundShadow3
        bannerwebp="/bannerwebp-25@2x.png"
        apri2024ITunesRebate="March 2023 Razer Rebate"
        date31032024="Date: 30.04.2023"
        propFlex="1"
      />
      <BackgroundShadow3
        bannerwebp="/bannerwebp-26@2x.png"
        apri2024ITunesRebate="January 2023 Razer Rebate"
        date31032024="Date: 31.01.2023"
        propFlex="0.9861"
      />
      <BackgroundShadow1
        bannerwebp="/bannerwebp-26@2x.png"
        apri2024GoogleRebate="December 2022 Razer Rebate"
        date30042024="Date: 30.12.2022"
        propFlex="0.8956"
        propMinWidth="263px"
      />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
