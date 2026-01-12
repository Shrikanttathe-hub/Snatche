import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/searchResult.css';


const SelectYourProductNoResult = () => {
  return (
   <>
    <Header/>
     <section className="sellFunction" style={{display:"flex"}}>
        <div className="sellFunctionMain sellYourProduct">
            <div className="sellTop">
                <h2>Sell Your Product</h2>
                <button>Close X</button>
            </div>
            <div className="nav-search productSearchFunction" style={{marginBottom: "0%"}}>
                <input type="text" placeholder="Search Your Product On Snatche"/>
                <button className="search-button"><span>Search</span></button>
            </div>
            <div className="searchResultCard">
                <div className="searchCard">
                    <span>Search Result</span>
                    <p>No results found</p>
                </div>
                <div className="searchCardResult productSearchNoResult" >
                    <div className="searchResultShoes">
                        <img src="./assets/Image/sellFunction/NikeShoes.svg" alt="Nike" />
                        <div className="searchResultDetails">
                            <span>Brand: Nike</span>
                            <h3>Limited Edition NIKE OneX (2022)</h3>
                            <h5>Average Selling Price ₹22,500</h5>
                        </div>
                    </div>
                    <div className="selectButton">
                        <div className="selectBox">
                            <label htmlFor="size">Select your size </label>
                            <div className="custom-select">
                                <select name="size" id="number">
                                    <option value="9 (UK)" defaultValue>9 (UK)</option>
                                    <option value="8 (UK)">8 (UK)</option>
                                    <option value="7 (UK)">7 (UK)</option>
                                    <option value="6 (UK)">6 (UK)</option>
                                </select>
                            </div>
                        </div>
                        <button>Add this Product</button>
                    </div>
                </div>
            </div>
            <div className="noResultRequest">
                <a href="addProductRequest.html">Send a request to add your product</a>
            </div>
            <div className="proceed">
                <span>Selected Items (2)</span>
                <button>Proceed</button>
            </div>
        </div>
    </section>
    <Footer/>
   </>
  )
}

export default SelectYourProductNoResult
