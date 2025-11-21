import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Star } from 'lucide-react';
import ProductNavbar from '../components/product/ProductNavbar';
import type { NavbarData } from '../types/types';
import CardLogs from "../assets/CardLogos.png"

const Checkout = () => {

  const NavbarData: (NavbarData) = {
    name: "Checkout",
    main: "Home",
    page: "Checkout"
  }

  const Charges = [
    {
      name: "Sub Total",
      price: "$80.00",
    },
    {
      name: "Delivery Charges",
      price: "$20.00"
    }
  ]

  const CartItems = [
    {
      id: 5464,
      image: "/src/assets/ashutosh.png",
      title: "Dates Value Pack Pouch",
      stars: 4,
      currentPrice: "$120.25",
      originalPrice: "$123.25"
    },
    {
      id: 5754,
      image: "/src/assets/ashutosh.png",
      title: "Smoked Honey Spiced Nuts",
      stars: 4,
      currentPrice: "$120.25",
      originalPrice: "$123.25"
    }
  ]

  const Flat = [
    {
      id: 135,
      title: "Free Shipping",
      rate: "$0.00",
    },
    {
      id: 8678,
      title: "Flat Rate",
      rate: "$58.45",
    }
  ]

  return (
    <PageLayout>
      <ProductNavbar NavbarData={NavbarData} />

      <div className="w-full max-w-[calc(100vw-210px)] mx-auto px-3 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="border border-[#E9E9E9] rounded-lg p-6 bg-white">
              <h3 className="font-bold text-[20px] leading-6 text-[#000000] mb-4.5">Summary</h3>
              <div className="space-y-2.5 border-b border-[#E9E9E9] pb-4 mb-4 text-sm">
                {
                  Charges.map((charge, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-[#7A7A7A]">{charge.name}</span>
                      <span className="font-bold text-[#000000]">{charge.price}</span>
                    </div>
                  ))
                }
              </div>

              <div className="flex justify-between text-[16px] font-bold mb-9.5">
                <span className='text-[#2B2B2D]'>Total Amount</span>
                <span className='text-[#000000]'>$80.00</span>
              </div>
              <div className="space-y-4">
                <div className='flex flex-col gap-4'>
                  {
                    CartItems.map((items, _) => (
                      <div key={items.id} className="flex gap-4">
                        <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center shrink-0">
                          <img src="/assets/images/product-thumb-1.jpg" alt="Dates" className="w-12 h-12 object-contain mix-blend-multiply" />
                        </div>
                        <div className='flex flex-col gap-1'>
                          <p className="text-sm font-medium text-[#000000] leading-4.5 tracking-[0.48px] line-clamp-1">{items.title}</p>
                          <div className="flex text-[#F4A263] text-xs mt-1">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                          </div>
                          <div className="text-sm">
                            <span className="text-[#64B496] font-bold text-[16px] leading-6">{items.currentPrice}</span>
                            <span className="text-[#7A7A7A] line-through ml-1 text-xs">{items.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="border border-[#E9E9E9] rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-lg text-[#000000] mb-5">Delivery Method</h3>
              <p className="text-[13px] font-light leading-6 text-[#7A7A7A] mb-4">Please select the preferred shipping method to use on this order.</p>

              <div className="grid grid-cols-2 gap-4">
                {
                  Flat.map((f, _) => (
                    <label key={f.id} className="flex flex-col items-start justify-center gap-2 cursor-pointer">
                      <div className="font-medium text-gray-700">{f.title}</div>
                      <div className="text-sm flex gap-2.5 items-center">
                        <input type="radio" name="delivery" defaultChecked className="text-[#F53E32] focus:ring-[#F53E32] accent-[#F53E32]" />
                        <div className="text-xs text-[#7A7A7A]">Rate - {f.rate}</div>
                      </div>

                    </label>
                  ))
                }
              </div>
            </div>

            <div className="border border-[#E9E9E9] rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-xl leading-6 text-#000000 mb-5">Payment Method</h3>
              <p className="text-[13px] font-light leading-6 text-[#7A7A7A] mb-4">Please select the preferred payment method to use on this order.</p>

              <div className="space-y-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="accent-[#F53E32] w-4 h-4" />
                  <span className="text-sm leading-4 text-[#7A7A7A]">Cash On Delivery</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" className="accent-[#F53E32] w-4 h-4" />
                  <span className="text-sm leading-4 text-[#7A7A7A]">UPI</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="payment" className="accent-[#F53E32] w-4 h-4" />
                  <span className="text-sm leading-4 text-[#7A7A7A]">Bank Transfer</span>
                </label>
              </div>
            </div>

            <div className="border border-[#E9E9E9] rounded-lg p-4 bg-white">
              <h3 className="font-semibold text-xl leading-6 text-[#000000] mb-4.5">Payment Method</h3>
              <img src={CardLogs} className="w-83 h-10 object-contain rounded px-2 py-1" />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="border border-[#E9E9E9] rounded-lg p-8 bg-white">
              <h2 className="text-xl leading-5 font-semibold text-[#2B2B2D] mb-6">Customer</h2>
              <p className="text-[15px] leading-3.5 text-[#2B2B2D] mb-6">Checkout Options</p>

              <h3 className="font-semibold text-[#2B2B2D] text-xl leading-5 mb-4.5">Returning Customer</h3>

              <div className="space-y-4 w-full">
                <div>
                  <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-3">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-[#E9E9E9] rounded px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-4.5">OTP</label>
                  <input
                    type="text"
                    placeholder="Enter your OTP"
                    className="w-full border border-[#E9E9E9] rounded px-4 py-3.5 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div className='mt-8 w-full flex items-center justify-center'>
                  <button className="bg-[#F53E32] text-white px-9 py-3 rounded text-sm mx-auto font-bold transition-colors cursor-pointer">
                    Verify
                  </button>
                </div>
              </div>
            </div>

            <div className="border border-[#E9E9E9] rounded-lg p-6 bg-white">
              <h2 className="text-xl font-semibold text-[#2B2B2D] mb-6 leading-6">Billing Details</h2>
              <p className="text-[15px] leading-3.5 text-[#2B2B2D] mb-6.5">Checkout Options</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8.5 mb-7">
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">First Name*</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full border border-[#E9E9E9] rounded px-4 leading-[100%] py-4 text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">Last Name*</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full border border-[#E9E9E9] rounded px-4 leading-[100%] py-4 text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className='mb-7'>
                  <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">Address</label>
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    className="w-full border border-[#E9E9E9] rounded p-4 text-sm focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8.5 mb-7">
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">City *</label>
                    <select className="w-full border border-[#E9E9E9] rounded px-2.5 py-3 text-sm text-gray-500 focus:outline-none focus:border-red-500 bg-white">
                      <option>City</option>
                      <option>New York</option>
                      <option>London</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">Post Code</label>
                    <input
                      type="text"
                      placeholder="Post Code"
                      className="w-full border border-[#E9E9E9] rounded p-4 text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8.5">
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">Country *</label>
                    <select className="w-full border border-[#E9E9E9] rounded px-2.5 py-4 text-sm text-gray-500 focus:outline-none focus:border-red-500 bg-white">
                      <option>Country</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[15px] leading-3.5 font-regular text-[#2B2B2D] mb-1.5">Region State</label>
                    <select className="w-full border border-[#E9E9E9] rounded px-2.5 py-4 text-sm text-gray-500 focus:outline-none focus:border-red-500 bg-white">
                      <option>Region/State</option>
                      <option>California</option>
                      <option>Texas</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button type="button" className="bg-[#F53E32] text-white px-8 py-3 leading-4 text-sm cursor-pointer rounded font-bold transition-colors shadow-lg shadow-red-100 mb-70">
            Place Order
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Checkout;