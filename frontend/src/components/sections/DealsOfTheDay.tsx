import { ChevronRight } from 'lucide-react';
import DealCard from '../product/DealCard';
import DealOfDay from "../../assets/DealOfDay.png"

const DealsOfTheDay = () => {
  const deals = [
    {
      bgImage: DealOfDay,
      title: 'Seeds of Change Organic Quinoa',
      brand: 'NestFood',
      rating: 4.0,
      price: 32.85,
      oldPrice: 33.8,
    },
    {
      bgImage: DealOfDay,
      title: 'Perdue Simply Smart Organics Gluten Free',
      brand: 'Old El Paso',
      rating: 4.0,
      price: 24.85,
      oldPrice: 26.8,
    },
    {
      bgImage: DealOfDay,
      title: 'Signature Wood-Fired Mushroom',
      brand: 'Progresso',
      rating: 3.0,
      price: 12.85,
      oldPrice: 13.8,
    },
    {
      bgImage: DealOfDay,
      title: 'Simply Lemonade with Raspberry Juice',
      brand: 'Yoplait',
      rating: 3.0,
      price: 15.85,
      oldPrice: 16.8,
    },
  ];

  return (
    <section className=" bg-white mt-10">
      <div className="w-full max-w-[calc(100vw-147px)] mx-auto px-4">
        
        <div className="flex justify-between items-center">
          <h2 className="text-[32px] font-bold text-[#253D4E]">Deals Of The Day</h2>
          <a href="#" className="text-[#7E7E7E] flex items-center gap-1 text-[16px] leading-6 hover:text-red-500">
            All Deals <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, idx) => (
            <DealCard key={idx} product={deal} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default DealsOfTheDay;