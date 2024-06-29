import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`frame-group ${className}`}>
      <div className="frame-container">
        <div className="gold-link-containers-parent">
          <div className="gold-link-containers">
            <div className="link-anasayfa">Homepage</div>
          </div>
          <div className="div8">/</div>
          <div className="gold-link-containers1">
            <a
              className="link-razer"
              href="https://www.figma.com/design/wx3LEFvwA6EOYEsb65ca9o?node-id=1-3244"
              target="_blank"
            >
              Razer Gold
            </a>
          </div>
        </div>
        <h3 className="heading-2">Razer Gold 5 TL</h3>
      </div>
      <div className="gold-balance-containers-parent">
        <div className="gold-balance-containers">/</div>
        <div className="gold-balance-containers1">
          <div className="link-razer1">Razer Gold</div>
        </div>
        <div className="gold-balance-containers2">/</div>
        <div className="gold-balance-containers3">
          <div className="item-link">Razer Gold 5 TL</div>
        </div>
      </div>
      <div className="input">
        <input className="search" placeholder="Search" type="text" />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
