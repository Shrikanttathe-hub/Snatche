import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <!--New Footer Start--> */}
            <footer>
                <div className="container">
                    <div className="footer_main">
                        <div className="footer-top">
                            <div className="left">
                                <div className="footer-logo">
                                    <Link to="/"><img src="./assets/Image/footerImg/logo.svg" alt="Snatche" /></Link>
                                </div>
                                <div className="footer-social">
                                    <p>Connect with us</p>
                                    <div className="social-links">
                                        <ul>
                                            <li><Link to="https://www.facebook.com/?stype=lo&flo=1&deoia=1&jlou=Afhe7bKw0xFRjssXi3Y9sUV2cUtTACs3csLyQUp0YcrnymTnIWn4HijX91XR6Yir6AweObt4kUY2GSgzfvh1WEQMuJD7A3otlmzqjjWRXeQXeQ&smuh=6837&lh=AdCYhbZLHAVXg_c-ErM"><img src="./assets/Image/footerImg/facebook.svg" alt="Facebook" /></Link></li>
                                            <li><Link to="https://www.instagram.com/?flo=true"><img src="./assets/Image/footerImg/Insta.svg" alt="Instagram" /></Link>
                                            </li>
                                            <li><Link to="https://www.bing.com/ck/a?!&&p=796c32b154ac101ea74ec532a0967b2bfab31609ca68ed59d586561444172445JmltdHM9MTc2ODE3NjAwMA&ptn=3&ver=2&hsh=4&fclid=29020ae3-e58c-6643-2829-1e7ce4e86734&psq=linkedin&u=a1aHR0cHM6Ly9pbi5saW5rZWRpbi5jb20v"><img src="./assets/Image/footerImg/linkedIn.svg" alt="LinkedIn" /></Link>
                                            </li>
                                            <li><Link to="https://x.com/?lang=en-in"><img src="./assets/Image/footerImg/twitter.svg" alt="Twitter" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <ul>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/support&FAQ">FAQ's</Link></li>
                                    <li><Link to="/privacy">Privacy</Link></li>
                                    <li><Link to="/blog">Blogs</Link></li>
                                    <li><Link to="/secure-shopping">Secure Shopping</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/support&FAQ">Support</Link></li>
                                    <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                                    <li><Link to="/refund">Refund Policy</Link></li>
                                    <li><Link to="/terms-condition">Terms & Conditions</Link></li>
                                    <li><Link to="/cookies">Cookies</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/showcase">Nike</Link></li>
                                </ul>
                                <ul>
                                    <li><Link to="/showcase">Puma</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-bottom">
                            <p className="copyrights">&copy; Snatche 2022. All Rights Reserved</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* {/* <!--New Footer End-->} */}
        </>
    )
}

export default Footer;
