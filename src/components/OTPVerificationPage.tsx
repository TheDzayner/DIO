import React, { useState, useRef, useEffect } from 'react';
import { ASSETS } from './assets';
import Button from './Button';
import OTPIllustration from './OTPIllustration';
import { cn, toPersianDigits } from '../lib/utils';

interface OTPVerificationPageProps {
  email: string;
  onBack: () => void;
  onContinue: () => void;
}

export const OTPVerificationPage: React.FC<OTPVerificationPageProps> = ({ email, onBack, onContinue }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(105); // 1:45 in seconds
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleResend = () => {
    setTimeLeft(105);
    setCanResend(false);
    // Add resend logic here
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${toPersianDigits(minutes)}:${toPersianDigits(remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds)}`;
  };

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    setError(false);

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = () => {
    // Only dio@gmail.com is valid for testing error handling
    if (email === 'dio@gmail.com') {
      onContinue();
    } else {
      setError(true);
    }
  };

  const isComplete = otp.every(digit => digit !== '');

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6 && !isNaN(Number(value))) {
        newOtp[index] = value;
      }
    });
    setOtp(newOtp);
    if (pastedData.length > 0) {
      const focusIndex = Math.min(pastedData.length, 5);
      inputRefs.current[focusIndex]?.focus();
    }
  };

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
            <div className="flex flex-col gap-[24px]">
              <h1 className="font-['IRANYekanX'] font-bold text-[21px] leading-[32px] text-[#181d27] text-right">
                کد تایید برای ایمیل شما ارسال شد.
              </h1>
              
              <div className="flex items-center justify-between">
                 <p className="font-['IRANYekanX'] text-[14px] leading-[22px] text-[#414651] text-right flex-1 px-[8px]">
                   کد ارسال شده به ایمیل <span className="font-semibold" dir="ltr">{email}</span> خود را وارد کنید.
                 </p>
                 <div 
                    className="bg-[#f5f5f5] p-[4px] rounded-[12px] cursor-pointer"
                    onClick={onBack}
                 >
                    <img src={ASSETS.imgEdit} alt="Edit" className="size-[20px]" />
                 </div>
              </div>
            </div>

            {/* OTP Input */}
            <div className="flex flex-col gap-[24px]">
               <div className="flex flex-col gap-[24px]">
                  <div className="flex gap-[8px] justify-between direction-ltr" dir="ltr">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={el => inputRefs.current[index] = el}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className={cn(
                          "w-[58px] h-[58px] rounded-[12px] border bg-[#f5f5f5]",
                          "text-center text-[20px] font-medium text-[#181d27]",
                          "focus:outline-none focus:ring-1 transition-all",
                          error 
                            ? "border-[#D92D20] focus:border-[#D92D20] focus:ring-[#D92D20]" 
                            : "border-[#d5d7da] focus:border-[#004eeb] focus:ring-[#004eeb]"
                        )}
                      />
                    ))}
                  </div>

                  {error && (
                    <p className="text-[#D92D20] text-[12px] font-medium font-['IRANYekanX'] text-right mt-[-16px]">
                      کد وارد شده صحیح نمی‌باشد.
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                     <span className="font-['IRANYekanX'] font-medium text-[12px] text-[#414651]">
                       {canResend ? 'کد را دریافت نکردید؟' : 'زمان باقی‌مانده تا دریافت کد مجدد'}
                     </span>
                     <Button 
                       variant="secondary" 
                       size="sm" 
                       className={cn(
                         "bg-[#ebf1ff] text-[#004eeb] min-w-[60px]",
                         !canResend && "pointer-events-none"
                       )}
                       onClick={canResend ? handleResend : undefined}
                     >
                       {canResend ? 'ارسال مجدد' : formatTime(timeLeft)}
                     </Button>
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
                    className="flex-[2]"
                    disabled={!isComplete}
                    onClick={handleVerify}
                  >
                    ادامه
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration Side (Left in RTL) */}
      <div className="hidden lg:block w-[402px] h-screen relative bg-gradient-to-b from-[#f6faff] to-[#aad1ff] overflow-hidden shrink-0">
         <OTPIllustration className="w-full h-full" />
      </div>
    </div>
  );
};

export default OTPVerificationPage;

