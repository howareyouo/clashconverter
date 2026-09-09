"use client"

import * as React from "react"
import { Accordion as BaseAccordion } from "@base-ui/react/accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = BaseAccordion.Root

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(({ className, ...props }, ref) => (
  <BaseAccordion.Item
    ref={ref}
    className={cn("group border-b-2 border-ink last:border-b-0", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Header className="flex">
    <BaseAccordion.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-bold transition-colors hover:text-ink/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
        className
      )}
      {...props}
    >
      {children}
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 border-ink bg-paper text-ink shadow-brutal transition-transform duration-200 group-data-[open]:rotate-180 group-data-[open]:bg-main group-data-[open]:text-black group-data-[open]:active:translate-x-[1px] group-data-[open]:active:translate-y-[1px] group-data-[open]:active:shadow-none">
        <ChevronDown className="h-4 w-4" strokeWidth={3} />
      </span>
    </BaseAccordion.Trigger>
  </BaseAccordion.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof BaseAccordion.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(({ className, children, ...props }, ref) => (
  <BaseAccordion.Panel
    ref={ref}
    className="overflow-hidden text-sm text-muted-foreground"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </BaseAccordion.Panel>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
