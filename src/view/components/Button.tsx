import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-teal-700 hover:bg-teal-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all active:bg-teal-800"
    />
  )
}
