const CarouselSection = (props) => {
	return (
		<section className="banner">
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
									<img src="assets/img/banner/banner-1.jpg" alt="banner" />
									<h1>The Project Jacket </h1>
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
	)
}

export default CarouselSection
