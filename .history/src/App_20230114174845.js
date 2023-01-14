import './App.css'
import { Carousel } from './components/CarouselBanner'
import { CategoriesBanner } from './components/CategoriesBanner'
import { Header } from './components/Header'
import { SmallShop } from './components/SmallShop'

function App() {
	return (
		<div className="App">
			<div className="maincontainer">
				<div id="preloder">
					<div className="loader"></div>
				</div>
				<Header />
				<Carousel />
				<CategoriesBanner />
				<SmallShop />

				<section className="discount">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 p-0">
								<div className="discount__pic">
									<img src="assets/img/discount.jpg" alt="" />
								</div>
							</div>
							<div className="col-lg-6 p-0">
								<div className="discount__text">
									<div className="discount__text__title">
										<span>Discount</span>
										<h2>Winter 2021</h2>
										<h5>
											<span>Sale</span> 50%
										</h5>
									</div>
									<div className="discount__countdown" id="countdown-time">
										<div className="countdown__item">
											<span>22</span>
											<p>Days</p>
										</div>
										<div className="countdown__item">
											<span>18</span>
											<p>Hour</p>
										</div>
										<div className="countdown__item">
											<span>46</span>
											<p>Min</p>
										</div>
										<div className="countdown__item">
											<span>05</span>
											<p>Sec</p>
										</div>
									</div>
									<a href="#">Shop now</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="services spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-4 col-sm-6">
								<div className="services__item">
									<i className="fa fa-car"></i>
									<h6>Free Shipping</h6>
									<p>For all oder over $99</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6">
								<div className="services__item">
									<i className="fa fa-money"></i>
									<h6>Money Back Guarantee</h6>
									<p>If good have Problems</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6">
								<div className="services__item">
									<i className="fa fa-support"></i>
									<h6>Online Support 24/7</h6>
									<p>Dedicated support</p>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6">
								<div className="services__item">
									<i className="fa fa-headphones"></i>
									<h6>Payment Secure</h6>
									<p>100% secure payment</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="instagram">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-1.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-2.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-3.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-4.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-5.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-4 col-sm-4 p-0">
								<div
									className="instagram__item set-bg"
									data-setbg="assets/img/instagram/insta-6.jpg"
								>
									<div className="instagram__text">
										<i className="fa fa-instagram"></i>
										<a href="#">@ ashion_shop</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<footer className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 col-sm-7">
								<div className="footer__about">
									<div className="footer__logo">
										<a href="#">
											<img src="assets/img/logo.png" alt="" />
										</a>
									</div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
										eiusmod tempor incididunt cilisis.
									</p>
									<div className="footer__payment">
										<a href="#">
											<img src="assets/img/payment/payment-1.png" alt="" />
										</a>
										<a href="#">
											<img src="assets/img/payment/payment-2.png" alt="" />
										</a>
										<a href="#">
											<img src="assets/img/payment/payment-3.png" alt="" />
										</a>
										<a href="#">
											<img src="assets/img/payment/payment-4.png" alt="" />
										</a>
										<a href="#">
											<img src="assets/img/payment/payment-5.png" alt="" />
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-5">
								<div className="footer__widget">
									<h6>Quick links</h6>
									<ul>
										<li>
											<a href="#">About</a>
										</li>
										<li>
											<a href="#">Blogs</a>
										</li>
										<li>
											<a href="#">Contact</a>
										</li>
										<li>
											<a href="#">FAQ</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-2 col-md-3 col-sm-4">
								<div className="footer__widget">
									<h6>Account</h6>
									<ul>
										<li>
											<a href="#">My Account</a>
										</li>
										<li>
											<a href="#">Orders Tracking</a>
										</li>
										<li>
											<a href="#">Checkout</a>
										</li>
										<li>
											<a href="#">Wishlist</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-4 col-md-8 col-sm-8">
								<div className="footer__newslatter">
									<h6>NEWSLETTER</h6>
									<form action="#">
										<input type="text" placeholder="Email" />
										<button type="submit" className="site-btn">
											Subscribe
										</button>
									</form>
									<div className="footer__social">
										<a href="#">
											<i className="fa fa-facebook"></i>
										</a>
										<a href="#">
											<i className="fa fa-twitter"></i>
										</a>
										<a href="#">
											<i className="fa fa-youtube-play"></i>
										</a>
										<a href="#">
											<i className="fa fa-instagram"></i>
										</a>
										<a href="#">
											<i className="fa fa-pinterest"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="footer__copyright__text">
									<p>
										Copyright &copy;{' '}
										<script>document.write(new Date().getFullYear());</script> All rights
										reserved | This template is made with{' '}
										<i className="fa fa-heart" aria-hidden="true"></i> by{' '}
										<a href="#" target="_blank">
											Heart
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>

				<div className="search-model">
					<div className="h-100 d-flex align-items-center justify-content-center">
						<div className="search-close-switch">+</div>
						<form className="search-model-form">
							<input type="text" id="search-input" placeholder="Search here....." />
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
