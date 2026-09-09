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
    className={cn(
      "group overflow-hidden rounded-lg border-2 border-ink bg-paper shadow-brutal transition-colors duration-200",
      "hover:bg-main/20 data-[open]:bg-main/20 data-[open]:shadow-brutal",
      className
    )}
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
        "flex flex-1 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold transition-colors hover:text-ink/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink",
        className
      )}
      {...props}
    >
      {children}
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border-2 border-ink bg-paper text-ink transition-transform duration-200 group-data-[open]:rotate-180 group-data-[open]:bg-main group-data-[open]:text-black">
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
    className="overflow-hidden text-sm text-muted-foreground h-[var(--accordion-panel-height)] transition-[height] duration-200 ease-out motion-reduce:transition-none data-[starting-style]:h-0 data-[ending-style]:h-0"
    {...props}
  >
    <div className={cn("px-5 pb-5 pt-0", className)}>{children}</div>
  </BaseAccordion.Panel>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
