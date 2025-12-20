import React from 'react';
import { ASSETS } from './assets';

export type ServiceStatus = 'active' | 'inactive' | 'pending' | 'coming_soon' | 'locked';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  status: ServiceStatus;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  status, 
  onClick 
}) => {
  // Styles based on status
  const getStatusConfig = (status: ServiceStatus) => {
    switch (status) {
      case 'active':
        return {
          badgeBg: 'bg-[#edfcf2]',
          badgeText: 'text-[#16b364]',
          badgeLabel: 'فعال',
          isInteractive: true
        };
      case 'inactive':
        return {
          badgeBg: 'bg-[#f5f5f5]',
          badgeText: 'text-[#a4a7ae]',
          badgeLabel: 'غیر فعال',
          isInteractive: true // Can click to see inactive state details if needed, or false
        };
      case 'pending':
        return {
          badgeBg: 'bg-[#fef6ee]',
          badgeText: 'text-[#ef6820]',
          badgeLabel: 'در انتظار',
          isInteractive: true
        };
      case 'coming_soon':
        return {
          badgeBg: 'bg-[#f5f5f5]',
          badgeText: 'text-[#a4a7ae]',
          badgeLabel: 'به زودی',
          isInteractive: false
        };
      case 'locked':
        return {
          badgeBg: 'bg-[#e9eaeb]',
          badgeText: 'text-[#717680]',
          badgeLabel: 'قفل',
          isInteractive: false
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div 
      onClick={config.isInteractive ? onClick : undefined}
      className={`
        relative w-full bg-white rounded-[12px] p-[2px] shadow-[0px_6px_12px_0px_rgba(0,0,0,0.04)]
        flex flex-col gap-0 overflow-hidden group transition-all duration-300
        ${config.isInteractive ? 'cursor-pointer hover:shadow-md' : 'cursor-default'}
      `}
    >
      {/* Top Section: Status Badge & Icon */}
      <div className="flex items-center justify-between p-[16px] pb-0 h-[80px] !items-center">
        {/* Icon Placeholder or Image - Swapped to appear on Right in RTL */}
        <div className="size-[48px] flex items-center justify-center shrink-0">
          {icon ? (
            <img src={icon} alt="" className="size-full object-contain" />
          ) : (
            <div className="size-full bg-[#e9eaeb] rounded-[8px]" />
          )}
        </div>

        {/* Status Badge */}
        <div className={`
          flex items-center justify-center px-[12px] py-[4px] h-[28px] rounded-[40px] shrink-0
          ${config.badgeBg}
        `}>
          <span className={`
            font-['IRANYekanX'] font-semibold text-[12px] leading-[18px] tracking-[-0.24px]
            ${config.badgeText}
          `}>
            {config.badgeLabel}
          </span>
        </div>
      </div>

      {/* Bottom Section: Title, Desc & Action */}
      <div className={`
        mt-[16px] p-[16px] rounded-[10px] flex items-center justify-between
        transition-all duration-300
        ${config.isInteractive 
          ? 'bg-[#fafafa] group-hover:bg-gradient-to-l group-hover:from-[#ebf1ff] group-hover:to-white' 
          : 'bg-[#fafafa]'
        }
      `}>
        {/* Text Content */}
        <div className="flex flex-col items-start gap-[8px] text-right flex-1">
          <h3 className="font-['IRANYekanX'] font-semibold text-[16px] leading-[18px] text-[#181d27] tracking-[-0.32px]">
            {title}
          </h3>
          <p className="font-['IRANYekanX'] font-medium text-[12px] leading-[18px] text-[#414651] tracking-[-0.24px]">
            {description}
          </p>
        </div>

        {/* Action Button (Arrow or Lock) */}
        <div className={`
          size-[40px] rounded-[40px] flex items-center justify-center
          transition-colors duration-300
          ${config.isInteractive 
            ? 'group-hover:bg-white group-hover:border group-hover:border-[#ebf1ff]' 
            : ''
          }
        `}>
            {status === 'locked' ? (
                 <div 
                 className="size-[24px] bg-[#717680]"
                 style={{
                   maskImage: `url(${ASSETS.imgIconLock})`,
                   maskSize: 'contain',
                   maskRepeat: 'no-repeat',
                   maskPosition: 'center',
                   WebkitMaskImage: `url(${ASSETS.imgIconLock})`,
                   WebkitMaskSize: 'contain',
                   WebkitMaskRepeat: 'no-repeat',
                   WebkitMaskPosition: 'center',
                 }}
               />
            ) : status !== 'coming_soon' ? (
                <div 
                className="size-[20px] bg-[#181d27]"
                style={{
                  maskImage: `url(${ASSETS.imgChevronLeft})`,
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: `url(${ASSETS.imgChevronLeft})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                }}
              />
            ) : null}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

