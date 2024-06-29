import CartPage from "../components/CartPage";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <CartPage yourCart="Checkout" />
      <section className="checkoutpage-inner">
        <div className="billing-form-parent">
          <form className="billing-form">
            <div className="billing-content">
              <h2 className="checkout">Checkout</h2>
              <input
                className="header"
                placeholder="Billing Details"
                type="text"
              />
              <div className="form-field-block">
                <div className="row-1">
                  <div className="block-1">
                    <div className="first-name">First Name</div>
                  </div>
                  <div className="block-2">
                    <div className="last-name">Last Name</div>
                  </div>
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <div className="company-name">Company Name</div>
                  </div>
                  <div className="block-21">
                    <div className="country">Country</div>
                    <img className="icon" alt="" src="/icon-21.svg" />
                  </div>
                </div>
                <div className="row-3">
                  <div className="block-12">
                    <input
                      className="street-address"
                      placeholder="Street Address"
                      type="text"
                    />
                  </div>
                </div>
                <div className="block-22">
                  <input
                    className="apartment-suite"
                    placeholder="Apartment / Suite / Unit / etc. (Optional)"
                    type="text"
                  />
                </div>
                <div className="row-4">
                  <div className="block-13">
                    <div className="town-city">Town / City</div>
                  </div>
                </div>
                <div className="block-23">
                  <input
                    className="email-address"
                    placeholder="Email Address"
                    type="text"
                  />
                </div>
                <div className="row-5">
                  <div className="block-14">
                    <input className="zip" placeholder="ZIP" type="text" />
                  </div>
                  <div className="block-24">
                    <input className="phone" placeholder="Phone" type="text" />
                  </div>
                </div>
              </div>
              <div className="billing-separator" />
              <div className="billing-header-items">
                <button className="button">
                  <img className="tag-icon" alt="" src="/tag-icon.svg" />
                  <div className="button1">Back</div>
                  <img className="tag-icon1" alt="" src="/tag-icon.svg" />
                </button>
                <button className="button2">
                  <img className="tag-icon2" alt="" src="/tag-icon.svg" />
                  <div className="button3">Checkout</div>
                  <img className="tag-icon3" alt="" src="/tag-icon.svg" />
                </button>
              </div>
            </div>
            <div className="billing-header">
              <div className="checkout-details">
                <div className="header1">
                  <div className="checkout-details1">Checkout Details</div>
                </div>
                <div className="cart-subtotal-parent">
                  <div className="cart-subtotal">Cart Subtotal</div>
                  <div className="order-detail-values">$360.00</div>
                </div>
                <div className="shipping-handling-parent">
                  <div className="shipping-handling">{`Shipping & Handling`}</div>
                  <div className="div2">$0.00</div>
                </div>
                <div className="other-taxes-parent">
                  <div className="other-taxes">Other Taxes</div>
                  <div className="div3">$0.00</div>
                </div>
                <div className="order-details-separator" />
                <div className="grand-total-parent">
                  <div className="grand-total">Grand Total</div>
                  <div className="div4">$360.00</div>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <div className="transfer-options1">Transfer Options</div>
                </div>
                <div className="checkout-details2">
                  <div className="logos-block">
                    <div className="block-15">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-1@2x.png"
                        />
                      </div>
                      <div className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </div>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <div className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </div>
                    </div>
                  </div>
                  <div className="block-3-parent">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-31@2x.png"
                        />
                      </div>
                      <div className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </div>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-41@2x.png"
                        />
                      </div>
                      <div className="paypal">PayPal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <div className="header3">
              <div className="checkout2">Checkout</div>
            </div>
            <div className="checkout-details3">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <button className="button4">
                <img className="tag-icon4" alt="" src="/tag-icon.svg" />
                <div className="button5">Checkout</div>
                <img className="tag-icon5" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer
        a542439cB0759ce64c518a9="/08723276a542439cb0759ce64c518a9bpng1@2x.png"
        a69d915737324139B56aD6e33="/a69d915737324139b56ad6e339fd8052png@2x.png"
        edfaa2195d5240f5918fB94c7="/edfaa2195d5240f5918fb94c7d38eec4png1@2x.png"
        d933dc4be64a83A0155628572="/67d933dc4be64a83a0155628572f311fpng@2x.png"
        c6883Dea44b05B3ab70a11800="/709c6883dea44b05b3ab70a11800b58cpng1@2x.png"
        c384a9210604b7fAe23Dab0cf="/2c384a9210604b7fae23dab0cf246a2apng1@2x.png"
        e7c5a5d4a72975481cc7c265d="/56112e7c5a5d4a72975481cc7c265d7apng1@2x.png"
        a12ff94Daca4434Bddb4645d7="/6a12ff94daca4434bddb4645d7cc4819png1@2x.png"
        db028290f664224A68e08b993="/2db028290f664224a68e08b9930b707fpng1@2x.png"
        linkE364f0114cc74e8aBca9A="/link--e364f0114cc74e8abca9a8896c1c5030png2@2x.png"
        linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png2@2x.png"
      />
    </div>
  );
};

export default CheckoutPage;
