"use client"
import { useTranslations } from 'next-intl';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'clashconverter@gmail.com';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();
  const [showEmail, setShowEmail] = useState(false);

  const chipClass =
    "group flex cursor-pointer items-center gap-2 rounded-lg border-2 border-ink bg-paper px-4 py-2 text-sm font-bold text-ink shadow-brutal transition-all duration-100 hover:bg-main hover:text-black active:translate-x-[1px] active:translate-y-[1px] active:shadow-none";

  return (
    <footer className="w-full border-t-2 border-ink bg-paper py-8 md:py-10">
      <div className="page-container">

        {/* Main Footer Content - Clean horizontal layout */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">

          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            {/* Brand */}
            <span className="neo-label text-ink tracking-wide">
              CLASH CONVERTER
            </span>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground font-medium">
              © {currentYear} {t('rights')}
            </p>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Email Button */}
            <button
              onClick={() => setShowEmail(true)}
              className={chipClass}
              type="button"
              aria-label={showEmail ? 'Hide contact email' : 'Show contact email'}
            >
              <Mail className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">
                {showEmail ? CONTACT_EMAIL : t('contact')}
              </span>
            </button>

            {/* GitHub Button */}
            <a
              href="https://github.com/sunway910/clashconverter"
              target="_blank"
              rel="noopener noreferrer"
              className={chipClass}
            >
              <Github className="h-4 w-4" strokeWidth={2.5} />
              <span className="hidden sm:inline">GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
}
