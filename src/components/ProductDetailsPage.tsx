import React from 'react';
import { ASSETS } from './assets';

interface Product {
  id: string;
  name: string;
}

interface ProductDetailsPageProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = ({ product, onBack }) => {
  return (
    <div className="flex flex-col gap-[40px] w-full max-w-[1200px] mx-auto py-[40px]">
      {/* Header with Back Button */}
      <div className="flex items-center gap-[16px]">
        <button 
          onClick={onBack}
          className="size-[40px] hover:bg-gray-50 rounded-full transition-colors flex items-center justify-center"
        >
          <div 
            className="size-[24px] bg-[#414651]"
            style={{
              maskImage: `url(${ASSETS.imgArrowLeft})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskImage: `url(${ASSETS.imgArrowLeft})`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              transform: 'rotate(180deg)',
            }}
          />
        </button>
        <h1 className="font-['IRANYekanX'] font-semibold text-[24px] leading-[32px] text-[#181d27] tracking-[-0.48px]">
          {product.name}
        </h1>
      </div>

      {/* Product Details Content */}
      <div className="bg-white border border-[#f4f4f4] rounded-[12px] p-[32px]">
        <p className="font-['IRANYekanX'] text-[16px] leading-[24px] text-[#414651]">
          جزئیات محصول {product.name} در اینجا نمایش داده می‌شود.
        </p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

