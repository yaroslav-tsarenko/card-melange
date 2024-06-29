import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FilterContainer from "../components/FilterContainer";
import BackgroundShadow5 from "../components/BackgroundShadow5";
import BackgroundShadow1 from "../components/BackgroundShadow1";
import BackgroundShadow3 from "../components/BackgroundShadow3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import RebatePromotions from "../components/RebatePromotions";
import Footer from "../components/Footer";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header logoContainerTop="unset" logoContainerPosition="unset" />
      <section className="section">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <img
          className="overlay-icon"
          loading="lazy"
          alt=""
          src="/overlay@2x.png"
        />
        <h1 className="browse-our-gift">Browse Our Gift Cards</h1>
        <div className="harcadka-kazan-kazandka">
          Harcadıkça kazan, Kazandıkça hediyeleri topla !
        </div>
      </section>
      <FrameComponent1 />
      <section className="filter-container-parent">
        <FilterContainer />
        <div className="featured-promotions">
          <div className="cards-container">
            <div className="cards-wrapper">
              <h1 className="most-popular">Most Popular | 245 eGift Cards</h1>
              <div className="sort-container">
                <div className="sort-dropdown">
                  <div className="sort-label">
                    <div className="sorted-by">Sorted By</div>
                  </div>
                  <img
                    className="arrow-drop-down-big-icon"
                    alt=""
                    src="/arrow-drop-down-big.svg"
                  />
                </div>
              </div>
            </div>
            <div className="promotions-wrapper">
              <BackgroundShadow5
                bannerwebp="/bannerwebp-6@2x.png"
                bannerwebp1="/bannerwebp-7@2x.png"
                april2024GarenaRebate="April 2024 Garena Rebate"
                date30042024="Date: 30.04.2024"
              />
              <BackgroundShadow1
                bannerwebp="/bannerwebp-8@2x.png"
                apri2024GoogleRebate="Apri 2024 Google Rebate"
                date30042024="Date: 30.04.2024"
              />
              <BackgroundShadow1
                bannerwebp="/bannerwebp-9@2x.png"
                apri2024GoogleRebate="April 2024 Xbox Rebate "
                date30042024="Date:  30.04.2024"
                propFlex="1"
                propMinWidth="263px"
              />
            </div>
          </div>
          <div className="backgroundshadow-parent">
            <BackgroundShadow1
              bannerwebp="/bannerwebp-10@2x.png"
              apri2024GoogleRebate="March 2024 Xbox Rebate "
              date30042024="Date: 31.03.2024"
              propFlex="1"
              propMinWidth="263px"
            />
            <BackgroundShadow1
              bannerwebp="/bannerwebp-111@2x.png"
              apri2024GoogleRebate="March 2024 Google Rebate"
              date30042024="Date: 31.03.2024"
              propFlex="1"
              propMinWidth="263px"
            />
            <BackgroundShadow3
              bannerwebp="/bannerwebp-12@2x.png"
              apri2024ITunesRebate="Apri 2024 iTunes Rebate "
              date31032024="Date: 31.03.2024"
            />
          </div>
          <div className="dealer-promotion">
            <BackgroundShadow1
              bannerwebp="/bannerwebp-13@2x.png"
              apri2024GoogleRebate="February 2024 Valorant"
              date30042024="Date: 29.02.2024"
              propFlex="1"
              propMinWidth="261px"
            />
            <BackgroundShadow1
              bannerwebp="/bannerwebp-14@2x.png"
              apri2024GoogleRebate="February  2024 Google Rebate"
              date30042024="Date: 29.02.2024"
              propFlex="1"
              propMinWidth="261px"
            />
            <BackgroundShadow1
              bannerwebp="/bannerwebp-15@2x.png"
              apri2024GoogleRebate="February  2024 iTunes Rebate"
              date30042024="Date: 29.02.2024"
              propFlex="1"
              propMinWidth="261px"
            />
          </div>
          <FrameComponent2 />
          <div className="backgroundshadow-group">
            <BackgroundShadow1
              bannerwebp="/bannerwebp-19@2x.png"
              apri2024GoogleRebate="December 2023 Razer Rebate"
              date30042024="Date: 31.12.2023"
              propFlex="1"
              propMinWidth="263px"
            />
            <BackgroundShadow1
              bannerwebp="/bannerwebp-20@2x.png"
              apri2024GoogleRebate="November 2023 Razer Rebate"
              date30042024="Date: 30.11.2023"
              propFlex="1"
              propMinWidth="263px"
            />
            <BackgroundShadow3
              bannerwebp="/bannerwebp-21@2x.png"
              apri2024ITunesRebate="October 2023 Razer Rebate"
              date31032024="Date: 31.10.2023"
              propFlex="0.9657"
            />
          </div>
          <FrameComponent3 />
          <FrameComponent4 />
          <RebatePromotions />
          <div className="pagination-wrapper">
            <div className="pagination">
              <img
                className="pagination-block-icon"
                alt=""
                src="/pagination-block.svg"
              />
              <div className="pagination-block">
                <div className="current-page-wrapper">
                  <div className="current-page">1</div>
                </div>
                <div className="next-page" />
              </div>
              <div className="pagination-block1">
                <div className="pagination-block-child" />
                <div className="div">2</div>
              </div>
              <div className="pagination-block2">
                <div className="pagination-block-item" />
                <div className="div1">3</div>
              </div>
              <img
                className="pagination-block-icon1"
                alt=""
                src="/pagination-block-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer
        a542439cB0759ce64c518a9="/08723276a542439cb0759ce64c518a9bpng@2x.png"
        a69d915737324139B56aD6e33="/a69d915737324139b56ad6e339fd8052png@2x.png"
        edfaa2195d5240f5918fB94c7="/edfaa2195d5240f5918fb94c7d38eec4png@2x.png"
        d933dc4be64a83A0155628572="/67d933dc4be64a83a0155628572f311fpng@2x.png"
        c6883Dea44b05B3ab70a11800="/709c6883dea44b05b3ab70a11800b58cpng@2x.png"
        c384a9210604b7fAe23Dab0cf="/2c384a9210604b7fae23dab0cf246a2apng@2x.png"
        e7c5a5d4a72975481cc7c265d="/56112e7c5a5d4a72975481cc7c265d7apng@2x.png"
        a12ff94Daca4434Bddb4645d7="/6a12ff94daca4434bddb4645d7cc4819png@2x.png"
        db028290f664224A68e08b993="/2db028290f664224a68e08b9930b707fpng@2x.png"
        linkE364f0114cc74e8aBca9A="/link--e364f0114cc74e8abca9a8896c1c5030png1@2x.png"
        linkF3b1db0fEb9f4b0a89f74="/link--f3b1db0feb9f4b0a89f74d955239e7a2png1@2x.png"
      />
    </div>
  );
};

export default ProductListingPage;
