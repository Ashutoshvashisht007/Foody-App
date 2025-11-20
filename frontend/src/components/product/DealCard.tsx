import { Star } from 'lucide-react';
import type { DealProps } from '../../types/types';
import ShoppingCart from '../../assets/shopping.png';

const DealCard = ({ product }: DealProps) => {
  return (
    <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
      
      <div className="absolute inset-0 h-3/4 rounded-xl overflow-hidden">
        <img 
          src={product.bgImage} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Floating Content Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all">
        <h3 className="font-bold text-[#253D4E] text-[16px] mb-1 line-clamp-1">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1 mb-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-[#B6B6B6]">({product.rating})</span>
        </div>

        <div className="text-xs mb-5">
          <span className="text-[#B6B6B6]">By </span>
          <span className="text-[#3BB77E]">{product.brand}</span>
        </div>

        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="text-[#3BB77E] text-[18px] leading-6 font-bold">${product.price}</span>
                <span className="text-sm leading-6   text-[#ADADAD] line-through">${product.oldPrice}</span>
            </div>
            <button className="bg-[#F53E32] cursor-pointer text-white px-3 py-2 rounded text-xs font-bold flex items-center gap-1">
                <img src={ShoppingCart} alt='Shopping Cart' className="w-3.5 h-3.5" /> Add
            </button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;