import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`frame-parent1 ${className}`}>
      <div className="backgroundshadow-parent2">
        <div className="backgroundshadow9">
          <div className="background">
            <img
              className="razer-gold-5-turkpinwebp-icon"
              loading="lazy"
              alt=""
              src="/razergold5turkpinwebp@2x.png"
            />
          </div>
          <div className="stock-availability-container-parent">
            <div className="stock-availability-container">
              <div className="stock-wrapper">
                <div className="stock">Stock:</div>
              </div>
              <div className="backgroundshadow10">
                <div className="available">Available</div>
              </div>
            </div>
            <div className="separator" />
            <div className="frame-parent2">
              <div className="frame-parent3">
                <div className="qunatity-wrapper">
                  <div className="qunatity">Qunatity:</div>
                </div>
                <div className="quantity-input-container">
                  <div className="input1">
                    <div className="container2">
                      <div className="quantity-value">1</div>
                    </div>
                  </div>
                  <div className="backgroundborder">
                    <div className="add">Add</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent4">
                <div className="special-note-for-the-order-wrapper">
                  <div className="special-note-for">{`Special Note for the Order `}</div>
                </div>
                <input
                  className="input2"
                  placeholder="Enter your note here ..."
                  type="text"
                />
              </div>
            </div>
            <div className="small">
              Product prices include VAT. VAT Rate: 0%
            </div>
            <div className="separator1" />
            <div className="this-is-a-5-tl-value-balance-c-parent">
              <div className="this-is-a-container">
                <span>
                  <p className="this-is-a">
                    This is a 5 TL value balance coupon from Razer. It is
                    instantly delivered as an EPIN code. It is valid for all
                    Razer-partnered games.
                  </p>
                </span>
              </div>
              <div className="elevate-your-gaming">
                Elevate your gaming experience with the Razer 5 TL Balance
                Coupon! Perfect for every gamer, this coupon adds value to your
                Razer wallet, allowing you to explore a wide range of
                Razer-partnered games.
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundshadow11">
          <div className="horizontalborder1">
            <div className="frame-parent5">
              <div className="tab-oyun-aklamas-wrapper">
                <div className="tab-oyun">Description</div>
              </div>
              <div className="background1" />
            </div>
            <div className="item-tab">How to Install?</div>
          </div>
          <div className="razer-gold-is-a-unified-virtua-wrapper">
            <div className="razer-gold-is">
              Razer Gold is a unified virtual credit for gamers worldwide. With
              Razer Gold, you can purchase games and in-game items to get more
              out of your money. This includes Razer Silver and special game
              discount rewards as well.
            </div>
          </div>
          <div className="you-can-use-razer-gold-to-shop-wrapper">
            <div className="you-can-use">
              You can use Razer Gold to shop in over 42,000 games and
              entertainment content. Begin by reloading your Razer Gold account
              online or at any of our 5.6 million channel touchpoints worldwide.
              Every spending in Razer Gold earns you Razer Silver, the only
              loyalty rewards program for gamers.
            </div>
          </div>
          <div className="you-can-instantly-purchase-pro-wrapper">
            <div className="you-can-instantly">
              You can instantly purchase products of this and many other games
              from Turkpin at the most affordable prices and with quality
              service. Click now to start shopping without wasting any time and
              take advantage of the opportunities.
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundshadow-parent3">
        <div className="backgroundshadow12">
          <div className="horizontalborder2">
            <h3 className="heading-4">Product Basket</h3>
          </div>
          <div className="cart-content">
            <div className="product-total-amount-500-tl-parent">
              <div className="product-total-amount-500-container">
                <p className="product">1 Product</p>
                <p className="total-amount-500">Total Amount: 5.00 TL</p>
                <p className="bonus-earned-000">Bonus Earned: 0.00 TL</p>
              </div>
              <div className="button-frame">
                <button className="button36">
                  <div className="login">Login</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="backgroundshadow13">
          <div className="bannerwebp-container">
            <img
              className="bannerwebp-icon10"
              loading="lazy"
              alt=""
              src="/bannerwebp2@2x.png"
            />
          </div>
          <div className="heading-4-razer-gold-wrapper">
            <h3 className="heading-41">Razer Gold</h3>
          </div>
          <div className="oyun-sitesi-httpsgoldraze-container">
            <span>{`Oyun Sitesi: `}</span>
            <span className="httpsgoldrazercom">https://gold.razer.com/</span>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
