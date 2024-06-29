import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow5.css";

const BackgroundShadow5 = ({
  className = "",
  bannerwebp,
  bannerwebp1,
  april2024GarenaRebate,
  date30042024,
  propFlex,
  propMinWidth,
}) => {
  const backgroundShadow1Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`backgroundshadow5 ${className}`}
      style={backgroundShadow1Style}
    >
      <div className="container1">
        <img className="bannerwebp-icon5" alt="" src={bannerwebp} />
        <img className="bannerwebp-icon6" alt="" src={bannerwebp1} />
      </div>
      <div className="promotion-info">
        <div className="title-date-wrapper">
          <div className="april-2024-garena-container">
            <p className="april-2024-garena">{april2024GarenaRebate}</p>
            <p className="dealer-promotion6">Dealer Promotion</p>
          </div>
          <div className="date-wrapper">
            <div className="date-30042024">{date30042024}</div>
          </div>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="button30">
          <img className="tag-icon30" alt="" src="/tag-icon.svg" />
          <div className="button31">Buy Now</div>
          <img className="tag-icon31" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

BackgroundShadow5.propTypes = {
  className: PropTypes.string,
  bannerwebp: PropTypes.string,
  bannerwebp1: PropTypes.string,
  april2024GarenaRebate: PropTypes.string,
  date30042024: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default BackgroundShadow5;
