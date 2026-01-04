import React from 'react';
import { cn } from '../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, label, error, helperText, type, endIcon, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-[8px] w-full", containerClassName)}>
        {label && (
          <label className="font-['IRANYekanX'] font-medium text-[12px] leading-[16px] text-[#535862] text-right">
            {label}
          </label>
        )}
        <div className={cn(
          "flex items-center h-[44px] w-full rounded-[12px] border bg-white px-[12px] py-[8px] transition-colors focus-within:border-[#004eeb] focus-within:ring-1 focus-within:ring-[#004eeb]",
          error ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500" : "border-[#d5d7da]",
          props.disabled && "opacity-50 cursor-not-allowed bg-gray-50"
        )}>
          <input
            type={type}
            className={cn(
              "flex w-full bg-transparent p-0 font-['IRANYekanX'] text-[14px] text-[#181d27] placeholder:text-[#a4a7ae] focus:outline-none text-right disabled:cursor-not-allowed",
              className
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="mr-2 flex items-center justify-center">
              {endIcon}
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p className={cn(
            "font-['IRANYekanX'] text-[12px] text-right",
            error ? "text-red-500" : "text-[#535862]"
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;


