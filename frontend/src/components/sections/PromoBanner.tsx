import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'

const PromoBanner = () => {

    const data = [
        {
            desc: "Everyday Fresh & Clean with Our Products",
            bg: bg1,
        },
        {
            desc: "Make your Breakfast Healthy and Easy",
            bg: bg2,
        },
        {
            desc: "The best Organic Products Online",
            bg: bg3,
        }
    ]

  return (
    <div className="w-full max-w-[calc(100vw-147px)] mx-auto mt-[75px]">
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                data.map((item,idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-lg">
                        <img src={item.bg} alt={item.desc} className="w-full h-auto" />
                        <div className="absolute inset-0 bg-opacity-30 flex items-start top-15 gap-6 justify-center w-[225px] left-12 flex-col">
                            <p className="text-[#253D4E] font-bold text-2xl leading-7 tracking-normal">{item.desc}</p>
                            <button className='bg-[#F53E32] text-white w-26 text-start rounded-sm cursor-pointer font-bold text-3 leading-4 tracking-[0.5px] p-2'>Shop Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default PromoBanner