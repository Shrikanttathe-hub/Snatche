import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import '../assetss/CSS3/successful.module.css';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const BidPlaced = () => {

    const topBiddedSliderNew = {
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
        className: " topBiddedSliderNew",
    };

    const continueToShopSliderNew = {
        loop: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".cs-next",
            prevEl: ".cs-prev",
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
        className: " topBiddedSliderNew",
    };

    return (
        <>
            <Header />
            <main>
                {/* <!--successful page start--> */}
                <section className="SAP_successful">
                    <div className="container">
                        <div className="SAP_successfulTop">
                            <h2>Bid Placed</h2>
                            <p>Thank you for your intrest in Limited Edition NIKE OneX (2022). We have added your bid to the
                                seller’s dashboard. You will be notified once we an recieve update on it.
                            </p>
                        </div>
                        <div className="SAP_successfulmid">
                            <h2 className="yourProductHeader">Your Bid</h2>
                            <div className="yourProduct">
                                <div className="yourProductleft">
                                    <div className="productBox productBoxNew">
                                        <img src="./assets/Image/SAP_successful/productImg.svg" alt="ProductImage" />
                                    </div>
                                    <div className="productBox_content productBox_contentNew">
                                        <h2>Limited Edition NIKE OneX (2022)</h2>
                                        <p className="brand_nike">Brand : Nike</p>
                                        <div className="productBox_para">
                                            <p>Size 9 (UK)</p>
                                        </div>
                                        <p className="yourProductParaMobile">Bid Amount<span>₹15,000</span></p>
                                    </div>
                                    <div className="yourProductright bidProductRight">
                                        <p className="yourProductPara">Bid Amount<span>₹15,000</span></p>
                                        <div className="bitButton">
                                            <div className="lightAndDarkButton">
                                                <button className="light">Cancel Bid</button>
                                                <button className="dark">Change Bid</button>
                                            </div>
                                            <div className="paymentMode">
                                                <p>Payment Mode -<span>(ICICI Credit Card) Razorpay</span></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="greenSection Bid">
                                        <h3>Bid Valid till 5th August 2022</h3>
                                        <a href="#">Set Reminder</a>
                                    </div>
                                </div>
                            </div>
                            <p className="bidMyOrders">You can always review details of this and all your recent bids on <strong
                                onclick="location.href='buying.html'">My Orders</strong> page</p>

                        </div>
                    </div>
                </section>
                {/* <!--New Arrivals Section Start--> */}
                <section className="topBidded">
                    <div className="container">
                        <div className="topBiddedInnerContent">
                            <h3 className="continueHeading">Continue your Shopping with</h3>
                            <div className="owlTopBidded">

                                <div className="topBiddedProducts">

                                    <h2>Top Bidded</h2>
                                </div>

                                <a href="./productListing.html">View All</a>
                            </div>
                            <Swiper className="topBiddedSliderNew" {...topBiddedSliderNew} navigation={true}>
                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR(20225) 1 of 10000" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 10000</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR XY(20225) 1 of 10" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR XY(2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2020) 1 of 1" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2020) 1 of 1</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2022) 1 of 10" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 10</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2025) 1 of 100 Latest" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2025) 1 of 100 Latest</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2021) 1 of 100 Sneakers" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2021) 1 of 100 Sneakers</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR-X (2021) 1 of 100" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR-X (2021) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2024) 1 of 1000" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2024) 1 of 1000</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2025) 1 of 1" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2025) 1 of 1</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR(2022) 1 of 100" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR(2022) 1 of 10000" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/* <div className="tp-next custom-next"></div>
                            <div className="tp-prev custom-prev"></div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </section>
                {/* <!--New Arrivals Section End--> */}

                {/* <!--Continue to shop for more Section Start--> */}
                <section className="continueToShop">
                    <div className="container">
                        <div className="continueToShopInnerContent">
                            <div className="owlcontinueToShop people">
                                <h2>Continue to shop for more</h2>
                                <a href="./productListing.html">View All</a>
                            </div>
                            <Swiper className="continueToShopSliderNew" {...continueToShopSliderNew} navigation={true}>
                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR(2022) 1 of 10" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR(2022) 1 of 10" data-price="73500</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan Air 1 of 10" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan Air 1 of 10</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2025) 1 of 100" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2025) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR Green (2025) 1 of 100" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR Green (2025) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR-G (20225) 1 of 101" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR-G (20225) 1 of 101</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2020) 1 of 102" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2020) 1 of 102</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2025) 1 of 104" data-price="73500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2025) 1 of 104</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR(2025) 1 of 110" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR(2025) 1 of 110</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2021) 1 of 100" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2021) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2025) 1 of 120" data-price="76500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2025) 1 of 120</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹76500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box" data-brand="Brand : Nike" data-title="Limited Edition Jordan AIR (2019) 1 of 10" data-price="16500" data-img="./assets/Image/HomePage/owlImg/Shoes1.svg">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2019) 1 of 10</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹16500.00</span></p>
                                        <button className="wishlist" type="button" data-tooltip="Added to Snatche List"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/* <div className="cs-next custom-next"></div>
                            <div className="cs-prev custom-prev"></div> */}
                        </div>
                    </div>
                </section>
                {/* <!--New Arrivals Section End-->
        <!--Back to Top Start--> */}
                <section className="backToTop">
                    <div className="container">
                        <button onclick="location.href='Home.html'">Back to Homepage</button>
                    </div>
                </section>
                {/* <!--Back to Top Start--> */}
            </main >
            <Footer />
        </>
    )
}

export default BidPlaced;
