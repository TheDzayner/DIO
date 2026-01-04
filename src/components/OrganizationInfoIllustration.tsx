import React from 'react';
import { ASSETS } from './assets';

const OrganizationInfoIllustration: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-[#f6faff] to-[#aad1ff]">
        {/* Background Elements matching the design */}
        <div className="absolute h-[336px] left-[-29px] top-0 w-[393px]">
           {/* Placeholder for ellipse 8 if needed, or just gradients */}
        </div>
        
        {/* Abstract Shapes and Gradients from Figma design */}
        <div className="absolute bg-gradient-to-b bottom-[-1px] from-[rgba(255,255,255,0.4)] h-[335px] left-[135px] rounded-tl-[12px] rounded-tr-[12px] to-[rgba(255,255,255,0)] w-[43px]" />
        <div className="absolute bg-gradient-to-b bottom-[-1px] from-[rgba(255,255,255,0.4)] h-[95px] left-[197px] rounded-tl-[12px] rounded-tr-[12px] to-[rgba(255,255,255,0)] w-[43px]" />
        <div className="absolute bg-gradient-to-b bottom-[-1px] from-[rgba(255,255,255,0.4)] h-[224px] left-[73px] rounded-tl-[12px] rounded-tr-[12px] to-[rgba(255,255,255,0)] w-[43px]" />
        
        <div className="absolute border border-[rgba(21,116,224,0.32)] border-solid bottom-0 h-[335px] left-[126px] rounded-tl-[12px] rounded-tr-[12px] w-[53px]" />
        <div className="absolute border border-[rgba(21,116,224,0.32)] border-solid bottom-0 h-[95px] left-[188px] rounded-tl-[12px] rounded-tr-[12px] w-[53px]" />
        <div className="absolute border border-[rgba(21,116,224,0.32)] border-solid bottom-0 h-[224px] left-[64px] rounded-tl-[12px] rounded-tr-[12px] w-[53px]" />

        {/* Central visual elements */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
             {/* Main Card/Device Representation */}
             <div className="relative w-[194px] h-[71px] bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] rounded-[16px] shadow-[inset_0px_4px_4px_0px_white,inset_0px_-3px_2px_0px_rgba(6,85,192,0.5)] rotate-180 transform mb-4" />
             
             {/* Glow effects */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[155px] h-[109px] bg-[#0655c0] blur-[50px] mix-blend-multiply opacity-50" />
        </div>
      </div>
    </div>
  );
};

export default OrganizationInfoIllustration;

