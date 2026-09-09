'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme for immediate feedback during transition
  const currentTheme = resolvedTheme || theme || 'light';

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="group grid size-9 cursor-pointer place-items-center rounded-lg border-2 border-ink bg-paper text-ink shadow-brutal transition-all duration-100 ease-out hover:bg-main hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      aria-label="Toggle theme"
      type="button"
    >
      {/* Render icons on server and hydrate without flicker */}
      <span className="dark:hidden">
        <Moon className="size-5 transition-transform group-hover:scale-110" />
      </span>
      <span className="hidden dark:inline">
        <Sun className="size-5 transition-transform group-hover:scale-110" />
      </span>
    </button>
  );
}
