'use client';

import * as React from 'react';
import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const Dialog = BaseDialog.Root;

const DialogTrigger = BaseDialog.Trigger;

const DialogPortal = BaseDialog.Portal;

const DialogClose = BaseDialog.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseDialog.Backdrop
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/60', className)}
    {...props}
  />
));
DialogOverlay.displayName = 'DialogOverlay';

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, children, ...props }, ref) => (
  <BaseDialog.Portal>
    <DialogOverlay />
    <BaseDialog.Popup
      ref={ref}
      className={cn(
        'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg border-2 border-ink bg-paper p-6 text-ink shadow-brutal-lg',
        className
      )}
      {...props}
    >
      {children}
      <BaseDialog.Close
        className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-md border-2 border-ink bg-paper text-ink shadow-brutal transition-all hover:bg-main hover:text-black active:translate-x-[1px] active:translate-y-[1px] active:shadow-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:pointer-events-none"
        aria-label="Close dialog"
      >
        <X aria-hidden="true" className="h-4 w-4 font-bold" />
      </BaseDialog.Close>
    </BaseDialog.Popup>
  </BaseDialog.Portal>
));
DialogContent.displayName = 'DialogContent';

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col gap-1.5 text-center sm:text-left',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Title>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseDialog.Title
    ref={ref}
    className={cn('text-lg font-bold leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof BaseDialog.Description>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, ref) => (
  <BaseDialog.Description
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = 'DialogDescription';

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
