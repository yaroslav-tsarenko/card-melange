import BackgroundShadow from "./BackgroundShadow";
import BackgroundShadow2 from "./BackgroundShadow2";
import PropTypes from "prop-types";
import "./SecureContainer.css";

const SecureContainer = ({ className = "" }) => {
  return (
    <section className={`secure-container ${className}`}>
      <div className="convenient-quick">
        <h1 className="convenient-quick-and">Convenient, Quick, and Secure</h1>
      </div>
      <div className="banner-items">
        <BackgroundShadow
          bannerwebp="/bannerwebp@2x.png"
          march2024XboxRebate="March 2024 Xbox Rebate "
        />
        <BackgroundShadow
          bannerwebp="/bannerwebp-1@2x.png"
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

SecureContainer.propTypes = {
  className: PropTypes.string,
};

export default SecureContainer;
