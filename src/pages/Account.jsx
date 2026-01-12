import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../assetss/CSS3/accountPage.css';

const Account = () => {
    return (
        <>
            <Header />
               <main>
    {/* <!-- Breadcrumbs --> */}
    <div className="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li>Account</li>
            </ul>
        </div>
    </div>
    <section className="accountPage">
        <div className="container">
            <div className="yourAccount">
                {/* <!-- your account heading --> */}
                <div className="utility">
                    <div>
                        <a href="./Home.html">← Home</a>
                    </div>
                    <h1>Your Account</h1>
                </div>
                {/* <!--Ends your account heading --> */}
                <div className="accountContainer">
                    <ul className="accountinfo">
                        {/* <!--Your Account Row 1 --> */}
                        <li className="accountinfoRows">
                            <a href="./buying.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/orders.svg" alt="Your orders" />
                                </div>
                                <div className="accountContent">
                                    <h2>My Orders</h2>
                                    <span>View your recent purchases</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 1 -->
                        <!--Your Account Row 2 --> */}
                        <li className="accountinfoRows">
                            <a href="./selling_On_Sale.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/selling.svg" alt="selling" />
                                </div>
                                <div className="accountContent">
                                    <h2>Selling</h2>
                                    <span>View your recent sale record</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 2 -->
                        <!--Your Account Row 3 --> */}
                        <li className="accountinfoRows">
                            <a href="./snatcheList.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/list.svg" alt="Your Product List" />
                                </div>
                                <div className="accountContent">
                                    <h2>My Snatche List</h2>
                                    <span>The products that you have shortlisted will be added here</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 3 -->
                        <!--Your Account Row 4 --> */}
                        <li className="accountinfoRows">
                            <a href="/portfolio.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/portfolio.svg" alt="PortFolio" />       
                                </div>
                                <div className="accountContent">
                                    <h2>My PortFolio</h2>
                                    <span>Yet to be decided</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 4 -->
                        <!--Your Account Row 5 --> */}
                        <li className="accountinfoRows">
                            <a href="./accountSetting.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/Profile.svg" alt="Your Settings" />
                                </div>
                                <div className="accountContent">
                                    <h2>Account Settings</h2>
                                    <span>Adress, Phone, E-Mail, Payments, Reset Password, Privacy</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 5 -->
                        <!--Your Account Row 6 --> */}
                        <li className="accountinfoRows">
                            <a href="./logIn.html">
                                <div className="yourorderImg">
                                    <img id="yourOrder" src="./assets/Image/accountPage/logOut.svg" alt="Log Out" />
                                </div>
                                <div className="accountContent">
                                    <h2>Log Out</h2>
                                    <span>Log out and clear account data from this browser</span>
                                </div>
                                <div className="nextImg">
                                    <img id="next" src="./assets/Image/accountPage/arrow.svg" alt="Next" />
                                </div>
                            </a>
                        </li>
                        {/* <!--Ends Your Account Row 6 --> */}
                    </ul>
                </div>
            </div>
        </div>
    </section>
</main>
            <Footer />
        </>
    )
}

export default Account;
