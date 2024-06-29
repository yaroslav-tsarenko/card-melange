import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundShadow4.css";

const BackgroundShadow4 = ({
  className = "",
  bannerwebp,
  may2024SteamRebate,
  dealerPromotion,
  propBoxShadow,
}) => {
  const backgroundShadowStyle = useMemo(() => {
    return {
      boxShadow: propBoxShadow,
    };
  }, [propBoxShadow]);

  return (
    <div
      className={`backgroundshadow2 ${className}`}
      style={backgroundShadowStyle}
    >
      <div className="link24">
        <img
          className="bannerwebp-icon2"
          loading="lazy"
          alt=""
          src={bannerwebp}
        />
        <div className="may-2024-steam-container">
          <p className="may-2024-steam">{may2024SteamRebate}</p>
          <p className="dealer-promotion3">{dealerPromotion}</p>
        </div>
        <button className="button22">
          <img className="tag-icon22" alt="" src="/tag-icon.svg" />
          <div className="button23">Buy Now</div>
          <img className="tag-icon23" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

BackgroundShadow4.propTypes = {
  className: PropTypes.string,
  bannerwebp: PropTypes.string,
  may2024SteamRebate: PropTypes.string,
  dealerPromotion: PropTypes.string,

  /** Style props */
  propBoxShadow: PropTypes.any,
};

export default BackgroundShadow4;
