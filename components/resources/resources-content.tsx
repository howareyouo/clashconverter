/**
 * Resources Page Content Component
 * Displays proxy clients and installation scripts for proxy nodes
 */

'use client';

import { useTranslations } from 'next-intl';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Server, ArrowLeft, Smartphone, Shield, Radar } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

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
    id: 'loon',
    icon: '🌙',
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
  {
    id: 'flclash',
    icon: '⚡',
  },
  {
    id: 'clash-meta-android',
    icon: '🤖',
  },
  {
    id: 'clashmi',
    icon: '🌟',
  },
] as const;

const proxyScripts = [
  {
    id: 'v2ray-wss',
    icon: '🌐',
  },
  {
    id: 'v2ray',
    icon: '⚙️',
  },
  {
    id: 'v2ray-agent',
    icon: '🔧',
  },
  {
    id: 'marzban',
    icon: '🎛️',
  },
] as const;

const cardHoverClass =
  'group flex h-full flex-col transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-none';

const cardLinkClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-ink px-4 py-2 text-sm font-bold transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none';

const sectionIconClass =
  'grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-ink text-black shadow-brutal';

export function ResourcesContent() {
  const t = useTranslations();

  return (
    <section className="page-container py-12 md:py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">{t('backToHome')}</span>
          </Button>
        </Link>
      </div>

      {/* Page Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink">
          {t('resources.title')}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('resources.subtitle')}
        </p>
      </div>

      {/* Proxy Clients Section */}
      <div className="mb-16 md:mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn(sectionIconClass, 'bg-main')}>
            <Smartphone className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              {t('resources.clients.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('resources.clients.description')}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <Card
              key={client.id}
              className={cardHoverClass}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-3xl transition-transform duration-200 group-hover:scale-110">
                    {client.icon}
                  </span>
                  {t(`clientDialog.clients.${client.id}.name`)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(`clientDialog.clients.${client.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex items-end">
                <a
                  href={t(`clientDialog.clients.${client.id}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(cardLinkClass, 'bg-main text-black shadow-brutal hover:brightness-[0.96]')}
                >
                  <Download className="h-4 w-4" strokeWidth={2.5} />
                  {t('clientDialog.downloadButton')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Proxy Node Installation Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn(sectionIconClass, 'bg-mint')}>
            <Server className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              {t('resources.scripts.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('resources.scripts.description')}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proxyScripts.map((script) => (
            <Card
              key={script.id}
              className={cardHoverClass}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-3xl transition-transform duration-200 group-hover:scale-110">
                    {script.icon}
                  </span>
                  {t(`proxyNodeDialog.scripts.${script.id}.name`)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(`proxyNodeDialog.scripts.${script.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex items-end">
                <a
                  href={t(`proxyNodeDialog.scripts.${script.id}.url`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(cardLinkClass, 'bg-main text-black shadow-brutal hover:brightness-[0.96]')}
                >
                  <Server className="h-4 w-4" strokeWidth={2.5} />
                  {t('proxyNodeDialog.viewButton')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Notice Box */}
        <div className="mt-8 rounded-lg border-2 border-ink bg-lemon p-6 text-black shadow-brutal">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Shield className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold mb-2">
                {t('resources.scripts.noticeTitle')}
              </h3>
              <p className="text-sm font-medium leading-relaxed">
                {t('proxyNodeDialog.notice')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detector/Probe Tools Section */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className={cn(sectionIconClass, 'bg-hotpink')}>
            <Radar className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">
              {t('resources.detectors.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('resources.detectors.description')}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.raw('resources.detectors.tools').map((tool: { name: string; desc: string; url: string }, index: number) => (
            <Card
              key={index}
              className={cardHoverClass}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="grid h-8 w-8 place-items-center rounded-md border-2 border-ink bg-main text-black transition-transform duration-200 group-hover:scale-110">
                    <Radar className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  {tool.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {tool.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex items-end">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(cardLinkClass, 'bg-ink text-canvas shadow-brutal hover:brightness-125 dark:hover:brightness-95')}
                >
                  <Radar className="h-4 w-4" strokeWidth={2.5} />
                  {t('resources.detectors.visitButton')}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-8 rounded-lg border-2 border-ink bg-main p-6 text-black shadow-brutal">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <Radar className="h-6 w-6" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold mb-2">
                {t('resources.detectors.infoTitle')}
              </h3>
              <p className="text-sm font-medium leading-relaxed">
                {t('resources.detectors.info')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 rounded-lg border-2 border-ink bg-main p-8 text-center text-black shadow-brutal md:p-10">
        <h3 className="text-2xl font-bold mb-3">
          {t('resources.cta.title')}
        </h3>
        <p className="font-medium mb-6 max-w-xl mx-auto">
          {t('resources.cta.description')}
        </p>
        <Link href="/">
          <Button variant="outline" size="lg">
            {t('resources.cta.button')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
