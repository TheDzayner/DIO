import React from 'react';
import { ASSETS } from './assets';
import Breadcrumbs from './Breadcrumbs';
import ServiceCard, { ServiceStatus } from './ServiceCard';

interface ServicesPageProps {
  productName: string;
  onBack: () => void;
  onSettings: () => void;
  onHeatmapClick: () => void;
  onUserBehaviorClick: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ 
  productName, 
  onBack, 
  onSettings,
  onHeatmapClick,
  onUserBehaviorClick
}) => {
  const breadcrumbItems = [
    { label: 'ویپاد' },
    { label: 'محصولات', isActive: true },
  ];

  const internalServices = [
    {
      title: 'ضبط رفتار کاربر',
      description: 'نمایش ضبط رفتار کاربران برای بررسی تجربه کاربری',
      icon: ASSETS.imgRecording,
      status: 'active' as ServiceStatus,
      onClick: onUserBehaviorClick
    },
    {
      title: 'هیت مپ',
      description: 'مشاهده نقشه‌های حرارتی صفحات محصول برای درک رفتار کاربران',
      icon: ASSETS.imgHeatmap,
      status: 'active' as ServiceStatus,
      onClick: onHeatmapClick
    }
  ];

  const externalServices = [
    {
        title: 'بازخورد شبکه‌های اجتماعی',
        description: 'پایش گفتگو‌ها در شبکه‌های اجتماعی و وب',
        icon: ASSETS.imgSocial,
        status: 'active' as ServiceStatus
    },
    {
        title: 'تحلیل داده‌های پشتیبانی محصول',
        description: 'ارزیابی مکالمات و تیکت‌های پشتیبانی برای کشف نقاط درد کاربران',
        icon: ASSETS.imgSupport,
        status: 'locked' as ServiceStatus
    },
    {
        title: 'بررسی محصول خود در کافه بازار',
        description: 'تحلیل نظرات و امتیاز‌های محصول شما در کافه‌ بازاز',
        icon: ASSETS.imgBazarOwner,
        status: 'pending' as ServiceStatus
    }
  ];

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1440px] mx-auto h-full font-['IRANYekanX'] pb-[60px]">
      {/* Header Section */}
      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex items-center justify-between w-full">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="flex items-center gap-[8px] px-[0px] py-[8px] h-[38px] hover:opacity-80 transition-opacity"
          >
             <div className="size-[20px] relative">
               <img src={ASSETS.imgArrowLeft} alt="" className="size-full object-contain rotate-180" />
            </div>
            <span className="font-['IRANYekanX'] font-medium text-[15px] leading-[24px] text-[#535862] tracking-[-0.3px]">
              بازگشت
            </span>
          </button>

          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Title & Settings */}
        <div className="flex items-center justify-between w-full" dir="rtl">
            <h1 className="font-['IRANYekanX'] font-semibold text-[24px] leading-[32px] text-[#181d27] tracking-[-0.48px]">
                {productName}
            </h1>
            <button 
                onClick={onSettings}
                className="flex items-center justify-center gap-[8px] px-[12px] py-[8px] bg-[#e9eaeb] rounded-[12px] h-[38px] hover:bg-gray-200 transition-colors"
            >
                <div className="size-[20px] relative">
                    <img src={ASSETS.imgSettings} alt="" className="size-full object-contain" />
                </div>
                <span className="font-['IRANYekanX'] font-medium text-[15px] leading-[20px] text-[#181d27]">
                    تنظیمات محصول
                </span>
            </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col gap-[24px] w-full" dir="rtl">
        
        {/* Tag Installation Section */}
        <div className="flex flex-col gap-[16px] w-full bg-white border border-[#f4f4f4] rounded-[12px] p-[24px]">
            {/* Warning Banner */}
            <div className="flex items-center justify-between w-full bg-[#fef6ee] border-[2px] border-white rounded-[12px] px-[24px] py-[16px]">
                 <div className="flex items-center gap-[8px]">
                    <div className="size-[24px] relative">
                        <img src={ASSETS.imgInfoCircle} alt="" className="size-full object-contain opacity-60" />
                    </div>
                    <span className="font-['IRANYekanX'] font-medium text-[14px] leading-[32px] text-[#181d27] tracking-[-0.28px]">
                        برای استفاده از خدمات هیت مپ و ضبط رفتار کاربر، مراحل زیر را طی کنید.
                    </span>
                 </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-[16px] w-full px-[24px]">
                <h3 className="font-['IRANYekanX'] font-bold text-[14px] leading-[32px] text-[#181d27] tracking-[-0.28px]">
                    شروع نصب تگ
                </h3>

                <div className="flex flex-col gap-[12px] w-full">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-[12px] w-full">
                        <span className="font-['IRANYekanX'] text-[15px] leading-[24px] text-[#181d27] tracking-[-0.3px]">
                            ۱- کد زیر را کپی کنید.
                        </span>
                        <div className="flex items-center justify-between w-full h-[54px] border border-[#e9eaeb] rounded-[12px] px-[8px] py-[12px] bg-white">
                            <span className="font-['IRANYekanX'] text-[14px] text-[#414651] tracking-[-0.28px] dir-ltr text-left w-full px-2 font-mono">
                                {`<script src="https://t.dio.com/uxa/94294a07c297f.js"></script>`}
                            </span>
                            <button className="flex items-center justify-center gap-[8px] px-[12px] py-[8px] bg-[#ebf1ff] rounded-[12px] h-[38px] hover:bg-[#d6e4ff] transition-colors shrink-0">
                                <span className="font-['IRANYekanX'] font-medium text-[15px] text-[#004eeb] tracking-[-0.3px]">
                                    کپی کردن
                                </span>
                                <div className="size-[20px] relative">
                                    <img src={ASSETS.imgCopy} alt="" className="size-full object-contain" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <span className="font-['IRANYekanX'] text-[15px] leading-[24px] text-[#181d27] tracking-[-0.3px]">
                        ۲- کد را داخل بخش {`<head>`} تمام صفحاتی که می‌خواهید رفتار کاربران را ردیابی کنید یا بازخورد جمع‌آوری کنید، قرار دهید.
                    </span>

                    {/* Step 3 */}
                    <div className="flex items-center gap-[16px]">
                        <span className="font-['IRANYekanX'] text-[15px] leading-[24px] text-[#181d27] tracking-[-0.3px]">
                            ۳- برای اطمینان از نصب صحیح، تست کنید که کد به‌درستی روی سایت شما فعال شده باشد
                        </span>
                        <button className="flex items-center justify-center gap-[4px] px-[16px] py-[6px] border border-[#d5d7da] rounded-[10px] shadow-sm bg-white hover:bg-gray-50 transition-colors">
                            <span className="font-['IRANYekanX'] font-medium text-[14px] text-[#004eeb] tracking-[-0.28px]">
                                تست نصب کد
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Internal Services Section */}
        <div className="flex flex-col gap-[24px] w-full bg-[#e9eaeb] rounded-[12px] p-[24px]">
             <div className="flex flex-col gap-[8px] w-full">
                <h2 className="font-['IRANYekanX'] font-semibold text-[16px] leading-[36px] text-[#181d27] tracking-[-0.32px]">
                    تحلیل رفتار کاربر هنگام استفاده از محصول
                </h2>
                <p className="font-['IRANYekanX'] text-[14px] leading-[14px] text-[#414651] tracking-[-0.28px]">
                    در این بخش می‌توانید سرویس‌های مختلف را برای این محصول فعال کنید و رفتار کاربر‌ها را هنگام استفاده از محصول را تحلیل و بررسی کنید.
                </p>
             </div>
             
             <div className="flex flex-col md:flex-row gap-[24px] w-full">
                {internalServices.map((service, index) => (
                    <div key={index} className="flex-1">
                        <ServiceCard 
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            status={service.status}
                            onClick={service.onClick}
                        />
                    </div>
                ))}
             </div>
        </div>

        {/* External Services Section */}
        <div className="flex flex-col gap-[16px] w-full px-[24px]">
             <div className="flex flex-col gap-[2px] w-full">
                <h2 className="font-['IRANYekanX'] font-semibold text-[16px] leading-[24px] text-[#181d27] tracking-[-0.32px]">
                    تحلیل رفتار کاربر خارج از محصول
                </h2>
                <p className="font-['IRANYekanX'] text-[14px] leading-[20px] text-[#414651] tracking-[-0.28px]">
                    در این بخش می‌توانید سرویس‌های مختلف را برای این محصول فعال کنید و رفتار و بازخورد کاربر‌ها را در زمانی که از محصول استفاده نمی‌کنند، تحلیل و بررسی کنید.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
                {externalServices.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        title={service.title}
                        description={service.description}
                        icon={service.icon}
                        status={service.status}
                    />
                ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesPage;
