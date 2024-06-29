import PropTypes from "prop-types";
import "./BackgroundShadow.css";

const BackgroundShadow = ({
  className = "",
  bannerwebp,
  march2024XboxRebate,
}) => {
  return (
    <div className={`backgroundshadow ${className}`}>
      <div className="link13">
        <img
          className="bannerwebp-icon"
          loading="lazy"
          alt=""
          src={bannerwebp}
        />
        <div className="banner-content">
          <div className="march-2024-xbox-container">
            <p className="march-2024-xbox">{march2024XboxRebate}</p>
            <p className="dealer-promotion1">Dealer Promotion</p>
          </div>
          <div className="date-31032024">Date: 31.03.2024</div>
          <button className="button14">
            <img className="tag-icon14" alt="" src="/tag-icon.svg" />
            <div className="button15">Button</div>
            <img className="tag-icon15" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

BackgroundShadow.propTypes = {
  className: PropTypes.string,
  bannerwebp: PropTypes.string,
  march2024XboxRebate: PropTypes.string,
};

export default BackgroundShadow;
