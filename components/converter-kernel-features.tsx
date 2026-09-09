import React, { memo } from 'react';
import { Check } from 'lucide-react';

interface KernelFeaturesProps {
  features: string[];
  title: string;
  description: string;
}

export const KernelFeatures = memo(({ title, description, features }: KernelFeaturesProps) => (
  <div className="space-y-4">
    <div className="rounded-lg border-2 border-ink bg-main p-4 text-black shadow-brutal">
      <h4 className="text-base font-extrabold">{title}</h4>
      <p className="mt-1.5 text-sm font-medium leading-relaxed break-words">
        {description}
      </p>
    </div>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li
          key={index}
          className="flex items-start gap-3 rounded-lg border-2 border-ink bg-paper p-3 shadow-brutal transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-none"
        >
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-md border-2 border-ink bg-mint text-black">
            <Check className="h-3.5 w-3.5" strokeWidth={4} />
          </span>
          <span className="text-sm font-semibold break-words">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  </div>
));

KernelFeatures.displayName = 'KernelFeatures';
