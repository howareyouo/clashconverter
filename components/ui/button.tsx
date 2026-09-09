import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive'
  size?: 'default' | 'sm' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 select-none text-sm font-bold transition-all duration-100 ease-out cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
          {
            'border-ink bg-main text-black shadow-brutal hover:brightness-[0.96]': variant === 'default',
            'border-ink bg-paper text-ink shadow-brutal hover:brightness-[0.97]': variant === 'outline',
            'border-transparent bg-transparent text-ink hover:bg-main/40 hover:text-ink': variant === 'ghost',
            'border-ink bg-hotpink text-black shadow-brutal hover:brightness-[0.96]': variant === 'destructive',
          },
          {
            'h-10 px-4 py-2': size === 'default',
            'h-8 px-3 text-xs': size === 'sm',
            'h-12 px-6 text-base': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
