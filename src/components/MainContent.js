import PropTypes from "prop-types";
import "./MainContent.css";

const MainContent = ({ className = "" }) => {
  return (
    <section className={`main-content ${className}`}>
      <div className="classic-designs-parent">
        <h1 className="classic-designs">Classic Designs</h1>
        <div className="classic-designs-button-contain">
          <button className="button18">
            <img className="tag-icon18" alt="" src="/tag-icon.svg" />
            <div className="button19">View More</div>
            <img className="tag-icon19" alt="" src="/tag-icon.svg" />
          </button>
        </div>
      </div>
      <div className="slogan-container">
        <textarea
          className="find-favorite-slogan"
          placeholder="Find Your Favorite"
          rows={19}
          cols={21}
        />
        <textarea
          className="spread-joy-slogan"
          placeholder="Spread Joy, Share Love"
          rows={19}
          cols={21}
        />
      </div>
      <div className="slogan-container1">
        <div className="make-every-moment-memorable-wrapper">
          <div className="make-every-moment">Make Every Moment Memorable</div>
        </div>
        <div className="start-gifting-today-wrapper">
          <div className="start-gifting-today">Start Gifting Today</div>
        </div>
      </div>
    </section>
  );
};

MainContent.propTypes = {
  className: PropTypes.string,
};

export default MainContent;
