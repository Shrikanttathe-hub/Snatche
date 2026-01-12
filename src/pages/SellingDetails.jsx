import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assetss/CSS3/sellingDetails.css";

const SellingDetails = () => {
  return (
    <>
      <Header />
      <section className="sellingDetailsPopUp" style={{display:"flex"}}>
        <section className="sellingDetails">
          <div className="container">
            <div className="sellingDetail">
              <div className="sellingHeader">
                <p>Selected Product</p>
                <button type="button" onclick="confirm()">
                  Close X
                </button>
              </div>
              <div className="sellingDetails_container">
                <div className="selectProduct">
                  <div className="product_Img">
                    <img
                      src="./assets/Image//sellingDetails/productImg.svg"
                      alt="Nike"
                    />
                  </div>
                  <div className="productContent">
                    <h2>Limited Edition NIKE OneX (2022)</h2>
                    <p>Brand : Nike</p>
                    <div className="selectShoes_size">
                      <label htmlFor="selectSize">Select your size</label>
                      <select id="selectSize">
                        <option value="8">8 (UK)</option>
                        <option value="9" defaultValue>
                          9 (UK)
                        </option>
                        <option value="10">10 (UK)</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <!--Ends product -->
                    <!-- Tabs --> */}
                <form className="tabForm">
                  <div className="tabs">
                    {/* <!-- Tab Buttons --> */}
                    <input
                      type="radio"
                      id="sellNow_tab"
                      name="tabs"
                      defaultChecked
                    />
                    <label htmlFor="sellNow_tab">Sell Now</label>

                    <input type="radio" id="placeAsk_tab" name="tabs" />
                    <label htmlFor="placeAsk_tab">Place Ask</label>
                    {/* <!-- Tab Content --> */}
                    <div className="tab_content">
                      <div className="tab-content" id="sellNow_content">
                        <div className="sellingDetails_priceBreakdown">
                          <p>Selling Price</p>
                          <span className="selling_span">₹15,000</span>
                          <table>
                            <tr>
                              <th>Transaction Fee</th>
                              <td>
                                <span>₹0</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Platform Fee</th>
                              <td>
                                <span>₹0</span>
                              </td>
                            </tr>
                            <tr>
                              <th>Shipping</th>
                              <td>
                                <span>₹300</span>
                              </td>
                            </tr>
                          </table>
                          <p className="selling_finalPrice">
                            Final Selling Price<span>₹14,700</span>
                          </p>
                        </div>
                      </div>
                      <div className="tab-content" id="placeAsk_content">
                        <div className="selling_productPage_priceBreakdown">
                          <div className="enterAmount">
                            <label htmlFor="amount">Enter Asking Price</label>
                            <input
                              type="number"
                              id="amount"
                              name="amount"
                              placeholder="₹14,000"
                            />
                            <button type="button">Apply</button>
                          </div>
                          <p className="minimumAmount">
                            Minimum Ask Amount ₹3500
                          </p>
                          <table>
                            <tr>
                              <th>
                                Transaction Fee (10%)
                                <a href="#">Free for first 5 Transactions</a>
                              </th>
                              <td>
                                <span className="fee">₹1500</span>
                                <a href="#">Free</a>
                              </td>
                            </tr>
                            <tr>
                              <th>
                                Platform Fee (3%){" "}
                                <a href="#">Free for first 5 Transactions</a>
                              </th>
                              <td>
                                <span className="fee">₹450</span>{" "}
                                <a href="#">Free</a>
                              </td>
                            </tr>
                            <tr>
                              <th>Shipping</th>
                              <td>
                                <span>₹300</span>
                              </td>
                            </tr>
                          </table>
                          <p className="selling_finalPrice">
                            Final Selling Prices <span>₹14,300</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button
                  type="reset"
                  style={{display: "none"}}
                  id="resetTabBtn"
                ></button>

                {/* <!-- ends tabs --> */}
              </div>
              <div className="sellingDetailbottom">
                <button
                  type="button"
                  onclick="location.href='selling_addrAndPayment.html'"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- cancel confirmation starts--> */}
        <section id="orderCancel">
          <div className="container">
            <div className="order_Cancel">
              <h3>Cancel Order</h3>
              <p>Are you sure you want to cancel this purchase ?</p>
              <div className="orderConfirmation">
                <button className="cancel" id="Yes" type="button">
                  Yes
                </button>
                <button className="next" id="no" type="button">
                  No
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* <!--cancel confirmation Ends--> */}
      </section>
      <Footer />

        {/* // cancel confirmation   
            function confirm() {
            document.body.style.overflow = 'hidden';
            document.getElementById('orderCancel').style.display = 'flex';
        }
        document.querySelector('#Yes').addEventListener("click", function () {
            document.querySelector('#orderCancel').style.display = "none";
            document.querySelector('.sellingDetails').style.display = "none";
        })
        document.querySelector('#no').addEventListener("click", function () {
             document.querySelector('#orderCancel').style.display = "none";
           document.querySelector('body').style.overflow= "auto";
        }) */}
    </>
  );
};

export default SellingDetails;
