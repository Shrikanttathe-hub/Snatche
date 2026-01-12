import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/searchResult.css';


const SearchResult = () => {
  return (
   <>
     <Header/>
       {/* <!-- Breadcrumbs --> */}
    <div className="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li>Search “Nike Sneakers”</li>
            </ul>
        </div>
    </div>
    <section className="searchResult_listing">
        <div className="container">
            <div className="searchResult_listingMain">
                <div className="utility">
                    <div>
                        <a href="./Home.html">← Home</a>
                    </div>
                    <h1>Search results for “Nike Sneakers”</h1>
                </div>
                <div className="filterImg" hidden>
                    <button type="button" onclick="filterOptionsOpen()">
                        <img src="./assets/Image/snatcheList/filter.svg" alt="filterButton" />
                    </button>
                </div>
                <div className="filter">
                    <div className="filterContent" hidden>
                        <h2>Filter</h2>
                        <button onclick="filterOptionsClose()">
                            <img src="./assets/Image/snatcheList/X.svg" alt="cancel" />
                        </button>
                    </div>
                    <div className="filterLeft">
                        {/* <!-- Sort By Dropdown --> */}
                        <div className="filter-item">
                            <label for="sort">Sort By</label>
                            <select id="sort">
                                <option value="relevance">Relevance</option>
                                <option value="price-low-to-high">Price: Low to High</option>
                                <option value="price-high-to-low">Price: High to Low</option>
                            </select>
                        </div>
                        {/* <!-- Price Range Dropdown --> */}
                        <div className="filter-item">
                            <label for="price">Price Range</label>
                            <select id="price">
                                <option value="below-15000">Below 15000</option>
                                <option value="15000-20000">15000 - 20000</option>
                                <option value="above-20000">Above 20000</option>
                            </select>
                        </div>
                        {/* <!-- brand --> */}
                        <div className="filter-item">
                            <label for="brand">Brand</label>
                            <select id="brand">
                                <option value="nike">Nike</option>
                                <option value="jordan">Jordan</option>
                                <option value="adidas">Adidas</option>
                            </select>
                        </div>
                    </div>
                    <div className="filterRight">
                        <div className="filter-item">
                            <label for="size">Size:</label>
                            <select id="size">
                                <option value="9-uk">9 (UK)</option>
                                <option value="8-uk">8 (UK)</option>
                                <option value="10-uk">10 (UK)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <section className="searchResult_products">
                    <div className="row">
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_four.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_five.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
                            </div>
                        </div>
                        <div className="product-box">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image"/>
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#"/></button>
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
            </div>
        </div>
    </section>
     <Footer/>
   </>
  )
}

export default SearchResult;