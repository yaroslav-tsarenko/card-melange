import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`explore-content-wrapper ${className}`}>
      <div className="explore-content">
        <div className="start-exploring-now-parent">
          <h1 className="start-exploring-now">Start Exploring Now!</h1>
          <div className="dive-into-our">
            Dive into our masonry grid and discover a world of inspiration
            waiting to be explored. Whether you're an art enthusiast, a design
            aficionado, or simply curious about creativity, there's something
            here for everyone.
          </div>
        </div>
        <button className="button20">
          <img className="tag-icon20" alt="" src="/tag-icon.svg" />
          <div className="button21">Explore</div>
          <img className="tag-icon21" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
