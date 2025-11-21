import { useNavigate } from "react-router-dom"
import type { NavbarData } from "../../types/types";

const ProductNavbar = ({NavbarData} : {NavbarData: NavbarData}) => {

    const navigate = useNavigate();

    return (
        <div className="bg-red-500 w-full py-6 mb-20">
            <div className="w-full max-w-[calc(100vw-210px)] mx-auto px-4 flex justify-between items-center text-white">
                <h1 className="text-[19px] font-bold">{NavbarData.name}</h1>
                <div className="text-sm font-medium">
                    <span className="cursor-pointer" onClick={() => navigate("/")}>{NavbarData.main} - </span>
                    <span>{NavbarData.page}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductNavbar