/**
 * About Page Content Component
 * Provides information about the converter with SEO-optimized content
 */

'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AboutContent() {
  const t = useTranslations();

  return (
    <section className="page-container page-container--narrow py-12 md:py-16">
      {/* Back button */}
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden sm:inline">{t('backToHome')}</span>
          </Button>
        </Link>
      </div>

      {/* H1 - Main heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-ink">
        {t('seoContent.title')}
      </h1>

      {/* Main content with target keywords */}
      <div className="max-w-none mb-12">
        <p className="text-lg leading-relaxed text-ink font-medium mb-6">
          {t('seoContent.intro')}
        </p>

        <p className="text-base leading-relaxed text-muted-foreground mb-6">
          {t('seoContent.privacy')}
        </p>

        {/* H2 - Features section */}
        <h2 className="border-t-2 border-ink pt-10 mt-12 mb-8 text-center text-2xl md:text-3xl font-bold text-ink">
          {t('seoContent.features.title')}
        </h2>

        <ul className="space-y-3 mb-10">
          {t.raw('seoContent.features.items').map((item: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3 rounded-lg border-2 border-ink bg-paper p-3 shadow-brutal"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 border-ink bg-mint text-black">
                <Check className="h-3.5 w-3.5" strokeWidth={4} />
              </span>
              <span className="text-sm font-semibold text-ink">{item}</span>
            </li>
          ))}
        </ul>

        {/* H2 - Supported protocols section */}
        <h2 className="border-t-2 border-ink pt-10 mt-12 mb-8 text-center text-2xl md:text-3xl font-bold text-ink">
          {t('seoContent.protocols.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {t.raw('seoContent.protocols.items').map((protocol: { name: string; desc: string }, index: number) => (
            <Card key={index} className="p-4">
              <h3 className="font-bold text-ink mb-1.5">{protocol.name}</h3>
              <p className="text-sm text-muted-foreground">{protocol.desc}</p>
            </Card>
          ))}
        </div>

        {/* H2 - How to use section */}
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-8 text-ink border-t-2 border-ink pt-10 text-center">
          {t('seoContent.howToUse.title')}
        </h2>

        <div className="space-y-4 mb-10">
          {t.raw('seoContent.howToUse.steps').map((step: { title: string; desc: string }, index: number) => (
            <div key={index} className="flex gap-4">
              <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border-2 border-ink bg-main text-sm font-extrabold text-black shadow-brutal">
                {index + 1}
              </div>
              <div>
                <h3 className="font-bold text-ink mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section - H2 with structured accordion */}
      <div className="border-t-2 border-ink pt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-ink">
          {t('seoContent.faq.title')}
        </h2>

        <Accordion
          multiple
          defaultValue={['item-0']}
          className="w-full max-w-3xl mx-auto space-y-4"
        >
          {t.raw('seoContent.faq.items').map((faq: { q: string; a: string }, index: number) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-ink">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink/80">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-ink mb-5">
          {t('seoContent.cta.text')}
        </p>
        <Link href="/">
          <Button size="lg">
            {t('seoContent.cta.button')}
          </Button>
        </Link>
      </div>
    </section>
  );
}
