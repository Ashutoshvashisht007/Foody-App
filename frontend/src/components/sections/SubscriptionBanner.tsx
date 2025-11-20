import SubscriptionBg from "../../assets/SubscritptionBG.png"
import VegGuy from "../../assets/VegGuy.png"
import { Send } from 'lucide-react'

const SubscriptionBanner = () => {
    return (
        <section className='w-full max-w-[calc(100vw-155px)] mx-auto px-4 relative overflow-hidden py-16 md:py-24 mt-17 mb-17 rounded-[20px]'>
            <div className="absolute inset-0 opacity-full pointer-events-none">
                <img src={SubscriptionBg} alt="Subscription Background" className="w-full h-full object-cover" />
            </div>
            <div className="absolute right-0 bottom-0 hidden lg:block pointer-events-none">
                <img src={VegGuy} alt="Delivery Man" className="max-h-[345px] object-contain" />
            </div>
            <div className="mx-auto px-4 relative z-10 left-[78px]">
                <div className="max-w-2xl mb-5">
                    <h2 className="text-[40px] leading-12 md:text-4xl font-bold text-[#253D4E] mb-4">
                        Stay home & get your daily <br />
                        needs from our shop
                    </h2>

                    <p className="text-[#7E7E7E] mb-12 text-lg leading-6">
                        Start You'r Daily Shopping with <span className="text-[#3BB77E] font-medium">Nest Mart</span>
                    </p>

                    <div className="bg-white rounded-full shadow-sm max-w-xl flex items-center h-16 pl-6 pr-5">
                        <Send className="w-5 h-5 text-gray-400 mr-3" />
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 text-gray-700 outline-none bg-transparent placeholder:text-gray-400"
                        />
                        <button className="bg-[#F53E32] cursor-pointer h-full w-40 text-white px-6 rounded-full text-sm font-semibold transition-colors">
                            Subscribe
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SubscriptionBanner