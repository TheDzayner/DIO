import React from 'react';
import { ASSETS } from './assets';

interface ContextMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  isOpen: boolean;
  onClose: () => void; // To handle closing when clicking outside (implementation in parent for now)
}

const ContextMenu: React.FC<ContextMenuProps> = ({ onEdit, onDelete, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-[32px] right-0 z-10 w-[140px] bg-white border border-[#d5d7da] rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.16)] overflow-hidden flex flex-col transition-opacity duration-150 animate-fade-in"
      style={{
        animation: 'fadeIn 150ms ease-out forwards'
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      
      {/* Edit Option */}
      <button 
        onClick={onEdit}
        className="flex items-center justify-start gap-[8px] h-[40px] px-[12px] py-[8px] hover:bg-[#ebf1ff] transition-colors w-full border-b border-[#f4f4f4] group"
      >
        <div className="size-[20px] relative shrink-0">
          {/* Force Edit icon color to Text Primary using mask */}
          <div 
              className="size-full bg-[#181d27]" 
              style={{
                maskImage: `url(${ASSETS.imgEdit})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${ASSETS.imgEdit})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
        </div>
        <span className="font-['IRANYekanX'] font-medium text-[14px] leading-[16px] text-[#181d27] tracking-[-0.28px]">
          ویرایش
        </span>
      </button>

      {/* Delete Option */}
      <button 
        onClick={onDelete}
        className="flex items-center justify-start gap-[8px] h-[40px] px-[12px] py-[8px] hover:bg-[#ebf1ff] transition-colors w-full group"
      >
        <div className="size-[20px] relative shrink-0">
           {/* Force Delete icon color to Error (#d92d20) using mask */}
           <div 
              className="size-full bg-[#181d27] group-hover:bg-[#d92d20] transition-colors" 
              style={{
                maskImage: `url(${ASSETS.imgTrash})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: `url(${ASSETS.imgTrash})`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
              }}
            />
        </div>
        <span className="font-['IRANYekanX'] font-medium text-[14px] leading-[16px] text-[#181d27] tracking-[-0.28px] group-hover:text-[#d92d20] transition-colors">
          حذف
        </span>
      </button>
    </div>
  );
};

export default ContextMenu;

