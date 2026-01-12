import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/Authenticity.moduleNew.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const Authenticity = () => {
    const snatchVerifiedWorksSlider = {
        loop: true,
        spaceBetween: 35,
        breakpoints: {
            0: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 3 },
            1600: { slidesPerView: 3 },
            1920: { slidesPerView: 3 },
        },
        className: "snatchVerifiedWorksSlider",
    };

    const snatchVerifiedWorksSliderNew = {
        loop: true,
        spaceBetween: 35,
        breakpoints: {
            0: { slidesPerView: 1 },
            375: { slidesPerView: 2 },
            767: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1600: { slidesPerView: 4 },
            1920: { slidesPerView: 4 },
        },
        className: "snatchVerifiedWorksSliderNew",
    };

    const snatchVerifiedProductsSlider = {
        loop: true,
        spaceBetween: 55,
        navigation: {
            nextEl: ".sv-next",
            prevEl: ".sv-prev",
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
        className: "snatchVerifiedProductsSlider",
    };


    return (
        <>
            <Header />
            <main>
                {/* <!--BreadCrumbs Start--> */}
                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="./Home.html">Home</a></li>
                            <li><a href="./Authenticity.html">Authenticity</a></li>
                        </ul>
                    </div>
                </div>
                {/* <!--BreadCrumbs End-->
        <!--Authenticity Page start--> */}
                <section className="snatchVerified">
                    <div className="background">
                        <div className="container">
                            <div className="verifiedImg">
                                <img src="./assets/Image/AuthenticityImg/verifiedIcon.svg" alt="authentic" id="logoFirst" />
                                <img src="./assets/Image/AuthenticityImg/LogoVerified.svg" alt="authentic" />
                            </div>
                            <div className="videoCardSection">
                                <div className="videoCardSectionMain">
                                    <h2>What is Snatche Verified</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                                        conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                                        lobortis.
                                    </p>
                                </div>
                                <div className="videoCard">
                                    <img src="./assets/Image/AuthenticityImg/videoCard.svg" alt="video" />
                                    <div className="playButton">
                                        <span className="videoButton"><img
                                            src="./assets/Image/AuthenticityImg/videoButton.svg" alt='videoButton' /></span><button>Watch
                                                Video</button>
                                    </div>
                                    <span className="circleImg"><img src="./assets/Image/AuthenticityImg/Circle.svg" alt='circle' /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
                {/* // <!--Section 2--> */}
                <section className="snatchVerifiedWorks">
                    <div className="triangle-topleft">

                    </div>
                    <div className="container">
                        <div className="snatchVerifiedWork_content">
                            <h2>How Snatche Verified Works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac
                                aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                Class
                                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
                                tempus urna at turpis condimentum lobortis.</p>
                        </div>
                        <Swiper className="snatchVerifiedWorksSlider" {...snatchVerifiedWorksSlider}>

                            <SwiperSlide className="item">

                            </SwiperSlide>

                            <SwiperSlide className="item">

                            </SwiperSlide>

                            <SwiperSlide className="item">

                            </SwiperSlide>

                            <SwiperSlide className="item">

                            </SwiperSlide>

                            <SwiperSlide className="item">

                            </SwiperSlide>

                        </Swiper>
                        <div className="snatchVerifiedWorksSliderNewCard" style={{ display: "none" }}>
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                        </div>
                        <h2>How Snatche Verified Works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos
                            himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
                            taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
                            turpis
                            condimentum lobortis.</p>
                        <Swiper className="snatchVerifiedWorksSliderNew" {...snatchVerifiedWorksSliderNew}>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <div className="item-card">

                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="snatchVerifiedWorksSliderNewCard" style={{ display: "none" }} >
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                            <div className="cardItem"></div>
                        </div>
                    </div>
                </section >
                {/* // <!--Section Dark--> */}
                < section className="snatchVerifiedGurantees" >
                    <div className="triangle-bottomRight">

                    </div>
                    <div className="container">
                        <h2>What does Snatche Verified Gurantees</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac
                            aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                            inceptos
                            himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet,
                            consectetur
                            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent
                            taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
                            turpis
                            condimentum lobortis.</p>
                        <div className="trust">
                            <div>
                                <h3>100%</h3>
                                <span>Authenticity</span>
                            </div>
                            <div>
                                <h3>Best</h3>
                                <span>Quality</span>
                            </div>
                            <div>
                                <h3>Refund</h3>
                                <span>100% Refund Guarantee</span>
                            </div>
                            <div>
                                <h3>Trust</h3>
                                <span>We Got You Covered</span>
                            </div>
                        </div>
                        <div className="snatchVerifiedGuranteesBottom">
                            <div className="snatchVerifiedGuranteesContent">
                                <h2>How to Identify Snatche Verified Products</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                    interdum,
                                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                    per
                                    inceptos himenaeos.</p>
                            </div>
                            <div className="snatchVerifiedGuranteesBottomImg">
                                <img src="./assets/Image/AuthenticityImg/circleBig.svg" alt='circle' />
                                <img src="./assets/Image/AuthenticityImg/verifiedIconBig.svg" alt='verIcon' />
                            </div>
                        </div>
                    </div>
                </section >
                <section className="snatchVerifiedProducts">
                    <div className="container">
                        <div className="snatchVerifiedProductsInnerContent">
                            <div className="snatchVerifiedProductsNew">
                                <h2>Snatche Verified Products</h2>
                                <a href="./productListing.html">View All</a>
                            </div>
                            <Swiper className="snatchVerifiedProductsSlider" {...snatchVerifiedProductsSlider} navigation={true}>
                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide className="product-box">
                                    <div className="product-top">
                                        <span className="sold">08 SOLD</span>
                                        <a href="./ProductPage.html">
                                            <img src="./assets/Image/HomePage/owlImg/Shoes1.svg" alt="shoescard" />
                                            <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                        </a>
                                    </div>
                                    <div className="product-bottom">
                                        <p className="bid-price">BID <span>₹73500.00</span></p>
                                        <button className="wishlist" type="button"><img
                                            src="./assets/Image/HomePage/owlImg/Like.svg" alt="like" /></button>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/* <div className="sv-next custom-next"></div>
                            <div className="sv-prev custom-prev"></div> */}
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>
    )
}

export default Authenticity
