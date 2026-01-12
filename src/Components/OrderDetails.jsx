import React from 'react';
import "../assetss/CSS3/buying.css";

const OrderDetails = ({onClose}) => {

  return (
   <>
      <section id="orderDetails" >
                <div className="container">
                    <div className="orderMain">
                        <div className="order">
                            <p>Order Details</p>
                            <button onClick={onClose}>Close X</button>
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
            </section>
   </>
  )
}

export default OrderDetails;
