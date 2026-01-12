import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../assetss/CSS3/buying.css";
import OrderDetails from '../Components/OrderDetails';

const Buying = () => {

    const [isActive, setIsActive] = useState(false);

    const toggle = () => {
        setIsActive(prev => !prev);
    }

    return (
        <>
            <Header />
            <main>
                {/* <!-- Breadcrumbs --> */}
                <div className="breadcrumb" id="progressBar">
                    <div className="container">
                        <ul>
                            <li><a href="./Home.html">Home</a></li>
                            <li><a href="./accountSetting.html">Your Account</a></li>
                            <li>Buying</li>
                        </ul>
                    </div>
                </div>
                <section id="buyingPage">
                    <div className="container">
                        <div className="buying_pageMain">
                            <div className="utility">
                                <div className="utilityLeft">
                                    <div>
                                        <a href="./accountPage.html">← Your Account</a>
                                    </div>
                                    <h1>Buying</h1>
                                </div>
                                <div className="utilityRight">
                                    <div className="utilitydropdown">
                                        <div className="selectShoes_size">
                                            <label htmlFor="selectSize">Show Orders of</label>
                                            <select id="selectSize" defaultValue={3}>
                                                <option value="1">Last 1 Months</option>
                                                <option value="3">Last 3 Months</option>
                                                <option value="5">Last 5 Months</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="buyingSearch">
                                        <input type="text" />
                                        <button> <img src="./assets/Image/buying/Searchbar.svg" alt="Search_Queries" />Search</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--tabs --> */}
                            <div className="buying_tabs">
                                <input type="radio" id="purchase_tab" name="tabs" defaultChecked />
                                <label htmlFor="purchase_tab">Purchases</label>
                                <input type="radio" id="your_bids_tab" name="tabs" />
                                <label htmlFor="your_bids_tab">Your Bids</label>
                                <div className="buying-tab-content">
                                    {/* <!-- purchase --> */}
                                    <div className="buying_tab_content" id="purchase_tab_content">
                                        <ul className="purchase">
                                            {/* <!-- 1st product --> */}
                                            <li>
                                                <div className="buyingProduct_top">
                                                    <div className="buying_top_Left">
                                                        <strong>Delivery Expected 23<span>rd</span> July</strong>
                                                        <p>To: Sarthak Raut</p>
                                                    </div>
                                                    <div className="buying_top_Right">
                                                        <button type="button" onClick={toggle}>Order Details / TrackPackage</button>
                                                    </div>
                                                </div>
                                                <div className="buyingProduct_bottom">
                                                    <div className="buying_bottom_Left">
                                                        <div className="selectProduct">
                                                            <div className="product_Img">
                                                                <img src="./assets/Image/buying/productImg.svg" alt="Nike" />
                                                            </div>
                                                            <div className="productContent">
                                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                                <p>Brand : Nike</p>
                                                                <p className="selectSize">Size: 9 (UK)</p>
                                                                <div className="buying_bottom_Right" id="buyingbottomRight_MobileView" hidden>
                                                                    <p>₹<span>22,500</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="buying_bottom_Right">
                                                        <p>₹<span>22,500</span></p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- End 1st product -->
                                <!-- 2st product --> */}
                                            <li>
                                                <div className="buyingProduct_top">
                                                    <div className="buying_top_Left">
                                                        <strong>Delivered 02<span>nd</span> July 2022</strong>
                                                        <p>To: Sarthak Raut</p>
                                                    </div>
                                                    <div className="buying_top_Right">
                                                        <button type="button" onClick={toggle}>Order Details / TrackPackage</button>
                                                        <button type="button" className="downloadInvoice">Download Invoice</button>
                                                    </div>
                                                </div>
                                                <div className="buyingProduct_bottom">
                                                    <div className="buying_bottom_Left">
                                                        <div className="selectProduct">
                                                            <div className="product_Img">
                                                                <img src="./assets/Image/buying/productImg2.svg" alt="Jordan" />
                                                            </div>
                                                            <div className="productContent">
                                                                <h2>Jordan Snow Steps 101 Modern White </h2>
                                                                <p>Brand : Jordan</p>
                                                                <p className="selectSize">Size: 9 (UK)</p>
                                                                <div className="buying_bottom_Right" id="buyingbottomRight_MobileView" hidden>
                                                                    <p>₹<span>22,500</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="buying_bottom_Right">
                                                        <p>₹<span>22,500</span></p>
                                                    </div>

                                                </div>
                                            </li>
                                            {/* <!--End 2st product --> */}
                                        </ul>
                                    </div>
                                    {/* <!-- Your BID --> */}
                                    <div className="buying_tab_content" id="your_bids_tab_content">
                                        <ul className="your_bid">
                                            {/* <!-- 1st product --> */}
                                            <li>
                                                <div className="buyingProduct_top">
                                                    <div className="buying_top_Left">
                                                        <strong>Bid Valid till 5<span>th</span> August 2022</strong>
                                                        <a href="#">Set Reminder</a>
                                                    </div>
                                                    <div className="buying_top_Right">
                                                        <a href="./ProductPage.html">Go to Product Page</a>
                                                    </div>
                                                </div>
                                                <div className="buyingProduct_bottom">
                                                    <div className="buying_bottom_Left">
                                                        <div className="selectProduct">
                                                            <div className="product_Img">
                                                                <img src="./assets/Image/buying/productImg.svg" alt="Nike" />
                                                            </div>
                                                            <div className="productContent">
                                                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                                                <p>Brand : Nike</p>
                                                                <p className="selectSize">Size: 9 (UK)</p>
                                                                <div className="buying_bottom_Right" id="buyingbottomRight_MobileView"
                                                                    hidden>
                                                                    <p className="youeBid">Your Bid</p>
                                                                    <p className="price">₹<span>22,500</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="buying_bottom_Right" id="buyingbottomRight_MobileView" hidden>
                                                            <div className="yourBid_buttons">
                                                                <button>Cancel Bid</button>
                                                                <button className="changeBid">Change Bid</button>
                                                            </div>
                                                            <p className="paymentMode">Payment Mode - (ICICI Credit Card) Razorpay</p>
                                                        </div>
                                                    </div>
                                                    <div className="buying_bottom_Right">
                                                        <p className="youeBid">Your Bid</p>
                                                        <p className="price">₹<span>22,500</span></p>
                                                        <div className="yourBid_buttons">
                                                            <button>Cancel Bid</button>
                                                            <button className="changeBid">Change Bid</button>
                                                        </div>
                                                        <p className="paymentMode">Payment Mode - (ICICI Credit Card) Razorpay</p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!-- End 1st product -->
                                <!-- 2st product --> */}
                                            <li>
                                                <div className="buyingProduct_top">
                                                    <div className="buying_top_Left">
                                                        <strong>Bid Valid till 12<span>th</span> August 2022</strong>
                                                        <a href="#">Set Reminder</a>
                                                    </div>
                                                    <div className="buying_top_Right">
                                                        <a href="./ProductPage.html">Go to Product Page</a>
                                                    </div>
                                                </div>
                                                <div className="buyingProduct_bottom">
                                                    <div className="buying_bottom_Left">
                                                        <div className="selectProduct">
                                                            <div className="product_Img">
                                                                <img src="./assets/Image/buying/productImg2.svg" alt="Jordan" />
                                                            </div>
                                                            <div className="productContent">
                                                                <h2>Jordan Snow Steps 101 Modern White </h2>
                                                                <p>Brand : Jordan</p>
                                                                <p className="selectSize">Size: 9 (UK)</p>
                                                                <div className="buying_bottom_Right" id="buyingbottomRight_MobileView"
                                                                    hidden>
                                                                    <p className="youeBid">Your Bid</p>
                                                                    <p className="price">₹<span>22,500</span></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="buying_bottom_Right" id="buyingbottomRight_MobileView" hidden>
                                                            <div className="yourBid_buttons">
                                                                <button>Cancel Bid</button>
                                                                <button className="changeBid">Change Bid</button>
                                                            </div>
                                                            <p className="paymentMode">Payment Mode - (ICICI Credit Card) Razorpay</p>
                                                        </div>
                                                    </div>
                                                    <div className="buying_bottom_Right">
                                                        <p className="youeBid">Your Bid</p>
                                                        <p className="price">₹<span>17,500</span></p>
                                                        <div className="yourBid_buttons">
                                                            <button>Cancel Bid</button>
                                                            <button className="changeBid">Change Bid</button>
                                                        </div>
                                                        <p className="paymentMode">Payment Mode - (ICICI Credit Card) Razorpay</p>
                                                    </div>
                                                </div>
                                            </li>
                                            {/* <!--End 2st product --> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--End Product Container 1 --> */}
                </section>
            </main>
            <Footer />
             {isActive && <OrderDetails onClose={toggle} />}
            {/* <section id="orderDetails" className={isActive ? "active" : ""}>
                <div className="container">
                    <div className="orderMain">
                        <div className="order">
                            <p>Order Details</p>
                            <button onClick={toggle}>Close X</button>
                        </div>
                        <div className="details">
                            <div className="selectProduct">
                                <div className="product_Img">
                                    <img src="./assets/Image/sellin_On_Sale/productSale1.svg" alt="Nike" />
                                </div>
                                <div className="productContent">
                                    <h2>Limited Edition NIKE OneX (2022)</h2>
                                    <p>Brand : Nike</p>
                                    <div className="selected_size">
                                        <p id="selectSize">Size 9 (UK)</p>
                                        <div className="options">
                                            <a href="#">Cancel Order</a>
                                            <a className="goto_productPage" href="./ProductPage.html">Go to Product Page</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="options" id="option_mobileView">
                                    <a href="#">Cancel Order</a>
                                    <a className="goto_productPage" href="./ProductPage.html">Go to Product Page</a>
                                </div>
                            </div>
                            <div className="details_Address">
                                <div className="details_AddressLeft">
                                    <ul>
                                        <li>
                                            <strong>Deliver to - <span>Sarthak Raut</span> </strong>
                                            <p>1005, 10th floor, Techno IT Park - Wadhva Group Near Eskay Resort, New Link road,
                                                Borivali (W), MUMBAI, Maharashtra 400092. </p>
                                            <p>IndiaPhone No: 9898989898</p>
                                        </li>
                                        <li>
                                            <strong>Billing Address</strong>
                                            <p>1005, 10th floor, Techno IT Park - Wadhva Group Near Eskay Resort, New Link road,
                                                Borivali (W), MUMBAI, Maharashtra 400092.</p>
                                            <p>IndiaPhone No: 9898989898</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details_AddressRight">
                                    <div className="details_addrRight_priceBreakdown">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Your Bid</th>
                                                    <td><span>₹15,000</span></td>
                                                </tr>
                                                <tr className="taxes">
                                                    <th>Taxes</th>
                                                    <td><span>₹1000</span></td>
                                                </tr>
                                                <tr className="gst">
                                                    <th>Transaction Fee (Including GST)</th>
                                                    <td><span>₹1000</span></td>
                                                </tr>
                                                <tr className="delivery">
                                                    <th>Delivery Charges</th>
                                                    <td><span>₹300</span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="totalPrice">
                                            <h2>Total Amount Payable<span>₹16,300</span></h2>
                                            <p>Payment Mode - (ICICI Credit Card) Razorpay </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detailsBottom">
                                <div className="orderDet">
                                    <h3>Estimated Delivery 2nd August - 7th August</h3>
                                    <p>Tracking data will be available once the product is shipped</p>
                                </div>
                                <div className="orderTracing">
                                    <div className="orderTracingLeft">
                                        <ul className="progress">
                                            <li className="active"><strong>Order Confirmed</strong></li>
                                            <li className="active"><strong>Shipped</strong> <span>(FedEx Express)</span></li>
                                            <li><strong>Out for Delivery</strong></li>
                                            <li><strong>Delivered</strong></li>
                                        </ul>
                                    </div>
                                    <div className="orderTracingRight">
                                        <ul>
                                            <li><strong>Updates</strong></li>
                                            <li>
                                                <span>24th July 2022</span>
                                                <p><time dateTime="24th July 2022">12:00 PM - </time>Package has reached final delivery station mumbai</p>
                                            </li>
                                            <li>
                                                <span>23rd July 2022</span>
                                                <p><time dateTime="24th July 2022">2:00 PM - </time>Package has leftdistribution centre bhiwandi</p>
                                                <p><time dateTime="24th July 2022">10:00 AM - </time>Package has arrived atdistribution centre bhiwandi</p>
                                                <p><time dateTime="24th July 2022">6:00 AM - </time>Package has left seller facility pune</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

        </>
    )
}

export default Buying;
