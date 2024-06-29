import PropTypes from "prop-types";
import "./Categories.css";

const Categories = ({ className = "" }) => {
  return (
    <div className={`categories ${className}`}>
      <div className="categories-container">
        <h1 className="heading-1">Browse By Categories</h1>
        <div className="category-grid">
          <div className="category-row-one">
            <div className="link4">
              <img
                className="b95c60b-b1e4-415f-b08e-2fbbbd2-icon"
                loading="lazy"
                alt=""
                src="/0b95c60bb1e4415fb08e2fbbbd213510png@2x.png"
              />
              <div className="hypermarkets">Hypermarkets</div>
            </div>
            <div className="link5">
              <img
                className="b037d2be-acb4-4812-808c-750903-icon"
                loading="lazy"
                alt=""
                src="/b037d2beacb44812808c750903f2f1fbpng@2x.png"
              />
              <div className="online-shopping">Online Shopping</div>
            </div>
            <div className="link6">
              <img
                className="b65-5dac-482d-ac53-2a54f41bde8-icon"
                loading="lazy"
                alt=""
                src="/64311b655dac482dac532a54f41bde8bpng@2x.png"
              />
              <div className="fashion">Fashion</div>
            </div>
            <div className="link7">
              <img
                className="d7ddd52-967f-4589-8e11-63a9b72-icon"
                loading="lazy"
                alt=""
                src="/2d7ddd52967f45898e1163a9b7217c7apng@2x.png"
              />
              <div className="electronics">Electronics</div>
            </div>
            <div className="link8">
              <img
                className="e94332-b1f8-47fd-9a64-583a3201-icon"
                loading="lazy"
                alt=""
                src="/97e94332b1f847fd9a64583a3201d86cpng@2x.png"
              />
              <div className="home-garden">{`Home & Garden`}</div>
            </div>
          </div>
          <div className="category-row-two">
            <div className="link9">
              <img
                className="e1f12a5c-10b2-4c51-951a-0790d6-icon"
                loading="lazy"
                alt=""
                src="/e1f12a5c10b24c51951a0790d6690467png@2x.png"
              />
              <div className="shopping-malls">Shopping Malls</div>
            </div>
            <div className="link10">
              <img
                className="f90078f9-6c63-422b-a9a6-dd3630-icon"
                loading="lazy"
                alt=""
                src="/f90078f96c63422ba9a6dd363016fba8png@2x.png"
              />
              <div className="jewellery">Jewellery</div>
            </div>
            <div className="link11">
              <img
                className="c11d5bc4-010e-48b0-9585-9653fb-icon"
                loading="lazy"
                alt=""
                src="/c11d5bc4010e48b095859653fbee100cpng@2x.png"
              />
              <div className="gaming">Gaming</div>
            </div>
            <div className="link12">
              <img
                className="b277666a-e464-419f-ac57-ec2c7d-icon"
                loading="lazy"
                alt=""
                src="/b277666ae464419fac57ec2c7d8d0081png@2x.png"
              />
              <div className="food-delivery">Food Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
