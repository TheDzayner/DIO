import React, { useState } from 'react';

const SentimentChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = [
    { pos: 192, type: 'green', value: 120 },
    { pos: 74, type: 'green', value: 45 },
    { pos: 127, type: 'green-red', value: 80 },
    { pos: 41, type: 'green-red', value: 25 },
    { pos: 139, type: 'yellow', value: 85 },
    { pos: 184, type: 'green-red', value: 115 },
    { pos: 139, type: 'green', value: 88 },
    { pos: 51, type: 'green-red', value: 32 },
    { pos: 184, type: 'yellow', value: 112 },
    { pos: 41, type: 'green', value: 26 },
    { pos: 19, type: 'green', value: 12 },
    { pos: 74, type: 'yellow', value: 46 },
  ];

  return (
    <div className="bg-white border border-[#e9eaeb] rounded-[20px] p-[24px] shadow-sm w-full flex flex-col gap-[32px]">
      {/* Header */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-end gap-[6px] text-right flex-1">
           <h2 className="font-['IRANYekanX'] font-bold text-[19px] leading-[28px] text-[#181d27] tracking-[-0.38px]">
             نمودار احساسات
           </h2>
           <p className="font-['IRANYekanX'] font-normal text-[14px] leading-[20px] text-[#535862] tracking-[-0.28px]">
             نمودار احساسات کاربران در طول زمان
           </p>
        </div>
        <button className="flex items-center justify-center p-[8px] border border-[#c3b5fd] rounded-[10px] shadow-sm hover:bg-[#f5f3ff] transition-colors">
            <div className="size-[20px] bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-bold">AI</div>
        </button>
      </div>

      {/* Chart Area */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="relative w-full h-[236px] flex items-end pb-[20px]">
           {/* Y Axis */}
           <div className="absolute top-0 right-0 h-[216px] flex flex-col justify-between w-full z-0 pointer-events-none">
              {[120, 90, 60, 30, 0].map((val) => (
                  <div key={val} className="flex items-center gap-2 w-full">
                      <div className="flex-1 h-[1px] bg-[#f5f5f5]" />
                      <span className="text-[12px] text-[#535862] w-[24px] text-right font-medium">{val}</span>
                  </div>
              ))}
           </div>

           {/* Bars Container */}
           <div className="relative z-10 flex justify-between items-end w-full pl-[40px] pr-[30px] h-[192px]">
              {data.map((bar, idx) => (
                  <div 
                    key={idx} 
                    className="w-[48px] flex flex-col items-center gap-2 group cursor-pointer relative"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                      {/* Tooltip */}
                      {hoveredIndex === idx && (
                          <div className="absolute bottom-full mb-2 bg-[#181d27] text-white text-[12px] px-3 py-2 rounded-[8px] z-50 whitespace-nowrap shadow-lg animate-in fade-in zoom-in duration-200">
                              {bar.value}
                              {/* Triangle/Arrow */}
                               <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#181d27]"></div>
                          </div>
                      )}

                      <div 
                        className={`w-[32px] sm:w-[48px] rounded-t-[8px] overflow-hidden flex flex-col justify-end relative transition-opacity duration-200 ${hoveredIndex !== null && hoveredIndex !== idx ? 'opacity-50' : 'opacity-100'}`} 
                        style={{ height: `${bar.pos}px` }}
                      >
                          {bar.type === 'green' && <div className="w-full h-full bg-[#16b364]" />}
                          {bar.type === 'yellow' && <div className="w-full h-full bg-[#fac515]" />}
                          {bar.type === 'green-red' && (
                              <div className="w-full h-full flex flex-col">
                                  <div className="w-full flex-1 bg-[#f04438]" />
                                  <div className="w-full flex-1 bg-[#16b364]" />
                              </div>
                          )}
                      </div>
                  </div>
              ))}
           </div>
        </div>
        
        {/* X Axis Labels */}
        <div className="flex justify-between w-full pl-[40px] pr-[30px]">
             {['07/12', '07/13', '07/14', '07/15', '07/16', '07/17', '07/18', '07/19', '07/20', '07/21', '07/22', '07/23'].map((date, idx) => (
                 <div key={idx} className="w-[48px] flex justify-center">
                     <span className="text-[12px] text-[#535862]">{date}</span>
                 </div>
             ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-[16px] mt-2">
            <div className="flex items-center gap-[6px]">
                <span className="text-[12px] text-[#535862] font-medium">منفی</span>
                <div className="size-[8px] bg-[#f04438] rounded-full" />
            </div>
            <div className="flex items-center gap-[6px]">
                <span className="text-[12px] text-[#535862] font-medium">خنثی</span>
                <div className="size-[8px] bg-[#fac515] rounded-full" />
            </div>
            <div className="flex items-center gap-[6px]">
                <span className="text-[12px] text-[#535862] font-medium">مثبت</span>
                <div className="size-[8px] bg-[#16b364] rounded-full" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;
