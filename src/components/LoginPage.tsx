import React, { useState } from 'react';
import { ASSETS } from './assets';
import Input from './Input';
import Button from './Button';
import LoginIllustration from './LoginIllustration';
import { cn } from '../lib/utils';

interface LoginPageProps {
  onLogin?: () => void;
  onSignUp?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex w-full min-h-screen bg-white" dir="rtl">
      {/* Form Side (Right in RTL) */}
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

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-[40px]">
          <div className="w-[388px] flex flex-col gap-[24px]">
            <h1 className="font-['IRANYekanX'] font-bold text-[21px] leading-[32px] text-[#181d27] text-right">
              ورود به حساب کاربری
            </h1>

            {/* Social Login */}
            <div className="flex flex-col gap-[16px]">
              <Button variant="secondary-2" className="w-full relative h-[48px]">
                <span className="w-full text-center font-medium text-[14px] text-[var(--text-primary)]">ورود با حساب پاد</span>
                <div className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[20px]">
                  <img src={ASSETS.imgPodLogo} alt="Pod" className="size-full" />
                </div>
              </Button>
              <Button variant="secondary-2" className="w-full relative h-[48px]">
                <span className="w-full text-center font-medium text-[14px] text-[var(--text-primary)]">ورود با حساب کاربری گوگل</span>
                <div className="absolute right-[12px] top-1/2 -translate-y-1/2 size-[20px]">
                   <img src={ASSETS.imgGoogleLogo} alt="Google" className="size-full" />
                </div>
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-[16px] w-full">
               <div className="h-[1px] flex-1 bg-[#e9eaeb]" />
               <span className="font-['IRANYekanX'] font-medium text-[15px] text-[#717680]">یا</span>
               <div className="h-[1px] flex-1 bg-[#e9eaeb]" />
            </div>

            {/* Form */}
            <div className="flex flex-col gap-[24px]">
               <Input 
                 label="ایمیل"
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="text-right"
               />
               
               <div className="flex flex-col gap-[8px]">
                  <Input 
                    label="رمز عبور"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-right"
                  />
                  <div className="flex justify-end items-end">
                     <Button variant="link" size="sm" className="h-auto p-0 text-[12px] font-medium text-[#004eeb]">
                       فراموشی رمز عبور
                     </Button>
                  </div>
               </div>

               <Button 
                 variant="primary" 
                 className="w-full"
                 disabled={!email || !password}
                 onClick={onLogin}
               >
                 ورود
               </Button>
            </div>

            {/* Terms */}
            <div className="flex items-center justify-start gap-[4px] flex-wrap text-[12px] text-[#535862] font-['IRANYekanX'] text-right" dir="rtl">
               <span className="leading-[18px]">ادامه فرآیند ورود و ثبت نام به معنای پذیرش</span>
               <a href="#" className="text-[#004eeb] underline font-medium leading-[18px] px-1 border border-gray-200 rounded px-1">شرایط و قوانین</a>
               <span className="leading-[18px]">دیو می‌باشد.</span>
            </div>
            
            <div className="h-[1px] w-full bg-[#e9eaeb] my-[8px]" />

             {/* Sign Up Footer */}
             <div className="flex items-center justify-start gap-[8px]">
               <span className="font-['IRANYekanX'] font-medium text-[14px] text-[#535862]">حساب کاربری ندارید؟</span>
               <Button variant="secondary" size="sm" className="bg-[#ebf1ff] text-[#004eeb]">
                 ثبت نام
               </Button>
             </div>
          </div>
        </div>
      </div>

      {/* Illustration Side (Left in RTL) */}
      <div className="hidden lg:block w-[402px] h-screen relative bg-gradient-to-b from-[#f6faff] to-[#aad1ff] overflow-hidden shrink-0">
         <LoginIllustration className="w-full h-full" />
      </div>
    </div>
  );
};

export default LoginPage;

