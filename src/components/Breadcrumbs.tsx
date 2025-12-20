import React from 'react';
import { ASSETS } from './assets';

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div className="flex items-center gap-[8px]">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div 
              className="size-[16px] shrink-0"
              style={{
                maskImage: `url(${ASSETS.imgChevronLeft})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${ASSETS.imgChevronLeft})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                backgroundColor: '#535862'
              }}
            />
          )}
          <span 
            className={`
              font-['IRANYekanX'] text-[14px] leading-[32px] tracking-[-0.28px]
              ${item.isActive 
                ? 'font-medium text-[#181d27]' 
                : 'font-normal text-[#535862] cursor-pointer hover:text-[#181d27] transition-colors'
              }
            `}
            onClick={item.isActive ? undefined : item.onClick}
          >
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;

