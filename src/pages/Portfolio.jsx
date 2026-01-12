import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/portfolio.css';

const Portfolio = () => {
  return (
    <>
    <Header/>
    <main>
    {/* <!-- Breadcrumbs --> */}
    <div className="breadcrumb active" id="progressBar">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li><a href="./accountSetting.html">Your Account</a></li>
                <li>Portfolio</li>
            </ul>
        </div>
    </div>
    {/* <!-- Portfolio --> */}
    <section id="portfolio" className="portFolioactive">
        <div className="container">
            <div className="port">
                <div className="portMain">
                    <div className="utility" style={{display : "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <div className="utilityLeft">
                            <div><a href="./accountPage.html">← Your Account</a></div>
                            <h1>Portfolio</h1>
                        </div>
                        <div className="utilityRight">
                            <button type="button">Add Product <img src="./assets/Image/portfolio/addProductBTN.svg"
                                    alt="Add Product" /></button>
                        </div>
                    </div>
                </div>
                <div className="filterImg" hidden>
                    <button type="button" onclick="filterOptionsOpen()">
                        <img src="./assets/Image/snatcheList/filter.svg" alt="filterButton" />
                    </button>
                </div>
                {/* <!-- row Of selector --> */}
                <div className="listSelect">
                    <div className="filterContent" hidden>
                        <h2>Filter</h2>
                        <button className="filterCancel" onclick="filterOptionsClose()">
                            <img src="./assets/Image/snatcheList/X.svg" alt="cancel" />
                        </button>
                    </div>
                    <div className="listSelectLeft">
                        <div className="list">
                            <label for="listSort">Sort By</label>
                            <select id="listSort">
                                <option value="1">High to Low</option>
                                <option value="2" selected>Low to High</option>
                                <option value="3">High</option>
                            </select>
                        </div>
                        <div className="list">
                            <label for="listSort">Price Range</label>
                            <select id="listSort">
                                <option value="1">Above 10000</option>
                                <option value="2" selected>Below 10000</option>
                                <option value="3">10000000</option>
                            </select>
                        </div>
                    </div>
                    <div className="listSelectRight">
                        <div className="list">
                            <label for="listSort">Brand</label>
                            <select id="listSort">
                                <option value="1">Nike</option>
                                <option value="2" selected>Puma</option>
                                <option value="3">Jordan</option>
                            </select>
                        </div>
                        <div className="list">
                            <label for="listSort">Series</label>
                            <select id="listSort">
                                <option value="1">All Products</option>
                                <option value="2" selected>Price</option>
                                <option value="3">Brand</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <!-- row selector Ends -->
                <!--Ends list of products  --> */}
                <div className="addedPro">
                    <ul className="listadd">
                        {/* <!-- 1st product --> */}
                        <li className="addPro">
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightTop">
                                    <button className="favRemove" id="removeImg" hidden>
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                            </div>
                            <div className="addProdLeft">
                                <div className="addImg">
                                    <img src="./assets/Image/portfolio/productSale1.svg" alt="Nike" />
                                </div>
                                <div className="addContent">
                                    <h2>Limited Edition NIKE OneX (2022)<img
                                            src="./assets/Image/portfolio/authenticateTag.svg" alt="Authenticate"/></h2>
                                    <p>Added on: 02/02/22</p>
                                    <p>Size: UK 11</p>
                                    <div className="auth">
                                        <button>List to Sell</button>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>10,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>22,500</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>12,500 (125%) </span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight">
                                <div className="addRightTop">
                                    <button className="favRemove">
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>10,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>22,500</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>12,500 (125%) </span></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- 2nd Product --> */}
                        <li className="addPro">
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightTop">
                                    <button className="favRemove" id="removeImg" hidden>
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                            </div>
                            <div className="addProdLeft">
                                <div className="addImg">
                                    <img src="./assets/Image/portfolio/productSale4.svg" alt="Nike" />
                                </div>
                                <div className="addContent">
                                    <h2>NIKE Neon Air 2S (2021)<img src="./assets/Image/portfolio/authenticateTag.svg"
                                            alt="Authenticate" /></h2>
                                    <p>Added on: 02/02/22</p>
                                    <p>Size: UK 11</p>
                                    <div className="auth">
                                        <button>List to Sell</button>
                                    </div>
                                    {/* <!-- <h4>Authenticate</h4> --> */}
                                </div>
                            </div>
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>20,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>19,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="down">₹<span>-1,000 (-5%)</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight">
                                <div className="addRightTop">
                                    <button className="favRemove">
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>20,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>19,000</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="down">₹<span>-1,000 (-5%)</span></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- 3rd Product --> */}
                        <li className="addPro">
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightTop">
                                    <button className="favRemove" id="removeImg" hidden>
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                            </div>
                            <div className="addProdLeft">
                                <div className="addImg">
                                    <img src="./assets/Image/portfolio/productSale3.svg" alt="Nike" />
                                </div>
                                <div className="addContent">
                                    <h2>NIKE Neon Air (2020)</h2>
                                    <p>Added on: 02/02/22</p>
                                    <p>Size: UK 11</p>
                                    <div className="auth">
                                        <button>List to Sell</button>
                                        <button>Authenticate</button>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>20,999</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>26,999</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>6,000 (35%)</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight">
                                <div className="addRightTop">
                                    <button className="favRemove">
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>20,999</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>26,999</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>6,000 (35%)</span></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- 4th Product --> */}
                        <li className="addPro">
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightTop">
                                    <button className="favRemove" id="removeImg" hidden>
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                            </div>
                            <div className="addProdLeft">
                                <div className="addImg">
                                    <img src="./assets/Image/portfolio/productSale2.svg" alt="Nike" />
                                </div>
                                <div className="addContent">
                                    <h2>NIKE Leather Colour Sneakers<img
                                            src="./assets/Image/portfolio/authenticateTag.svg" alt="Authenticate" /></h2>
                                    <p>Added on: 02/02/22</p>
                                    <p>Size: UK 11</p>
                                    <div className="auth">
                                        <button>List to Sell</button>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight" id="addProdRight_mobileView">
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>10,499</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>13,499</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>3,499 (33.3%)</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="addProdRight">
                                <div className="addRightTop">
                                    <button className="favRemove">
                                        <p>Remove</p><img src="./assets/Image/portfolio/remove.svg" alt="cancel" />
                                    </button>
                                </div>
                                <div className="addRightBottom">
                                    <div className="addvalues">
                                        <h5>Purchase Value</h5>
                                        <p>₹<span>10,499</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Current Value</h5>
                                        <p>₹<span>13,499</span></p>
                                    </div>
                                    <div className="addvalues">
                                        <h5>Profit / Loss</h5>
                                        <p className="up">₹<span>3,499 (33.3%)</span></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
    <Footer/>
    </>
  )
}

export default Portfolio;
