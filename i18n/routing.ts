import { defineRouting } from 'next-intl/routing';

/**
 * Central routing configuration for next-intl.
 * Single source of truth shared by:
 * - `createNavigation` (Link / useRouter / usePathname)
 * - `createMiddleware` (locale prefix + cookie syncing)
 * - request config in `i18n.ts`
 */
export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  localePrefix: 'always', // Always show locale prefix to avoid conflicts
});
