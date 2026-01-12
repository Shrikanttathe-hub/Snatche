import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/selling_On_Sale.css';

const SellingOnSale = () => {
  return (
   <>
     <Header/>
       {/* <!-- br/eadcrumbs --> */}
    <div className="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li><a href="./accountSetting.html">Your Account</a></li>
                <li>Selling</li>
            </ul>
        </div>
    </div>
    <section id="selling_on_salePage">
        <div className="container">
            <div className="selling_on_salepageMain">
                <div className="utility">
                    <div className="utilityLeft">
                        <div>
                            <a href="./accountPage.html">← Your Account</a>
                        </div>
                        <h1>Selling</h1>
                    </div>
                    <div className="utilityRight">
                        <div className="utilitydropdown">
                            <label htmlFor="validity">Show Orders of</label>
                            <select id="validity">
                                <option value="7">Last 1 Months</option>
                                <option value="15" defaultValue>Last 3 Months</option>
                                <option value="30">Last 6 Months</option>
                            </select>
                        </div>
                        <div className="buyingSearch">
                            <input type="text" />
                            <button> <img src="./assets/Image/support_And_FAQs/Searchbar.svg"alt="Search_Queries" />Search</button>
                        </div>
                    </div>
                </div>
                <div className="sale_on_tabs">
                    <input type="radio" id="on_sale" name="tabs" defaultChecked />
                    <label htmlFor="on_sale">On Sale</label>
                    <input type="radio" id="sold" name="tabs" />
                    <label htmlFor="sold">Sold</label>
                    <div className="sale_on_tabsContent">
                        <div className="sale_on-tabsContent" id="on_saleContent">
                            <ul className="sale">
                                {/* <!-- selling 1st product --> */}
                                <li>
                                    <div className="saleOnLeft">
                                        <div className="selectProduct">
                                            <div className="product_Img">
                                                <img src="./assets/Image/sellin_On_Sale/productSale1.svg" alt="Nike" />
                                            </div>
                                            <div className="productContent">
                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                <p>br/and : Nike</p>
                                                <div className="selected_size">
                                                    <p id="selectedSize">Size 9 (UK)</p>
                                                </div>
                                                <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                    {/* <!-- <p>Selling Price</p> --> */}
                                                    <p>Selling Price<br/><span>₹14,700</span></p>
                                                    <a href="#">View Bids</a>
                                                </div>
                                            </div>
                                            <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                <div className="saleOnButton">
                                                    <button>Remove Listing</button>
                                                    <button className="salebtnLeft">Change Listing</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saleOnRight">
                                        {/* <!-- <p>Selling Price</p> --> */}
                                        <p>Selling Price<br/><span>₹14,700</span></p>
                                        <a href="#">View Bids</a>
                                        <div className="saleOnButton">
                                            <button>Remove Listing</button>
                                            <button className="salebtnLeft">Change Listing</button>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- Ends 1st Product -->
                                <!-- selling 2nd Product --> */}
                                <li>
                                    <div className="saleOnLeft">
                                        <div className="selectProduct">
                                            <div className="product_Img">
                                                <img src="./assets/Image/sellin_On_Sale/productSale2.svg" alt="Nike" />
                                            </div>
                                            <div className="productContent">
                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                <p>br/and : Nike</p>
                                                <div className="selected_size">
                                                    <p id="selectedSize">Size 9 (UK)</p>
                                                </div>
                                                <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                    <p>Selling Price<br/><span>₹14,700</span></p>
                                                    <a href="#">View Bids</a>
                                                </div>
                                            </div>
                                            <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                <div className="saleOnButton">
                                                    <button>Remove Listing</button>
                                                    <button className="salebtnLeft">Change Listing</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saleOnRight">
                                        <p>Selling Price<br/><span>₹17,900</span></p>
                                        <a href="#">View Bids</a>
                                        <div className="saleOnButton">
                                            <button>Remove Listing</button>
                                            <button className="salebtnLeft">Change Listing</button>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- Ends 1st Product --> */}
                            </ul>
                        </div>
                        <div className="sale_on-tabsContent" id="soldContent">
                            <ul className="sale">
                                {/* <!-- selling 1st product --> */}
                                <li>
                                    <div className="saleOnLeft">
                                        <div className="selectProduct">
                                            <div className="product_Img">
                                                <img src="./assets/Image/sellin_On_Sale/productSale1.svg" alt="Nike" />
                                            </div>
                                            <div className="productContent">
                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                <p>br/and : Nike</p>
                                                <div className="selected_size">
                                                    <p id="selectedSize">Size 9 (UK)</p>
                                                </div>
                                                <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                    <p>Selling Price<br/><span>₹14,700</span></p>
                                                    <a href="#">View Bids</a>
                                                </div>
                                            </div>
                                            <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                <div className="soldButton">
                                                    <button>View Listing Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saleOnRight">
                                        <p>Selling Price<br/><span>₹14,700</span></p>
                                        <a href="#">View Bids</a>
                                        <div className="soldButton">
                                            <button>View Listing Details</button>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- Ends 1st Product -->
                                <!-- selling 2nd Product --> */}
                                <li>
                                    <div className="saleOnLeft">
                                        <div className="selectProduct">
                                            <div className="product_Img">
                                                <img src="./assets/Image/sellin_On_Sale/productSale2.svg" alt="Nike" />
                                            </div>
                                            <div className="productContent">
                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                <p>br/and : Nike</p>
                                                <div className="selected_size">
                                                    <p id="selectedSize">Size 9 (UK)</p>
                                                </div>
                                                <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                    <p>Selling Price<br/><span>₹14,700</span></p>
                                                    <a href="#">View Bids</a>
                                                </div>
                                            </div>
                                            <div className="saleOnRight" id="saleOnRight_mobileView" hidden>
                                                <div className="soldButton">
                                                    <button>View Listing Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="saleOnRight">
                                        <p>Selling Price<br/><span>₹17,900</span></p>
                                        <a href="#">View Bids</a>
                                        <div className="soldButton">
                                            <button>View Listing Details</button>
                                        </div>
                                    </div>
                                </li>
                                {/* <!-- Ends 1st Product --> */}
                            </ul>
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

export default SellingOnSale
