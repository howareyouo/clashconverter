"use client"

import * as React from "react"
import { Select as BaseSelect } from "@base-ui/react/select"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Select = BaseSelect.Root

const SelectGroup = BaseSelect.Group

const SelectValue = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Value>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Value>
>(({ className, ...props }, ref) => (
  <BaseSelect.Value ref={ref} className={cn(className)} {...props} />
))
SelectValue.displayName = "SelectValue"

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseSelect.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold text-ink shadow-brutal outline-none transition-all duration-100 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-x-[1px] active:translate-y-[1px] active:shadow-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <BaseSelect.Icon>
      <ChevronDown aria-hidden="true" className="h-4 w-4 opacity-60" />
    </BaseSelect.Icon>
  </BaseSelect.Trigger>
))
SelectTrigger.displayName = "SelectTrigger"

type SelectContentProps = React.ComponentPropsWithoutRef<
  typeof BaseSelect.Popup
> & {
  align?: React.ComponentProps<typeof BaseSelect.Positioner>["align"]
  sideOffset?: React.ComponentProps<
    typeof BaseSelect.Positioner
  >["sideOffset"]
}

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Popup>,
  SelectContentProps
>(({ className, children, align = "start", sideOffset = 4, ...props }, ref) => (
  <BaseSelect.Portal>
    <BaseSelect.Positioner
      align={align}
      alignItemWithTrigger={false}
      sideOffset={sideOffset}
    >
      <BaseSelect.Popup
        ref={ref}
        className={cn(
          "relative z-50 max-h-96 min-w-[max(8rem,var(--anchor-width))] overflow-y-auto overscroll-contain rounded-lg border-2 border-ink bg-paper p-1.5 text-ink shadow-brutal-lg",
          className
        )}
        {...props}
      >
        <BaseSelect.List>{children}</BaseSelect.List>
      </BaseSelect.Popup>
    </BaseSelect.Positioner>
  </BaseSelect.Portal>
))
SelectContent.displayName = "SelectContent"

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.GroupLabel>
>(({ className, ...props }, ref) => (
  <BaseSelect.GroupLabel
    ref={ref}
    className={cn("py-1.5 pl-8 pr-2 text-xs font-bold uppercase tracking-wider text-muted-foreground", className)}
    {...props}
  />
))
SelectLabel.displayName = "SelectLabel"

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Item>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Item>
>(({ className, children, ...props }, ref) => (
  <BaseSelect.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-md py-2 pl-8 pr-3 text-sm font-semibold text-ink outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-main data-[highlighted]:text-black",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <BaseSelect.ItemIndicator>
        <Check aria-hidden="true" className="h-4 w-4" strokeWidth={3} />
      </BaseSelect.ItemIndicator>
    </span>

    <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
  </BaseSelect.Item>
))
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof BaseSelect.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseSelect.Separator>
>(({ className, ...props }, ref) => (
  <BaseSelect.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-ink/20", className)}
    {...props}
  />
))
SelectSeparator.displayName = "SelectSeparator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
