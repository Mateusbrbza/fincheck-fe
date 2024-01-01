import { ComponentProps, forwardRef } from "react";
import { CrossCircledIcon } from "@radix-ui/react-icons";

import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          placeholder=" "
          className={cn(
            "bg-white rounded-lg border border-gray-500 px-3 w-full h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-900 transition-all outline-none",
            error && "!border-red-800",
            className,
          )}
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs left-3 top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex gap-2 items-center mt-2 text-red-800">
            <CrossCircledIcon />

            <span className="text-xs">
              {error}
            </span>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
