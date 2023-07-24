import './App.css'
import { Header } from './components/Header'

function App() {
	return (
			<div className="maincontainer">
				<div id="preloder">
					<div className="loader"></div>
				</div>
				<div className="offcanvas-menu-overlay"></div>
				<div className="offcanvas-menu-wrapper">
					<div className="offcanvas__close">+</div>
					<ul className="offcanvas__widget">
						<li>
							<span className="icon_search search-switch"></span>
						</li>
						<li>
							<a href="#">
								<span className="icon_heart_alt"></span>
								<div className="tip">2</div>
							</a>
						</li>
						<li>
							<a href="#">
								<span className="icon_bag_alt"></span>
								<div className="tip">2</div>
							</a>
						</li>
					</ul>
					<div className="offcanvas__logo">
						<a href="#">
							<img src="assets/img/logo.png" alt="" />
						</a>
					</div>

					{/* Aqui me pinta otra cosa, pero no se de donde sale lo que me pinta */}
					<div id="mobile-menu-wrap"></div>

					<div className="offcanvas__auth">
						<a href="#">Login</a>
						<a href="#">Register</a>
					</div>
				</div>
				<Header />

				<section className="categories">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-6 p-0">
								<div
									className="categories__item categories__large__item set-bg"
									data-setbg="assets/img/categories/category-1.jpg"
								>
									<div className="categories__text">
										<h1>Women’s fashion</h1>
										<p>
											Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
											incidid-unt labore edolore magna aliquapendisse ultrices gravida.
										</p>
										<a href="#">Shop now</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 p-0">
										<div
											className="categories__item set-bg"
											data-setbg="assets/img/categories/category-2.jpg"
										>
											<div className="categories__text">
												<h4>Men’s fashion</h4>
												<p>358 items</p>
												<a href="#">Shop now</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 p-0">
										<div
											className="categories__item set-bg"
											data-setbg="assets/img/categories/category-3.jpg"
										>
											<div className="categories__text">
												<h4>Kid’s fashion</h4>
												<p>273 items</p>
												<a href="#">Shop now</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 p-0">
										<div
											className="categories__item set-bg"
											data-setbg="assets/img/categories/category-4.jpg"
										>
											<div className="categories__text">
												<h4>Cosmetics</h4>
												<p>159 items</p>
												<a href="#">Shop now</a>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 p-0">
										<div
											className="categories__item set-bg"
											data-setbg="assets/img/categories/category-5.jpg"
										>
											<div className="categories__text">
												<h4>Accessories</h4>
												<p>792 items</p>
												<a href="#">Shop now</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="product spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4">
								<div className="section-title">
									<h4>New product</h4>
								</div>
							</div>
							<div className="col-lg-8 col-md-8"></div>
						</div>
						<div className="row property__gallery">
							<div className="col-lg-3 col-md-4 col-sm-6 mix">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-1.jpg"
									>
										<div className="label new">New</div>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-1.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Buttons tweed blazer</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 59.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-2.jpg"
									>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-2.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Flowy striped skirt</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 49.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-3.jpg"
									>
										<div className="label stockout">out of stock</div>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-3.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Cotton T-Shirt</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 59.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-4.jpg"
									>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-4.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Slim striped pocket shirt</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 59.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-5.jpg"
									>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-5.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Fit micro corduroy shirt</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 59.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
								<div className="product__item sale">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-6.jpg"
									>
										<div className="label sale">Sale</div>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-6.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Tropical Kimono</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">
											$ 49.0 <span>$ 59.0</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
								<div className="product__item">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-7.jpg"
									>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-7.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Contrasting sunglasses</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">$ 59.0</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-4 col-sm-6 mix women men kid accessories cosmetic">
								<div className="product__item sale">
									<div
										className="product__item__pic set-bg"
										data-setbg="assets/img/product/product-8.jpg"
									>
										<div className="label">Sale</div>
										<ul className="product__hover">
											<li>
												<a
													href="assets/img/product/product-8.jpg"
													className="image-popup"
												>
													<span className="arrow_expand"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_heart_alt"></span>
												</a>
											</li>
											<li>
												<a href="#">
													<span className="icon_bag_alt"></span>
												</a>
											</li>
										</ul>
									</div>
									<div className="product__item__text">
										<h6>
											<a href="#">Water resistant backpack</a>
										</h6>
										<div className="rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product__price">
											$ 49.0 <span>$ 59.0</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="banner set-bg" data-setbg="assets/img/banner/banner-1.jpg">
					<div className="container">
						<div className="row">
							<div className="col-xl-7 col-lg-8 m-auto">
								<div className="banner__slider owl-carousel">
									<div className="banner__item">
										<div className="banner__text">
											<span>The Chloe Collection</span>
											<h1>The Project Jacket</h1>
											<a href="#">Shop now</a>
										</div>
									</div>
									<div className="banner__item">
										<div className="banner__text">
											<span>The Chloe Collection</span>
											<h1>The Project Jacket</h1>
											<a href="#">Shop now</a>
										</div>
									</div>
									<div className="banner__item">
										<div className="banner__text">
											<span>The Chloe Collection</span>
											<h1>The Project Jacket</h1>
											<a href="#">Shop now</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="trend spad">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="trend__content">
									<div className="section-title">
										<h4>Hot Trend</h4>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/ht-1.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Chain bucket bag</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/ht-2.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Pendant earrings</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/ht-3.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Cotton T-Shirt</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="trend__content">
									<div className="section-title">
										<h4>Best seller</h4>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/bs-1.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Cotton T-Shirt</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/bs-2.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>
												Zip-pockets pebbled tote <br />
												briefcase
											</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/bs-3.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Round leather bag</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<div className="trend__content">
									<div className="section-title">
										<h4>Feature</h4>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/f-1.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Bow wrap skirt</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/f-2.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Metallic earrings</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
									<div className="trend__item">
										<div className="trend__item__pic">
											<img src="assets/img/trend/f-3.jpg" alt="" />
										</div>
										<div className="trend__item__text">
											<h6>Flap cross-body bag</h6>
											<div className="rating">
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
												<i className="fa fa-star"></i>
											</div>
											<div className="product__price">$ 59.0</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

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
	)
}

export default App