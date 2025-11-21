import type { FooterColumnProps } from '../../../types/types';

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h3 className="font-bold text-[18px] text-[#000000] leading-6 tracking-[0.48px] mb-5">{title}</h3>
      <ul className="space-y-5">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href="#" 
              className="text-[#777777] hover:text-gray-800 leading-6.5 tracking-[0.48px] text-sm transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;