import React, { useState } from 'react';

const CustomerSatisfactionTrend: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(3); // Default show point 3 (approx middle)

  // Data points corresponding to x positions
  const points = [
    { x: 0, y: 150, value: 1.5, date: '07/12' },
    { x: 100, y: 100, value: 3.2, date: '07/13' },
    { x: 200, y: 180, value: 0.8, date: '07/14' },
    { x: 300, y: 120, value: 2.5, date: '07/15' },
    { x: 400, y: 60, value: 4.1, date: '07/16' },
    { x: 500, y: 140, value: 1.9, date: '07/17' },
    { x: 600, y: 100, value: 3.0, date: '07/18' },
    { x: 700, y: 60, value: 4.2, date: '07/19' }, // This is close to the mock x=762 but let's stick to uniform distribution
    { x: 800, y: 100, value: 3.1, date: '07/20' },
    { x: 900, y: 50, value: 4.5, date: '07/21' },
    { x: 1000, y: 0, value: 5.0, date: '07/22' },
    { x: 1112, y: 50, value: 4.8, date: '07/23' },
  ];

  return (
    <div className="bg-white border border-[#e9eaeb] rounded-[20px] p-[24px] shadow-sm w-full flex flex-col gap-[32px]">
      {/* Header */}
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col items-end gap-[6px] text-right flex-1">
           <h2 className="font-['IRANYekanX'] font-bold text-[19px] leading-[28px] text-[#181d27] tracking-[-0.38px]">
             نمودار روند کلی رضایت مشتری
           </h2>
           <p className="font-['IRANYekanX'] font-normal text-[14px] leading-[20px] text-[#535862] tracking-[-0.28px]">
             شاخص انباشه که با ردیابی اختلاف بین بازخوردهای مثبت و منفی در طول زمان، مسیر جهت‌گیری احساسی مشتریان را نشان می‌دهد.
           </p>
        </div>
        <button className="flex items-center justify-center p-[8px] border border-[#c3b5fd] rounded-[10px] shadow-sm bg-gradient-to-r from-[#f5f3ff] to-[#fdf4ff] hover:opacity-90 transition-opacity">
            <div className="size-[20px] bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-[10px] font-bold">AI</div>
        </button>
      </div>

      {/* Chart Area */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="relative w-full h-[236px] flex items-end pb-[20px]">
           {/* Y Axis */}
           <div className="absolute top-0 right-0 h-[216px] flex flex-col justify-between w-full z-0 pointer-events-none">
              {[5, 4, 3, 2, 1, 0].map((val) => (
                  <div key={val} className="flex items-center gap-2 w-full">
                      <div className="flex-1 h-[1px] bg-[#f5f5f5]" />
                      <span className="text-[12px] text-[#535862] w-[24px] text-right font-medium">{val}</span>
                  </div>
              ))}
           </div>

           {/* Chart Content (Line) */}
           <div className="relative z-10 w-full pl-[40px] pr-[30px] h-[192px] mb-[12px]">
              <svg viewBox="0 0 1112 192" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 <defs>
                   <linearGradient id="gradient-trend" x1="0" x2="0" y1="0" y2="1">
                     <stop offset="0%" stopColor="rgba(41, 112, 255, 0.2)" />
                     <stop offset="100%" stopColor="rgba(41, 112, 255, 0)" />
                   </linearGradient>
                 </defs>
                 
                 {/* Area */}
                 <path d="M0,150 C100,100 200,180 300,120 C400,60 500,140 600,100 C700,60 800,100 900,50 C1000,0 1112,50 1112,80 L1112,192 L0,192 Z" fill="url(#gradient-trend)" />
                 
                 {/* Line */}
                 <path d="M0,150 C100,100 200,180 300,120 C400,60 500,140 600,100 C700,60 800,100 900,50 C1000,0 1112,50 1112,80" fill="none" stroke="#2970ff" strokeWidth="3" />
                 
                 {/* Interactive Points */}
                 {points.map((p, i) => (
                     <g key={i} onMouseEnter={() => setHoveredPoint(i)} onMouseLeave={() => setHoveredPoint(null)} style={{ cursor: 'pointer' }}>
                         {/* Invisible hit area */}
                         <circle cx={p.x} cy={p.y} r="20" fill="transparent" />
                         
                         {/* Visible marker when hovered */}
                         <circle 
                            cx={p.x} 
                            cy={p.y} 
                            r={hoveredPoint === i ? 6 : 0} 
                            fill="#2970ff" 
                            stroke="white" 
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
                        left: `${(points[hoveredPoint].x / 1112) * 100}%`,
                        top: `${(points[hoveredPoint].y / 192) * 100}%`
                    }}
                  >
                      <div className="bg-[#181d27] text-white text-[12px] px-3 py-2 rounded-[8px] mb-2 -mt-12 whitespace-nowrap z-20">
                          {points[hoveredPoint].value}
                          {/* Triangle */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#181d27]"></div>
                      </div>
                      <div className="w-[2px] bg-gradient-to-b from-[#2970ff] to-transparent h-[192px] absolute top-0 z-10 opacity-50 pointer-events-none" style={{ height: '192px' }}></div>
                  </div>
              )}
           </div>
        </div>
        
        {/* X Axis Labels */}
        <div className="flex justify-between w-full pl-[40px] pr-[30px]">
             {points.map((p, idx) => (
                 <div key={idx} className="w-[48px] flex justify-center">
                     <span className={`text-[12px] ${hoveredPoint === idx ? 'text-[#2970ff] font-bold' : 'text-[#535862]'} transition-colors`}>{p.date}</span>
                 </div>
             ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfactionTrend;
