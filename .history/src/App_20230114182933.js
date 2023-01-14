import './App.css'
import { CarouselSection } from './components/CarouselSection'
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
			</div>
		</div>
	)
}

export default App
