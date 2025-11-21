import React, { useState } from 'react';
import { Search } from 'lucide-react';

const ProductSidebar = () => {
  const [priceRange, setPriceRange] = useState(20);

  const categories = [
    { name: 'Juice & Drinks', count: 20 },
    { name: 'Dairy & Milk', count: 54 },
    { name: 'Snack & Spice', count: 64 },
  ];

  const tags = ['Vegetables', 'Juice', 'Food', 'Dry Fruits', 'Vegetables', 'Juice'];

  return (
    <div className="bg-[#F7F7F8] p-6 rounded-lg border border-[#E9E9E9] h-fit">
      <div className="mb-7">
        <h3 className="font-bold text-#2B2B2D text-[16px] mb-7 border-b border-[#E9E9E9] pb-3">Product Category</h3>
        <ul className="space-y-3">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex items-center justify-between text-[#7A7A7A] text-sm">
              <div className="flex items-center gap-3.5">
                <input type="checkbox" className="rounded border border-[#DDDDDD] text-red-500 focus:ring-red-500" />
                <span>{cat.name}</span>
              </div>
              <span className="text-[#7A7A7A] text-sm">[{cat.count}]</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium leading-6 text-[#2B2B2D] text-[16px] mb-7.5 border-b border-[#E9E9E9] pb-3">Filter By Price</h3>
        <div className="relative h-1 bg-[#CECECE] rounded-full mb-4.5">
          <div className="absolute left-0 top-0 h-full bg-[#F53E32] w-1/2 rounded-full"></div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#F53E32] rounded-full shadow"></div>
        </div>

        <div className="flex items-center justify-between mb-5">
            <span className="text-sm leading-4.5 font-bold text-[#000000]">Price : <span className="text-[#7A7A7A] text-sm leading-4.5 font-bold">$20 - $250</span></span>
        </div>

        <button className="bg-[#F53E32] cursor-pointer hover:bg-red-600 text-white px-6 py-3 leading-4 rounded text-sm font-bold transition-colors">
          Filter
        </button>
      </div>
      <div>
        <h3 className="font-bold text-[#2B2B2D] text-[16px] mb-3.5 border-b border-[#E9E9E9] pb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, idx) => (
            <span key={idx} className="px-4 py-1.5 bg-white border border-[#E9E9E9] text-[#7A7A7A] text-sm font-regular leading-7.5 rounded hover:text-red-500 hover:border-red-500 cursor-pointer transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductSidebar;