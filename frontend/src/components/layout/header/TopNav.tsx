import { ChevronDown } from "lucide-react";
import Img from "../../../assets/Icon.png"
import Phone from "../../../assets/phone.png"

const TopNav = () => {

  const navLinks = [
    { name: 'Home', hasDropdown: false },
    { name: 'Category', hasDropdown: true },
    { name: 'Products', hasDropdown: true },
    { name: 'Pages', hasDropdown: true },
    { name: 'Blog', hasDropdown: true },
    { name: 'Elements', hasDropdown: true },
  ];

  return (
    <div className='w-full h-[55px] flex justify-center items-center border border-[#E9E9E9] shadow-[0_0_8px_0_rgba(51, 51, 51, 0.2)]'>
      <div className="container max-w-[1296px] mx-auto flex items-center justify-between text-[rgba(0, 0, 0, 1)]">
        <button className="w-[35px] h-[35px] p-2 border border-[#E9E9E9] hover:bg-gray-50 transition-colors rounded-[5px] cursor-pointer flex items-center justify-center">
          <img src={Img} alt="Hamburger" className="w-[22.48px] h-[22px] text-[#2B2B2D]" />
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href="#" 
              className="flex items-center justify-center gap-1 hover:text-gray-500 transition-colors"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-center   gap-2 text-sm font-medium">
          <img src={Phone} alt="phone" className="w-[15px] h-[15px] text-[rgba(33, 37, 41, 1)]" />
          <span>+123 ( 456 ) ( 7890 )</span>
        </div>
      </div>
    </div>
  )
}

export default TopNav