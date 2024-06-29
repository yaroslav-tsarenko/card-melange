import BackgroundShadow1 from "./BackgroundShadow1";
import BackgroundShadow5 from "./BackgroundShadow5";
import PropTypes from "prop-types";
import "./RebatePromotions.css";

const RebatePromotions = ({ className = "" }) => {
  return (
    <div className={`rebate-promotions ${className}`}>
      <BackgroundShadow1
        bannerwebp="/bannerwebp-28@2x.png"
        apri2024GoogleRebate="Pubg 8100 UC 5GB internet"
        date30042024="Date: 30.11.2022"
        propFlex="1"
        propMinWidth="333px"
      />
      <BackgroundShadow1
        bannerwebp="/bannerwebp-29@2x.png"
        apri2024GoogleRebate="November 2022 Razer Rebate"
        date30042024="Date: 30.11.2022"
        propFlex="1"
        propMinWidth="333px"
      />
      <BackgroundShadow1
        bannerwebp="/bannerwebp-30@2x.png"
        apri2024GoogleRebate="October 2022 Razer Rebate"
        date30042024="Date: 31.10.20 22"
        propFlex="1"
        propMinWidth="333px"
      />
      <BackgroundShadow1
        bannerwebp="/bannerwebp-311@2x.png"
        apri2024GoogleRebate="August 2022 Razer Rebate"
        date30042024="Date: 31.08.2022"
        propFlex="1"
        propMinWidth="333px"
      />
      <BackgroundShadow5
        bannerwebp="/bannerwebp-32@2x.png"
        bannerwebp1="/bannerwebp-33@2x.png"
        april2024GarenaRebate="July 2022 Razer Rebate"
        date30042024="Date: 31.07.2022"
        propFlex="0.8832"
        propMinWidth="333px"
      />
      <BackgroundShadow5
        bannerwebp="/bannerwebp-34@2x.png"
        bannerwebp1="/bannerwebp-35@2x.png"
        april2024GarenaRebate="June 2022 Razer Rebate"
        date30042024="Date: 30.06.2022"
        propFlex="0.8832"
        propMinWidth="333px"
      />
    </div>
  );
};

RebatePromotions.propTypes = {
  className: PropTypes.string,
};

export default RebatePromotions;
