import PropTypes from "prop-types";
import "./CardQuantity.css";

const CardQuantity = ({
  className = "",
  cards,
  panormaPresentsGiftCard,
  divider,
}) => {
  return (
    <div className={`card-quantity ${className}`}>
      <div className="hourly-details" />
      <div className="plus-button">
        <div className="wrapper-cards">
          <img className="cards-icon" alt="" src={cards} />
        </div>
        <div className="cards-gift-card">
          <div className="panorma-presents-gift">{panormaPresentsGiftCard}</div>
        </div>
        <div className="item-actions">
          <div className="divider">{divider}</div>
        </div>
        <div className="checkout-button">
          <div className="plus-container-parent">
            <div className="plus-container">
              <img className="icon-plus" alt="" src="/iconplus.svg" />
            </div>
            <div className="checkout-title">1</div>
            <input className="hour-values" type="checkbox" />
          </div>
          <div className="hourly-parent">
            <div className="hourly">Hourly</div>
            <div className="logo-container-wrapper">
              <img
                className="logo-container-icon"
                alt=""
                src="/frame-1000002972.svg"
              />
            </div>
          </div>
        </div>
        <div className="company-logo">$10.11</div>
      </div>
    </div>
  );
};

CardQuantity.propTypes = {
  className: PropTypes.string,
  cards: PropTypes.string,
  panormaPresentsGiftCard: PropTypes.string,
  divider: PropTypes.string,
};

export default CardQuantity;
