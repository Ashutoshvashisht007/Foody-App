import { Star } from 'lucide-react';
import type { Product } from '../../types/types';
import Shopping from "../../assets/shopping.png"

const ProductCard = ({ product }: { product: Product }) => {
  
  const getBadgeStyle = (color: string) => {
    switch (color) {
      case 'red': return 'bg-[#F74B81]'; 
        case 'blue': return 'bg-[#67BCEE]'; 
      case 'green': return 'bg-[#3BB77E]'; 
      case 'orange': return 'bg-[#F59758]'; 
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="border border-[#ECECEC] rounded-2xl p-4 relative hover:shadow-lg transition-shadow bg-white group">
      
      {/* --- Badge --- */}
      {product.badge && (
        <div className={`absolute top-0 left-0 text-white text-xs font-normal leading-3 px-3 py-2 rounded-tl-2xl rounded-br-xl z-10 ${getBadgeStyle(product.badge.color)}`}>
          {product.badge.text}
        </div>
      )}

      <div className="h-60 flex items-center justify-center mb-4 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="p-6 max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
        />
      </div>

      <div className="space-y-1">
        <p className="text-xs text-[#ADADAD] leading-6">{product.category}</p>
        <h3 className="text-[#2B2B2D] mt-2 font-semibold text-[15px] leading-6 tracking-[0.48px] line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-[#B6B6B6]">({product.rating})</span>
        </div>

        {/* Brand */}
        <div className="text-xs mt-2.5">
          <span className="text-gray-400">By </span>
          <span className={`${product.id === 1 ? "text-[#F53E32]" : "text-[#3BB77E]"} font-medium`}>{product.brand}</span>
        </div>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <span className="text-[#3BB77E] font-bold text-lg leading-6">${product.price}</span>
            {product.oldPrice && (
              <span className="text-[#ADADAD] text-[14px] leading-6 line-through">${product.oldPrice}</span>
            )}
          </div>
          
          <button className="bg-[#F53E32] cursor-pointer text-white px-4 py-2 rounded flex items-center justify-center gap-1 transition-all text-sm font-medium">
            <img src={Shopping} alt="shopping" className='w-3.5 h-3.5' />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;