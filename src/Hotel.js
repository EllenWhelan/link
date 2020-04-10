import React, { Component } from "react";
import Popup from "reactjs-popup";
import App from './App';
import './App.css';
import './css/bootstrap.css';
import './css/style.css.map';
import './css/font-awesome.min.css';
import './css/responsive.css';
import './css/style.css';






class Hotel extends Component {
    render()
    {
        return(
            <div>
            
            
	<header className="header_area">
		<div className="top_menu row m0">
			<div className="container">
				<div className="float-left">
					<ul className="list header_social">
						<li><a href="#">Contact Us +11 (111) 1111111</a></li>
					</ul>
				</div>
				<div className="float-right">
					<select>
						<option value="1">USD</option>
						<option value="1">EUR</option>
						<option value="1">AOA</option>
						<option value="1">AUD</option>
					</select>
					<select>
						<option value="1">ENG</option>
						<option value="1">FRA</option>
						<option value="1">BAN</option>
					</select>
				</div>
			</div>
		</div>
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container">
					
					<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav ml-auto">
							<li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
							<li className="nav-item active"><a className="nav-link" href="about-us.html">Booking</a></li>
							<li className="nav-item"><a className="nav-link" href="gallery.html">Gallery</a></li>
							<li className="nav-item submenu dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
									<li className="nav-item"><a className="nav-link" href="rooms.html">Rooms</a></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
									<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
								</ul>
							</li>
							<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	
	<section className="banner_area">
		<div className="banner_inner d-flex align-items-center">
			<div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
			<div className="container">
				<div className="banner_content text-center">
					<h2>Booking</h2>
					<div className="">
						<a  className = "nav-link" href="index.html">Home</a>
						<a href="about-us.html">Booking</a>
					</div>
				</div> 
			</div>
		</div>
	</section>
	
        <br/>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="main_title">
						<div className="top-part">
							<p>Booking Complete</p>
						</div>
						<h2>
							Thank You For Booking With Us
						</h2>
						<div >
							<p>
								We see you have children who will be staying with you. Do you wish to 
                                book a child-minder? Click below if so
							</p>
						</div>
						
						<div>
					
						</div>
					</div>
				</div>
			</div>
		</div>
	
	
	<section>
		<div className="container">
			<div className="testi-slider owl-carousel" data-slider-id="1">
				<div className="item">
					<div className="testi-item">
					<Popup trigger={<button className ="button" > Book Minder </button>}
                         modal
                        closeOnDocumentClick>
                        <App/>
                        </Popup>
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
								you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="testi-item">
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
								you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="testi-item">
						<h4>Fanny Spencer</h4>
						<ul className="list">
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
							<li><a href="#"><i className="fa fa-star"></i></a></li>
						</ul>
						<div className="wow fadeIn" data-wow-duration="1s">
							<p>
								As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it,
								you travel
								across her face <br/> and She is the host to your journey.
							</p>
						</div>
					</div>
				</div>
				
			</div>
			<div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="img/testimonial/t1.png" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="img/testimonial/t2.png" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="img/testimonial/t3.png" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
				<div className="owl-thumb-item">
					<div>
						<img className="img-fluid" src="img/testimonial/t4.png" alt=""/>
					</div>
					<div className="overlay overlay-grad"></div>
				</div>
			</div>
		</div>
	</section>
	
	<footer className="footer-area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>About Agency</h6>
						<p>
							The world has become so fasted that people don’t want to standby reading page of info they would much rather
							look at a presentation and understand message.
						</p>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Quick Links</h6>
						<div className="row">
							<ul className="col footer-nav">
								<li><a href="#">Sitemaps</a></li>
								<li><a href="#">Categories</a></li>
								<li><a href="#">Archives</a></li>
								<li><a href="#">Advertise</a></li>
								<li><a href="#">Ad Choice</a></li>
							</ul>
							<ul className="col footer-nav">
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Help Center</a></li>
								<li><a href="#">Newsletters</a></li>
								<li><a href="#">Feedback</a></li>
							</ul>
						</div>
					</div>
				</div>

				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Newsletter</h6>
						<p>For business professionals caught between high OEM price mediocre print and graphic.</p>
						<div className="" id="mc_embed_signup">

							<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" className="form-inline">

								<div className="d-flex flex-row">

									<input className="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
									 required="" type="email"/>


									
									<div style ={{position: "absolute", left: "-5000px"}}>
										<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/>
									</div>

									 
								</div>
								<div className="info"></div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-lg-3  col-md-6 col-sm-6">
					
				</div>
			</div>
			<div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
				
				
			</div>
		</div>
	</footer>
	
	<script src="js/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="js/popper.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/stellar.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
	<script src="vendors/lightbox/simpleLightbox.min.js"></script>
	<script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
	<script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
	<script src="vendors/isotope/isotope.pkgd.min.js"></script>
	<script src="vendors/owl-carousel/owl.carousel.min.js"></script>
	<script src="js/owl-carousel-thumb.min.js"></script>
	<script src="vendors/popup/jquery.magnific-popup.min.js"></script>
	<script src="js/jquery.ajaxchimp.min.js"></script>
	<script src="vendors/counter-up/jquery.waypoints.min.js"></script>
	<script src="vendors/counter-up/jquery.counterup.js"></script>
	<script src="js/mail-script.js"></script>
	<script src="js/theme.js"></script>
            </div>
        );

    }
}
      
  
export default Hotel;
  