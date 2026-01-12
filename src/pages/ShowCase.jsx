import React from 'react';
import Header from "../Components/Header";
import "../assetss/CSS3/showcase_page.css";
import Footer from '../Components/Footer';

const ShowCase = () => {
  return (
    <>
    <Header/>
    <main>
         {/* <!-- Breadcrumbs start--> */}
    <div className="breadcrumb">
        <div className="container">
            <ul>
                <li><a href="./Home.html">Home</a></li>
                <li><a href="#">All Categories</a></li>
                <li><a href="#">Mens</a></li>
                <li><a href="#">Sneakers</a></li>
                <li>Jordan</li>
            </ul>
        </div>
    </div>
    {/* <!-- Breadcrumbs Ends --> */}
    <section className="showcase_one">
        <a href="#"><img src="./assets/Image/showcase_page/showcaseImage1.svg" alt="NIKE_AIR" /></a>
    </section>
    <section className="showcase_two">
        <div className="showcase_bgimage_one">
            <img src="./assets/Image/showcase_page/showcaseImage2.svg" alt="Nike Air" />
        </div>
        <div className="showInfo">
            <div className="container">
                <div className="showInfo_main">
                    <img src="./assets/Image/showcase_page/Nike AIR.svg" alt="NIKE AIR" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                        elit
                        sedrisus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
                        Suspendisse ac rhoncus nisl.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_three">
        <div className="container">
            <div className="showcase_three_main">
                <div className="showcase_content">
                    <h2>History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                        elit
                        sed
                        risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </p>
                </div>
                <div className="showcase_content_two">
                    <h2>History</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                        elit
                        sed
                        risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_four">
        <div className="container">
            <div className="showcase_fourContent">
                <h2>Design</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                    sed
                    risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                    Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
                    sed
                    risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                    torquent
                    per conubia nostra, per inceptos himenaeos.
                    Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                </p>
            </div>
        </div>
        <img src="./assets/Image/showcase_page/showcaseImage4.svg" alt="Shoes" />
        <button className="see-more-button" type="button"><span className="arrow">See More</span><img src="./assets/Image/showcase_page/seeMore_Arrow.svg" alt="Arrow" /></button>
    </section>
    <section className="showcase_five">
        <div className="container">
            <div className="showcase_five_main">
                <div className="snatche_designer">
                    <img src="./assets/Image/showcase_page/showcase_five_imgOne.svg" alt="one" />
                    <h2>Peter Moore </h2>
                    <p>Sneaker Designer</p>
                </div>
                <div className="snatche_designer">
                    <img src="./assets/Image/showcase_page/showcase_five_imgTwo.svg" alt="" />
                    <h2>Bruce Kilgore</h2>
                    <p>Sneaker Designer, Creator of Air Force One</p>
                </div>
                <div className="snatche_designer">
                    <img src="./assets/Image/showcase_page/showcase_five_imgThree.svg" alt="" />
                    <h2>Tinker Hatfield</h2>
                    <p>Sneaker Designer</p>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_six">
        <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                elit
                sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                litora
                torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
    </section>
    <section className="showcase_seven">
        <div className="container">
            <div className="showcase_sevenMain">
                <div className="showcase_sevenTop feature">
                    <div className="showcase_sevenTopImage feature_Img">
                        <img className="whiteStrip" src="./assets/Image/showcase_page/showcaseImage_sevenWhite.svg"alt="Strips" />
                        <img className="sevenImageWhite blank" src="./assets/Image/showcase_page/showcase_sevenImage.svg"alt="Images" />
                    </div>
                    <div className="showcase_sevencontentWhite feature_content">
                        <h2>Feature</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam eu turpis molestie, dictum est a, mattis tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                            tellus elit sed risus.
                            Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
                <div className="showcase_sevenMid feature">
                    <div className="showcase_sevencontentBlue feature_content">
                        <h2>Feature</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam eu turpis molestie, dictum est a, mattis tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                            tellus elit sed risus.Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                    <div className="showcase_sevenMidImage feature_Img">
                        <img className="blueStrips1" src="./assets/Image/showcase_page/showcaseImage_sevenBlue.svg"
                            alt="Strips" />
                        <img className="blueStrips2" src="./assets/Image/showcase_page/showcaseImage_sevenBlue.svg"
                            alt="Strips" />
                        <img className="sevenImageBlue blank" src="./assets/Image/showcase_page/showcase_sevenImage.svg"
                            alt="Images" />
                    </div>
                </div>
                <div className="showcase_sevenBottom feature">
                    <div className="showcase_sevenBottomImage feature_Img">
                        <img className="sevenImagepink blank" src="./assets/Image/showcase_page/showcase_sevenImage.svg"alt="Images" />
                        <img className="pinkStrip" src="./assets/Image/showcase_page/showcaseImage_sevenPink.svg"alt="Strips" />
                    </div>
                    <div className="showcase_sevencontentpink feature_content">
                        <h2>Feature</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam eu turpis molestie, dictum est a, mattis tellus.
                            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                            tellus elit sed risus.Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_eight">
        <div className="container">
            <div className="showcase_eight_main">
                <div className="showcase_eightLeft">
                    <img src="./assets/Image/showcase_page/showcaseImage_eight.svg" alt="Nike" />
                </div>
                <div className="showcase_eightRight">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
                        accumsan,
                        risus
                        sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                        torquent
                        per conubia nostra, per inceptos himenaeos.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis
                        tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                        tellus
                        elit
                        sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                        torquent
                        per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.
                        Etiam
                        eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                        risus
                        sem
                        sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_nine">
        <div className="container">
            <div className="showcase_nine_main">
                <div className="left showcase_nineContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam eu turpis molestie, dictum est a, mattis tellus.
                        Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className="byeBtn">
                        <button type="button" >Buy Now</button>
                    </div>
                </div>
                <div className="right showcaseImage_nineImage">
                    <img className="showcaseNineImg" src="./assets/Image/showcase_page/showcaseImage_nine2ndImage.svg"alt="Image" />
                    <img className="showcaseNineImg showcaseNineImg_Mobile"src="./assets/Image/showcase_page/showcaseImage_nine2ndImage_Mobile.svg" alt="TagImage" hidden />
                </div>
            </div>
        </div>
    </section>
    <section className="showcase_six showcase_ten">
        <div className="container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
                tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
                elit
                sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
                litora
                torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
    </section>
    </main>
    <Footer />
    </>
  )
}

export default ShowCase;
