import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assetss/CSS3/successfull.Module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation} from "swiper/modules";

const Successfull = () => {
  const SimilarSlider = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".SS-next",
      prevEl: ".SS-prev",
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
    className: "SimilarSlider",
  };
  const hottestDropsSliderNew = {
    loop: true,
    spaceBetween: 55,
    navigation: {
      nextEl: ".HD-next",
      prevEl: ".HD-prev",
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
    className: "hottestDropsSliderNew",
  };

  return (
    <>
      <Header />
      <main className="orderPlaced">
        {/* <!--successful section start--> */}
        <section className="SAP_successful">
          <div className="container">
            <div className="SAP_successfulTop">
              <h2>Order Placed</h2>
              <p>
                Thank you for shopping with us. We have recieved your order
                #SNA554BM001 and will send you confirmation when it is shipped
                by our seller
              </p>
            </div>
            <div className="SAP_successfulmid">
              <h2 className="yourProductHeader">Your Order</h2>
              <div className="yourProduct">
                <div className="yourProductleft">
                  <div className="productBox">
                    <img
                      src="./assets/Image/SAP_successful/productImg.svg"
                      alt="ProductImage"
                    />
                  </div>
                  <div className="productBox_content">
                    <h2>Limited Edition NIKE OneX (2022)</h2>
                    <p className="brand_nike">Brand : Nike</p>
                    <div className="productBox_para">
                      <p>Size 9 (UK)</p>
                    </div>
                  </div>
                  <div className="yourProductright">
                    <p className="yourProductPara">
                      Amount Paid<span>₹22,500</span>
                    </p>
                    <a className="yourProductrightMoreDetails">
                      More Details
                      <img
                        src="./assets/Image/successfull/arrow.svg"
                        className="yourProductrightMoreDetailsArrow"
                      />{" "}
                    </a>
                  </div>
                </div>
                <div>
                  <div className="accordionNew1">
                    <div className="lineNew">
                      <img src="./assets/Image/successfull/lineHori.svg" />
                    </div>
                    <div className="accordionNew">
                      <div className="address">
                        <div>
                          <h3>
                            Deliver to - <span>Sarthak Raut</span>
                          </h3>
                          <p>
                            1005, 10th floor, Techno IT Park - Wadhva Group Near
                            Eskay Resort, New Link road, Borivali (W), MUMBAI,
                            Maharashtra 400092. IndiaPhone No: 9898989898
                          </p>
                        </div>
                        <div className="horiLineNew">
                          <img src="./assets/Image/successfull/lineHori.svg" />
                        </div>
                        <div className="billing">
                          <h3>Billing Address</h3>
                          <p>
                            1005, 10th floor, Techno IT Park - Wadhva Group Near
                            Eskay Resort, New Link road, Borivali (W), MUMBAI,
                            Maharashtra 400092. IndiaPhone No: 9898989898
                          </p>
                        </div>
                      </div>
                      <div className="table">
                        <table>
                          <th>
                            <tr className="row1">
                              <td>Item Price</td>
                              <td>₹21,000</td>
                            </tr>
                          </th>
                          <tbody>
                            <tr className="row3">
                              <td>Taxes</td>
                              <td>₹1200</td>
                            </tr>
                            <tr className="row2">
                              <td>Transaction Fee (Including GST)</td>
                              <td>₹1200</td>
                            </tr>
                            <tr className="row1New">
                              <td>Delivery Charges</td>
                              <td>₹300</td>
                            </tr>
                            <tr className="row4">
                              <td>Total Amount Paid</td>
                              <td>₹22,500</td>
                            </tr>
                          </tbody>
                        </table>
                        <h4>
                          Payment Mode -
                          <span>(ICICI Credit Card) Razorpay</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="greenSection">
                    <h3>Estimated Delivery 2nd August - 7th August</h3>
                    <p>
                      Tracking data will be available in{" "}
                      <span onclick="location.href='buying.html'">
                        My Orders
                      </span>{" "}
                      once the product is shipped
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="goToMyOrders"
                onclick="location.href='buying.html'"
              >
                Go to My Orders
              </button>
              <p className="goToMyOrdersText">
                Tracking data will be available as the order is shipped by our
                seller View or manage your order from the{" "}
                <span onclick="location.href='buying.html'">My Orders</span>{" "}
                Page of your snatche account
              </p>
            </div>
          </div>
        </section>
        {/* <!--successful section End-->
    <!--New Arrivals Section Start--> */}
        <section className="newArrivals similarProduct">
          <div className="container">
            <div className="owlNewArrival">
              <div className="similarProducts">
                <h3>Continue your Shopping with</h3>
                <h2>Similar products you might like</h2>
              </div>

              <a href="./productListing.html">View All</a>
            </div>
            <Swiper
              className="newArrivalsSliderNew SimilarSlider"
              {...SimilarSlider} navigation={true}
            >
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* <!--New Arrivals Section End-->
    <!--HottestDrops Section Start--> */}
        <section className="hottestDrops peopleWhoBought">
          <div className="container">
            <div className="owlHottestDrops people">
              <h2>People who bought NIKE OneX (2022) also bought</h2>
              <a href="./productListing.html">View All</a>
            </div>
            <Swiper className="hottestDropsSliderNew" {...hottestDropsSliderNew} navigation={true}>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide className="product-box">
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
                    BID <span>₹73500.00</span>
                  </p>
                  <button className="wishlist" type="button">
                    <img
                      src="./assets/Image/HomePage/owlImg/Like.svg"
                      alt="like"
                    />
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* <!--HottestDrops Section End-->
    <!--Back to Top Start--> */}
        <section className="backToTop">
          <div className="container">
            {/* <!-- <div className="backToTopButton">
                <img src="./assets/Image/HomePage/BackToTop/Horizonal.svg" />
            </div> --> */}
            <div className="backToTopButtonB">
              <button onclick="scrollBackToTop()">Back to Top</button>
            </div>
          </div>
        </section>
      </main>
      {/* <!--Back to Top End--> */}
      <Footer />
    </>
  );
};

export default Successfull;
