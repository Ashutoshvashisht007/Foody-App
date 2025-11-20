import ProductCard from '../product/ProductCard';
import type { Product } from '../../types/types';
import Lemon from "../../assets/lemon.png"

const PopularProducts = () => {
  const categories = ['All', 'Milks & Dairies', 'Coffes & Teas', 'Pet Foods', 'Meats', 'Vegetables', 'Fruits'];

  // Dummy data based on your screenshot
  const products: Product[] = [
    {
      id: 1,
      badge: { text: 'Hot', color: 'red' },
      image: Lemon,
      category: 'Snack',
      title: 'Fresh organic villa farm lemon 500gm pack',
      rating: 4.0,
      brand: 'NestFood',
      price: 28.85,
      oldPrice: 32.8,
    },
    {
      id: 2,
      badge: { text: 'Sale', color: 'blue' },
      image: '/assets/images/hazelnut.png',
      category: 'Hodo Foods',
      title: 'Best snakes with hazel nut pack 200gm',
      rating: 3.5,
      brand: 'Stouffer',
      price: 52.85,
      oldPrice: 55.8,
    },
    {
      id: 3,
      badge: { text: 'New', color: 'green' },
      image: '/assets/images/watermelon.png',
      category: 'Snack',
      title: 'Organic fresh venila farm watermelon 5kg',
      rating: 4.0,
      brand: 'StarKist',
      price: 48.85,
      oldPrice: 52.8,
    },
    {
      id: 4,
      image: '/assets/images/apple.png',
      category: 'Vegetables',
      title: 'Fresh organic apple 1kg simla marming',
      rating: 4.0,
      brand: 'NestFood',
      price: 17.85,
      oldPrice: 19.8,
    },
    {
      id: 5,
      badge: { text: '-14%', color: 'orange' },
      image: '/assets/images/almonds.png',
      category: 'Pet Foods',
      title: 'Blue Diamond Almonds Lightly Salted Vegetables',
      rating: 4.0,
      brand: 'NestFood',
      price: 23.85,
      oldPrice: 25.8,
    },
    {
      id: 6,
      badge: { text: '-14%', color: 'orange' },
      image: '/assets/images/almonds.png',
      category: 'Pet Foods',
      title: 'Blue Diamond Almonds Lightly Salted Vegetables',
      rating: 4.0,
      brand: 'NestFood',
      price: 23.85,
      oldPrice: 25.8,
    },
    {
      id: 7,
      badge: { text: '-14%', color: 'orange' },
      image: '/assets/images/almonds.png',
      category: 'Pet Foods',
      title: 'Blue Diamond Almonds Lightly Salted Vegetables',
      rating: 4.0,
      brand: 'NestFood',
      price: 23.85,
      oldPrice: 25.8,
    },
     // ... You can add the rest of the products from the screenshot here
  ];

  return (
    <section className="py-12 mt-12">
      <div className="w-full max-w-[calc(100vw-147px)] mx-auto px-3">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-8 gap-4">
          <h2 className="text-[32px] leading-[38px] tracking-normal font-bold text-[#253D4E]">Popular Products</h2>
          
          {/* Categories Navigation */}
          <ul className="flex flex-wrap gap-4 text-sm font-medium">
            {categories.map((cat, index) => (
              <li 
                key={cat} 
                className={`cursor-pointer transition-colors text-[16px] leading-4 tracking-normal ${
                  index === 0 ? 'text-[#3BB77E] font-bold' : 'text-[#253D4E] hover:text-[#3BB77E]'
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularProducts;