import React, { useState } from "react";
import Footer from "../Components/Footer";
import "../assetss/CSS3/logIn.css";

const Login = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <>
      <div className="wrapper_main">
        <div className="heading">
          <p id="welcome">Welcome to</p>
          <a href="#">
            <img src="./assets/Image/logIn/logo.svg" alt="Logo" />
          </a>
          {/* <!-- tab_linkes --> */}
          <div className="tab_button">
            <button
              className={`tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
              id="log_IN"
            >
              log IN
            </button>
            <button
              className={`tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
              id="sign_UP"
            >
              sign UP
            </button>
          </div>
          {/* <!--end tab_linkes --> */}
        </div>
        <div className="form_container">
          <div className="container">
            {/* <!-- ***LOGIN - content*** --> */}
            {activeTab === "login" && (
              <div className="tab_content" id="login">
                <div className="login_content">
                  <div className="tab_contentleft">
                    <form action="#" method="get">
                      <div className="user">
                        {/* <!-- Email --> */}
                        <div className="form-group">
                          <label htmlFor="email">Enter Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="sarthak.r@socialdonut.co"
                            required
                          />
                        </div>
                        {/* <!-- Password --> */}
                        <div className="form-group">
                          <label htmlFor="password">Enter Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sarthak@Snatche1511"
                            required
                          />
                        </div>
                        <a href="#">Forgot Password?</a>
                      </div>
                      <div className="checkbtn">
                        {/* <!-- Terms and Conditions  --> */}
                        <div className="check">
                          <label htmlFor="terms">
                            <input
                              type="radio"
                              id="terms"
                              name="terms"
                              required
                            />{" "}
                            Terms and Conditions
                          </label>
                        </div>
                        {/* <!-- Privacy Policy --> */}
                        <div className="check">
                          <label htmlFor="privacy">
                            <input
                              type="radio"
                              id="privacy"
                              name="terms"
                              required
                            />{" "}
                            Privacy Policy
                          </label>
                        </div>
                      </div>
                      {/* <!-- Submit Button --> */}
                      <div className="submit">
                        <button type="submit" className="btn-submit">
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tab_contentright">
                    <p>Or Continue Log IN with</p>
                    <div className="social-linkbox">
                      <a href="#" className="social-link google">
                        <img
                          src="./assets/Image/logIn/social_Icons/google.svg"
                          alt="Google logo"
                        />
                        <span>Google</span>
                      </a>
                      <a href="#" className="social-link facebook">
                        <img src="./assets/Image/logIn/social_Icons/facebook.svg" />{" "}
                        <span>Facebook</span>
                      </a>
                      <a href="#" className="social-link apple">
                        <img
                          src="./assets/Image/logIn/social_Icons/apple.svg"
                          alt="Apple logo"
                        />
                        <span>Apple</span>
                      </a>
                      <a href="#" className="social-link twitter">
                        <img
                          src="./assets/Image/logIn/social_Icons/twitter.svg"
                          alt="Twitter logo"
                        />
                        <span>Twitter</span>
                      </a>
                    </div>
                    {/* <!-- MObile view Options --> */}
                    <div className="mobileView_social" hidden>
                      <a href="#">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/google.svg"
                          alt="Google"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/facebook.svg"
                          alt="Facebook"
                        />
                      </a>
                      <a href="#" className="mac">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/apple.svg"
                          alt="Mac"
                        />
                      </a>
                      <a href="#" className="twit">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/twitter.svg"
                          alt="Twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              // /* <!--**** end  LOGIN****-->
            )}

            {/* <!-- ***SIGNUP -content*** --> */}
            {activeTab === "signup" && (
              <div className="tab_content tab_content1" id="signup">
                <div className="signup_complete">
                  <div className="tab_contentleft">
                    <form
                      action="#"
                      method="get"
                      onSubmit="validateForm(event)"
                    >
                      <div className="user">
                        {/* <!-- First Name --> */}
                        <div className="form-group">
                          <label htmlFor="firstName">First Name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Sarthak"
                            required
                          />
                        </div>
                        {/* <!-- Last Name --> */}
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Raut"
                            required
                          />
                        </div>
                        {/* <!-- Email --> */}
                        <div className="form-group">
                          <label htmlFor="email">Enter Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="sarthak.r@socialdonut.co"
                            required
                          />
                        </div>
                        {/* <!-- Password --> */}
                        <div className="form-group">
                          <label htmlFor="password">Enter Password</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Sarthak@Snatche1511"
                            required
                          />
                        </div>
                      </div>
                      <div className="checkbtn">
                        {/* <!-- Terms and Conditions  --> */}
                        <div className="check">
                          <label htmlFor="terms">
                            <input
                              type="radio"
                              id="terms"
                              name="terms"
                              required
                            />{" "}
                            Terms and Conditions
                          </label>
                        </div>
                        {/* <!-- Privacy Policy --> */}
                        <div className="check">
                          <label htmlFor="privacy">
                            <input
                              type="radio"
                              id="privacy"
                              name="terms"
                              required
                            />{" "}
                            Privacy Policy
                          </label>
                        </div>
                      </div>
                      {/* <!-- Submit Button --> */}
                      <div className="submit">
                        <button
                          type="submit"
                          className="btn-submit"
                          onClick="createButton()"
                        >
                          Create Account
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="tab_contentright">
                    <p>Or Sign Up with</p>
                    <div className="social-linkbox">
                      <a href="#" className="social-link google">
                        <img
                          src="./assets/Image/logIn/social_Icons/google.svg"
                          alt="Google logo"
                        />
                        <span>Google</span>
                      </a>
                      <a href="#" className="social-link facebook">
                        <img src="./assets/Image/logIn/social_Icons/facebook.svg" />{" "}
                        <span>Facebook</span>
                      </a>
                      <a href="#" className="social-link apple">
                        <img
                          src="./assets/Image/logIn/social_Icons/apple.svg"
                          alt="Apple logo"
                        />
                        <span>Apple</span>
                      </a>
                      <a href="#" className="social-link twitter">
                        <img
                          src="./assets/Image/logIn/social_Icons/twitter.svg"
                          alt="Twitter logo"
                        />
                        <span>Twitter</span>
                      </a>
                    </div>
                    {/* <!-- MObile view Options --> */}
                    <div className="mobileView_social" hidden>
                      <a href="#">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/google.svg"
                          alt="Google"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/facebook.svg"
                          alt="Facebook"
                        />
                      </a>
                      <a href="#" className="mac">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/apple.svg"
                          alt="Mac"
                        />
                      </a>
                      <a href="#" className="twit">
                        <img
                          src="./assets/Image/logIn/mobileView_socialIcons/twitter.svg"
                          alt="Twitter"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="signUp_body01" style={{ display: "none" }}>
                  <div className="signup_Steps">
                    {/* <!-- signup otp page-step1 --> */}
                    <div className="signUp_body" style={{ display: "block" }}>
                      {/* <!-- <div className="container"> --> */}
                      <h2>Let's Complete Your Account</h2>
                      <form id="myform">
                        <div className="signUp_otp">
                          <div className="phone-input">
                            <label htmlFor="phone-number">
                              Add a Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone-number"
                              placeholder="9898665443"
                            />
                          </div>
                          <button
                            type=" submit"
                            className="btn-submit"
                            id="createAccount"
                            onClick="createButtonNext(event)"
                          >
                            Get OTP
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* <!--End signup otp page-step1 -->
                            <!-- signup otp page-step2  --> */}
                    <div
                      className="signup_NextStep"
                      style={{ display: "none" }}
                    >
                      <div className="signUp_body">
                        <h2>Let's Complete Your Account</h2>
                        <div className="signup_nextstepContainer">
                          <form>
                            <div className="phone-input">
                              <label htmlFor="phone-number">
                                Add a Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone-number"
                                placeholder="9898665443"
                              />
                            </div>
                            <button
                              type=" submit"
                              className="btn-submit"
                              onClick="createButtonNext(event)"
                            >
                              Get OTP
                            </button>
                          </form>
                          <div className="otp-input-field">
                            <h5>Enter OTP</h5>
                            <div className="otp-input-fields">
                              <input
                                type="number"
                                className="otp__digit otp__field__1"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="otp__digit otp__field__2"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="otp__digit otp__field__3"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="otp__digit otp__field__4"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="otp__digit otp__field__5"
                                placeholder="0"
                              />
                              <input
                                type="number"
                                className="otp__digit otp__field__6"
                                placeholder="0"
                              />
                            </div>
                          </div>
                          <button type="submit" className="btn-submit">
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End signup otp page-step2  --> */}
                  </div>
                </div>
              </div>
            )}
            {/* <!--end SIGNUP --> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
