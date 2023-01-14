const Header = () => {
	const handleClick = (e) => {
		console.log(e)
	}
	return (
		<>
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

			<header className="header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-2">
							<div className="header__logo">
								<a href="#">
									<img src="assets/img/logo.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-6 col-lg-7">
							<nav className="header__menu">
								<ul>
									<li className="active">
										<a href="#">Home</a>
									</li>
									<li>
										<a href="#">Women’s</a>
									</li>
									<li>
										<a href="#">Men’s</a>
									</li>
									<li>
										<a href="#" onClick={(e) => handleClick(e)}>
											Shop
										</a>
									</li>
									<li>
										<a href="#">Pages</a>
										<ul className="dropdown">
											<li>
												<a href="#">Product Details</a>
											</li>
											<li>
												<a href="#">Shop Cart</a>
											</li>
											<li>
												<a href="#">Checkout</a>
											</li>
											<li>
												<a href="#">Blog Details</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3">
							<div className="header__right">
								<div className="header__right__auth">
									<a href="#">Login</a>
									<a href="#">Register</a>
								</div>
								<ul className="header__right__widget">
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
							</div>
						</div>
					</div>
					<div className="canvas__open">
						<i className="fa fa-bars"></i>
					</div>
				</div>
			</header>
		</>
	)
}

export { Header }
