import { useState, memo } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Info, Terminal } from 'lucide-react';
import { PreviewEditor, type LanguageType } from '@/components/preview/preview-editor';
import { FormatSelector } from './converter-format-selector';
import { ProtocolCards } from './converter-protocol-cards';
import { FormatType } from '@/lib/parser';

interface InputSectionProps {
  input: string;
  inputFormat: FormatType;
  inputLanguage: LanguageType;
  inputPlaceholder: string;
  itemCount: number;
  onInputChange: (value: string) => void;
  onFormatChange: (value: FormatType) => void;
  onClear: () => void;
  formatOptions: Array<{ value: FormatType; label: string }>;
  labels: {
    inputLabel: string;
    supportedProtocols: string;
    formatTypes: Record<string, string>;
    clear: string;
    itemsFound: string;
  };
}

export const InputSection = memo(({
  input,
  inputFormat,
  inputLanguage,
  inputPlaceholder,
  itemCount,
  onInputChange,
  onFormatChange,
  onClear,
  formatOptions,
  labels,
}: InputSectionProps) => {
  const t = useTranslations();
  const [dialogOpen, setDialogOpen] = useState(false);

  const infoButton = (
    <DialogTrigger
      render={
        <Button
          variant="ghost"
          size="sm"
          className="h-6 w-6 p-0"
        >
          <Info className="h-3.5 w-3.5" />
        </Button>
      }
    />
  );

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <Card className="relative flex h-full flex-col overflow-hidden">
        {/* Accent bar - left side */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-main" />

        <CardHeader className="relative z-10 px-5 pt-5 pb-2">
          <div className="flex items-center justify-between gap-2">
            <CardTitle
              className="flex cursor-pointer items-center gap-2 select-none"
              onClick={() => setDialogOpen(true)}
              role="button"
              tabIndex={0}
              title="Click to view supported protocols"
            >
              {/* Technical label */}
              <span className="text-xl md:text-2xl font-bold text-ink tracking-tight">
                {labels.inputLabel}
              </span>
            </CardTitle>
            <FormatSelector
              value={inputFormat}
              onChange={onFormatChange}
              options={formatOptions}
              infoButton={infoButton}
            />
          </div>
        </CardHeader>

        <CardContent className="relative z-10 flex flex-1 flex-col pt-3">
          {/* Editor Area - brutal well */}
          <div className="flex-1 overflow-hidden rounded-lg border-2 border-ink bg-paper shadow-brutal">
            <PreviewEditor
              value={input}
              language={inputLanguage}
              height="100%"
              placeholder={inputPlaceholder}
              onChange={onInputChange}
            />
          </div>

          {/* Status Bar - technical, informative */}
          <div className="mt-3 flex h-5 items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Terminal className="h-3.5 w-3.5" strokeWidth={2.5} />
              <span className="mono font-semibold">READY</span>
            </div>
            <div className="mono font-semibold text-muted-foreground">
              {labels.itemsFound}
            </div>
          </div>

          {/* Spacer to match output section button height */}
          <div className="mt-3 h-10" />
        </CardContent>
      </Card>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {t('dialog.protocolsTitle')}
          </DialogTitle>
          <DialogDescription>
            {t('dialog.protocolsDescription')}
          </DialogDescription>
        </DialogHeader>
        <ProtocolCards />
      </DialogContent>
    </Dialog>
  );
});

InputSection.displayName = 'InputSection';
