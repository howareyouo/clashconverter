import { Converter } from '@/components/converter';
import { SiteHeader } from '@/components/site-header';
import { setRequestLocale } from 'next-intl/server';
import { JSONLDStructuredData } from '@/components/seo/seo-head';
import { locales } from '@/i18n';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // Validate locale and set request locale for next-intl
  if (!locales.includes(locale as any)) {
    return <div>Unsupported locale</div>;
  }

  setRequestLocale(locale);

  return (
    <div className="relative min-h-screen bg-canvas">
      <SiteHeader />

      {/* Main Content - Entrance animation */}
      <main className="relative z-0 animate-neo-enter">
        <Converter />
        <JSONLDStructuredData locale={locale} type="all" pageType="home" />
      </main>
    </div>
  );
}
