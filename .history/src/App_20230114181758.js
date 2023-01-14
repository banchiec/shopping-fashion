import './App.css'
import { Carousel } from './components/CarouselSection'
import { CategoriesBanner } from './components/CategoriesSection'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RibbonServices } from './components/RiboonServices'
import { SmallShop } from './components/SmallShop'
import { SocialSection } from './components/SocialSection'
import { Trends } from './components/trends'

function App() {
	return (
		<div className="App">
			<div className="maincontainer">
				<div id="preloder">
					<div className="loader"></div>
				</div>
				<Header />
				<RibbonServices />
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
