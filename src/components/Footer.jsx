import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="footer-area-top">
        <div className="container">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-box">
                        <a href="index.html"><img className="img-responsive" src="img/logo-footer.png" alt="logo"/></a>
                        <div className="footer-about">
                            <p>Praesent vel rutrum purus. Nam vel dui eu sus duis dignissim dignissim. Suspenetey disse at ros tecongueconsequat.Fusce sit amet rna feugiat.</p>
                        </div>
                        <ul className="footer-social">
                            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-box">
                        <h3>Featured Links</h3>
                        <ul className="featured-links">
                            <li>
                                <ul>
                                    <li><a href="#">Graduation</a></li>
                                    <li><a href="#">Admissions</a></li>
                                    <li><a href="#">International</a></li>
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li><a href="#">Courses</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Book store</a></li>
                                    <li><a href="#">Alumni</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-box">
                        <h3>Information</h3>
                        <ul className="corporate-address">
                            <li><i className="fa fa-phone" aria-hidden="true"></i><a href="Phone(01)800433633.html"> (01) 800 433 633 </a></li>
                            <li><i className="fa fa-envelope-o" aria-hidden="true"></i>info@bostonea.com</li>
                        </ul>
                        <div className="newsletter-area">
                            <h3>Newsletter</h3>
                            <div className="input-group stylish-input-group">
                                <input type="text" placeholder="Enter your e-mail here" className="form-control"/>
                                <span className="input-group-addon">
                                        <button type="submit">
                                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>  
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="footer-box">
                        <h3>Flickr Photos</h3>
                        <ul className="flickr-photos">
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/1.jpg" alt="flickr"/></a>
                            </li>
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/2.jpg" alt="flickr"/></a>
                            </li>
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/3.jpg" alt="flickr"/></a>
                            </li>
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/4.jpg" alt="flickr"/></a>
                            </li>
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/5.jpg" alt="flickr"/></a>
                            </li>
                            <li>
                                <a href="#"><img className="img-responsive" src="img/footer/6.jpg" alt="flickr"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-area-bottom">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                    <p>&copy; ${new Date().getFullYear()} Academics All Rights Reserved. &nbsp; Designed by<a target="_blank" href="https://www.radiustheme.com/" rel="nofollow"> RadiusTheme</a></p>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <ul className="payment-method">
                        <li>
                            <a href="#"><img alt="payment-method" src="img/payment-method1.jpg"/></a>
                        </li>
                        <li>
                            <a href="#"><img alt="payment-method" src="img/payment-method2.jpg"/></a>
                        </li>
                        <li>
                            <a href="#"><img alt="payment-method" src="img/payment-method3.jpg"/></a>
                        </li>
                        <li>
                            <a href="#"><img alt="payment-method" src="img/payment-method4.jpg"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer