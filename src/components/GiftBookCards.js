import PropTypes from "prop-types";
import "./GiftBookCards.css";

const GiftBookCards = ({ className = "" }) => {
  return (
    <div className={`gift-book-cards ${className}`}>
      <div className="card-types">
        <div className="card-containers">
          <h1 className="your-gift-cards">Your Gift Cards</h1>
          <img
            className="card-backgrounds-icon"
            loading="lazy"
            alt=""
            src="/rectangle-15431@2x.png"
          />
          <button className="button8">
            <img className="tag-icon8" alt="" src="/tag-icon1.svg" />
            <div className="button9">Shop Now</div>
            <img className="tag-icon9" alt="" src="/tag-icon1.svg" />
          </button>
        </div>
        <div className="card-containers1">
          <h1 className="your-book-cards">Your Book Cards</h1>
          <img
            className="card-containers-child"
            alt=""
            src="/rectangle-15431-1@2x.png"
          />
          <button className="button10">
            <img className="tag-icon10" alt="" src="/tag-icon1.svg" />
            <div className="button11">Shop Now</div>
            <img className="tag-icon11" alt="" src="/tag-icon1.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

GiftBookCards.propTypes = {
  className: PropTypes.string,
};

export default GiftBookCards;
