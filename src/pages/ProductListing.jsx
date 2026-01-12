import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/searchResult.css';
import '../assetss/CSS3/home.Module.css';


const ProductListing = () => {
  return (
    <>
     <Header/>
        <main>
    {/* <!-- Breadcrumbs --> */}
    <div className="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li><a href="#">All Categories</a></li>
                <li>All Products</li>
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
                    <h1>All Products</h1>
                </div>
                <div className="filterImg" hidden>
                    <button type="button" onClick="filterOptionsOpen()">
                        <img src="./assets/Image/snatcheList/filter.svg" alt="filterButton" />
                    </button>
                </div>
                <div className="filter">
                    <div className="filterContent" hidden>
                        <h2>Filter</h2>
                        <button onClick="filterOptionsClose()">
                            <img src="./assets/Image/snatcheList/X.svg" alt="cancel" />
                        </button>
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
                                <option value="default">Default</option>
                                <option value="below-15000">Below 15000</option>
                                <option value="15000-20000">15000 - 20000</option>
                                <option value="above-20000">Above 20000</option>
                            </select>
                        </div>
                        {/* <!-- brand --> */}
                        <div className="filter-item">
                            <label htmlFor="brand">Brand</label>
                            <select id="brand">
                                <option value="Nike">Nike</option>
                                <option value="Jordan">Jordan</option>
                                <option value="Adidas">Adidas</option>
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
                <section className="searchResult_products">
                    <div className="row">
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2022)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeWhite.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Nike Pure Whites (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2023)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeRed.svg"
                            data-category="In Nike Sneakers" data-size="8-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image" />
                                    <h3>Nike Pure Whites (2023)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Neon Gel 501 (2022) Sports Shoes"
                            data-price="75000" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="10-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Nike Neon Gel 501 (2022) Sports Shoes</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 75000.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2024)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeRed.svg"
                            data-category="In Nike Sneakers" data-size="10-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_four.svg" alt="image" />
                                    <h3>Nike Pure Whites (2024)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="8-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_five.svg" alt="image" />
                                    <h3>Nike Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites Sneakers (2025)"
                            data-price="73500" data-img="./assets/Image/productListing/NikeWhite.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Nike Pure Whites Sneakers(2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 73500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2022-01)"
                            data-price="11500" data-img="./assets/Image/productListing/NikeRed.svg"
                            data-category="In Nike Sneakers" data-size="8-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image" />
                                    <h3>Nike Pure Whites (2022-01)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 11500.00</span>
                                </p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites New (2025)"
                            data-price="75000" data-img="./assets/Image/productListing/NikeWhite.svg"
                            data-category="In Nike Sneakers" data-size="8-uk,9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Nike Pure Whites New (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 75000.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike"
                            data-title="Nike Pure Whites (2025)Limited Edition Jordan AIR (2022) 1 of 100"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Limited Edition Jordan AIR (2022) 1 of 100</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2026)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeWhite.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image" />
                                    <h3>Nike Pure Whites (2026)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,8-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Nike Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure White (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_four.svg" alt="image" />
                                    <h3>Nike Pure White (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2025) New"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_five.svg" alt="image" />
                                    <h3>Nike Pure Whites (2025) New</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites(2022)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Nike Pure Whites(2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2024)1"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,8-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image" />
                                    <h3>Nike Pure Whites (2024)1</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span>
                                </p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites Beige (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Nike Pure Whites Beige (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whitest (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Nike Pure Whitest (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure G Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Nike Pure G Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Latest Pure Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,8-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_two.svg" alt="image" />
                                    <h3>Nike Latest Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Puma Pure Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_three.svg" alt="image" />
                                    <h3>Puma Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Nike" data-title="Nike Pure Whites (2025)"
                            data-price="18500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Nike Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_four.svg" alt="image" />
                                    <h3>Nike Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 18500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Adidas" data-title="Adidas Human Pharrel (2022)"
                            data-price="17500" data-img="./assets/Image/header/adidasShoes.svg"
                            data-category="In Adidas Sneakers" data-size="8-uk,9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/header/adidasShoes.svg" alt="image" />
                                    <h3>Adidas Human Pharrel (2022)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
                            </div>
                        </div>
                        <div className="product-box" data-brand="Jordan" data-title="Nike Pure Whites (2025)"
                            data-price="17500" data-img="./assets/Image/productListing/NikeGreen.svg"
                            data-category="In Jordan Sneakers" data-size="9-uk,10-uk">
                            <div className="product-top">
                                <span className="sold">05 SOLD</span>
                                <a href="./ProductPage.html">
                                    <img src="./assets/Image/productListing/img_one.svg" alt="image" />
                                    <h3>Jordan Pure Whites (2025)</h3>
                                </a>
                            </div>
                            <div className="product-bottom">
                                <p className="bid-price">BID <span>₹ 17500.00</span></p>
                                <button className="wishlist" type="button"><img src="./assets/Image/productListing/wish.png"
                                        alt="#" /></button>
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
    </main>
     <Footer/>
    </>
  )
}

export default ProductListing
