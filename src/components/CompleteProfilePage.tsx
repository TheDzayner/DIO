import React, { useState, useEffect } from 'react';
import { ASSETS } from './assets';
import Input from './Input';
import Button from './Button';
import CompleteProfileIllustration from './CompleteProfileIllustration';
import { cn } from '../lib/utils';

// Validation icons are now inline SVGs

interface CompleteProfilePageProps {
  onBack: () => void;
  onContinue: () => void;
  email?: string;
}

export const CompleteProfilePage: React.FC<CompleteProfilePageProps> = ({ onBack, onContinue, email }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validations, setValidations] = useState({
    hasNumber: false,
    hasCase: false,
    hasLength: false,
    hasSpecial: false,
  });

  useEffect(() => {
    const { password } = formData;
    setValidations({
      hasNumber: /\d/.test(password),
      hasCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
      hasLength: password.length >= 8 && password.length <= 50,
      hasSpecial: /[^a-zA-Z0-9]/.test(password), 
    });
  }, [formData.password]);

  const isValid = Object.values(validations).every(Boolean) && 
                  formData.firstName && 
                  formData.lastName && 
                  formData.mobile;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const ValidationItem = ({ valid, text }: { valid: boolean, text: string }) => (
    <div className="flex items-center gap-[4px] justify-end">
      {valid ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="16" height="16" rx="8" fill="#16B364"/>
          <path d="M11.3332 5.33331L6.6665 9.99998L4.6665 7.99998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.75" y="0.75" width="14.5" height="14.5" rx="7.25" stroke="#D0D5DD" strokeWidth="1.5"/>
        </svg>
      )}
      <span className={cn(
        "font-['IRANYekanX'] text-[12px] leading-[18px] transition-colors duration-200",
        valid ? "text-[#079455] font-medium" : "text-[#535862]"
      )}>
        {text}
      </span>
    </div>
  );

  return (
    <div className="flex w-full min-h-screen bg-white" dir="rtl">
        {/* Form Side */}
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
             {/* Header - Reuse from SignUpPage */}
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
                 <div className="w-[388px] flex flex-col gap-[24px]">
                     <div className="flex flex-col gap-[8px]">
                        <h1 className="font-['IRANYekanX'] font-bold text-[28px] leading-[32px] text-[#181d27] text-right">
                          به دیو خوش آمدید!
                        </h1>
                        <p className="font-['IRANYekanX'] font-medium text-[14px] leading-[28px] text-[#414651] text-right">
                          اطلاعات حساب کاربری خود را تکمیل کنید.
                        </p>
                     </div>

                     <div className="flex flex-col gap-[16px]">
                         <div className="flex gap-[24px]">
                            <Input 
                               label="نام"
                               name="firstName"
                               value={formData.firstName}
                               onChange={handleChange}
                               className="text-right"
                            />
                            <Input 
                               label="نام خانوادگی"
                               name="lastName"
                               value={formData.lastName}
                               onChange={handleChange}
                               className="text-right"
                            />
                         </div>

                         <Input 
                            label="شماره همراه"
                            name="mobile"
                            type="tel"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="text-right"
                         />

                         <div>
                            <Input 
                                label="رمز عبور"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={handleChange}
                                className="text-right"
                                endIcon={
                                    <button onClick={() => setShowPassword(!showPassword)} tabIndex={-1} type="button">
                                        <img 
                                            src={showPassword ? "/icons/type=security, hide=true.svg" : "/icons/type=security, hide=false.svg"} 
                                            alt="Toggle password" 
                                            className="size-[20px]"
                                        />
                                    </button>
                                }
                            />
                            <div className="flex flex-col items-start justify-start gap-[4px] mt-[8px]">
                                <ValidationItem valid={validations.hasNumber} text="حداقل شامل یک عدد باشد" />
                                <ValidationItem valid={validations.hasCase} text="حداقل شامل یک حرف بزرگ و کوچیک انگلیس باشد" />
                                <ValidationItem valid={validations.hasLength} text="طول رمز حداقل باید ۸ و حداکثر ۵۰ کارکتر باشد" />
                                <ValidationItem valid={validations.hasSpecial} text="حداقل باید شامل یک کارکتر خاص باشد" />
                            </div>
                         </div>
                     </div>

                     <div className="h-[1px] w-full bg-[#e9eaeb]" />

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
                            ادامه
                        </Button>
                     </div>
                 </div>
             </div>
        </div>

        {/* Illustration Side */}
        <div className="hidden lg:block w-[402px] h-screen relative bg-gradient-to-b from-[#f6faff] to-[#aad1ff] overflow-hidden shrink-0">
             <CompleteProfileIllustration className="w-full h-full" />
        </div>
    </div>
  );
};

export default CompleteProfilePage;


