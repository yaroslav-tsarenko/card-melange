import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow1.css";

const BackgroundShadow1 = ({
  className = "",
  bannerwebp,
  apri2024GoogleRebate,
  date30042024,
  propFlex,
  propMinWidth,
}) => {
  const backgroundShadow2Style = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <div
      className={`backgroundshadow6 ${className}`}
      style={backgroundShadow2Style}
    >
      <div className="link27">
        <img className="bannerwebp-icon7" alt="" src={bannerwebp} />
        <div className="promotion-title-date">
          <div className="apri-2024-google-container">
            <p className="apri-2024-google">{apri2024GoogleRebate}</p>
            <p className="dealer-promotion7">Dealer Promotion</p>
          </div>
          <div className="date-300420241">{date30042024}</div>
        </div>
        <button className="button32">
          <img className="tag-icon32" alt="" src="/tag-icon.svg" />
          <div className="button33">Buy Now</div>
          <img className="tag-icon33" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

BackgroundShadow1.propTypes = {
  className: PropTypes.string,
  bannerwebp: PropTypes.string,
  apri2024GoogleRebate: PropTypes.string,
  date30042024: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default BackgroundShadow1;
