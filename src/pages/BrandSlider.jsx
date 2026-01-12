import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../assetss/CSS3/Brand_Slider.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';


const BrandSlider = () => {

    const owlCarousel = {
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
        className: "owl-carousel",
    };

    const newOfferSlider = {
        loop: true,
        watchOverflow: true,
        loopAdditionalSlides: 1,
        spaceBetween: 55,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1920: { slidesPerView: 3 },
        },
        modules: [Autoplay, Pagination],
        className: "newOfferSlider",
    };


    return (
        <>
            <Header />
            {/* <!--BreadCrumbs Start--> */}
            <main>
                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="./Home.html">Home</a></li>
                            <li><a href="#">All Categories</a></li>
                            <li><a href="#">Mens</a></li>
                            <li><a href="#">Sneakers</a></li>
                            <li>Jordan</li>
                        </ul>
                    </div>
                </div>
                <section className="slider-section">
                    <Swiper className="owl-carousel owl-theme" {...owlCarousel}>
                        <SwiperSlide className="item">
                            <a href="./showcase_page.html"><img src="./assets/Image/Brand_slider/img1.jpg" alt="image" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <a href="./showcase_page.html"> <img src="./assets/Image/Brand_slider/img2.jpg" alt="image" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <a href="./showcase_page.html"><img src="./assets/Image/Brand_slider/img1.jpg" alt="image" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <a href="./showcase_page.html"> <img src="./assets/Image/Brand_slider/img2.jpg" alt="image" /></a>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                            <a href="./showcase_page.html"><img src="./assets/Image/Brand_slider/img1.jpg" alt="image" /></a>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="newOffer">
                    <div className="container">
                        <h2>New Offers</h2>
                        <Swiper className="newOfferSlider owl-theme" {...newOfferSlider}>
                            <SwiperSlide className="item">
                                <a href="#"> <img src="./assets/Image/Brand_slider/offerImage1.svg" alt="Shoe 1" /></a>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <a href="#"><img src="./assets/Image/Brand_slider/offerImage2.svg" alt="Shoe 2" /></a>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <a href="#"> <img src="./assets/Image/Brand_slider/offerImage1.svg" alt="Shoe 3" /></a>
                            </SwiperSlide>
                             <SwiperSlide className="item">
                                <a href="#"> <img src="./assets/Image/Brand_slider/offerImage1.svg" alt="Shoe 1" /></a>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <a href="#"><img src="./assets/Image/Brand_slider/offerImage2.svg" alt="Shoe 2" /></a>
                            </SwiperSlide>
                            <SwiperSlide className="item">
                                <a href="#"> <img src="./assets/Image/Brand_slider/offerImage1.svg" alt="Shoe 3" /></a>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="moreOption">
                    <div className="container">
                        <div className="moreFrom_nike">
                            <h2>More From Nike</h2>
                            <div className="filterImg" hidden>
                                <button onclick="filterOptionsOpen()">
                                    <img src="./assets/Image/Brand_slider/filter.svg" alt="Filter" />
                                </button>
                            </div>
                        </div>
                        {/* <!-- <input type="radio" id="cancel_nikeFilter" hidden> --> */}
                        <div className="filter">
                            <div className="filterContent" hidden>
                                <h2>Filter</h2>
                                <button onclick="filterOptionsClose()"><img src="./assets/Image/Brand_slider/X.svg" alt="cancel" /></button>
                            </div>
                            <div className="filterLeft">
                                {/* <!-- Sort By Dropdown --> */}
                                <div className="filter-item">
                                    <label htmlFor="sort">Sort By</label>
                                    <select id="sort">
                                        <option value="relevance">Relevance</option>
                                        <option value="price-low-to-high">Price: Low to High</option>
                                        <option value="price-high-to-low">Price: High to Low</option>
                                    </select>
                                </div>
                                {/* <!-- Price Range Dropdown --> */}
                                <div className="filter-item">
                                    <label htmlFor="price">Price Range</label>
                                    <select id="price">
                                        <option value="below-15000">Below 15000</option>
                                        <option value="15000-20000">15000 - 20000</option>
                                        <option value="above-20000">Above 20000</option>
                                    </select>
                                </div>
                            </div>
                            <div className="filterRight">
                                <div className="filter-item">
                                    <label htmlFor="size">Size</label>
                                    <select id="size">
                                        <option value="9-uk">9 (UK)</option>
                                        <option value="8-uk">8 (UK)</option>
                                        <option value="10-uk">10 (UK)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="moreFrom">
                    <div className="container">
                        <div className="row">
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike1.svg" alt="image" />
                                        <h3>Nike Pure Whites (2022)</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike2.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike3.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike4.svg" alt="image" />
                                        <h3>Nike Neon Gel 501 (2022)Sports Shoes </h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike5.svg" alt="image" />
                                        <h3>Night Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike1.svg" alt="image" />
                                        <h3>Nike Pure Whites (2022)</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike2.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike3.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike4.svg" alt="image" />
                                        <h3>Nike Neon Gel 501 (2022)Sports Shoes </h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike5.svg" alt="image" />
                                        <h3>Night Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="moreFrom moreFromLoadMore">
                    <div className="container">
                        <div className="row">
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike1.svg" alt="image" />
                                        <h3>Nike Pure Whites (2022)</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike2.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike3.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike4.svg" alt="image" />
                                        <h3>Nike Neon Gel 501 (2022)Sports Shoes </h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike5.svg" alt="image" />
                                        <h3>Night Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike1.svg" alt="image" />
                                        <h3>Nike Pure Whites (2022)</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike2.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike3.svg" alt="image" />
                                        <h3>Limited Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike4.svg" alt="image" />
                                        <h3>Nike Neon Gel 501 (2022)Sports Shoes </h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                            <div className="product-box">
                                <div className="product-top">
                                    <span className="sold">05 SOLD</span>
                                    <a href="./ProductPage.html">
                                        <img src="./assets/Image/Brand_slider/nike5.svg" alt="image" />
                                        <h3>Night Edition Jordan AIR(2022) 1 of 100</h3>
                                    </a>
                                </div>
                                <div className="product-bottom">
                                    <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                    <button className="wishlist" type="button"><img src="./assets/Image/Brand_slider/wish.png"
                                        alt="#" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="loadMore">
                    <div className="container">
                        <div className="loadMore_main">
                            <button type="button">Load More</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default BrandSlider;
