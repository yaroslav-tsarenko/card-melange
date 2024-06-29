import BackgroundShadow4 from "./BackgroundShadow4";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`banner-container-wrapper ${className}`}>
      <div className="banner-container1">
        <div className="banner-wrapper">
          <BackgroundShadow4
            bannerwebp="/bannerwebp1@2x.png"
            may2024SteamRebate="May 2024 Steam Rebate"
            dealerPromotion="Dealer Promotion"
          />
          <BackgroundShadow4
            bannerwebp="/bannerwebp-11@2x.png"
            may2024SteamRebate="May 2024 Pubg Rebate"
            dealerPromotion=" Dealer Promotion"
            propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          />
          <BackgroundShadow4
            bannerwebp="/bannerwebp-2@2x.png"
            may2024SteamRebate="May 2024 iTunes Rebate"
            dealerPromotion="Dealer Promotion"
            propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          />
          <div className="backgroundshadow3">
            <div className="link-wrapper">
              <div className="link25">
                <img
                  className="bannerwebp-icon3"
                  alt=""
                  src="/bannerwebp-31@2x.png"
                />
                <div className="may-2024-xbox-container">
                  <p className="may-2024-xbox">May 2024 Xbox Rebate</p>
                  <p className="dealer-promotion4">Dealer Promotion</p>
                </div>
                <button className="button24">
                  <img className="tag-icon24" alt="" src="/tag-icon.svg" />
                  <div className="button25">Buy Now</div>
                  <img className="tag-icon25" alt="" src="/tag-icon.svg" />
                </button>
              </div>
            </div>
          </div>
          <div className="backgroundshadow4">
            <div className="link26">
              <img
                className="bannerwebp-icon4"
                alt=""
                src="/bannerwebp-4@2x.png"
              />
              <div className="may-2024-google-container">
                <span className="may-2024-google-container1">
                  <p className="may-2024-google">May 2024 Google Rebate</p>
                  <p className="dealer-promotion5">Dealer Promotion</p>
                </span>
              </div>
              <button className="button26">
                <img className="tag-icon26" alt="" src="/tag-icon.svg" />
                <div className="button27">Buy Now</div>
                <img className="tag-icon27" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
          <BackgroundShadow4
            bannerwebp="/bannerwebp-5@2x.png"
            may2024SteamRebate="May 2024 Garena Rebate"
            dealerPromotion="Dealer Promotion"
            propBoxShadow="0px 2px 4px rgba(108, 111, 115, 0.1)"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
