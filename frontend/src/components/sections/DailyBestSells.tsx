import { ArrowRight } from 'lucide-react';
import BestSellerCard from '../product/BestSellerCard';
import DailyBestSails from "../../assets/DailyDeals.png"

const DailyBestSells = () => {
  const products = [
    {
      tag: { text: 'Save 35%', color: 'bg-[#3BB77E]' },
      image: '/assets/images/coffee.png', 
      category: 'Hodo Foods',
      title: 'All Natural Italian-Style Chicken Meatballs',
      rating: 4.0,
      price: 238.85,
      oldPrice: 245.8,
    },
    {
      tag: { text: 'Sale', color: 'bg-[#67BCEE]' },
      image: '/assets/images/snack.png',
      category: 'Hodo Foods',
      title: 'Angie\'s Boomchickapop Sweet and womnies',
      rating: 4.0,
      price: 238.85,
      oldPrice: 245.8,
    },
    {
      tag: { text: 'Best sale', color: 'bg-[#F59758]' },
      image: '/assets/images/veggie.png',
      category: 'Hodo Foods',
      title: 'Foster Farms Takeout Crispy Classic',
      rating: 4.0,
      price: 238.85,
      oldPrice: 245.8,
    },
    {
      tag: { text: 'Save 15%', color: 'bg-[#F74B81]' },
      image: '/assets/images/nuts.png',
      category: 'Hodo Foods',
      title: 'Blue Diamond Almonds Lightly Salted',
      rating: 4.0,
      price: 238.85,
      oldPrice: 245.8,
    },
  ];

  return (
    <section>
      <div className="w-full max-w-[calc(100vw-147px)] mx-auto px-3">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-[32px] font-bold text-[#253D4E] leading-12 tracking-normal">Daily Best Sells</h2>
          <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <span className="text-[#3BB77E] text-[16px] leading-4 font-bold cursor-pointer">Featured</span>
            <span className="hover:text-[#3BB77E] text-[#253D4E] cursor-pointer">Popular</span>
            <span className="hover:text-[#3BB77E] text-[#253D4E] cursor-pointer">New added</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="w-full lg:w-[378.5px] relative rounded-xl overflow-hidden min-h-[400px]">
            <img 
              src={DailyBestSails}
              alt="Banner" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            
            <div className="relative z-10 p-12.5 h-full flex flex-col justify-start pt-12">
              <h3 className="text-3xl leading-10 font-bold text-white">
                Bring nature <br/> into your <br/> home
              </h3>
              <button className="bg-red-500 text-white px-3 text-[12px] leading-4 py-2 rounded text-sm font-semibold flex items-center gap-2 hover:bg-red-600 transition-colors mt-25 w-fit">
                Shop Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod, idx) => (
              <div key={idx} className="relative">
                 <BestSellerCard product={prod} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DailyBestSells;