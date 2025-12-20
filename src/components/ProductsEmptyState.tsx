import React from 'react';
import { ASSETS } from './assets';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductsEmptyStateProps {
  onAddProduct?: () => void;
  className?: string;
}

const ProductsEmptyState: React.FC<ProductsEmptyStateProps> = ({ 
  onAddProduct,
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center w-full h-full min-h-[500px]", className)}>
      <div className="flex flex-col items-center gap-[40px] max-w-[334px]">
        
        {/* Illustration & Text */}
        <div className="flex flex-col items-center gap-gap-16 w-full text-center">
          <div className="relative size-[120px] shrink-0">
             <img 
               src={ASSETS.imgProductsEmpty} 
               alt="No Products" 
               className="size-full object-contain"
             />
          </div>
          <p className="text-[20px] leading-[28px] text-[#232323] font-sans font-normal tracking-[-0.4px]">
            همین حالا اولین محصولت رو اضافه کن و به پژوهش کردن بپرداز!
          </p>
        </div>

        {/* CTA Button */}
        <button 
          onClick={onAddProduct}
          className="flex items-center justify-center gap-gap-8 h-[48px] px-gap-12 py-gap-8 bg-primary-500 rounded-radius-12 hover:bg-primary-700 transition-colors text-bg-surface group cursor-pointer"
        >
          <span className="text-[15px] font-medium font-sans leading-[24px] tracking-[-0.3px]">
            افزودن محصول
          </span>
          <div className="relative size-[24px] shrink-0">
             <img 
               src={ASSETS.imgAddCircle} 
               alt="" 
               className="size-full object-contain brightness-0 invert" 
               // Note: brightness-0 invert is a tailwind trick to make black icons white if the SVG isn't already white. 
               // Since I can't check the SVG color directly, assuming the design needs white icon on blue button.
             />
          </div>
        </button>

      </div>
    </div>
  );
};

export default ProductsEmptyState;

