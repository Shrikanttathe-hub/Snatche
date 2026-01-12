import React from 'react'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import "../assetss/CSS3/blogs.css";

const Blog = () => {
  return (
    <>
    <Header/>
     <main>
        {/* <!-- Breadcrumbs starts--> */}
        <div className="breadcrumb">
            <div className="container">
                <ul>
                    <li><a href="./Home.html">Home</a></li>
                    <li>Blogs</li>
                </ul>
            </div>
        </div>
        {/* <!-- Breadcrumbs Ends--> */}
        <section className="section_One">
            <div className="container">
                <div className="blog">
                    <h1>Nike Changes their product packaging</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
                        mattis
                        tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
                        tellus elit
                        sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti
                        sociosqu ad
                        litora
                        torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                </div>
            </div>
        </section>
        <section className="section_Two">
            <div className="container">
                <div className="blog">
                    <div className="quickReload">
                        <button>Read Full Post</button>
                        <div className="reload">
                            <h2>Quick Reads</h2>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div className="reloadImages">
                        <div className="reloadimg">
                            <a href="#">
                                <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                <p>HP to renew their Premium Lineup Packaging for 2023</p>
                            </a>
                        </div>
                        <div className="reloadimg">
                            <a href="#">
                                <img src="./assets/Image/blogs/reload2.svg" alt="store" />
                                <p>Salvatore Ferragamo opens up 23 new stores in Western Europe</p>
                            </a>
                        </div>
                        <div className="reloadimg">
                            <a href="#">
                                <img src="./assets/Image/blogs/reload3.svg" alt="fashion" />
                                <p>Fitness is the New Fashion: Says Salvatore Jackson</p>
                            </a>
                        </div>
                        <div className="reloadimg">
                            <a href="#">
                                <img src="./assets/Image/blogs/reload4.svg" alt="playstation" />
                                <p>PlayStation 5 now redily available in stores. Stocks full says Sony</p>
                            </a>
                        </div>
                        <div className="reloadimg">
                            <a href="#">
                                <img src="./assets/Image/blogs/reload5.svg" alt="new style" />
                                <p>New Urban style launches by adidas in their midrange lineup</p>
                            </a>
                        </div>
                    </div>
                    <div className="topics">
                        <div className="topicTabs">
                            <div className="tabs">
                                <button type="button" className="articleTab allTopics active">All Topics</button>
                                <button type="button" className="articleTab SearchTopic">Sneakers</button>
                                <button type="button" className="articleTab electronics">Electronics</button>
                                <button type="button" className="articleTab apparels">Apparels</button>
                            </div>
                            <div className="searchTopic">
                                <input type="text" placeholder="Search a topic you're looking for" />
                                <button> <img src="./assets/Image/support_And_FAQs/Searchbar.svg"
                                        alt="Search_Queries" />Search</button>
                            </div>
                        </div>
                        <div className="articlesMain articleContent1" style={{display:"block"}}>
                            <div className="article">
                                <h2>Top Articles to Read</h2>
                                <div className="articleBlogs">
                                    <div className="articleContainer">
                                        {/* <!-- blog 1 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 1  -->
                                        <!-- blog 2 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article2.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>Puma claims to have the longest run in tha sports and fitness
                                                        industry</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>History</button>
                                                <button>Newa</button>
                                                <button>Trending</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 2  -->
                                        <!-- blog 3 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article3.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>New lineup to be launched by Puma this week: Roumored to be
                                                        focused on fitness</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Most Searched</button>
                                                <button>History</button>
                                                <button>Informational</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 3  -->
                                        <!-- blog 4 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article4.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>Gen Z Consumer Behaviour: What you need to know about your
                                                        purchase</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Most Searched</button>
                                                <button>Informational</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 4  -->
                                        <!-- blog 5 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article5.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>6 Myths Debunked and Tips for Finding the Best Running Shoes</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Informational</button>
                                                <button>Trending</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 5  -->
                                        <!-- blog 6 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article6.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>8 Types Of Shoes Every Modern Man Should Own! </p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 6  -->
                                        <!-- blog 7 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article7.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>Apples adds a new colour option to their most premium audio
                                                        product</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>New Release</button>
                                                <button>Latest</button>
                                                <button>Trending</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 7  -->
                                        <!-- blog 8 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/article8.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>20 Best Watch every man should have a look at once</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 8  --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="articlesMain articleContent2" style={{display:"none"}}>
                            <div className="article">
                                <h2>Sneakers</h2>
                                <div className="articleBlogs">
                                    <div className="articleContainer">
                                        {/* <!-- blog 1 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 1  -->
                                        <!-- blog 2 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 2  -->
                                        <!-- blog 3 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 3  -->
                                        <!-- blog 4 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 4  -->
                                        <!-- blog 5 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 5  -->
                                        <!-- blog 6 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 6  -->
                                        <!-- blog 7 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 7  -->
                                        <!-- blog 8 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 8  --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="articlesMain articleContent3" style={{display:"none"}}>
                            <div className="article">
                                <h2>Electronics</h2>
                                <div className="articleBlogs">
                                    <div className="articleContainer">
                                        {/* <!-- blog 1 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 1  -->
                                        <!-- blog 2 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like" />
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 2  -->
                                        <!-- blog 3 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging"/>
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 3  -->
                                        <!-- blog 4 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging"/>
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 4  -->
                                        <!-- blog 5 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 5  -->
                                        <!-- blog 6 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 6  -->
                                        <!-- blog 7 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 7  -->
                                        <!-- blog 8 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 8  --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="articlesMain articleContent4" style={{display:"none"}}>
                            <div className="article">
                                <h2>Apparels</h2>
                                <div className="articleBlogs">
                                    <div className="articleContainer">
                                        {/* <!-- blog 1 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 1  -->
                                        <!-- blog 2 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 2  -->
                                        <!-- blog 3 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 3  -->
                                        <!-- blog 4 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 4  -->
                                        <!-- blog 5 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 5  -->
                                        <!-- blog 6 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 6  -->
                                        <!-- blog 7 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 7  -->
                                        <!-- blog 8 --> */}
                                        <div className="articlebox">
                                            <div className="reloadimg">
                                                <a href="#">
                                                    <img src="./assets/Image/blogs/reload1.svg" alt="packaging" />
                                                </a>
                                                <div className="reloadimgContent">
                                                    <p>HP to renew their Premium Lineup Packaging for 2023</p>
                                                    <div className="reloadicons">
                                                        <img src="./assets/Image/blogs/like.svg" alt="like"/>
                                                        <img src="./assets/Image/blogs/share.svg" alt="share"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="reloadButtons">
                                                <button>Latest</button>
                                                <button>Trending</button>
                                                <button>Most Searched</button>
                                            </div>
                                        </div>
                                        {/* <!--End blog 8  --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Blog;
