import React from 'react';
import Header from "../Components/Header";
import Footer from '../Components/Footer';
import "../assetss/CSS3/aboutUs.css";

const AboutUs = () => {
  return (
   <>
   <Header/>
    <main>
        {/* <!-- Breadcrumbs Start--> */}
        <div className="breadcrumb">
            <div className="container">
                <ul>
                    <li><a href="./Home.html">Home</a></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
        {/* <!-- Breadcrumbs End --> */}
        <section className="aboutUs">
            <div className="container">
                <div className="aboutUs_main">
                    <div className="utility">
                        <div>
                            <a href="./Home.html">← Home</a>
                        </div>
                        <h1>About Us</h1>
                    </div>
                    <div className="about">
                        <article className="info">
                            <h2>How was Snatche born?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum,
                                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra,
                                per
                                inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum
                                dolor
                                sit
                                amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                                odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Curabitur tempus urna at turpis condimentum lobortis..</p>
                        </article>
                        <article className="info">
                            <h2>How was Snatche born?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                                interdum,
                                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra,
                                per
                                inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum
                                dolor
                                sit
                                amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
                                odio
                                mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                        </article>
                        <article className="info">
                            <h2>How was Snatche born?</h2>
                            <div className="subQuetions">
                                <h3>A. How was Snatche born?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                                    velit
                                    interdum,
                                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra,
                                    per
                                    inceptos himenaeos.</p>
                            </div>
                            <div className="subQuetions">
                                <h3>A. How was Snatche born?</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
                                    velit
                                    interdum,
                                    ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra,
                                    per
                                    inceptos himenaeos.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </main>
   <Footer/>
   </>
  )
}

export default AboutUs;
