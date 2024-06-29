import CardsProducts from "./CardsProducts";
import PropTypes from "prop-types";
import "./PerfectOccasion.css";

const PerfectOccasion = ({ className = "" }) => {
  return (
    <div className={`perfect-occasion ${className}`}>
      <h1 className="perfect-for-every">Perfect for Every Occasion</h1>
      <div className="explore-1">
        <div className="explore-container">
          <div className="explore-row-one">
            <div className="cards-products1">
              <img
                className="explore-elements-one"
                alt=""
                src="/explore-elements-one@2x.png"
              />
              <img
                className="image-3-icon1"
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="explore-labels-one">
                <b className="explore-row-two">$100</b>
              </div>
            </div>
            <div className="cards-products2">
              <div className="boston-container-wrapper">
                <b className="boston-container">$40</b>
              </div>
              <img className="pngwing-4-icon" alt="" src="/pngwing-4@2x.png" />
              <img
                className="cards-products-item"
                loading="lazy"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <div className="cards-products3">
              <h1 className="boston">Boston</h1>
              <b className="holiday-gift-voucher-container">
                <p className="holiday">{`Holiday `}</p>
                <p className="gift-voucher">Gift Voucher</p>
              </b>
              <div className="forest-caster-container-wrapper">
                <b className="forest-caster-container">$600</b>
              </div>
            </div>
            <div className="cards-products4">
              <img
                className="cards-products-inner"
                alt=""
                src="/rectangle-50-1@2x.png"
              />
              <b className="b1">$60</b>
              <div className="forest-caster-wrapper">
                <div className="forest-caster">Forest Caster</div>
              </div>
            </div>
            <div className="cards-products5">
              <img
                className="rectangle-icon"
                alt=""
                src="/explore-elements-one@2x.png"
              />
              <img className="image-3-icon2" alt="" src="/image-3@2x.png" />
              <div className="wrapper">
                <b className="b2">$100</b>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-items-two">
          <div className="cards-products6">
            <img
              className="image-8-icon"
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
            <div className="new-york-container">
              <h1 className="newyork">NewYork</h1>
            </div>
            <b className="holiday-gift-voucher-container1">
              <p className="holiday1">{`Holiday `}</p>
              <p className="gift-voucher1">Gift Voucher</p>
            </b>
            <b className="explore-images-three">$600</b>
          </div>
          <CardsProducts rectangle50="/rectangle-50-3@2x.png" />
          <div className="cards-products7">
            <div className="rectangle-div" />
            <b className="b3">$60</b>
            <div className="image-4-wrapper">
              <img
                className="image-4-icon1"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
          </div>
          <div className="cards-products8">
            <div className="cards-products-child1" />
            <b className="b4">$100</b>
            <div className="image-5-wrapper">
              <img
                className="image-5-icon"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
          </div>
          <CardsProducts rectangle50="/xbox-logopng@2x.png" />
        </div>
      </div>
      <div className="explore-button-instance">
        <button className="button12">
          <img className="tag-icon12" alt="" src="/tag-icon.svg" />
          <div className="button13">Get Started</div>
          <img className="tag-icon13" alt="" src="/tag-icon.svg" />
        </button>
      </div>
    </div>
  );
};

PerfectOccasion.propTypes = {
  className: PropTypes.string,
};

export default PerfectOccasion;
