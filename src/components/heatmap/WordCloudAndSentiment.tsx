import React, { useState } from 'react';

const WordCloudAndSentiment: React.FC = () => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  return (
    <div className="flex gap-[24px] w-full">
      {/* Word Cloud Card */}
      <div className="flex-1 bg-white border border-[#e9eaeb] rounded-[20px] p-[24px] shadow-sm flex flex-col gap-[24px] h-[354px]">
         <div className="flex justify-between items-start w-full">
            <div className="flex flex-col items-end gap-[6px] text-right flex-1">
               <h2 className="font-['IRANYekanX'] font-bold text-[19px] leading-[28px] text-[#181d27] tracking-[-0.38px]">
                 نقشه کلمات
               </h2>
               <p className="font-['IRANYekanX'] font-normal text-[14px] leading-[20px] text-[#535862] tracking-[-0.28px]">
                 کلماتی که بیشترین تکرار را در نظرات داشتند.
               </p>
            </div>
            <button className="flex items-center justify-center p-[8px] border border-[#c3b5fd] rounded-[10px] shadow-sm hover:bg-[#f5f3ff] transition-colors">
                <div className="size-[20px] bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-bold">AI</div>
            </button>
         </div>
         
         {/* Word Cloud Placeholder */}
         <div className="flex-1 w-full bg-gray-50 rounded-[12px] flex items-center justify-center relative overflow-hidden group">
             {/* Simple visual mock of a word cloud */}
             <div className="absolute inset-0 flex flex-wrap content-center justify-center p-4 gap-4">
                 <span className="text-2xl font-bold text-gray-400 transform rotate-12 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 120">کیفیت</span>
                 <span className="text-xl font-bold text-gray-300 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 85">سرعت</span>
                 <span className="text-3xl font-bold text-gray-500 -rotate-6 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 150">پشتیبانی</span>
                 <span className="text-lg font-bold text-gray-400 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 60">قیمت</span>
                 <span className="text-xl font-bold text-gray-300 rotate-45 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 75">رابط کاربری</span>
                 <span className="text-2xl font-bold text-gray-400 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 90">باگ</span>
                 <span className="text-lg font-bold text-gray-300 -rotate-12 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 45">کند</span>
                 <span className="text-xl font-bold text-gray-400 hover:text-[#2970ff] hover:scale-110 transition-all cursor-pointer" title="تکرار: 80">عالی</span>
             </div>
         </div>
      </div>

      {/* Sentiment Distribution Card */}
      <div className="flex-1 bg-white border border-[#e9eaeb] rounded-[20px] p-[24px] shadow-sm flex flex-col justify-between h-[354px]">
         <div className="flex justify-between items-start w-full">
            <div className="flex flex-col items-end gap-[6px] text-right flex-1">
               <h2 className="font-['IRANYekanX'] font-bold text-[19px] leading-[28px] text-[#181d27] tracking-[-0.38px]">
                 توزیع احساسات
               </h2>
               <p className="font-['IRANYekanX'] font-normal text-[14px] leading-[20px] text-[#535862] tracking-[-0.28px]">
                 توزیع احساسات در نظرات کافه‌بازار.
               </p>
            </div>
            <button className="flex items-center justify-center p-[8px] border border-[#c3b5fd] rounded-[10px] shadow-sm hover:bg-[#f5f3ff] transition-colors">
                <div className="size-[20px] bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-bold">AI</div>
            </button>
         </div>

         {/* Content */}
         <div className="flex items-center justify-end gap-[32px] px-0 py-[16px]">
             {/* Donut Chart */}
             <div className="relative size-[192px]">
                 <svg viewBox="0 0 100 100" className="size-full transform -rotate-90">
                     {/* Background Circle */}
                     <circle cx="50" cy="50" r="40" fill="none" stroke="#f5f5f5" strokeWidth="20" />
                     
                     {/* Positive (Green) - 66% ~ 237.6 degrees - Length approx 251.2 */}
                     <circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke="#16b364" 
                        strokeWidth="20" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={`${251.2 * (1 - 0.66)}`} 
                        className={`drop-shadow-sm transition-all duration-300 cursor-pointer ${hoveredSegment === 'positive' ? 'stroke-[22]' : ''}`}
                        onMouseEnter={() => setHoveredSegment('positive')}
                        onMouseLeave={() => setHoveredSegment(null)}
                     />

                      {/* Negative (Red) - 24% - Starts after Green + Yellow (Yellow is 10%) */}
                      {/* For a pure SVG donut with multiple segments, we usually use stroke-dashoffset based on previous segments. */}
                      {/* Let's simplify and assume the segments are: Green 66%, Yellow 10%, Red 24% */}
                      {/* Green: 0 to 66% */}
                      {/* Yellow: 66% to 76% */}
                      {/* Red: 76% to 100% */}
                      
                      {/* Yellow Segment */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke="#fac515" 
                        strokeWidth="20" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={`${251.2 * (1 - 0.10)}`} 
                        transform="rotate(237.6 50 50)"
                        className={`transition-all duration-300 cursor-pointer ${hoveredSegment === 'neutral' ? 'stroke-[22]' : ''}`}
                        onMouseEnter={() => setHoveredSegment('neutral')}
                        onMouseLeave={() => setHoveredSegment(null)}
                      />

                      {/* Red Segment */}
                      <circle 
                        cx="50" cy="50" r="40" 
                        fill="none" 
                        stroke="#f04438" 
                        strokeWidth="20" 
                        strokeDasharray="251.2" 
                        strokeDashoffset={`${251.2 * (1 - 0.24)}`} 
                        transform="rotate(273.6 50 50)" 
                        className={`transition-all duration-300 cursor-pointer ${hoveredSegment === 'negative' ? 'stroke-[22]' : ''}`}
                        onMouseEnter={() => setHoveredSegment('negative')}
                        onMouseLeave={() => setHoveredSegment(null)}
                      />
                 </svg>
                 
                 {/* Center Text */}
                 <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                     <span className="text-2xl font-bold text-[#181d27]">
                        {hoveredSegment === 'positive' ? '66%' : hoveredSegment === 'neutral' ? '10%' : hoveredSegment === 'negative' ? '24%' : '100%'}
                     </span>
                     <span className="text-xs text-[#535862]">
                        {hoveredSegment === 'positive' ? 'مثبت' : hoveredSegment === 'neutral' ? 'خنثی' : hoveredSegment === 'negative' ? 'منفی' : 'مجموع'}
                     </span>
                 </div>
             </div>

             {/* Legend */}
             <div className="flex flex-col gap-[12px] w-[80px]">
                 <div 
                    className={`flex items-center justify-between w-full cursor-pointer p-1 rounded hover:bg-gray-50 transition-colors ${hoveredSegment === 'positive' ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => setHoveredSegment('positive')}
                    onMouseLeave={() => setHoveredSegment(null)}
                 >
                     <span className="font-['IRANYekanX'] font-medium text-[14px] text-[#181d27]">66%</span>
                     <div className="flex items-center gap-[6px]">
                         <span className="text-[12px] text-[#535862]">مثبت</span>
                         <div className="size-[8px] bg-[#16b364] rounded-full" />
                     </div>
                 </div>
                 <div 
                    className={`flex items-center justify-between w-full cursor-pointer p-1 rounded hover:bg-gray-50 transition-colors ${hoveredSegment === 'neutral' ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => setHoveredSegment('neutral')}
                    onMouseLeave={() => setHoveredSegment(null)}
                 >
                     <span className="font-['IRANYekanX'] font-medium text-[14px] text-[#181d27]">10%</span>
                     <div className="flex items-center gap-[6px]">
                         <span className="text-[12px] text-[#535862]">خنثی</span>
                         <div className="size-[8px] bg-[#fac515] rounded-full" />
                     </div>
                 </div>
                 <div 
                    className={`flex items-center justify-between w-full cursor-pointer p-1 rounded hover:bg-gray-50 transition-colors ${hoveredSegment === 'negative' ? 'bg-gray-50' : ''}`}
                    onMouseEnter={() => setHoveredSegment('negative')}
                    onMouseLeave={() => setHoveredSegment(null)}
                 >
                     <span className="font-['IRANYekanX'] font-medium text-[14px] text-[#181d27]">24%</span>
                     <div className="flex items-center gap-[6px]">
                         <span className="text-[12px] text-[#535862]">منفی</span>
                         <div className="size-[8px] bg-[#f04438] rounded-full" />
                     </div>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

export default WordCloudAndSentiment;
