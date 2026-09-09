import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FormatType } from '@/lib/parser';

interface FormatSelectorProps {
  value: FormatType;
  onChange: (value: FormatType) => void;
  options: Array<{ value: FormatType; label: string }>;
  infoButton?: React.ReactNode;
}

export function FormatSelector({ value, onChange, options, infoButton }: FormatSelectorProps) {
  return (
    <div className="flex items-center gap-1.5">
      <Select
        value={value}
        onValueChange={(val) => onChange(val as FormatType)}
        items={options.map(({ value, label }) => ({ value, label }))}
      >
        <SelectTrigger
          aria-label="Select format"
          className="h-8 w-auto min-w-[130px] max-w-[160px]"
        >
          <SelectValue className="truncate" />
        </SelectTrigger>
        <SelectContent className="min-w-[160px]">
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="last:mb-0"
            >
              <span className="block max-w-[180px] truncate">{option.label}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {infoButton}
    </div>
  );
}
