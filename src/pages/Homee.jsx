import React from "react";
import Header from "../Components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Footer from "../Components/Footer";
import "../assetss/CSS3/Home.css";
import { Link } from "react-router-dom";

const Homee = () => {
  const swiperOptions = {
    loop: true,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      600: { slidesPerView: 1 },
      1000: { slidesPerView: 1 },
    },
    modules: [Autoplay, Pagination],
    className: "homeSwiper",
  };
  const newArrivalsSwiper = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".na-next",
      prevEl: ".na-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 5 },
    },
    modules: [Navigation],
    className: "newArrivalsSliderNew",
  };
  const hottestDropsSwiper = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".hd-next",
      prevEl: ".hd-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 5 },
    },
    modules: [Navigation],
    className: "hottestDropsSliderNew",
  };
  const budgetPicksSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".bp-next",
      prevEl: ".bp-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 5 },
    },
    modules: [Navigation],
    className: "budgetPicksSliderNew",
  };
  const topBrandsSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".tp-next",
      prevEl: "tp-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1024: { slidesPerView: 4 },
      1200: { slidesPerView: 6 },
      1600: { slidesPerView: 8 },
      1920: { slidesPerView: 8 },
    },
    modules: [Navigation],
    className: "topBrandsSliderNew",
  };
  const ourCollectionsSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".oc-next",
      prevEl: ".oc-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 2.5 },
    },
    modules: [Navigation],
  };
  const snatchEItSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".si-next",
      prevEl: ".si-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 3.5 },
    },
    modules: [Navigation],
    className: "snatchEItSliderNew",
  };
  const upComingReleasesSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".ua-next",
      prevEl: ".ua-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      375: { slidesPerView: 2 },
      767: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 3 },
      1024: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1600: { slidesPerView: 5 },
      1920: { slidesPerView: 5 },
    },
    modules: [Navigation],
    className: " upComingReleasesSliderNew",
  };
  const scrollBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // function openSellFunctionPopUpMainNew() { }
  // function scrollBackToTop() { }
  // function openSellFunctionPopUpBeingSelling() { }
  // function openSellFunctionPopUpBeingSellingClose() { }
  // function openSellFunctionPopUpResult() { }
  // function openSellFunctionPopUpResultClose() { }
  // function openSellFunctionPopUpNoResult() { }
  // function openSellFunctionPopUpNoResultClose() { }

  // function openSellFunctionPopUpAddProduct() { }
  // function openSellFunctionPopUpAddProductClose() { }
  // function openSellFunctionPopUpAddProductClose() { }
  return (
    <div className="Home-page">
      <Header />
      <main className="homePageMain">
        {/* <!--BreadCrumbs Start--> */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--BreadCrumbs End-->
        <!--Owl Slider start--> */}
        <Swiper className="sliderSec" {...swiperOptions}>
          <div className="owl">
            <SwiperSlide className="item">
              <Link to="/showcase">
                <img
                  src="./assets/Image/header/Shoes.1.jpg"
                  alt="showcase shoes"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="item">
              <Link to="/showcase">
                <img
                  src="./assets/Image/header/Shoes2.jpg"
                  alt="showcase shoes"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="item">
              <Link to="/showcase">
                <img
                  src="./assets/Image/header/Shoes.1.jpg"
                  alt="showcase shoes"
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="item">
              <Link to="/showcase">
                <img
                  src="./assets/Image/header/Shoes2.jpg"
                  alt="showcase shoes"
                />
              </Link>
            </SwiperSlide>
          </div>
        </Swiper>
        {/* <!--Owl Slider End-->
        <!--New Arrivals Section Start--> */}
        <section className="newArrivals">
          <div className="container">
            <div className="newArrivalsInnerContent">
              <div className="owlNewArrival">
                <h2>New Arrivals</h2>
                <Link to="/productListing">View All</Link>
              </div>
              <Swiper
                className="newArrivalsSliderNew"
                {...newArrivalsSwiper}
                navigation={true}
              >
                <SwiperSlide
                  className="product-box"
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR (2022) 1 of 100"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Nike AIR Blue 1055 (2022) High Top Sneakers"
                  data-price="73500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike AIR Blue 1055 (2022) High Top Sneakers</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Nike Limited Red Flag (2022) High Top Sneakers"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike Limited Red Flag (2022) High Top Sneakers</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Nike x Bob Marley Limited Edition Sneakers"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike x Bob Marley Limited Edition Sneakers</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Jordan Snow Steps 101 Modern White Sneakers"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Jordan Snow Steps 101 Modern White Sneakers</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR (2023) 1 of 1000"
                  data-price="75000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2023) 1 of 1000</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹75000.00</span>
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
                  data-brand="Nike"
                  data-title="Nike AIR Blue 1055 (2022) High Top Sneakers Latest"
                  data-price="73500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>
                        Nike AIR Blue 1055 (2022) High Top Sneakers Latest
                      </h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Nike Limited Red Flag (2022) High Top Sneakers(New)"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>
                        Nike Limited Red Flag (2022) High Top Sneakers(New)
                      </h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Nike x Bob Marley Limited Edition Sneakers 2000"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike x Bob Marley Limited Edition Sneakers 2000</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Jordan Snow Steps 101 Modern White Sneakers Trending"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>
                        Jordan Snow Steps 101 Modern White Sneakers Trending
                      </h3>
                    </Link>
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
              </Swiper>
              {/* <div className="na-next custom-next">›</div>
                            <div className="na-prev custom-prev">‹</div> */}
            </div>
          </div>
        </section>
        {/* <!--New Arrivals Section End-->
        <!--HottestDrops Section Start--> */}
        <section className="hottestDrops">
          <div className="container">
            <div className="hottestDropsContent">
              <div className="owlHottestDrops">
                <h2>Hottest Drops</h2>
                <Link to="/productListing">View All</Link>
              </div>
              <Swiper
                className="hottestDropsSliderNew"
                {...hottestDropsSwiper}
                navigation={true}
              >
                <SwiperSlide
                  className="product-box"
                  data-brand="Adidas"
                  data-title="Adidas Human Pharrel (2022)"
                  data-price="17500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Adidas Human Pharrel (2022)</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2022) 1 Of 100"
                  data-price="73000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2022) 1 Of 100</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2023) 1 of 100"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2023) 1 of 100</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Nike Neon Gel 501 (2022) Sports Shoes"
                  data-price="73000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike Neon Gel 501 (2022) Sports Shoes</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2023) 1 of 1000"
                  data-price="75000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2023) 1 of 1000</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹75000.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2024) 1 of 100"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2024) 1 of 100</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Adidas"
                  data-title="Adidas Human Pharrel (2024)"
                  data-price="17500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Adidas Human Pharrel (2024)</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2025) 1 of 100"
                  data-price="73500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025) 1 of 100</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR X (2022) 1 of 10000"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR X (2022) 1 of 10000</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(20225) 1 of 100"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (20225) 1 of 100</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
              {/* <div className="custom-next hd-next"></div>
                            <div className="custom-prev hd-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!--HottestDrops Section End-->
        <!--Trending Section Start--> */}
        <section className="trending">
          <div className="container">
            <div className="trendingImgContent">
              <Link to="/showcase">
                <img
                  src="./assets/Image/HomePage/owlImg/TrendingImageNew.svg"
                  alt="Trending"
                />
                <span>Trending</span>
              </Link>
            </div>
          </div>
        </section>
        {/* <!--Trending Section End-->
        <!--Budget Picks Section Start--> */}
        <section className="budgetPicks">
          <div className="container">
            <div className="budgetPicksInnerContent">
              <div className="owlBudgetPicks">
                <h2>Budget Picks</h2>
                <Link to="/productListing">View All</Link>
              </div>
              <Swiper
                className="budgetPicksSliderNew"
                {...budgetPicksSliderNew}
                navigation={true}
              >
                <SwiperSlide
                  className="product-box"
                  data-brand="Adidas"
                  data-title="Adidas Human Pharrel (2025) Sneakers"
                  data-price="17500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Adidas Human Pharrel (2025) Sneakers</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR (2024) 1 of 100"
                  data-price="73500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2024) 1 of 100</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR (2025) 1 of 1000"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2025 ) 1 of 1000</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Nike Neon Gel 501 (2020) Sneakers"
                  data-price="73000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike Neon Gel 501 (2020) Sneakers</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Nike Jordan Sneakers"
                  data-price="75000"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Nike Jordan Sneakers</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹75000.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2020) 1 of 100"
                  data-price="17500"
                  data-img="./assets/Image/header/searchResultImg.svg"
                  data-category="In Nike Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR(2020) 1 of 100</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Adidas Human Pharrel(2024)"
                  data-price="17500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Adidas Human Pharrel(2024)</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹17500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2021) 1 of 100"
                  data-price="73500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR(2021) 1 of 100</h3>
                    </Link>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(2023) 1 of 1000"
                  data-price="15500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (2023) 1 of 1000</h3>
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      BID <span>₹15500.00</span>
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
                  data-brand="Nike"
                  data-title="Limited Edition Jordan AIR(20225) 1 of 10"
                  data-price="16500"
                  data-img="./assets/Image/header/adidasShoes.svg"
                  data-category="In Adidas Sneakers"
                >
                  <div className="product-top">
                    <span className="sold">08 SOLD</span>
                    <Link to="/product-page">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                      <h3>Limited Edition Jordan AIR (20225) 1 of 10</h3>
                    </Link>
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
              {/* <div className="bp-next custom-next"></div>
                            <div className="bp-prev custom-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!--Budget Picks Section End-->
        <!--Top Brands Section Start--> */}
        <section className="topBrands">
          <div className="container">
            <div className="topBrandsInnerContent">
              <div className="owlTopBrands">
                <h2>Top Brands</h2>
                <Link to="/BrandSlider">View All</Link>
              </div>
              <Swiper
                className="topBrandsSliderNew"
                {...topBrandsSliderNew}
                navigation={true}
              >
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand1.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand2.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand3.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand4.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand5.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand6.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand7.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand8.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand1.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand2.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand3.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand4.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand5.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand6.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand7.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/BrandSlider">
                    <img
                      src="./assets/Image/HomePage/TopBrands/topBrand8.svg"
                      alt="brand"
                    />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
        {/* <!--Top Brands Section End-->
        <!--Our Collectios Section Start--> */}
        <section className="ourCollections">
          <div className="container">
            <div className="ourCollectionsInnerContent">
              <div className="owlOurCollecions">
                <h2>Our Collections</h2>
                <Link to="/productListing">View All</Link>
              </div>
              <Swiper
                className="ourCollectionsSliderNew"
                {...ourCollectionsSliderNew}
                navigation={true}
              >
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/NikeOrange.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3>Urban Collection</h3>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/Multishoes.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3>Essential Collections</h3>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/NikeOrange.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3 style={{ color: "white" }}>
                        Modern White Collection
                      </h3>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/NikeOrange.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3>Urban Collection</h3>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/NikeOrange.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3>Essential Collections</h3>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/OurCollections/NikeOrange.svg"
                      alt="Collectios"
                    />
                    <div className="blurText">
                      <h3>Modern White Collection</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
              {/* <div className="oc-next custom-next"></div>
                            <div className="oc-prev custom-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!--Our Collectios Section End-->
        <!--SnatchEIt Section Start--> */}
        <section className="snatchEIt">
          <div className="container">
            <div className="snatchEItInnerContent">
              <div className="owlSnatchEIt">
                <h2>Snatch(e)it</h2>
                <Link to="/productListing">View All</Link>
              </div>
              <Swiper
                className="snatchEItSliderNew"
                {...snatchEItSliderNew}
                navigation={true}
              >
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/blackShoesSntacheEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      How to snatch(e) the best kicks at lowest rates
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/torquiseBlueSnatcheShoes.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      Nike’s best ever collection now available on snatch(e)
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/orangeShoesSnatchEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText black">
                      Balenciaga launches Destroyed Sneakers
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/blackShoesSntacheEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      How to snatch(e) the best kicks at lowest rates
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/torquiseBlueSnatcheShoes.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      Nike’s best ever collection now available on snatch(e)
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/orangeShoesSnatchEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText black">
                      Balenciaga launches Destroyed Sneakers
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/torquiseBlueSnatcheShoes.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      Nike’s best ever collection now available on snatch(e)
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/orangeShoesSnatchEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText black">
                      Balenciaga launches Destroyed Sneakers
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/torquiseBlueSnatcheShoes.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText">
                      Nike’s best ever collection now available on snatch(e)
                    </p>
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="item">
                  <Link to="/productListing">
                    <img
                      src="./assets/Image/HomePage/snatchEt/orangeShoesSnatchEt.png"
                      alt="snatchEIt"
                    />
                    <p className="blurText black">
                      Balenciaga launches Destroyed Sneakers
                    </p>
                  </Link>
                </SwiperSlide>
              </Swiper>
              {/* <div className="si-next custom-next"></div>
                            <div className="si-prev custom-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!--SnatchEIt Section End-->
        <!--Upcoming Realeases Section start--> */}
        <section className="upComingReleases">
          <div className="container">
            <div className="upComingRealeasesInnerContent">
              <div className="owlUpComingReleases">
                <h2>Upcoming Realeases</h2>
                <Link to="/showcase">View All</Link>
              </div>
              <Swiper
                className="upComingReleasesSliderNew ONN"
                {...upComingReleasesSliderNew}
                navigation={true}
              >
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100{" "}
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100{" "}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="product-box">
                  <div className="product-top">
                    <Link to="/showcase">
                      <img
                        src="./assets/Image/HomePage/owlImg/Shoes1.svg"
                        alt="shoescard"
                      />
                    </Link>
                  </div>
                  <div className="product-bottom">
                    <p className="bid-price">
                      Limited Edition Jordan AIR (2022) 1 of 100
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              {/* <div className="ua-next custom-next"></div>
                            <div className="ua-prev custom-prev"></div> */}
            </div>
          </div>
        </section>
        {/* <!--Upcoming Realeases Section End-->
        <!--Back to Top Start--> */}
        <section className="backToTop">
          <div className="container">
            <div className="backToTopButtonA">
              <button onClick={scrollBackToTop}>Back to Top</button>
            </div>
          </div>
        </section>
        {/* <!--Back to Top Start--> */}
      </main>
      <Footer />

      {/* <!--Pop UP start Sellfunction when sell clicked--> */}
      {/* <section className="sellFunction" id="sellFunctionPopUp1">
                <div className="sellFunctionMain">
                    <div className="snatcheLogo">
                        <img src="./assets/Image/sellFunction/snatcheBackground.svg" alt="snatche" />
                        <h2>How Selling works at <img src="./assets/Image/sellFunction/snatccheLogo.svg" alt="logo"
                            id="logoImg" /></h2>
                    </div>
                    <div className="pentaContainer">
                        <div className="cardPentagon">
                            <div className="cardPentaItem">
                                <div className="containerCard">
                                    <div>
                                        <img src="./assets/Image/sellFunction/pentagon.svg" alt='pentagon' />
                                    </div>
                                    <h3>List Your Product</h3>
                                    <p>You can Sell Now at the highest Bid, or set an Ask for the price you want to sell your
                                        item for.</p>
                                </div>
                            </div>
                            <div className="cardPentaItem">
                                <div className="containerCard">
                                    <div>
                                        <img src="./assets/Image/sellFunction/pentagon.svg" alt='pentagon' />
                                    </div>
                                    <h3>We Pick it Up</h3>
                                    <p>Ship your item within 2 business days. We authenticate,then we ship it to the buyer.</p>
                                </div>
                            </div>
                            <div className="cardPentaItem">
                                <div className="containerCard">
                                    <div>
                                        <img src="./assets/Image/sellFunction/pentagon.svg" alt='pentagon' />
                                    </div>
                                    <h3>You get Paid</h3>
                                    <p>We release your payouts as soon as your item passes verification.</p>
                                </div>
                            </div>
                        </div>
                        <div className="sellerCancellation">
                            <h4>Seller Cancellation Penalty</h4>
                            <p>In order to ensure the integrity of our marketplace, a fee equivalent to 15% of the transaction
                                price (with a minimum charge of $15 USD or local currency equivalent) will be assessed to your
                                account if you fail to ship your item within 2 business days or if the item received does not
                                pass verification.</p>
                        </div>
                        <div className="beginSelling">
                            <button onClick={openSellFunctionPopUpBeingSelling()}>Begin Selling</button>
                        </div>
                    </div>
                </div>
            </section> */}

      {/* <section className="sellFunction SellFunctionPopUP" id="sellFunctionPopUp2">
                <div className="sellFunctionMain sellYourProduct">
                    <div className="sellTop">
                        <h2>Sell Your Product</h2>
                        <button onClick={openSellFunctionPopUpBeingSellingClose()}>Close X</button>
                    </div>
                    <div className="nav-search productSearchFunction">
                        <input type="text" placeholder="Search Your Product On Snatche" />
                        <button className="search-button"><img src="./assets/Image/header/Searchbar.svg" alt="search" /><span>Search</span></button>
                    </div>
                    <div className="proceed">
                        <p>Selected Items <span>(2)</span></p>
                        <button onClick={openSellFunctionPopUpResult()}>Proceed</button>
                    </div>
                </div>
            </section> */}

      {/* <section className="sellFunction" id="sellFunctionPopUp3">
                <div className="sellFunctionMain sellYourProduct">
                    <div className="sellTop">
                        <h2>Sell Your Product</h2>
                        <button onClick={openSellFunctionPopUpResultClose()}>Close X</button>
                    </div>
                    <div className="searchResultGot" style={{ marginTop: "23px" }} >
                        <div className="nav-search productSearchFunction" style={{ marginBottom: "0%" }} >
                            <input type="text" placeholder="Search Your Product On Snatche" />
                            <button className="search-button"><img src="./assets/Image/header/Searchbar.svg" alt="search" style={{ margin: "4px" }} /><span>Search</span></button>
                        </div>
                        <div className="searchResultCard" style={{ paddingBottom: "7px" }} >
                            <div className="searchCard">
                                <span>Search Result</span>
                            </div>
                            <div className="searchCardResult">
                                <div className="searchResultShoes">
                                    <img src="./assets/Image/sellFunction/NikeShoes.svg" alt="Nike" />
                                    <div className="searchResultDetails">
                                        <span>Brand: Nike</span>
                                        <h3>Limited Edition NIKE OneX (2022)</h3>
                                        <h5>Average Selling Price ₹22,500</h5>
                                    </div>
                                </div>
                                <div className="selectButton">
                                    <div className="selectBox">
                                        <label htmlFor="size">Select your size </label>
                                        <div className="custom-select">
                                            <select name="size" id="number">
                                                <option defaultValue="9 (UK)">9 (UK)</option>
                                                <option value="8 (UK)">8 (UK)</option>
                                                <option value="7 (UK)">7 (UK)</option>
                                                <option value="6 (UK)">6 (UK)</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button>Add this Product</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- <div className="proceed">
                    <span>Selected Items (2)</span>
                    <button>Proceed</button>
                </div> --> */}
      {/* </div>
                </div>
                <div className="proceed">
                    <p>Selected Items <span>(2)</span></p>
                    <button onClick={openSellFunctionPopUpNoResult}>Proceed</button>
                </div>
            </section> */}

      {/* <section className="sellFunction" id="sellFunctionPopUp4">
                <div className="sellFunctionMain sellYourProduct">
                    <div className="sellTop">
                        <h2>Sell Your Product</h2>
                        <button onClick={openSellFunctionPopUpNoResultClose}>Close X</button>
                    </div>
                    <div className="nav-search productSearchFunction" style={{ marginBottom: "0%" }} >
                        <input type="text" placeholder="Search Your Product On Snatche" />
                        <button className="search-button"><span>Search</span></button>
                    </div>
                    <div className="searchResultCard">
                        <div className="searchCard">
                            <span>Search Result</span>
                            <p>No results found</p>
                        </div>
                        <div className="searchCardResult productSearchNoResult" >
                            <div className="searchResultShoes">
                                <img src="./assets/Image/sellFunction/NikeShoes.svg" alt="Nike" />
                                <div className="searchResultDetails">
                                    <span>Brand: Nike</span>
                                    <h3>Limited Edition NIKE OneX (2022)</h3>
                                    <h5>Average Selling Price ₹22,500</h5>
                                </div>
                            </div>
                            <div className="selectButton">
                                <div className="selectBox">
                                    <label htmlFor="size">Select your size </label>
                                    <div className="custom-select">
                                        <select name="size" id="number">
                                            <option value="9 (UK)" selected>9 (UK)</option>
                                            <option value="8 (UK)">8 (UK)</option>
                                            <option value="7 (UK)">7 (UK)</option>
                                            <option value="6 (UK)">6 (UK)</option>
                                        </select>
                                    </div>
                                </div>
                                <button>Add this Product</button>
                            </div>
                        </div>
                    </div>
                    <div className="noResultRequest">
                        <a href="#!" onClick={openSellFunctionPopUpMainNew('sellFunctionPopUp5')}>Send a request to add your product</a>
                    </div>
                    <div className="proceed">
                        <p>Selected Items <span>(2)</span></p>
                        <button onClick={openSellFunctionPopUpAddProduct}>Proceed</button>
                    </div>
                </div>
            </section > */}

      {/* <section className="sellFunction" id="sellFunctionPopUp5">
                <div className="sellFunctionMain sellYourProduct addYourProduct">
                    <div className="sellTop">
                        <h2>Add a Product Request</h2>
                        <button onClick={openSellFunctionPopUpAddProductClose}>Close X</button>
                    </div>
                    <div className="selling_tab">
                        <input type="radio" name="slider" id="sneakers" checked />
                        <input type="radio" name="slider" id="electronics" />
                        <input type="radio" name="slider" id="otherCategory" />
                        <div className="sliderTabs">
                            <label htmlFor="sneakers" className="nike">Sneakers</label>
                            <label htmlFor="electronics" className="adidas">Electronics</label>
                            <label htmlFor="otherCategory" className="puma">Other Category</label>
                            <span className="slider"></span>
                        </div>
                        <div className="sellingContentMassive">
                            <div className="selling_multDetRight  sellContent" style={{ display: "block" }}>
                                <div className="sellingDetails_priceBreakdown">
                                    <div className="selectBox">
                                        <label htmlFor="size">Select Brand</label>
                                        <div className="custom-select">
                                            <select name="Brand" id="number">
                                                <option defaultValue="Sneakers">Sneakers (Selected)</option>
                                                <option value="Nike">Nike</option>
                                                <option value="Puma">Puma</option>
                                                <option value="Adidas">Adidas</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="selectBox">
                                        <label htmlFor="Series">Select Series</label>
                                        <div className="custom-select">
                                            <select name="Series" id="number">
                                                <option value="One X" selected>One X</option>
                                                <option value="Two x">Two X</option>
                                                <option value="Two x">Two X</option>
                                                <option value="Two x">Two X</option>
                                                <option value="Two x">Two X</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="sellingDetails_priceBreakdown selectButtonAddProduct">
                                    <div className="selectBox">
                                        <label htmlFor="size">Select Product</label>
                                        <div className="custom-select">
                                            <select name="Product" id="number">
                                                <option value="Nike One X Air 2022" selected>Nike One X Air 2022</option>
                                                <option value="Nike One X Air 2022">Nike One X Air 2022</option>
                                                <option value="Nike One X Air 2022">Nike One X Air 2022</option>
                                                <option value="Nike One X Air 2022">Nike One X Air 2022</option>
                                                <option value="Nike One X Air 2022">Nike One X Air 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- second tab content --> */}
      {/* <div className="selling_multDetRight  sellContent01" style={{ display: "none" }}>
                                <h2>No Result Found one</h2>
                            </div>
                            {/* <!-- Third tab content--> */}
      {/* <div className="selling_multDetRight  sellContent02" style={{ display: "none" }}>
                                <h2>No Result Found</h2>
                            </div>
                        </div>
                    </div>
                    <div className="proceed">
                        <button className="goBack" onClick={openSellFunctionPopUpAddProductClose()}>Go Back</button>
                        <button >Add Request</button>
                    </div>
                </div>
            </section> */}
    </div>
  );
};

export default Homee;
