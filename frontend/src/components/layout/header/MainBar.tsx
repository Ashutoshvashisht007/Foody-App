import { ChevronDown, Heart, Search, ShoppingCart, User } from "lucide-react"
import Logo from "../../../assets/logo.png"
import { ActionButton } from "../../common/Button"

const MainBar = () => {
  return (
    <div className='w-full h-[86px] flex justify-center items-center border border-[#E9E9E9] shadow-[0_0_8px_0_rgba(51, 51, 51, 0.2)]'>
      <div className='container max-w-[1296px] w-full mx-auto flex items-center justify-between text-[rgba(0, 0, 0, 1)]'>
        <div className="relative -left-3.5 flex items-center min-w-max">
          <img src={Logo} alt="Logo" className="object-cover w-full h-full" />
        </div>

        <div className="flex flex-1 max-w-[600px] w-full h-[43px]">
          <div className="flex items-center border border-[#64B496] border-r-0 rounded-l-md overflow-hidden h-12 w-full">

            <input
              type="text"
              placeholder="Search For items..."
              className="flex-1 p-4 text-[#7A7A7A] outline-none placeholder:text-[#7A7A7A]"
            />

            <div className="hidden sm:flex w-[130px] items-center gap-2 px-[13px] font-normal text-[13px] leading-[19.5px] tracking-normal
 border-l border-gray-300 h-full bg-gray-50 text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
              <span>All Categories</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
          <button className="bg-[#F53E32] w-[45px] text-white h-12 px-4 transition-colors flex items-center justify-center border rounded-br-[5px] rounded-tr-[5px] border-[#F53E32] cursor-pointer">
              <Search className="w-5 h-5" />
            </button>
        </div>
        <div className="flex items-center gap-6 min-w-max">
            <ActionButton icon={<User className="w-5 h-5" />} label="Account" />
            <ActionButton icon={<Heart className="w-5 h-5" />} label="Wishlist" />
            <ActionButton icon={<ShoppingCart className="w-5 h-5" />} label="Cart" />
          </div>
      </div>
    </div>
  )
}

export default MainBar