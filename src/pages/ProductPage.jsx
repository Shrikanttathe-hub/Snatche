import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assetss/CSS3/ProductPage.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";


const ProductPage = () => {
       const similarProductsSlider = {
        loop: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".tp-next",
            prevEl: ".tp-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
            1600: { slidesPerView: 4 },
            1920: { slidesPerView: 4 },
        },
        modules: [Navigation],
        className: "similarProductsSlider",
    };

    const moreFromSlider = {
        loop: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".tp-next",
            prevEl: ".tp-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 4 },
            1600: { slidesPerView: 4 },
            1920: { slidesPerView: 4 },
        },
        modules: [Navigation],
        className: "moreFromSlider",
    };

    const openSizeChart = () => {

    }

     const  openProductDetails = () => {

    }

     const openSellFunctionPopUp = () => {

    }

     const biddingConfirmationPop = () => {

    }


  return (
    <>
      <Header />
      {/* <!--BreadCrumbs Start--> */}
      <main className="productPage">
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">All Categories</a>
              </li>
              <li>
                <a href="#">Sneakers </a>
              </li>
              <li>
                <a href="#">Nike</a>
              </li>
              <li>
                <a href="#">OneX LE</a>
              </li>
              <li>
                <a href="#">Nike OneX Limited Edition</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--BreadCrumbs End-->
        <!--Product 360 view Page Start--> */}
        <section>
          <div className="container">
            <div className="verifiedView">
              <div className="view">
                <div className="topView">
                  <button>
                    <img
                      src="./assets/Image/ProductPageImg/logo360.svg"
                      alt="360Logo"
                    />
                    <span>360° VIEW</span>
                  </button>
                  <img
                    src="./assets/Image/ProductPageImg/verifiedSmallLogo.svg"
                    alt="360Logo"
                    id="snactcheLogo"
                  />
                </div>
                {/* <!--Slider Card start--> */}
                <div className="topViewSlider">
                  <div className="swiper mySwiper2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes2.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shhoes2.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes3.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes2.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shhoes2.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes3.svg" />
                        <button>Click to Zoom In</button>
                      </div>
                    </div>
                  </div>
                  <div className="prevAndNext">
                    <div className="swiper-button-prev prev">
                      <img
                        src="./assets/Image/ProductPageImg/Prev.svg"
                        id="swiperPrev"
                      />
                    </div>
                    <div className="swiper-button-next next">
                      <img
                        src="./assets/Image/ProductPageImg/next.svg"
                        id="swiperNext"
                      />
                    </div>
                  </div>

                  <div thumbslider="" className="swiper mySwiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes2.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shhoes2.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes3.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/Shoes.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes2.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shhoes2.svg" />
                      </div>
                      <div className="swiper-slide">
                        <img src="./assets/Image/ProductPageImg/shoes3.svg" />
                      </div>
                    </div>
                    <div className="swiper-scrollbar"></div>
                  </div>
                </div>
                {/* <!--Slider Card End-->
                        <!--TopView 3--> */}
              </div>
              <div className="buyingDetails">
                <div className="limitedEdiction">
                  <div className="share">
                    <span>NEW</span>
                    <a href="#">
                      Share
                      <img src="./assets/Image/ProductPageImg/Share.svg" />
                    </a>
                  </div>
                  <div className="limitedBrand">
                    <h2>Limited Edition NIKE OneX (2022)</h2>
                    <span>Brand : Nike</span>
                  </div>
                </div>
                <div className="inStock">
                  <h4>In Stock</h4>
                  <span>05 Sold</span>
                </div>
                <div className="dropDownMain">
                  <div className="selectBox">
                    <label htmlFor="size">Select your size </label>
                    <div className="custom-select">
                      <select name="size" id="number">
                        <option value="9 (UK)" defaultValue>
                          9 (UK)
                        </option>
                        <option value="8 (UK)">8 (UK)</option>
                        <option value="7 (UK)">7 (UK)</option>
                        <option value="6 (UK)">6 (UK)</option>
                      </select>
                    </div>
                  </div>
                  <div className="sizeChart">
                    <p>Not sure about your size?</p>
                    <button id="sizeChartButton" onClick={openSizeChart}>
                      Size Chart
                    </button>
                  </div>
                </div>
                <div className="info">
                  <p>*This particular product has a larger fit than regular</p>
                </div>
                <div className="buyButton">
                  <button className="buyNow" onClick={openProductDetails}>
                    Buy Now <span>₹22,500</span>
                  </button>
                  <button className="sellAsk" onClick={openSellFunctionPopUp}>
                    Sell for ₹22,500 or Ask More
                  </button>
                </div>
                <div className="lastSale">
                  <span>Last Sale: ₹26,300</span>
                </div>
                <div className="orSection">
                  <p>OR</p>
                </div>
                <div className="bidButtonNew">
                  <input placeholder="Enter Value" />
                  <button
                    className="placeBid"
                    onClick={biddingConfirmationPop}
                  >
                    <img src="./assets/Image/ProductPageImg/bidImg.svg" />
                    <span>Place BID</span>
                  </button>
                </div>
                <div className="lastSaleNew">
                  <span>Highest Bid: ₹18,250</span>
                </div>
                <div className="snatcheWishList">
                  <button>
                    Add to Snatche List
                    <img src="./assets/Image/ProductPageImg/LikeSmall.svg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
        </section>
        {/* <!--Product 360 view Page End-->
        <!--Section 2--> */}
        <section>
          <div className="container">
            <div className="verifiedPara">
              <h2>Product Specifications</h2>
              <div className="productSpecifications">
                <div className="heading">
                  <ul>
                    <li>
                      Style : <span>HSDF11200</span>
                    </li>
                    <li>
                      Colorway : <span> ONYX/ONYX/ONYX</span>
                    </li>
                    <li>
                      Retail Price : INR 17500 <span>INR 17500</span>
                    </li>
                    <li>
                      Materail : Resin <span> Resin </span>
                    </li>
                  </ul>
                </div>
                <div className="productDiv">
                  <h3>Product Description</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    className aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Praesent auctor
                    purus luctus enim egestas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="authenticateSection">
          <div className="container">
            <div
              className="verified"
              //   style={"text-align: center; width: 100%; margin: 0px auto; max-width: 850px;"}
            >
              <div className="authenticateSectionNewinner">
                <div className="authenticateSectionNewinnerHead">
                  <h2>Verified & Authenticated by Snatche</h2>
                  <img src="./assets/Image/ProductPageImg/snatcheLogo.svg" />
                </div>
                <p>
                  <a href="./Authenticity.html">Know more </a> about how we
                  verify and authenticate out products so that you always
                  recieve the best possible quality of fit and finish.
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        <section>
          <div className="container">
            <div className="productSaleHistoryMain">
              <div className="productSaleHistory">
                <label>Prodcut Sale History</label>
                <div className="productSaleHistorySelectBox">
                  <select>
                    <option>6 Months</option>
                    <option>7 Months</option>
                    <option>8 Months</option>
                    <option>9 Months</option>
                  </select>
                </div>
              </div>
              <div className="buttonSection">
                <button>
                  ₹10,000 - ₹23,500<span>Trade Range</span>
                </button>
                <button>
                  ₹15,000 - ₹21,500<span>All Time Trade Range</span>
                </button>
              </div>
              <div className="buttonSectionNew">
                <button>
                  4500<span>Total Sales</span>
                </button>
                <button>
                  10% <span>Volatility</span>
                </button>
                <button>
                  18,500<span>Average Selling Price</span>
                </button>
                <button>
                  32%<span>Price Premium</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="similarProductsNew">
          <div className="container">
            <div className="similarProducts">
              <div className="owlSimilarProducts">
                <h2>Similar Products</h2>
                <a href="./productListing.html">View All</a>
              </div>
              <Swiper className="similarProductsSlider" {...similarProductsSlider}  navigation={true}>
                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR(20225) 1 of 10000"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2022) 1 of 10000</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR XY(20225) 1 of 10"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR XY(2022) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2020) 1 of 1"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2020) 1 of 1</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2022) 1 of 10"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2022) 1 of 10</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 100 Latest"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 100 Latest</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2021) 1 of 100 Sneakers"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>
                        Limited Edition Jordan AIR (2021) 1 of 100 Sneakers
                      </h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR-X (2021) 1 of 100"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR-X (2021) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2024) 1 of 1000"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2024) 1 of 1000</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 1"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 1</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR(2022) 1 of 100"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR(2022) 1 of 10000"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        <section className="moreFromNikeNew">
          <div className="container">
            <div className="moreFromNike">
              <div className="owlMoreFromLike">
                <h2>More From Nike</h2>
                <a href="./productListing.html">View All</a>
              </div>
              <Swiper className="moreFromSlider" {...moreFromSlider} navigation={true}>
                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR(2022) 1 of 10"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>
                        Limited Edition Jordan AIR(2022) 1 of 10"
                        data-price="73500
                      </h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan Air 1 of 10"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan Air 1 of 10</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 100"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR Green (2025) 1 of 100"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR Green (2025) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR-G (20225) 1 of 101"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR-G (20225) 1 of 101</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2020) 1 of 102"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2020) 1 of 102</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 104"
                  data-price="73500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 104</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹73500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR(2025) 1 of 110"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR(2025) 1 of 110</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2021) 1 of 100"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2021) 1 of 100</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 120"
                  data-price="76500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 120</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹76500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  className="product-box"
                  data-brand="Brand : Nike"
                  data-title="Limited Edition Jordan AIR (2019) 1 of 10"
                  data-price="16500"
                  data-img="./assets/Image/HomePage/owlImg/Shoes1.svg"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <a href="./ProductPage.html">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2019) 1 of 10</h3>
                    </a>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹16500.00</span>
                    </p>
                    <button
                      className="wishlist"
                      type="button"
                      data-tooltip="Added to Snatche List"
                    >
                      <img
                        src="./assets/Image/HomePage/owlImg/Like.svg"
                        alt="like"
                      />
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
