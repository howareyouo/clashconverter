import { Button } from '@/components/ui/button';
import { ArrowRightLeft } from 'lucide-react';

interface SwapButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'desktop' | 'mobile';
  label?: string;
}

export function SwapButton({ onClick, disabled, variant = 'desktop', label }: SwapButtonProps) {
  if (variant === 'mobile') {
    return (
      <div className="mt-2 lg:hidden">
        <Button
          className="w-full h-11"
          onClick={onClick}
          disabled={disabled}
          size="default"
          title={disabled ? 'Add content to swap formats' : 'Swap input and output formats'}
        >
          <ArrowRightLeft className="h-4 w-4 shrink-0" strokeWidth={2.5} />
          {label || 'Swap Formats'}
        </Button>
      </div>
    );
  }

  return (
    <Button
      size="default"
      variant="outline"
      className="group relative h-12 w-12 rounded-lg p-0"
      onClick={onClick}
      title={disabled ? 'Add content to swap formats' : 'Swap input and output formats'}
      disabled={disabled}
      aria-label="Swap formats"
    >
      <ArrowRightLeft className="h-5 w-5 transition-transform duration-200 group-hover:rotate-180" />
    </Button>
  );
}
