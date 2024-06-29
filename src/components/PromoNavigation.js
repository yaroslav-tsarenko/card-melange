import PropTypes from "prop-types";
import "./PromoNavigation.css";

const PromoNavigation = ({ className = "" }) => {
  return (
    <div className={`promo-navigation ${className}`}>
      <img
        className="link-site-manset-a1b08f909e0"
        loading="lazy"
        alt=""
        src="/link--site-manset-a1b08f909e0fbe0a69ac44fa564d2306webp@2x.png"
      />
      <div className="left-navigation">
        <div className="link-site-manset-a1b08f909e01">
          <img
            className="link-site-manset-a1b08f909e0-child"
            alt=""
            src="/group-47312@2x.png"
          />
        </div>
        <div className="arrow-circle-left-parent">
          <img
            className="arrow-circle-left-icon"
            loading="lazy"
            alt=""
            src="/arrowcircleleft.svg"
          />
          <img
            className="arrow-circle-left-icon1"
            alt=""
            src="/arrowcircleleft-1.svg"
          />
        </div>
      </div>
      <img
        className="link-site-manset-a1b08f909e02"
        alt=""
        src="/link--site-manset-a1b08f909e0fbe0a69ac44fa564d2306webp-1@2x.png"
      />
    </div>
  );
};

PromoNavigation.propTypes = {
  className: PropTypes.string,
};

export default PromoNavigation;
