import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Localized navigation helpers.
 * - `Link`: automatically prefixes the current locale
 * - `useRouter` / `usePathname`: locale-aware (no manual prefix handling)
 * - `router.push(href, { locale })`: switches locale AND syncs the
 *   `NEXT_LOCALE` cookie on the client, so subsequent navigations
 *   keep the chosen language.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
