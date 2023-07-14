import { CarouselSection } from '../../components/CarouselSection'
import { DiscountsBanner } from '../../components/DiscountsSection'
import { SocialSection } from '../../components/SocialSection'
import { SmallShop } from '../../components/SmallShop'
import { Footer } from '../../components/Footer'

const Home = () => {
	return (
		<>
			<CarouselSection />
			<DiscountsBanner />
			<SocialSection />
			<SmallShop />
			<CarouselSection />
			<Footer />
		</>
	)
}
export default Home
