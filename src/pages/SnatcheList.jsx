import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/snatcheList.css';


const SnatcheList = () => {
  return (
   <>
     <Header/>
       {/* <!-- Breadcrumbs --> */}
    <div className="breadcrumb active" id="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li><a href="./accountSetting.html">Your Account</a></li>
                <li>My Snatche List</li>
            </ul>
        </div>
    </div>
    {/* <!-- Snatche Lists --> */}
    <section id="listPage" className="active">
        <div className="container">
        <div className="listing">
            <div className="utility">
                <div><a href="./accountPage.html">← Your Account</a></div>
                <h1>My Snatche List</h1>
            </div>
            {/* <!-- row Of selector --> */}
            <div className="filterImg" hidden>
                <button type="button" onclick="filterOptionsOpen()">
                        <img src="./assets/Image/snatcheList/filter.svg" alt="filterButton"/>
                </button>
            </div>
            <div className="listSelect">
                <div className="filterContent" hidden>
                    <h2>Filter</h2>
                    <button onclick="filterOptionsClose()">
                            <img src="./assets/Image/snatcheList/X.svg" alt="cancel"/>
                    </button>
                </div>
                <div className="listSelectLeft">
                    <div className="list">
                        <label htmlFor="listSort">Sort By</label>
                        <select id="listSort">
                            <option value="1">High to Low</option>
                            <option value="2" selected>Low to High</option>
                            <option value="3">High</option>
                        </select>
                    </div>
                    <div className="list">
                        <label htmlFor="listSort">Price Range</label>
                        <select id="listSort">
                            <option value="1">Above 10000</option>
                            <option value="2" selected>Below 10000</option>
                            <option value="3">10000000</option>
                        </select>
                    </div>
                </div>
                <div className="listSelectRight">
                    <div className="list">
                        <label htmlFor="listSort">Brand</label>
                        <select id="listSort">
                            <option value="1">Nike</option>
                            <option value="2" selected>Puma</option>
                            <option value="3">Jordan</option>
                        </select>
                    </div>
                    <div className="list">
                        <label htmlFor="listSort">Series</label>
                        <select id="listSort">
                            <option value="1">All Products</option>
                            <option value="2" selected>Price</option>
                            <option value="3">Brand</option>
                        </select>
                    </div>
                </div>
            </div>   
            {/* <!-- row selector Ends --> */}
            <div className="listOfProduct">
                <ul className="listProduct">
                    {/* <!-- 1rd product --> */}
                    <li className="favProduct">
                        <div className="favRightTop favProductTop_mobileView" hidden>
                            <button className="favRemove">Remove X</button>
                        </div>
                        <div className="favProdLeft">
                            <div className="favImg">
                                <img src="./assets/Image/snatcheList/productSale1.svg" alt="Nike" />
                            </div>
                            <div className="favContent">
                                <h2>Limited Edition NIKE OneX (2022)</h2>
                                <p>Brand : Nike</p>
                                 <div className="favRightBottom favProductBottom_mobileView" hidden>
                                    <p>₹<span>22,500</span></p>
                                </div>
                            </div>
                        </div>   
                        <div className="favRightBottom" hidden>
                            <p>₹<span>22,500</span></p>
                        </div>
                        <div className="favProdRight">
                            <div className="favRightTop">
                                <button className="favRemove">Remove X</button>
                            </div>
                            <div className="favRightBottom">
                                <p>₹<span>22,500</span></p>
                            </div>
                        </div>
                    </li>
                    {/* <!-- 2nd product --> */}
                    <li className="favProduct">
                        <div className="favRightTop favProductTop_mobileView" hidden>
                            <button className="favRemove">Remove X</button>
                        </div>
                        <div className="favProdLeft">
                            <div className="favImg">
                                <img src="./assets/Image/snatcheList/productSale4.svg" alt="Nike" />
                            </div>
                            <div className="favContent">
                                <h2>NIKE Neon Air 2S (2021)</h2>
                                <p>Brand : Nike</p>
                                <div className="favRightBottom favProductBottom_mobileView" hidden>
                                    <p>₹<span>22,500</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="favProdRight">
                            <div className="favRightTop">
                                <button className="favRemove">Remove X</button>
                            </div>
                            <div className="favRightBottom">
                                <p>₹<span>19,000</span></p>
                            </div>
                        </div>
                    </li>
                    {/* <!-- 3rd product --> */}
                    <li className="favProduct">
                         <div className="favRightTop favProductTop_mobileView" hidden>
                            <button className="favRemove">Remove X</button>
                        </div>
                        <div className="favProdLeft">
                            <div className="favImg">
                                <img src="./assets/Image/snatcheList/productSale3.svg" alt="Nike" />
                            </div>
                            <div className="favContent">
                                <h2>NIKE Neon Air (2020)</h2>
                                <p>Brand : Nike</p>
                                <div className="favRightBottom favProductBottom_mobileView" hidden>
                                    <p>₹<span>22,500</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="favProdRight">
                            <div className="favRightTop">
                                <button className="favRemove">Remove X</button>
                            </div>
                            <div className="favRightBottom">
                                <p>₹<span>26,999</span></p>
                            </div>
                        </div>
                    </li>
                    {/* <!-- 4th product --> */}
                    <li className="favProduct">
                         <div className="favRightTop favProductTop_mobileView" hidden>
                            <button className="favRemove">Remove X</button>
                        </div>
                        <div className="favProdLeft">
                            <div className="favImg">
                                <img src="./assets/Image/snatcheList/productSale2.svg" alt="Nike" />
                            </div>
                            <div className="favContent">
                                <h2>NIKE Leather Colour Sneakers</h2>
                                <p>Brand : Nike</p>
                                  <div className="favRightBottom favProductBottom_mobileView" hidden>
                                    <p>₹<span>22,500</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="favProdRight">
                            <div className="favRightTop">
                                <button className="favRemove">Remove X</button>
                            </div>
                            <div className="favRightBottom">
                                <p>₹<span>13,499</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </section>
    {/* <!--Ends Snatche Lists --> */}
     <Footer/>
      {/* <!--Message Snatche Lists Introduction popup --> */}
    <section className="listPagePopUp" id="pageIntropopup">
        <div className="container">
        <div class="message">
            <div className="messBox">
                <p className="introduction">Introducing</p>
                <h2>Snatche List</h2>
                <p className="snatcheList">Items you add to shortlist by clicking <span><img src="./assets/Image/snatcheList/message_like.svg" alt="Like" /></span>
                    are saved in a separate section for you to revisit them later</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                    mattis
                    tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                    tellus
                    elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                </p>
                <div className="messBtn">
                    <button onclick="closePopup()">OK</button>
                </div>
            </div>
        </div>
        </div>
    </section>
    {/* <!--Ends Message Snatche Lists 1nd Visible --> */}
   </>
  )
}

export default SnatcheList
