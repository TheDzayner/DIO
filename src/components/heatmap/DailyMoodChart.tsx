import React, { useState } from 'react';

const DailyMoodChart: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const emojis = ['😍', '😊', '😐', '🙁', '😡'];
  
  const points = [
      {cx:0, cy:50, val: '😊'}, {cx:100, cy:50, val: '😊'}, {cx:200, cy:100, val: '😐'}, {cx:300, cy:50, val: '😊'}, 
      {cx:400, cy:150, val: '🙁'}, {cx:500, cy:50, val: '😊'}, {cx:600, cy:0, val: '😍'}, {cx:700, cy:50, val: '😊'},
      {cx:800, cy:100, val: '😐'}, {cx:900, cy:50, val: '😊'}, {cx:1000, cy:100, val: '😐'}, {cx:1112, cy:50, val: '😊'}
  ];

  const dates = ['07/12', '07/13', '07/14', '07/15', '07/16', '07/17', '07/18', '07/19', '07/20', '07/21', '07/22', '07/23'];

  return (
    <div className="bg-white border border-[#e9eaeb] rounded-[20px] p-[24px] shadow-sm w-full flex flex-col gap-[32px]">
      {/* Header */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-end gap-[6px] text-right flex-1">
           <h2 className="font-['IRANYekanX'] font-bold text-[19px] leading-[28px] text-[#181d27] tracking-[-0.38px]">
             نمودار حس‌وحال روزانه مشتری
           </h2>
           <p className="font-['IRANYekanX'] font-normal text-[14px] leading-[20px] text-[#535862] tracking-[-0.28px]">
             شاخص انباشه که با ردیابی اختلاف بین بازخوردهای مثبت و منفی در طول زمان، مسیر جهت‌گیری احساسی مشتریان را نشان می‌دهد.
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
              {emojis.map((emoji, idx) => (
                  <div key={idx} className="flex items-center gap-2 w-full h-[24px]">
                      <div className="flex-1 h-[1px] bg-[#f5f5f5]" />
                      <div className="w-[32px] flex items-center justify-center text-[20px]">{emoji}</div>
                  </div>
              ))}
           </div>

           {/* Chart Content (Line) */}
           <div className="relative z-10 w-full pl-[40px] pr-[30px] h-[192px] mb-[12px]">
              <svg viewBox="0 0 1112 192" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <path d="M0,50 L100,50 L200,100 L300,50 L400,150 L500,50 L600,0 L700,50 L800,100 L900,50 L1000,100 L1112,50" fill="none" stroke="#2970ff" strokeWidth="2" strokeLinejoin="round" />
                 
                 {/* Points */}
                 {points.map((p, i) => (
                     <g key={i} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} style={{ cursor: 'pointer' }}>
                         {/* Invisible hit area */}
                         <circle cx={p.cx} cy={p.cy} r="20" fill="transparent" />
                         
                         {/* Visible Marker */}
                         <circle 
                            cx={p.cx} 
                            cy={p.cy} 
                            r={hoveredPoint === i ? 6 : 4} 
                            fill="white" 
                            stroke="#2970ff" 
                            strokeWidth="2" 
                            className="transition-all duration-200"
                         />
                     </g>
                 ))}
              </svg>

               {/* Tooltip Overlay */}
              {hoveredPoint !== null && (
                  <div 
                    className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none transition-all duration-200"
                    style={{ 
                        left: `${(points[hoveredPoint].cx / 1112) * 100}%`,
                        top: `${(points[hoveredPoint].cy / 192) * 100}%`
                    }}
                  >
                      <div className="bg-[#181d27] text-white text-[12px] px-3 py-2 rounded-[8px] mb-2 -mt-12 whitespace-nowrap z-20 flex flex-col items-center">
                          <span className="text-[16px] mb-1">{points[hoveredPoint].val}</span>
                          <span className="text-[10px] text-gray-300">{dates[hoveredPoint]}</span>
                          {/* Triangle */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#181d27]"></div>
                      </div>
                  </div>
              )}
           </div>
        </div>
        
        {/* X Axis Labels */}
        <div className="flex justify-between w-full pl-[40px] pr-[30px]">
             {dates.map((date, idx) => (
                 <div key={idx} className="w-[48px] flex justify-center">
                     <span className={`text-[12px] ${hoveredPoint === idx ? 'text-[#2970ff] font-bold' : 'text-[#535862]'} transition-colors`}>{date}</span>
                 </div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default DailyMoodChart;
