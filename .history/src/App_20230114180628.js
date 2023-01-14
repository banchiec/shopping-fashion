import './App.css'
import { Carousel } from './components/CarouselSection'
import { CategoriesBanner } from './components/CategoriesSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { SmallShop } from './components/SmallShop'
import { Trends } from './components/trends'

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
				<Trends />

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
				<Footer />
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
