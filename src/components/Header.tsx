import React from 'react';
import { ASSETS } from './assets';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types
interface HeaderProps {
  user?: {
    name: string;
    avatarUrl?: string;
  };
  activeTab?: 'products' | 'dashboard';
  onTabChange?: (tab: 'products' | 'dashboard') => void;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  user = { name: 'نام و نام خانوادگی' },
  activeTab = 'products',
  onTabChange,
  className
}) => {
  return (
    <div 
      dir="rtl" 
      className={cn(
        "sticky top-0 z-50 flex flex-col w-full bg-bg-primary font-sans",
        className
      )}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-gap-32 py-gap-12 border-b border-border-secondary">
        
        {/* Right Section: Branding */}
        <div className="flex items-center gap-gap-8">
           <div className="relative size-[40px] shrink-0">
            <img 
              src={ASSETS.imgLogo} 
              alt="DIO Logo" 
              className="size-full object-contain"
            />
          </div>
          <div className="flex flex-col items-start justify-center">
            <span className="text-[20px] font-bold text-text-primary font-poppins leading-none tracking-[-0.4px]">
              DIO
            </span>
            <span className="text-[14px] text-text-quaternary leading-[20px] tracking-[-0.28px]">
              پلتفرم تحلیل رفتار
            </span>
          </div>
        </div>

        {/* Left Section: User & Notifications */}
        <div className="flex items-center gap-gap-16">
          
          {/* Notification Icon */}
          <button className="relative size-[24px] shrink-0 flex items-center justify-center hover:opacity-80 transition-opacity">
            <div className="absolute inset-[4.17%_12.51%_4.17%_12.5%]">
               <img 
                 src={ASSETS.imgNotification} 
                 alt="Notifications" 
                 className="size-full object-contain"
               />
            </div>
          </button>

          {/* User Dropdown */}
          <div className="flex items-center gap-gap-12 px-gap-12 py-gap-8 bg-primary-50 rounded-radius-12 cursor-pointer hover:bg-primary-100 transition-colors">
             <div className="relative size-[28px] shrink-0 overflow-hidden rounded-full">
               <img 
                 src={user.avatarUrl || ASSETS.imgProfile} 
                 alt="Profile" 
                 className="size-full object-cover"
               />
             </div>
             <span className="text-[15px] font-medium text-text-primary tracking-[-0.3px]">
               {user.name}
             </span>
             <div className="size-[16px] shrink-0">
               <img 
                 src={ASSETS.imgArrowDown} 
                 alt="Expand" 
                 className="size-full"
               />
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Tabs */}
      <div className="flex items-center justify-start px-gap-32 py-gap-12 gap-gap-16 border-b border-color-border bg-bg-surface">
        
        {/* Dashboard Tab */}
        <button 
          onClick={() => onTabChange?.('dashboard')}
          className={cn(
            "flex items-center justify-center gap-[8px] h-[40px] px-gap-12 py-gap-8 rounded-radius-12 transition-colors",
            activeTab === 'dashboard' 
              ? "bg-primary-100 text-primary-500" 
              : "text-text-tertiary hover:bg-gray-50"
          )}
        >
           <div className="size-[24px] shrink-0">
             <img 
               src={activeTab === 'dashboard' ? ASSETS.imgActivityBold : ASSETS.imgActivity} 
               alt="Dashboard" 
               className="size-full"
             />
           </div>
           <span className="text-[15px] font-medium tracking-[-0.3px]">
             داشبورد
           </span>
        </button>

        {/* Products Tab */}
        <button 
          onClick={() => onTabChange?.('products')}
          className={cn(
            "flex items-center justify-center gap-[8px] h-[40px] px-gap-12 py-gap-8 rounded-radius-12 transition-colors",
            activeTab === 'products' 
              ? "bg-primary-100 text-primary-500" 
              : "text-text-tertiary hover:bg-gray-50"
          )}
        >
           <div className="size-[24px] shrink-0">
             <img 
               src={activeTab === 'products' ? ASSETS.imgProductBold : ASSETS.imgProduct} 
               alt="Products" 
               className="size-full"
             />
           </div>
           <span className="text-[15px] font-medium tracking-[-0.3px]">
             محصولات
           </span>
        </button>
      </div>
    </div>
  );
};

export default Header;

