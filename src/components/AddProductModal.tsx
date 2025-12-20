import React, { useState } from 'react';
import { ASSETS } from './assets';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface AddProductModalProps {
  onClose: () => void;
  onAdd: (productName: string) => void;
  isOpen: boolean;
}

const AddProductModal: React.FC<AddProductModalProps> = ({ onClose, onAdd, isOpen }) => {
  const [productName, setProductName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div 
        className="bg-white flex flex-col gap-[16px] p-[24px] relative rounded-[24px] w-[486px] shadow-lg"
        dir="rtl"
      >
        {/* Close Button Row - Figma: Left (So justify-end in RTL) */}
        <div className="flex items-center justify-end w-full">
          <button 
            onClick={onClose}
            className="relative size-[32px] shrink-0 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center group"
          >
            <img 
              src={ASSETS.imgClose} 
              alt="Close" 
              className="size-[28px] object-contain opacity-60 group-hover:opacity-100 transition-opacity"
            />
          </button>
        </div>

        {/* Header Icon Row - Figma: Right (So justify-start in RTL) */}
        <div className="flex items-center justify-start w-full">
          <div className="bg-[#f2f6ff] flex items-center justify-center rounded-[40px] shrink-0 size-[64px]">
            <div className="size-[40px] relative">
              <img 
                src={ASSETS.imgBoxAdd} 
                alt="Add Product" 
                className="size-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-[24px] items-start w-full">
          {/* Title Text */}
          <div className="flex flex-col gap-[6px] items-start w-full text-right">
            <h2 className="font-['IRANYekanX'] font-bold text-[28px] leading-[40px] text-[#181d27] tracking-[-0.56px]">
              افزودن محصول
            </h2>
            <p className="font-['IRANYekanX'] font-normal text-[15px] leading-[24px] text-[#535862] tracking-[-0.3px]">
              نام محصول خود را وارد کنید.
            </p>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-[32px] w-full">
            <div className="w-full">
              <input 
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="مثلا دیجیکالا"
                className="w-full h-[48px] bg-white border border-[#d5d7da] rounded-[10px] px-[12px] py-[8px] text-right font-['IRANYekanX'] text-[15px] text-[#181d27] placeholder:text-[#85888e] outline-none focus:border-[#004eeb] hover:border-[#85888e] transition-colors"
              />
            </div>

            <button 
              onClick={() => {
                if (productName.trim()) {
                  onAdd(productName);
                  setProductName('');
                }
              }}
              className="w-full h-[48px] bg-[#004eeb] rounded-[12px] flex items-center justify-center gap-[8px] px-[12px] hover:bg-[#003cc4] transition-colors cursor-pointer"
            >
              <span className="font-['IRANYekanX'] font-medium text-[15px] leading-[24px] text-white tracking-[-0.3px]">
                افزودن محصول
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
