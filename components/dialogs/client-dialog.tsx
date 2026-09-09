'use client';

import * as React from 'react';
import { useTranslations } from 'next-intl';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const clients = [
  {
    id: 'clash-party',
    icon: '⚡',
  },
  {
    id: 'clash-verge',
    icon: '🚀',
  },
  {
    id: 'sing-box',
    icon: '📦',
  },
  {
    id: 'shadowrocket',
    icon: '🎯',
  },
  {
    id: 'v2rayng',
    icon: '📱',
  },
] as const;

export function ClientDialog() {
  const t = useTranslations('clientDialog');
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="h-9 gap-2"
          >
            <Download className="h-4 w-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">{t('buttonLabel')}</span>
          </Button>
        }
      />
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t('title')}</DialogTitle>
          <DialogDescription className="text-base">
            {t('description')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          {clients.map((client) => (
            <Card
              key={client.id}
              className="group flex flex-col transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-none"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">{client.icon}</span>
                  {t(`clients.${client.id}.name`)}
                </CardTitle>
                <CardDescription>
                  {t(`clients.${client.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <a
                  href={t(`clients.${client.id}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-main px-3 py-1.5 text-sm font-bold text-black shadow-brutal transition-all duration-100 hover:brightness-[0.96] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  <Download className="h-4 w-4" strokeWidth={2.5} />
                  {t('downloadButton')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
