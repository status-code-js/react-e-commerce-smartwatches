import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="wrapper footer__wrapper">
                    <div className="footer__top">
                        <div className="brand">
                            <img src="./assets/icon-brand.png" alt="logo" />
                            <div className="brand__text">
                                <h3>Smartwatches</h3>
                                <span className="brand__p">Find your perfect Smartwatch</span>
                            </div>
                        </div>
                        <div className="footer__about">
                            <h3>About Us</h3>
                            <p>At Smartwatches we're passionate about providing you with the latest and greatest in smartwatch technology.
                                Our mission is to make your life easier and more connected, whether you're tracking your fitness goals,
                                staying on top of your schedule, or simply staying connected on the go. We're committed to providing
                                the highest quality products and customer service.
                            </p>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <div className="footer__bottom-1">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div>
                            <div className="footer__bottom-2">
                                <h3>Contact Us</h3>
                                <ul>
                                    <li>+1-234-567-8901</li>
                                    <li>info@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                    <p>&copy; 2023 Smartwatches. All rights reserved.</p>
                    </div>
                </div>

            </footer>

        </div>
    );
};

export default Footer;