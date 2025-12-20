import React from 'react';
import { ASSETS } from './assets';
import SentimentChart from './heatmap/SentimentChart';
import CustomerSatisfactionTrend from './heatmap/CustomerSatisfactionTrend';
import DailyMoodChart from './heatmap/DailyMoodChart';
import WordCloudAndSentiment from './heatmap/WordCloudAndSentiment';

interface HeatmapPageProps {
  onBack: () => void;
}

const HeatmapPage: React.FC<HeatmapPageProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col gap-[40px] w-full max-w-[1200px] mx-auto pb-[60px]">
      {/* Header Section */}
      <div className="flex flex-col gap-[16px] w-full">
        {/* Top Row: Back & Breadcrumb */}
        <div className="flex items-center justify-between w-full">
          {/* Breadcrumb (Right) */}
          <div className="flex items-center gap-[8px]">
             <span className="font-['IRANYekanX'] font-medium text-[16px] leading-[32px] text-[#535862] tracking-[-0.32px]">
               تحلیل کافه بازار
             </span>
             <div className="size-[20px] relative">
               <img src={ASSETS.imgChevronLeft} alt="" className="size-full object-contain opacity-50" />
             </div>
             <span className="font-['IRANYekanX'] font-medium text-[16px] leading-[32px] text-[#535862] tracking-[-0.32px]">
               ویپاد
             </span>
             <div className="size-[20px] relative">
               <img src={ASSETS.imgChevronLeft} alt="" className="size-full object-contain opacity-50" />
             </div>
             <span className="font-['IRANYekanX'] font-medium text-[16px] leading-[32px] text-[#535862] tracking-[-0.32px]">
               محصولات
             </span>
          </div>

          {/* Back Button (Left) */}
          <button 
            onClick={onBack}
            className="flex items-center gap-[8px] px-[0px] py-[8px] h-[38px] hover:opacity-80 transition-opacity"
          >
            <span className="font-['IRANYekanX'] font-medium text-[15px] leading-[24px] text-[#535862] tracking-[-0.3px]">
              بازگشت
            </span>
            <div className="size-[20px] relative">
              <img src={ASSETS.imgArrowLeft} alt="" className="size-full object-contain" />
            </div>
          </button>
        </div>

        {/* Title */}
        <div className="flex items-center justify-end w-full" dir="rtl">
          <h1 className="font-['IRANYekanX'] font-semibold text-[24px] leading-[32px] text-[#181d27] tracking-[-0.48px] text-right w-full">
            بررسی محصول خود در کافه بازار
          </h1>
        </div>

        {/* Filters Row */}
        <div className="flex items-center justify-between w-full mt-2">
            <div className="relative">
                <button className="flex items-center justify-between w-[320px] px-3 py-2 bg-white border border-[#d5d7da] rounded-[12px] h-[38px] hover:bg-gray-50 transition-colors">
                    <span className="text-[#414651] text-[14px] font-medium">۱۲ مهر ۱۴۰۴ - ۲۳ مهر ۱۴۰۴</span>
                    <img src={ASSETS.imgCalendar} alt="" className="w-5 h-5 opacity-50" />
                </button>
            </div>

            <div className="flex gap-2">
                 <button className="flex items-center justify-center gap-2 px-3 py-2 bg-white border border-[#d5d7da] rounded-[12px] h-[38px] text-[#535862] text-[15px] font-medium hover:bg-gray-50 transition-colors">
                    <img src={ASSETS.imgRefresh} alt="" className="w-5 h-5 opacity-50" />
                    بروزرسانی
                 </button>
            </div>
        </div>
      </div>

      {/* Main Content - Charts */}
      <div className="flex flex-col gap-[24px] w-full">
         <SentimentChart />
         <CustomerSatisfactionTrend />
         <DailyMoodChart />
         <WordCloudAndSentiment />
      </div>
    </div>
  );
};

export default HeatmapPage;

