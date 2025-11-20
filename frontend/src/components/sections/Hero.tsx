import Leaf from "../../assets/tl.png";
import Couliflower from "../../assets/couliflower.png";
import BottomLeft from "../../assets/bl.png";
import BottomMid from "../../assets/bm.png";
import TopMid from "../../assets/tm.png";
import Arrow from "../../assets/arrow.png";

const Hero = () => {
    return (
        <section className="relative h-[851px] w-screen bg-[#F0F0F0] overflow-hidden pt-16 pb-0 md:pt-24 md:pb-0">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 opacity-50">
                <img src={Leaf} alt="" className="w-[50px] h-[50px]" />
            </div>

            <div className="absolute -top-2 left-[700px] opacity-50">
                <img src={TopMid} alt="" className="w-20 h-20 rotate-12" />
            </div>

            <div className="absolute bottom-23 left-[55%] transform -translate-x-1/2 opacity-40">
                <img src={BottomMid} alt="" className="w-25 h-25" />
            </div>

            <div className="absolute left-0 bottom-4 opacity-50 hidden md:block">
                <img src={BottomLeft} alt="" className="w-25 h-25 -rotate-7" />
            </div>


            <div className="container mt-[250px] md:ml-[100px] px-4 h-full">
                <div className="flex flex-col md:flex-row items-center justify-between relative z-10">

                    <div className="w-full md:w-1/2 mb-12 md:mb-24 text-center md:text-left">

                        <div className="mb-[18px] text-sm md:text-base font-bold text-gray-800 flex items-center justify-center md:justify-start gap-2">
                            <span className="text-[#F53E32] border-b-2 border-[#F53E32] pb-0.5">100%</span>
                            <span className='font-bold text-[20px] leading-6 tracking-[0.48px]'>Organic Vegetables</span>
                        </div>

                        <h1 className="text-[55px] leading-[68px] tracking-[0.48px] md:text-6xl font-extrabold text-gray-900 mb-[25px]">
                            The best way to <br />
                            stuff your wallet.
                        </h1>

                        <p className="text-[#7A7A7A] mb-[48.5px] max-w-md mx-auto md:mx-0 text-[15px] font-normal md:text-base tracking-[0.48px] leading-[26.25px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                        </p>

                        <div className="bg-white rounded-full h-16 shadow-md max-w-md mx-auto md:mx-0 flex items-center">
                            <div className="pl-4 text-gray-400">
                                <img src={Arrow} alt="Arrow Icon" className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 px-4 py-2 text-[#838383] outline-none bg-transparent placeholder:text-xs md:placeholder:text-sm"
                            />
                            <button className="bg-[#3BB77E] cursor-pointer h-full w-[150px] text-white px-6 rounded-full text-sm font-semibold transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-0 bottom-0 absolute">
                <img
                    src={Couliflower}
                    alt="Fresh Organic Vegetables"
                    className="object-contain rotate-[2.73deg] max-w-[500px] md:max-w-[500px]"
                />
            </div>
        </section>
    )
}

export default Hero