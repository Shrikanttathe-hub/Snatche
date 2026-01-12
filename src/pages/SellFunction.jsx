import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../assetss/CSS3/sellFunction.css';

const SellFunction = () => {
  return (
    <>
      <Header />
      <section className="sellFunction" style={{display: "flex"}}>
        <div className="sellFunctionMain">
          <div className="snatcheLogo">
            <img
              src="./assets/Image/sellFunction/snatcheBackground.svg"
              alt="snatche"
            />
            <h2>
              How Selling works at{" "}
              <img
                src="./assets/Image/sellFunction/snatccheLogo.svg"
                alt="logo"
                id="logoImg"
              />
            </h2>
          </div>
          <div className="pentaContainer">
            <div className="cardPentagon">
              <div className="cardPentaItem">
                <div className="containerCard">
                  <div>
                    <img src="./assets/Image/sellFunction/pentagon.svg" />
                  </div>
                  <h3>List Your Product</h3>
                  <p>
                    You can Sell Now at the highest Bid, or set an Ask for the
                    price you want to sell your item for.
                  </p>
                </div>
              </div>
              <div className="cardPentaItem">
                <div>
                  <img src="./assets/Image/sellFunction/pentagon.svg" />
                </div>
                <h3>We Pick it Up</h3>
                <p>
                  Ship your item within 2 business days. We authenticate,then we
                  ship it to the buyer.
                </p>
              </div>
              <div className="cardPentaItem">
                <div>
                  <img src="./assets/Image/sellFunction/pentagon.svg" />
                </div>
                <h3>You get Paid</h3>
                <p>
                  We release your payouts as soon as your item passes
                  verification.
                </p>
              </div>
            </div>
            <div className="sellerCancellation">
              <h4>Seller Cancellation Penalty</h4>
              <p>
                In order to ensure the integrity of our marketplace, a fee
                equivalent to 15% of the transaction price (with a minimum
                charge of $15 USD or local currency equivalent) will be assessed
                to your account if you fail to ship your item within 2 business
                days or if the item received does not pass verification.
              </p>
            </div>
            <div className="beginSelling">
              <button onclick="location.href='sellYourProduct.html'">
                Begin Selling
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SellFunction;
