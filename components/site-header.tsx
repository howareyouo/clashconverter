import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Download, Info } from 'lucide-react';
import { LanguageToggle } from '@/components/language-toggle';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

interface SiteHeaderProps {
  /** 当前页用于高亮导航 chip(首页无需传) */
  current?: 'about' | 'resources';
}

const chipClass =
  'group flex cursor-pointer items-center gap-2 rounded-lg border-2 border-ink px-3 py-1.5 text-sm font-bold transition-all duration-100 active:translate-x-[1px] active:translate-y-[1px] active:shadow-none';

export async function SiteHeader({ current }: SiteHeaderProps) {
  const t = await getTranslations();

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
      <div className="page-container flex h-14 items-center justify-between">
        <Link
          href="/"
          aria-label="ClashConverter home"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <span
            aria-hidden="true"
            className="grid h-6 w-6 place-items-center rounded-md border-2 border-ink bg-main text-black"
          >
            <span className="text-xs font-black leading-none">C</span>
          </span>
          <span className="neo-label text-ink hidden sm:inline">CLASH CONVERTER</span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-2.5" aria-label="Main navigation">
          <Link href="/resources" aria-current={current === 'resources' ? 'page' : undefined}>
            <span
              className={cn(
                chipClass,
                'shadow-brutal hover:bg-main hover:text-black',
                current === 'resources' ? 'bg-main text-black' : 'bg-paper text-ink'
              )}
            >
              <Download className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">{t('resources.menuTitle')}</span>
            </span>
          </Link>
          <Link href="/about" aria-current={current === 'about' ? 'page' : undefined}>
            <span
              className={cn(
                chipClass,
                'shadow-brutal hover:bg-main hover:text-black',
                current === 'about' ? 'bg-main text-black' : 'bg-paper text-ink'
              )}
            >
              <Info className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">{t('about')}</span>
            </span>
          </Link>

          <LanguageToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
