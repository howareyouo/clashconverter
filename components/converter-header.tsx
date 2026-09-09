import Image from 'next/image';

interface ConverterHeaderProps {
  title: string;
  subtitle: string;
}

export function ConverterHeader({ title, subtitle }: ConverterHeaderProps) {
  return (
    <header className="text-center space-y-3 md:space-y-4 mb-6 md:mb-8">
      {/* Logo with sharp scale transition */}
      <div className="relative inline-block">
        <Image
          src="/clash_converter.svg"
          alt={title}
          width={260}
          height={80}
          className="mx-auto max-w-[180px] md:max-w-[220px] lg:max-w-none transition-transform duration-300 hover:scale-[1.02]"
        />
        {/* Accent underline - brutal block */}
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 h-1.5 w-24 bg-ink" />
      </div>

      {/* Subtitle - refined typography */}
      <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium tracking-tight">
        {subtitle}
      </p>
    </header>
  );
}