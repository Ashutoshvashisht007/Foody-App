
import { ArrowLeft, Star } from 'lucide-react';
import type { BestSellerProps } from '../../types/types';
import Flakes from "../../assets/Flakes.jpg"

const BestSellerCard = ({ product }: BestSellerProps) => {
  return (
    <div className="border border-[#ECECEC] rounded-2xl p-4 hover:shadow-xl transition-shadow bg-white">
      {product.tag && (
        <div className={`absolute top-0 left-0 text-white text-xs leading-3 font-normal px-4 py-2  rounded-tl-xl rounded-br-xl z-10 ${product.tag.color}`}>
          {product.tag.text}
        </div>
      )}

      <div className="relative h-48 mb-4 flex justify-center items-center">
        <img src={Flakes} alt={product.title} className="max-h-full object-contain" />
      </div>

      <div className="space-y-2">
        <p className="text-xs text-[#ADADAD] leading-6">{product.category}</p>
        <h3 className="mt-2 font-bold text-[#253D4E] leading-tight line-clamp-2 h-10">
          {product.title}
        </h3>

        <div className="flex items-center gap-1 mt-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-[14px] text-[#B6B6B6]">({product.rating})</span>
        </div>

        <div className="flex items-center gap-2 mt-5.5">
          <span className="text-[#3BB77E] font-bold leading-6 text-lg">${product.price}</span>
          <span className="text-[#ADADAD] text-sm leading-6 font-bold line-through">${product.oldPrice}</span>
        </div>

        <button className="w-full mt-10 bg-[#F53E32] text-white font-bold py-2.5 rounded transition-colors leading-5 tracking-[0.5px] text-sm flex items-center justify-center gap-2 cursor-pointer">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default BestSellerCard;