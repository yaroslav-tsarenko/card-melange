import PropTypes from "prop-types";
import "./BackgroundShadow2.css";

const BackgroundShadow2 = ({ className = "" }) => {
  return (
    <div className={`backgroundshadow1 ${className}`}>
      <div className="banner-container">
        <img className="bannerwebp-icon1" alt="" src="/bannerwebp-3@2x.png" />
      </div>
      <div className="promo-info">
        <div className="january-2024-razer-container">
          <p className="january-2024-razer">January 2024 Razer Rebate Bayi</p>
          <p className="dealer-promotion2">Dealer Promotion</p>
        </div>
        <div className="promo-date-container">
          <div className="date-31012024">Date: 31.01.2024</div>
        </div>
        <div className="promo-button-container">
          <button className="button16">
            <img className="tag-icon16" alt="" src="/tag-icon.svg" />
            <div className="button17">Button</div>
            <img className="tag-icon17" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow2.propTypes = {
  className: PropTypes.string,
};

export default BackgroundShadow2;
