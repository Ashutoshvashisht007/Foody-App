import React, { useState } from 'react';
import { Star, Plus, Minus } from 'lucide-react';
import Lemon from "../../assets/lemon.png"

const ProductSection = () => {
    const [quantity, setQuantity] = useState(1);
    const [activeSize, setActiveSize] = useState('60g');
    const [activeTab, setActiveTab] = useState('Description');

    const sizes = ['50g', '60g', '80g', '120g', '200g'];

    const productData = [
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
        {
            name: "Brand",
            desc: "ESTA BETTERU CO"
        },
    ]

    return (
        <div className=''>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-6.5">

                <div className="bg-[#F7F7F8] rounded-lg border border-[#E9E9E9] flex items-center justify-center p-8 min-h-[500px]">
                    <img src={Lemon} alt="Hazelnut & Chocolate" className="max-w-full max-h-[400px] object-contain drop-shadow-lg" />
                </div>
                <div>
                    <h1 className="text-[22px] leading-8 tracking-[0.48px] md:text-3xl font-normal text-[#2B2B2D] mb-4">
                        Seeds Of Change Oraganic Quinoa, Brown
                    </h1>
                    <p className="text-[#7A7A7A] text-sm mb-6 border-b border-[#E9E9E9] pb-5 leading-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?
                    </p>

                    <div className="flex items-center gap-2.5 mb-5">
                        <div className="flex text-[#F5885F] gap-1">
                            {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <span className="text-[#7A7A7A] text-sm leading-6.5">( 75 Review )</span>
                    </div>

                    <div className="space-y-3 mb-8.5 text-[16px] leading-6">
                        {
                            productData.map((item, idx) => (
                                <div key={idx} className="grid grid-cols-[100px_1fr] gap-2.5">
                                    <span className="flex items-center justify-between font-bold text-gray-800">{item.name}<span>:</span> </span>
                                    <span className="text-[#777777]">{item.desc}</span>
                                </div>
                            ))
                        }

                    </div>

                    <div className="flex items-center gap-1.5 mb-5.5">
                        <span className="text-[#F53E32] text-[24px] font-bold leading-7">$120.25</span>
                        <span className="text-[#7A7A7A] text-[16px] leading-7 line-through decoration-1">$123.25</span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-6">
                        <span className="font-medium text-[#2B2B2D] text-[16px] leading-6">Size/Weight :</span>
                        <div className="flex flex-wrap gap-1">
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setActiveSize(size)}
                                    className={`text-xs leading-3 px-2.5 py-1 rounded border transition-colors cursor-pointer ${activeSize === size
                                        ? 'bg-[#F53E32] text-white border-[#F53E32]'
                                        : 'bg-white text-[#777777] border-[#E9E9E9] hover:border-red-300'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center bg-white gap-2">
                            <input
                                type="text"
                                value={quantity}
                                readOnly
                                className="w-10 px-1 py-2.5 text-center text-sm text-[#000000] outline-none border border-[#E9E9E9] rounded"
                            />
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-1 py-px cursor-pointer text-[#000000] hover:text-red-500 border border-[#E9E9E9] rounded"
                                >
                                    <Minus className="w-3 h-3" />
                                </button>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-1 py-px cursor-pointer text-[#000000] hover:text-red-500 border border-[#E9E9E9] rounded"
                                >
                                    <Plus className="w-3 h-3" />
                                </button>
                            </div>
                        </div>

                        <button className="bg-[#F53E32] cursor-pointer leading-4 hover:bg-red-600 text-white px-6 py-3 rounded text-sm font-bold transition-colors shadow-lg shadow-red-100">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="border border-[#E9E9E9] rounded-lg p-6">
                <div className="flex gap-8 border-b border-[#DEE2E6] mb-8">
                    {['Description', 'Information', 'Review'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 font-semibold text-[17px] leading-6 mb-5.5 transition-colors relative cursor-pointer ${activeTab === tab ? 'text-[#F53E32]' : 'text-[#2B2B2D] hover:text-red-500'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && <span className="absolute -bottom-[23px] left-0 w-full h-0.5 bg-[#64B496]"></span>}
                        </button>
                    ))}
                </div>

                <div className="text-[#7A7A7A] text-sm leading-7 tracking-[0.48px] space-y-7">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit dignissimos consectetur quae in perferendis doloribusdebitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.
                    </p>

                    <div>
                        <h4 className="text-[#2B2B2D] text-[16px] leading-6 tracking-[0.48px] font-bold mb-5.5">Packaging & Delivery</h4>
                        <p className="border-t border-[#E9E9E9] text-[#7A7A7A] leading-6 tracking-[0.48px] pt-7 mt-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;