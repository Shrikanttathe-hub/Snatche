import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../assetss/CSS3/support_And_FAQs.css";

const SupportFAQ = () => {
  return (
    <>
      <Header />
      {/* <!-- Breadcrumbs --> */}
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <a href="./Home.html">Home</a>
            </li>
            <li>FAQ's</li>
          </ul>
        </div>
      </div>
      {/* <!--Header End--> */}
      <section className="support_And_FAQs">
        <div className="container">
          <div className="support_And_FAQs_main">
            {/* <!-- Left Side --> */}
            <div className="left-support">
              <div className="utility">
                <div>
                  <a href="./Home.html">← Home</a>
                </div>
                <h1>Support and FAQ's</h1>
              </div>
              {/* <!-- Support Form --> */}
              <div className="support_Faqs">
                <div className="querySearch">
                  <div className="search_mobileView" hidden>
                    <input type="text" placeholder="Search for your Query" />
                    <button>
                      {" "}
                      <img
                        src="./assets/Image/support_And_FAQs/Searchbar.svg"
                        alt="Search_Queries"
                      />
                      Search
                    </button>
                  </div>
                </div>
                <form action="#" id="queries">
                  <h2>Need Help? We've got you.</h2>
                  {/* <!-- Category Dropdown --> */}
                  <div className="selectIssue">
                    <label for="category">Select Category</label>
                    <select name="category" id="category" required>
                      <option value="" disabled selected>
                        Select an issue
                      </option>
                      <option value="payment">Issue with my payment</option>
                      <option value="product">Issue with my product</option>
                    </select>
                  </div>
                  {/* <!-- Textarea --> */}
                  <div className="dis_issue">
                    <label for="message">Describe Your Issue</label>
                    <textarea
                      name="message"
                      form="queries"
                      id="message"
                      placeholder="Type your issue here....."
                      required
                      spellcheck="true"
                    ></textarea>
                  </div>
                  {/* <!-- Submit Button --> */}
                  <div className="submit">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
              <div className="reach_us">
                <h2>Or reach us at</h2>
                <div className="reachUs">
                  <a href="mailtocontact@snatche.com" id="contact">
                    <img
                      src="./assets/Image/support_And_FAQs/mail_icon.svg"
                      alt="contact"
                    />
                    contact@snatche.com
                  </a>
                  <a href="#" id="address">
                    <img
                      src="./assets/Image/support_And_FAQs/location.svg"
                      alt="address"
                    />
                    101ST, Main RD, Mumbai
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Right Side --> */}
            <div className="right-support">
              <div className="querySearch">
                <input type="text" placeholder="Search for your Query" />
                <button>
                  {" "}
                  <img
                    src="./assets/Image/support_And_FAQs/Searchbar.svg"
                    alt="Search_Queries"
                  />
                  Search
                </button>
              </div>
              <div className="query_cards">
                <h2>Top Queries</h2>
                <div className="cardsContainer">
                  <div className="cards">
                    <h3>Topic 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet
                      odioLorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                  <div className="cards">
                    <h3>Topic 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet
                      odioLorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                  <div className="cards">
                    <h3>Topic 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet
                      odioLorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                  <div className="cards">
                    <h3>Topic 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum, ac aliquet
                      odioLorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                </div>
                <div className="right-supportAccordian">
                  <h2>Popular Queries</h2>
                  <div className="supportAccordian-item">
                    <button className="accordion-header">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </button>
                    <div className="accordion-content">
                      <p>
                        HTML stands for HyperText Markup Language. It is used to
                        structure web pages.
                      </p>
                    </div>
                  </div>
                  <div className="supportAccordian-item">
                    <button className="accordion-header">
                      Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                      dignissim, metus nec?
                    </button>
                    <div className="accordion-content">
                      <p>
                        CSS (Cascading Style Sheets) is used to style HTML
                        elements.
                      </p>
                    </div>
                  </div>
                  <div className="supportAccordian-item">
                    <button className="accordion-header">
                      Maecenas eget condimentum velit, sit amet feugiat lectus?
                    </button>
                    <div className="accordion-content">
                      <p>
                        JavaScript is a programming language used to create
                        interactive effects on websites.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SupportFAQ;
