import { CarouselSection } from "../../components/CarouselSection"
import { SocialSection } from "../../components/SocialSection"
import { SmallShop } from "../../components/SmallShop"
import { Footer } from "../../components/Footer"

const Home = () => {
	return (
		<>
			<CarouselSection />
			<SmallShop />
			{/* <DiscountsBanner /> */}
			<SocialSection />
			<Footer />s
		</>
	)
}
export default Home
