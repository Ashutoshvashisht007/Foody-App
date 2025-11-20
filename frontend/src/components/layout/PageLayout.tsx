import DailyBestSells from '../sections/DailyBestSells'
import DealsOfTheDay from '../sections/DealsOfTheDay'
import FeaturesInfo from '../sections/FeaturesInfo'
import Hero from '../sections/Hero'
import PopularProducts from '../sections/PopularProducts'
import PromoBanner from '../sections/PromoBanner'
import SubscriptionBanner from '../sections/SubscriptionBanner'
import Header from './header/Header'

const PageLayout = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden'>
        <Header />
        <Hero />
        <PromoBanner />
        <PopularProducts />
        <DailyBestSells />
        <DealsOfTheDay />
        <SubscriptionBanner />
        <FeaturesInfo />
    </div>
  )
}

export default PageLayout