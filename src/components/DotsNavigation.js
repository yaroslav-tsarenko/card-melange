import PropTypes from "prop-types";
import "./DotsNavigation.css";

const DotsNavigation = ({ className = "" }) => {
  return (
    <div className={`dots-navigation ${className}`}>
      <div className="right-navigation">
        <div className="joy-container">
          <h1 className="start-spreading-joy">Start Spreading Joy Today</h1>
          <div className="ready-to-spread">
            Ready to spread some joy? Purchase a gift card now and give your
            loved ones the gift of endless possibilities!
          </div>
        </div>
        <div className="purchase-button-container">
          <button className="button6">
            <img className="tag-icon6" alt="" src="/tag-icon.svg" />
            <div className="button7">Shop Now</div>
            <img className="tag-icon7" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
      <div className="dots" />
      <div className="dots1" />
      <div className="dots2" />
    </div>
  );
};

DotsNavigation.propTypes = {
  className: PropTypes.string,
};

export default DotsNavigation;
