import { Link } from 'react-router-dom'
import MenuWrapper from './libs/MenuWrapper'
import './styles/headerStyles.css'

const Header = () => {
	return (
		<>
			<MenuWrapper />
			<header className="header">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-3 col-lg-2">
							<div className="header__logo">
								<a href="/home">
									<img src="assets/img/logo.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-xl-6 col-lg-7">
							<nav className="header__menu">
								<ul>
									<Link to="/">
										<li className="active">
											<a href="Home">Home</a>
										</li>
									</Link>
									<Link to="/user">
										<li>
											<a href="/user">Women’s</a>
										</li>
									</Link>
									<Link to="/Home">
										<li>
											<a href="/Home">Men’s</a>
										</li>
									</Link>
									<Link to="/dashboard">
										<li>
											<a href="/dasboard">Shop</a>
										</li>
									</Link>
									<li>
										<a href="/Home">Pages</a>
										<ul className="dropdown">
											<Link to="/Home">
												<li>
													<a href="/Home">Product Details</a>
												</li>
											</Link>
											<Link to="/Home">
												<li>
													<a href="/Home">Shop Cart</a>
												</li>
											</Link>
											<Link to="/Home">
												<li>
													<a href="/Home">Checkout</a>
												</li>
											</Link>
											<Link to="/Home">
												<li>
													<a href="/Home">Blog Details</a>
												</li>
											</Link>
										</ul>
									</li>
									<li>
										<a href="/Home">Blog</a>
									</li>
									<li>
										<a href="/Home">Contact</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-3">
							<div className="header__right">
								<div className="header__right__auth">
									<a href="/Home">Login</a>
									<a href="/Home">Register</a>
								</div>
								<ul className="header__right__widget">
									<li>
										<span className="icon_search search-switch"></span>
									</li>
									<li>
										<a href="/Home">
											<span className="icon_heart_alt"></span>
											<div className="tip">2</div>
										</a>
									</li>
									<li>
										<a href="/Home">
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
