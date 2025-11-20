import feature1 from '../../assets/feature1.png';
import feature2 from '../../assets/feature2.png';
import feature3 from '../../assets/feature3.png';
import feature4 from '../../assets/feature4.png';
import feature5 from '../../assets/feature5.png';

const FeaturesInfo = () => {
  const features = [
    {
      icon: <img src={feature1} alt="Feature 1" className="w-15 h-15" />,
      title: 'Best prices & offers',
      subtitle: 'Orders $50 or more',
    },
    {
      icon: <img src={feature2} alt="Feature 2" className="w-15 h-15" />,
      title: 'Free delivery',
      subtitle: '24/7 amazing services',
    },
    {
      icon: <img src={feature3} alt="Feature 3" className="w-15 h-15" />,
      title: 'Great daily deal',
      subtitle: 'When you sign up',
    },
    {
      icon: <img src={feature4} alt="Feature 4" className="w-15 h-15" />,
      title: 'Wide assortment',
      subtitle: 'Mega Discounts',
    },
    {
      icon: <img src={feature5} alt="Feature 5" className="w-15 h-15" />,
      title: 'Easy returns',
      subtitle: 'Within 30 days',
    },
  ];

  return (
    <section className="mb-17 bg-white">
      <div className="w-full max-w-[calc(100vw-147px)] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
          
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-5 rounded-xl bg-[#F4F6FA] hover:bg-gray-100 transition-colors group"
            >
              <div className="shrink-0 transition-transform group-hover:-translate-y-1">
                {feature.icon}
              </div>
              
              <div className='flex gap-2 flex-col justify-center'>
                <h3 className="font-bold text-[#242424] text-[18px] leading-5 mb-1">
                  {feature.title}
                </h3>
                <p className="text-[16px] leading-6 text-[#ADADAD] font-normal">
                  {feature.subtitle}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesInfo;