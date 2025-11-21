

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      image: '/assets/images/product-hazelnut.png', // Replace with your assets
      category: 'Snacks',
      title: 'Best snakes with hazel nut mix pack 200gm',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      id: 2,
      image: '/assets/images/product-nuts.png',
      category: 'Snacks',
      title: 'Sweet snakes crunchy nut mix 250gm pack',
      price: 100.00,
      oldPrice: 110.00,
    },
    {
      id: 3,
      image: '/assets/images/product-lemon.png',
      category: 'Snacks',
      title: 'Best snakes with hazel nut mix pack 200gm',
      price: 120.25,
      oldPrice: 123.25,
    },
    {
      id: 4,
      image: '/assets/images/product-juice.png',
      category: 'Snacks',
      title: 'Sweet snakes crunchy nut mix 250gm pack',
      price: 100.00,
      oldPrice: 110.00,
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-3">
        
        <div className="text-center mb-7.5">
          <h2 className="text-[32px] leading-9 tracking-[0.48px] font-bold text-[#2B2B2D] mb-4">Popular Products</h2>
          <p className="text-[#7A7A7A] max-w-2xl mx-auto leading-5.5 tracking-[0.48px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et viverra maecenas accumsan lacus vel facilisis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group border border-[#E9E9E9] rounded-xl p-4 transition-all hover:shadow-xl hover:border-transparent"
            >
              
              <div className="relative bg-[#F7F7F8] border border-[#E9E9E9] rounded-lg h-64 flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-48 object-contain mix-blend-multiply" 
                />
                
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 translate-y-2 transition-all duration-300">
                   <button className="w-10 h-10 border border-[#E9E9E9] bg-[#F7F7F8] rounded-full flex items-center justify-center text-green-60 transition-colors">
                      .....
                   </button>
                </div>
              </div>

              <div className="text-center px-2">
                <p className="text-xs text-[#777777] leading-4.5 tracking-[0.48px] uppercase mb-5">
                  {product.category}
                </p>
                <p className='text-[#F5885F] mb-4.5'>_ _ _ _ _</p>
                <h3 className="text-[#2B2B2D] font-medium text-[15px] leading-6 tracking-[0.48px] mb-4 h-11">
                  {product.title}
                </h3>
                
                <div className="flex items-center justify-center gap-1.5">
                  <span className="text-[#F53E32] text-center font-bold text-[16px] leading-7 tracking-[0.48px]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-[#7A7A7A] text-center text-sm leading-7 tracking-[0.48px] line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedProducts;