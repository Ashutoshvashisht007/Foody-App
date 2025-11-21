import { MapPin, Phone } from 'lucide-react';
import FooterColumn from './FooterColumn';
import TomatoTR from "../../../assets/TomatoTR.png"
import TomatoLM from "../../../assets/TomatoLM.png"
import Chilli from "../../../assets/Chilli.png"
import LogoFooter from "../../../assets/logoFooter.png"
import Text from "../../../assets/text.png"
import Send from "../../../assets/send.png"
import Facebook from "../../../assets/facebook.png"
import Instagram from "../../../assets/instagram.png"
import X from "../../../assets/x.png"
import Browser from "../../../assets/browser.png"
import FooterImg from "../../../assets/FooterImg.jpg"

const Footer = () => {
    return (
        <footer className="bg-[#F7F7F8] border-t border-[#E9E9E9] mb-7 pt-20 pb-8 relative">
            <div className='w-full max-w-[calc(100vw-300px)] mx-auto'>

                <div className="absolute -top-7 right-8 opacity-100 pointer-events-none">
                    <img src={TomatoTR} alt="" className="w-17.5 h-15" />
                </div>
                <div className="absolute bottom-13 right-14 opacity-100 pointer-events-none">
                    <img src={Chilli} alt="" className="w-30 h-15" />
                </div>
                <div className="absolute bottom-1/2 left-0 opacity-100 pointer-events-none">
                    <img src={TomatoLM} alt="" className="w-15 h-15" />
                </div>


                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_2fr] gap-10 mb-16 w-full">

                        <div className="">
                            <div className="flex items-center gap-1">
                                <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                                    <img src={LogoFooter} alt="Foodzy" className="object-cover w-full h-full" />
                                </div>
                                <div className='flex flex-col gap-2 items-start justify-center mt-2'>
                                    <h2 className="text-xl font-bold text-[#000000] leading-[18.5px] tracking-[0.48px]">Foodzy</h2>
                                    <p className="text-[10px] font-semibold [text-edge:cap] [leading-trim:cap] text-[#818181]">A Treasure of Tastes</p>
                                </div>
                            </div>

                            <p className="text-[#7A7A7A] text-sm leading-6 mt-2">
                                FoodTrove is the biggest market of grocery products. Get your daily needs from our store.
                            </p>

                            <div className="mt-6 space-y-4 pt-2">
                                <div className="flex items-start gap-3 text-sm text-[#777777]">
                                    <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className="text-sm leading-6.5 tracking-[0.48px]">51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#777777]">
                                    <img src={Text} alt='mail' className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className='text-sm leading-6.5 tracking-[0.48px]'>example@email.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-[#777777]">
                                    <Phone className="w-5 h-5 text-red-500 shrink-0" />
                                    <span className='text-sm leading-6.5 tracking-[0.48px]'>+91 123 4567890</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-10 w-full'>
                            <FooterColumn
                                title="Company"
                                links={['About Us', 'Delivery Information', 'Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Support Center']}
                            />

                            <FooterColumn
                                title="Category"
                                links={['Dairy & Bakery', 'Fruits & Vegetable', 'Snack & Spice', 'Juice & Drinks', 'Chicken & Meat', 'Fast Food']}
                            />

                            <div>
                                <h3 className="font-bold text-xl text-gray-900 mb-6">Subscribe Our Newsletter</h3>
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full bg-white border border-[#E9E9E9] rounded px-4 py-3 text-sm outline-none transition-colors"
                                    />
                                    <img src={Send} className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-800 cursor-pointer" />
                                </div>

                                <div className="flex gap-2 mb-6">
                                    {[Facebook, X, Browser, Instagram].map((Icon, idx) => (
                                        <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center bg-white border border-[#E1DFDF] rounded">
                                            <img src={Icon} className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>

                                <div className="grid grid-cols-5 gap-3">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <div key={item} className="aspect-square rounded overflow-hidden">
                                            <img
                                                src={FooterImg}
                                                alt="Gallery"
                                                className="w-18 h-full object-cover hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="border-t border-[#E9E9E9] pt-8 text-center">
                        <p className="text-[#000000] text-sm font-medium">
                            © 2025 <span className="text-[#F53E32]">foodzy</span>, All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;