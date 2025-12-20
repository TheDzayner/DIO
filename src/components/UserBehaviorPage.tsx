import React, { useState } from 'react';
import { ASSETS } from './assets';

import Breadcrumbs from './Breadcrumbs';

interface UserBehaviorPageProps {
  onBack: () => void;
  productName?: string;
}

const UserBehaviorPage: React.FC<UserBehaviorPageProps> = ({ onBack, productName }) => {
  const [activeTab, setActiveTab] = useState('همه جلسات');

  const tabs = [
    'ارورهای اسکریپت', 'لیست قیمت‌ها', 'صفحه ثبت نام', 'کاربران موبایل', 
    'A/B تست', 'همه کاربران', 'ویژگی‌ها', 'همه جلسات'
  ];

  const breadcrumbItems = [
    { label: 'تحلیل کافه بازار' },
    { label: productName || 'ویپاد' },
    { label: 'محصولات' }
  ];

  const tableData = [
    { id: 1, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 2, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 3, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 4, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 5, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 6, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 7, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
    { id: 8, exit: '/contact', entry: '/homepage', referrer: 'Apple.com', duration: '02:25', pages: 36, actions: 12, country: 'فرانسه', user: '4e2df2c (new)', date: '۱۲ مهر، ۰۴' },
  ];

  return (
    <div className="flex flex-col gap-[16px] w-full max-w-[1440px] mx-auto pb-[60px] h-full font-['IRANYekanX']">
      {/* Header Section */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex items-center justify-between w-full">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />

          {/* Back Button */}
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
        <div className="flex items-start justify-start w-full" dir="rtl">
            <h1 className="font-['IRANYekanX'] font-semibold text-[24px] leading-[32px] text-[#181d27] tracking-[-0.48px] text-right">
                ضبط رفتار کاربر
            </h1>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col gap-4 w-full mt-2">
            <div className="flex items-center justify-between w-full">
                 <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end gap-1.5 w-[320px]">
                        <span className="text-[#414651] text-[14px] font-medium">انتخاب بخش‌ها</span>
                        <button className="flex items-center justify-between w-full px-3 py-1.5 bg-white border border-[#d5d7da] rounded-[10px] shadow-sm">
                            <img src={ASSETS.imgArrowDown} alt="" className="w-5 h-5 opacity-50" />
                            <span className="text-[#414651] text-[15px] font-medium">همه</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1.5 w-[320px]">
                        <span className="text-[#414651] text-[14px] font-medium">دوره:</span>
                        <button className="flex items-center justify-end gap-2 w-full px-3 py-2 bg-white border border-[#d5d7da] rounded-[10px]">
                            <span className="text-[#181d27] text-[14px] font-medium">۱۲ مهر ۱۴۰۴ - ۲۳ مهر ۱۴۰۴</span>
                            <img src={ASSETS.imgCalendar} alt="" className="w-5 h-5 opacity-50" />
                        </button>
                    </div>
                 </div>

                 <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#e9eaeb] rounded-[12px] h-[38px] text-[#181d27] text-[15px] font-medium hover:bg-gray-200 transition-colors">
                    <img src={ASSETS.imgActivity} alt="" className="w-5 h-5" />
                    خروجی جدول
                 </button>
            </div>

            {/* Tabs */}
            <div className="flex flex-col items-end gap-1 w-full overflow-hidden">
                <div className="bg-[#f5f5f5] border border-[#e9eaeb] rounded-[10px] p-1 flex items-center justify-start gap-1 overflow-x-auto w-full no-scrollbar">
                    {tabs.map((tab) => (
                        <button 
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 py-1 rounded-[6px] text-[13px] font-medium whitespace-nowrap transition-colors ${
                                activeTab === tab 
                                ? 'bg-white text-[#414651] shadow-sm' 
                                : 'text-[#717680] hover:bg-gray-100'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                    <div className="w-[64px] h-[36px] flex items-center justify-center sticky left-0 bg-gradient-to-r from-[#f5f5f5] to-transparent">
                         <button className="p-1.5 bg-white rounded-[10px] shadow-sm">
                            <img src={ASSETS.imgChevronLeft} alt="" className="w-5 h-5 opacity-50" />
                         </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="flex flex-col w-full bg-white border border-[#e9eaeb] rounded-t-[12px] rounded-br-[12px] overflow-hidden mt-4">
        {/* Table Header */}
        <div className="flex items-center justify-end bg-[#fafafa] border-b border-[#e9eaeb] min-w-max">
            <div className="h-[44px] px-6 py-3 w-[148px] flex items-center justify-end"></div>
            <div className="h-[44px] px-6 py-3 w-[128px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">تاریخ</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[136px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">کاربر</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[128px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">کشور</span>
            </div>
            <div className="h-[44px] px-6 py-3 flex-1 min-w-[100px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">اقدامات</span>
            </div>
            <div className="h-[44px] px-6 py-3 flex-1 min-w-[100px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">صفحات</span>
            </div>
            <div className="h-[44px] px-6 py-3 flex-1 min-w-[100px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">مدت زمان</span>
            </div>
            <div className="h-[44px] px-6 py-3 flex-1 min-w-[100px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">دستگاه</span>
            </div>
            <div className="h-[44px] px-6 py-3 flex-1 min-w-[100px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">مرورگر</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[72px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">OS</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[160px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">Url ارجاعی</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[160px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">صفحه ورود</span>
            </div>
            <div className="h-[44px] px-6 py-3 w-[160px] flex items-center justify-end">
                <span className="text-[#717680] text-[13px]">صفحه خروج</span>
            </div>
        </div>

        {/* Table Rows */}
        <div className="flex flex-col w-full min-w-max">
            {tableData.map((row, index) => (
                <div key={index} className="flex items-center justify-end border-b border-[#e9eaeb] hover:bg-gray-50 transition-colors">
                    <div className="h-[72px] px-6 py-4 w-[148px] flex items-center justify-center">
                        <button className="flex items-center gap-1 px-3 py-1.5 bg-[#f5f8ff] border border-[#b2ccff] rounded-[10px] text-[#004eeb] text-[14px] font-medium hover:bg-[#ebf2ff]">
                            <span>پخش</span>
                            <img src={ASSETS.imgPlay} alt="" className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[128px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.date}
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[136px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.user}
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[128px] flex items-center justify-end gap-2 text-[#535862] text-[14px]">
                        {row.country}
                        {/* Flag Placeholder - Replace with actual flag component or image */}
                        <div className="w-6 h-4 bg-gray-200 rounded-sm relative overflow-hidden">
                             <div className="absolute inset-y-0 left-0 w-1/3 bg-blue-600"></div>
                             <div className="absolute inset-y-0 left-1/3 w-1/3 bg-white"></div>
                             <div className="absolute inset-y-0 right-0 w-1/3 bg-red-600"></div>
                        </div> 
                    </div>
                    <div className="h-[72px] px-6 py-4 flex-1 min-w-[100px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.actions}
                    </div>
                    <div className="h-[72px] px-6 py-4 flex-1 min-w-[100px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.pages}
                    </div>
                    <div className="h-[72px] px-6 py-4 flex-1 min-w-[100px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.duration}
                    </div>
                    <div className="h-[72px] px-6 py-4 flex-1 min-w-[100px] flex items-center justify-center">
                         <img src={ASSETS.imgActivity} alt="Device" className="w-6 h-6 opacity-50" />
                    </div>
                    <div className="h-[72px] px-6 py-4 flex-1 min-w-[100px] flex items-center justify-end">
                         {/* Browser Icon Placeholder */}
                         <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 text-xs">F</div>
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[72px] flex items-center justify-end">
                         {/* OS Icon Placeholder */}
                         <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xs">W</div>
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[160px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.referrer}
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[160px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.entry}
                    </div>
                    <div className="h-[72px] px-6 py-4 w-[160px] flex items-center justify-end text-[#535862] text-[14px]">
                        {row.exit}
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between w-full mt-4">
        <div className="flex items-center gap-1 text-[#717680] text-[13px]">
             <span>مورد ضبط شده</span>
             <span>۲۳۱</span>
        </div>

        <div className="flex items-center gap-3">
             <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#d5d7da] rounded-[10px] shadow-sm text-[#414651] text-[14px] hover:bg-gray-50">
                <img src={ASSETS.imgArrowLeft} alt="" className="w-4 h-4 opacity-50" />
                بعدی
             </button>
             <div className="flex items-center gap-0.5" dir="ltr">
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">13</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">12</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">11</button>
                 <span className="w-8 h-8 flex items-center justify-center text-[14px] text-[#717680]">...</span>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">4</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">3</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] text-[14px] text-[#717680] hover:bg-gray-100">2</button>
                 <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#fafafa] text-[14px] text-[#414651] font-medium">1</button>
             </div>
             <button className="flex items-center gap-1 px-3 py-1.5 bg-white border border-[#d5d7da] rounded-[10px] shadow-sm text-[#414651] text-[14px] hover:bg-gray-50">
                قبلی
                <img src={ASSETS.imgArrowLeft} alt="" className="w-4 h-4 opacity-50 rotate-180" />
             </button>
        </div>
      </div>
    </div>
  );
};

export default UserBehaviorPage;
