import BackgroundShadow from "./BackgroundShadow";
import BackgroundShadow2 from "./BackgroundShadow2";
import PropTypes from "prop-types";
import "./Recommendations.css";

const Recommendations = ({ className = "" }) => {
  return (
    <section className={`recommendations ${className}`}>
      <h1 className="recommended">Recommended</h1>
      <div className="promotions">
        <BackgroundShadow
          bannerwebp="/bannerwebp@2x.png"
          march2024XboxRebate="March 2024 Xbox Rebate "
        />
        <BackgroundShadow
          bannerwebp="/bannerwebp-27@2x.png"
          march2024XboxRebate="March 2024 Google Rebate"
        />
        <BackgroundShadow
          bannerwebp="/bannerwebp-2@2x.png"
          march2024XboxRebate="Apri 2024 iTunes Rebate "
        />
        <BackgroundShadow2 />
      </div>
    </section>
  );
};

Recommendations.propTypes = {
  className: PropTypes.string,
};

export default Recommendations;
