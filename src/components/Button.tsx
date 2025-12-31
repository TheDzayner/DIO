import React from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link' | 'secondary-2';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center whitespace-nowrap rounded-[12px] font-['IRANYekanX'] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
          {
            // Variants
            'bg-[#004eeb] text-white hover:bg-[#003cc4] shadow-sm disabled:bg-[#717680] disabled:text-[#e9eaeb] disabled:opacity-100': variant === 'primary',
            'bg-[#ebf1ff] text-[#004eeb] hover:bg-[#d6e4ff] disabled:opacity-50': variant === 'secondary',
            'bg-white border border-[#004eeb] text-[#004eeb] hover:bg-[#ebf1ff] disabled:opacity-50': variant === 'outline',
            'text-[#004eeb] underline-offset-4 hover:underline disabled:opacity-50': variant === 'link',
            // secondary-2: Social Login buttons
            'bg-white border border-[#a4a7ae] text-[#181d27] hover:bg-[#f3f4f6] disabled:opacity-50': variant === 'secondary-2',
          },
          {
            // Sizes
            'h-[48px] px-[16px] py-[8px] text-[14px] leading-[24px] font-semibold': size === 'md',
            'h-[32px] px-[12px] text-[12px]': size === 'sm',
            'h-[56px] px-[20px] text-[16px]': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
