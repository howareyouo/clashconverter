import { useState, memo } from 'react';
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
import { Download, Info, Copy, Check, Cpu } from 'lucide-react';
import { PreviewEditor, type LanguageType } from '@/components/preview/preview-editor';
import { FormatSelector } from './converter-format-selector';
import { KernelFeatures } from './converter-kernel-features';
import { FormatType } from '@/lib/parser';

interface OutputSectionProps {
  output: string;
  outputFormat: FormatType;
  outputLanguage: LanguageType;
  outputPlaceholder: string;
  itemCount: number;
  kernelTitle: string;
  kernelDescription: string;
  kernelFeatures: string[];
  onCopy: () => void;
  onDownload: () => void;
  onFormatChange: (value: FormatType) => void;
  formatOptions: Array<{ value: FormatType; label: string }>;
  labels: {
    outputLabel: string;
    formatTypes: Record<string, string>;
    download: string;
    copy: string;
  };
}

export const OutputSection = memo(({
  output,
  outputFormat,
  outputLanguage,
  outputPlaceholder,
  itemCount,
  kernelTitle,
  kernelDescription,
  kernelFeatures: kernelFeaturesList,
  onCopy,
  onDownload,
  onFormatChange,
  formatOptions,
  labels,
}: OutputSectionProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <Card className="relative flex h-full flex-col overflow-hidden">
          {/* Accent bar - right side for output */}
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-lemon" />

          <CardHeader className="relative z-10 px-5 pt-5 pb-2">
            <div className="flex items-center justify-between gap-2">
              <CardTitle
                className="flex cursor-pointer items-center gap-2 select-none"
                onClick={() => setDialogOpen(true)}
                role="button"
                tabIndex={0}
                title="Click to view kernel features"
              >
                {/* Technical label */}
                <span className="text-xl md:text-2xl font-bold text-ink tracking-tight">
                  {labels.outputLabel}
                </span>
              </CardTitle>
              <div className="flex items-center gap-2">
                <FormatSelector
                  value={outputFormat}
                  onChange={onFormatChange}
                  options={formatOptions}
                  infoButton={infoButton}
                />
              </div>
            </div>
          </CardHeader>

          <CardContent className="relative z-10 flex flex-1 flex-col pt-3">
            {/* Editor Area - brutal well */}
            <div className="flex-1 overflow-hidden rounded-lg border-2 border-ink bg-paper shadow-brutal">
              <PreviewEditor
                key={outputFormat}
                value={output}
                language={outputLanguage}
                height="100%"
                placeholder={outputPlaceholder}
              />
            </div>

            {/* Status Bar - technical, informative */}
            <div className="mt-3 flex h-5 items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Cpu className="h-3.5 w-3.5" strokeWidth={2.5} />
                <span className="mono font-semibold">{kernelTitle}</span>
              </div>
              <div className="mono font-semibold text-muted-foreground">
                {itemCount} NODES
              </div>
            </div>

            {/* Action Buttons - brutal primary + paper */}
            <div className="mt-3 flex h-10 gap-2">
              {/* Download Button - Primary action */}
              <Button
                onClick={onDownload}
                disabled={itemCount === 0}
                className="h-full flex-1"
                title={labels.download}
              >
                <Download className="h-4 w-4 shrink-0" strokeWidth={2.5} />
                {labels.download}
              </Button>

              {/* Copy Button - Secondary action */}
              <Button
                variant="outline"
                onClick={handleCopy}
                disabled={itemCount === 0}
                className={`h-full px-4 ${copied ? 'bg-mint text-black hover:bg-mint' : ''}`}
                title={labels.copy}
              >
                {copied ? (
                  <Check className="h-4 w-4" strokeWidth={3} />
                ) : (
                  <Copy className="h-4 w-4" strokeWidth={2.5} />
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Kernel Features</DialogTitle>
            <DialogDescription>Supported features for this kernel</DialogDescription>
          </DialogHeader>
          <KernelFeatures
            title={kernelTitle}
            description={kernelDescription}
            features={kernelFeaturesList}
          />
        </DialogContent>
      </Dialog>
    </>
  );
});

OutputSection.displayName = 'OutputSection';
