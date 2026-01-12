import React from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import '../assetss/CSS3/accountSetting.css'

const AccountSetting = () => {
    return (
        <>
            <Header />
            <main>
                {/* <!-- Breadcrumbs start--> */}
                <div className="breadcrumb">
                    <div className="container">
                        <ul>
                            <li><a href="./Home.html">Home</a></li>
                            <li><a href="./accountSetting.html">Your Account</a></li>
                            <li>Account Settings </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Breadcrumbs End--> */}
                <section className="accSetting">
                    <div className="container">
                        <div className="accountsett">
                            {/* <!-- your account heading --> */}
                            <div className="utility">
                                <div>
                                    <a href="./accountPage.html">← Your Account</a>
                                </div>
                                <h1>Account Settings</h1>
                            </div>
                            {/* <!--Ends your account heading -->
                <!-- Personal Information --> */}
                            <div className="personal">
                                <form action="#">
                                    <h2>Personal Info</h2>
                                    {/* <!-- Full Name --> */}
                                    <div className="perInformation">
                                        <div className="personalinfo">
                                            <div className="name">
                                                <label for="fullname">Full Name</label>
                                                <input id="fullname" type="text" placeholder="Sarthak Raut" required />
                                            </div>
                                            <div className="namebutton">
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                        {/* <!-- e-maill --> */}
                                        <div className="personalinfo">
                                            <div className="name">
                                                <label for="email">E-Mail</label>
                                                <input id="email" type="text" placeholder="sarthak.r@socialdonut.co" required />
                                            </div>
                                            <div className="namebutton">
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                        {/* <!-- phone Number --> */}
                                        <div className="personalinfo">
                                            <div className="name">
                                                <label for="phoneNum">Phone Number</label>
                                                <input id="phoneNum" type="number" placeholder="IN (+91) 9898665443 " required />
                                            </div>
                                            <div className="namebutton">
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!--Ends Personal Informatio -->
                <!--change Password--> */}
                            <div className="changePass">
                                <form action="#">
                                    <h2>Change Password</h2>
                                    <div className="chPass">
                                        <div className="change">
                                            <label for="currentPass">Enter your Current Password</label>
                                            <input type="password" id="currentPass" />
                                        </div>
                                        <div className="change">
                                            <label for="newPass">Enter your New Password</label>
                                            <input type="password" id="newPass" />
                                        </div>
                                        <div className="change">
                                            <label for="confirmPass">Confirm your New Password</label>
                                            <input type="password" id="confirmPass" />
                                        </div>
                                        <div className="changePassBtn">
                                            <button>Change Password</button>
                                        </div>
                                    </div>
                                    <a href="#">Forgot Your Password?</a>
                                </form>
                            </div>
                            {/* <!--Ends change Password-->
                <!-- Your Address --> */}
                            <div className="yourAdd">
                                <h2>Your Adresses</h2>
                                <div className="addAddre">
                                    {/* <!-- 1st Address Box --> */}
                                    <div className="addCard">
                                        <div className="addCardTop">
                                            <div className="addCardLeft">
                                                <h3>Work</h3>
                                                <span>(Default)</span>
                                            </div>
                                            <div className="addCardRight">
                                                <button>Edit</button>
                                                <p>|</p>
                                                <button>Remove</button>
                                            </div>
                                        </div>
                                        <div className="addCardBottom">
                                            <h4>Sarthak Raut</h4>
                                            <p>1005, 10th floor, Techno IT Park - Wadhva Group Near Eskay Resort, New Link road,
                                                Borivali (W), MUMBAI, Maharashtra 400092. India</p>
                                            <p>Phone No: 9898989898</p>
                                        </div>
                                    </div>
                                    {/* <!--Ends 1st Address Box -->
                        <!-- 2st Address Box --> */}
                                    <div className="addCard">
                                        <div className="addCardTop">
                                            <div className="addCardLeft">
                                                <h3>Home</h3>
                                            </div>
                                            <div className="addCardRight">
                                                <button>Edit</button>
                                                <p>|</p>
                                                <button>Remove</button>
                                            </div>
                                        </div>
                                        <div className="addCardBottom">
                                            <h4>Sarthak Raut</h4>
                                            <p>1005, 10th floor, Techno IT Park - Wadhva Group Near Eskay Resort, New Link road,
                                                Borivali (W), MUMBAI, Maharashtra 400092. India</p>
                                            <p>Phone No: 9898989898</p>
                                        </div>
                                    </div>
                                    {/* <!--Ends 1st Address Box -->
                        <!--Add More Address Box --> */}
                                    <div id="addMoreBox">
                                        <button id="addNewAddre">+ Add New Adress</button>
                                    </div>
                                    {/* <!--Ends Add More Address Box --> */}
                                </div>
                            </div>
                            {/* <!--Ends Your Address -->
                <!-- More Setting --> */}
                            <div className="moreSettings">
                                <h2>More Settings Three</h2>
                            </div>
                            {/* <!--Ends More Setting --> */}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default AccountSetting;
