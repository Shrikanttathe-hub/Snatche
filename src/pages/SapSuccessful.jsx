import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/SapSuccessful.css';

const SapSuccessful = () => {
  return (
   <>
     <Header/>
      <section className="SAP_successful">
        <div className="container">
            <div className="SAP_successful_main">
                <div className="SAP_successfulTop">
                    <img src="./assets/Image/SAP_successful/nike1.svg" alt="Nike" />
                    <h2>Your Product is On Sale</h2>
                    <p>Thank you for selling your product on Snatche. We have added your product to your selling deck.Sit back and relax as your product listing is browsed by thousands of our users.</p>
                    <strong>You will be notified as soon as a buyer responds to your listing.</strong>
                </div>
                <div className="SAP_successfulbottom">
                    <h2 className="yourProductHeader">Your Product</h2>
                    <div className="youProduct">
                        <div className="yourProduct_Left">
                            <div className="selectProduct">
                                <div className="product_Img">
                                    <img src="./assets/Image/sellin_On_Sale/productSale1.svg" alt="Nike" />
                                </div>
                                <div className="productContent">
                                    <h3>Limited Edition NIKE OneX (2022)</h3>
                                    <p className="sellingPrice" hidden>Selling Price<br/><span>₹17,900</span></p>
                                    <p>Brand : Nike</p>
                                    <div className="selected_size">
                                        <p id="selectedSize">Size 9 (UK)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="yourProduct_Right">
                            <p className="sellingPrice" id="sellingPriceRight">Selling Price<br/><span>₹17,900</span></p>
                            <a href="./buying.html">View Bids</a>
                            <div className="youproduct_button">
                                <button>Remove Listing</button>
                                <button className="change_listing">Change Listing</button>
                            </div>
                        </div>
                    </div>
                    <div className="reviewDetails">
                        <p>You can always review details of this and all your recent listings and sales on <button onclick="location.href='buying.html'"><strong>My Orders</strong></button> page</p>
                        <a href="./Home.html">Back to Homepage</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <Footer/>
   </>
  )
}

export default SapSuccessful
