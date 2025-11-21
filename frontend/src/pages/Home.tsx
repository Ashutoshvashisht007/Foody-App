import PageLayout from '../components/layout/PageLayout'
import DailyBestSells from '../components/sections/DailyBestSells'
import DealsOfTheDay from '../components/sections/DealsOfTheDay'
import FeaturesInfo from '../components/sections/FeaturesInfo'
import Hero from '../components/sections/Hero'
import PopularProducts from '../components/sections/PopularProducts'
import PromoBanner from '../components/sections/PromoBanner'
import SubscriptionBanner from '../components/sections/SubscriptionBanner'

const Home = () => {
  return (
    <div>
        <PageLayout>
          <Hero />
          <PromoBanner />
          <PopularProducts />
          <DailyBestSells />
          <DealsOfTheDay />
          <SubscriptionBanner />
          <FeaturesInfo />
        </PageLayout>
    </div>
  )
}

export default Home