import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow3.css";

const BackgroundShadow3 = ({
  className = "",
  bannerwebp,
  apri2024ITunesRebate,
  date31032024,
  propFlex,
}) => {
  const backgroundShadow3Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`backgroundshadow7 ${className}`}
      style={backgroundShadow3Style}
    >
      <div className="fifth-promotion-links">
        <img className="bannerwebp-icon8" alt="" src={bannerwebp} />
      </div>
      <div className="promotion-container">
        <div className="apri-2024-itunes-container">
          <p className="apri-2024-itunes">{apri2024ITunesRebate}</p>
          <p className="dealer-promotion8">Dealer Promotion</p>
        </div>
        <div className="date-31032024-wrapper">
          <div className="date-310320241">{date31032024}</div>
        </div>
      </div>
      <div className="button-container">
        <button className="button34">
          <img className="tag-icon34" alt="" src="/tag-icon.svg" />
          <div className="button35">Buy Now</div>
          <img className="tag-icon35" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

BackgroundShadow3.propTypes = {
  className: PropTypes.string,
  bannerwebp: PropTypes.string,
  apri2024ITunesRebate: PropTypes.string,
  date31032024: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default BackgroundShadow3;
