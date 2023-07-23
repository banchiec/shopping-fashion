const CarouselSection = (props) => {
	return (
		<section className="banner">
			<div className="container-fluid">
				<div className="row">
					<div className="col-xl-7 col-lg-9 m-auto">
						<div className="banner__slider owl-carousel">
							<div className="banner__item">
								<div className="banner__text">
									<span>The Chloe Collection</span>
									<img src="assets/img/banner/banner-1.jpg" alt="banner" />
									<a href="/">Shop now</a>
								</div>
							</div>
							<div className="banner__item">
								<div className="banner__text">
									<span>The Chloe Collection</span>
									<img src="assets/img/banner/banner-1.jpg" alt="banner" />
									<a href="/">Shop now</a>
								</div>
							</div>
							<div className="banner__item">
								<div className="banner__text">
									<span>The Chloe Collection</span>
									<img src="assets/img/banner/banner-1.jpg" alt="banner" />
									<a href="/">Shop now</a>
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
