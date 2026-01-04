import React, { useState } from 'react';
import { ASSETS } from './assets';
import Input from './Input';
import Button from './Button';
import OrganizationInfoIllustration from './OrganizationInfoIllustration';
import { cn } from '../lib/utils';

interface OrganizationInfoPageProps {
  onBack: () => void;
  onContinue: () => void;
}

const EMPLOYEE_COUNTS = [
  '۱ - ۱۰',
  '۱۱ - ۵۰',
  '۵۱ - ۱۰۰',
  '۱۰۱ - ۵۰۰',
  '۵۰۱ - ۱۰۰۰',
  '۱۰۰۰ - ۵۰۰۰'
];

const ROLES = [
  'توسعه محصول',
  'مارکتینگ',
  'طراح محصول',
  'مدیریت',
  'مدیر محصول',
  'منابع انسانی',
  'سایر'
];

export const OrganizationInfoPage: React.FC<OrganizationInfoPageProps> = ({ onBack, onContinue }) => {
  const [companyName, setCompanyName] = useState('');
  const [employeeCount, setEmployeeCount] = useState('');
  const [role, setRole] = useState('');

  const isValid = companyName && employeeCount && role;

  return (
    <div className="flex w-full min-h-screen bg-white" dir="rtl">
        {/* Form Side */}
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
             {/* Header */}
             <div className="flex items-start justify-start px-[40px] py-[16px] border-b border-[#d5d7da] bg-[#fafafa]">
                 <div className="flex items-center gap-[12px]">
                    <img src={ASSETS.imgLogo} alt="Dio Logo" className="size-[48px]" />
                    <div className="flex flex-col items-start justify-start">
                        <span className="font-['IRANYekanX'] font-bold text-[14px] leading-[20px] text-[#181d27]">پلتفرم دیو</span>
                        <span className="font-['IRANYekanX'] font-medium text-[12px] leading-[15px] text-[#414651]">تحلیل رفتار و احساس کاربر</span>
                    </div>
                 </div>
             </div>

             <div className="flex-1 flex items-center justify-center p-[40px]">
                 <div className="w-[388px] flex flex-col gap-[40px]">
                     
                     <div className="flex flex-col gap-[32px]">
                        {/* Company Name */}
                        <div className="flex flex-col gap-[12px]">
                            <label className="font-['IRANYekanX'] text-[12px] text-[#181d27] leading-[28px] text-right">
                                نام شرکت یا سازمان خود را وارد کنید.
                            </label>
                            <Input 
                               placeholder="مثلا دیجیکالا"
                               value={companyName}
                               onChange={(e) => setCompanyName(e.target.value)}
                               className="text-right"
                            />
                        </div>

                        {/* Employee Count */}
                        <div className="flex flex-col gap-[20px]">
                            <p className="font-['IRANYekanX'] text-[12px] text-[#181d27] leading-[28px] text-right">
                                تعداد کارمندان سازمان یا شرکت خود را مشخص کنید.
                            </p>
                            <div className="flex flex-wrap gap-[16px] justify-start">
                                {EMPLOYEE_COUNTS.map((count) => (
                                    <button
                                        key={count}
                                        onClick={() => setEmployeeCount(count)}
                                        className={cn(
                                            "h-[32px] px-[16px] rounded-[12px] border font-['IRANYekanX'] text-[14px] leading-[24px] transition-colors",
                                            employeeCount === count
                                                ? "bg-[#eff8ff] border-[#004eeb] text-[#004eeb]"
                                                : "bg-white border-[#d5d7da] text-[#414651] hover:bg-gray-50"
                                        )}
                                    >
                                        {count}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Role */}
                        <div className="flex flex-col gap-[20px]">
                            <p className="font-['IRANYekanX'] text-[12px] text-[#181d27] leading-[28px] text-right">
                                نقش شما در شرکت چیست؟
                            </p>
                            <div className="flex flex-wrap gap-[16px] justify-start">
                                {ROLES.map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setRole(r)}
                                        className={cn(
                                            "h-[32px] px-[16px] rounded-[12px] border font-['IRANYekanX'] text-[14px] leading-[24px] transition-colors",
                                            role === r
                                                ? "bg-[#eff8ff] border-[#004eeb] text-[#004eeb]"
                                                : "bg-white border-[#d5d7da] text-[#414651] hover:bg-gray-50"
                                        )}
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>
                     </div>

                     <div className="flex gap-[24px]">
                        <Button 
                            variant="secondary"
                            className="flex-1 bg-[#e9eaeb] text-[#181d27] border-none hover:bg-[#d5d7da]"
                            onClick={onBack}
                        >
                            قبلی
                        </Button>
                        <Button 
                            variant="primary"
                            className="w-[280px]"
                            disabled={!isValid}
                            onClick={onContinue}
                        >
                            ورود به پنل
                        </Button>
                     </div>
                 </div>
             </div>
        </div>

        {/* Illustration Side */}
        <div className="hidden lg:block w-[402px] h-screen relative bg-gradient-to-b from-[#f6faff] to-[#aad1ff] overflow-hidden shrink-0">
             <OrganizationInfoIllustration className="w-full h-full" />
        </div>
    </div>
  );
};

export default OrganizationInfoPage;

