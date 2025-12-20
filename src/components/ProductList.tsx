import React, { useState, useRef, useEffect } from 'react';
import { ASSETS } from './assets';
import ContextMenu from './ContextMenu';

interface Product {
  id: string;
  name: string;
}

interface ProductListProps {
  products: Product[];
  onAddProduct: () => void;
  onProductClick: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddProduct, onProductClick }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-[40px] w-full max-w-[1200px] mx-auto py-[40px]">
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        {/* Title on the LEFT */}
        <h1 className="font-['IRANYekanX'] font-semibold text-[24px] leading-[32px] text-[#181d27] tracking-[-0.48px]">
          لیست محصولات
        </h1>

        {/* Add Button on the RIGHT */}
        <button 
          onClick={onAddProduct}
          className="h-[38px] px-[12px] py-[8px] border border-[#004eeb] rounded-[12px] flex items-center justify-center gap-[8px] hover:bg-[#ebf1ff] transition-colors"
        >
          <span className="font-['IRANYekanX'] font-medium text-[15px] leading-[24px] text-[#004eeb] tracking-[-0.3px]">
            افزودن محصول
          </span>
          <div className="size-[24px] relative">
            {/* Using Mask for exact Primary-500 color on the icon */}
            <div 
              className="size-full bg-[#004eeb]"
              style={{
                maskImage: `url(${ASSETS.imgAddCircle})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${ASSETS.imgAddCircle})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
          </div>
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-[16px] w-full">
        {products.map((product) => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product)}
            className="w-full h-[64px] bg-white border border-[#f4f4f4] rounded-[12px] px-[16px] flex items-center justify-between hover:border-[#d5d7da] transition-colors relative cursor-pointer"
          >
            {/* Content (Name & Icon) on the LEFT */}
            <div className="flex items-center gap-[8px]">
              <div className="size-[40px] bg-[#ebf1ff] rounded-[24px] flex items-center justify-center">
                 <div className="size-[24px] relative">
                   <img src={ASSETS.imgCubeScan} alt="" className="size-full object-contain" />
                 </div>
              </div>
              <span className="font-['IRANYekanX'] font-semibold text-[16px] leading-[24px] text-[#181d27] tracking-[-0.32px]">
                {product.name}
              </span>
            </div>

            {/* Actions (Arrow & More) on the RIGHT */}
            <div className="flex items-center gap-[16px]">
              <div className="relative" ref={activeMenuId === product.id ? menuRef : null}>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenuId(activeMenuId === product.id ? null : product.id);
                  }}
                  className="flex flex-col gap-[2px] justify-center items-center size-[24px] hover:bg-gray-50 rounded-full transition-colors"
                >
                  <div className="size-[4px] bg-[#414651] rounded-full" />
                  <div className="size-[4px] bg-[#414651] rounded-full" />
                  <div className="size-[4px] bg-[#414651] rounded-full" />
                </button>
                
                {activeMenuId === product.id && (
                  <ContextMenu 
                    isOpen={true}
                    onClose={() => setActiveMenuId(null)}
                    onEdit={() => {
                      console.log('Edit', product.id);
                      setActiveMenuId(null);
                    }}
                    onDelete={() => {
                      console.log('Delete', product.id);
                      setActiveMenuId(null);
                    }}
                  />
                )}
              </div>
              
              <div className="w-[1px] h-[24px] bg-[#d5d7da] mx-[8px]" /> {/* Divider */}

              <button className="size-[24px] hover:bg-gray-50 rounded-full transition-colors flex items-center justify-center">
                <div 
                  className="size-full bg-[#414651]"
                  style={{
                    maskImage: `url(${ASSETS.imgArrowLeft})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: `url(${ASSETS.imgArrowLeft})`,
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                  }}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
