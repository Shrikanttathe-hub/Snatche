import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/sellFunction.css';

const SellYourProduct = () => {
  return (
   <>
     <Header/>
     <section className="sellFunction" style={{display: "flex"}}>
        <div className="sellFunctionMain sellYourProduct">
              <div className="sellTop">
                <h2>Sell Your Product</h2>
                <button>Close X</button>
              </div>
              <div className="nav-search productSearchFunction">
                <input type="text" placeholder="Search Your Product On Snatche" />
                <button className="search-button"><img src='./assets/Image/header/searchBar.svg' alt="search" /><span>Search</span></button>
             </div>
            <div className="proceed">
                <span>Selected Items (2)</span>
                <button onclick="location.href='sellYourProductSearch.html'">Proceed</button>
            </div>
        </div>
    </section>
     <Footer/>
   </>
  )
}

export default SellYourProduct
