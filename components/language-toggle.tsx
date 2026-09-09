'use client';

import * as React from 'react';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// js-index-maps: Use Map for O(1) language lookups instead of Array.find()
const languages = [
  { value: 'en', label: 'English', nativeLabel: 'English' },
  { value: 'zh', label: 'Simplified Chinese', nativeLabel: '简体中文' },
];

const LANGUAGE_MAP = new Map(languages.map(lang => [lang.value, lang]));

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // js-index-maps: Use Map.get() for O(1) lookup instead of Array.find()
  const currentLanguage = LANGUAGE_MAP.get(locale);

  // next-intl navigation: pathname is locale-less (e.g. '/about') and
  // router.push(href, { locale }) prefixes the URL with the new locale AND
  // syncs the NEXT_LOCALE cookie on the client, so later navigations
  // (header/footer links) keep the selected language.
  const handleValueChange = (newLocale: string | null) => {
    if (!newLocale) return;
    router.push(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <Select open={open} onOpenChange={setOpen} value={locale} onValueChange={handleValueChange}>
      <SelectTrigger
        className="group h-9 w-auto min-w-[44px] rounded-lg px-2 md:min-w-[140px] md:px-3"
        aria-label="Select language"
      >
        <Languages className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
        <SelectValue placeholder="Select language">
          <span className="text-sm hidden sm:inline">{currentLanguage?.nativeLabel}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end" className="min-w-[140px]">
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="gap-2 min-h-10 cursor-pointer">
            <span className="flex-1">{lang.nativeLabel}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
