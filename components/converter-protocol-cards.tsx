import React from 'react';

const PROTOCOL_CARDS = [
  { name: 'Shadowsocks' },
  { name: 'ShadowsocksR' },
  { name: 'Vmess' },
  { name: 'VLESS' },
  { name: 'Trojan' },
  { name: 'Hysteria' },
  { name: 'Hysteria2' },
  { name: 'HTTP' },
  { name: 'SOCKS5' },
] as const;

// NeoBrutal 平涂色块(循环使用):ink 底随明暗翻转,配 canvas 色字保持可读;其余配黑字
const TILE_COLORS = [
  'bg-main text-black',
  'bg-lemon text-black',
  'bg-mint text-black',
  'bg-hotpink text-black',
  'bg-ink text-canvas',
  'bg-main text-black',
  'bg-lemon text-black',
  'bg-mint text-black',
  'bg-hotpink text-black',
];

export const ProtocolCards = React.memo(() => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {PROTOCOL_CARDS.map((protocol, index) => (
      <div
        key={protocol.name}
        className="flex cursor-default flex-col items-center gap-2.5 rounded-lg border-2 border-ink bg-paper p-4 text-center shadow-brutal transition-all duration-100 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-none"
      >
        {/* Initial letter tile */}
        <span
          className={`grid h-10 w-10 place-items-center rounded-md border-2 border-ink text-base font-extrabold select-none ${TILE_COLORS[index % TILE_COLORS.length]}`}
        >
          {protocol.name.charAt(0)}
        </span>
        <span className="text-xs font-bold text-ink leading-tight">
          {protocol.name}
        </span>
      </div>
    ))}
  </div>
));

ProtocolCards.displayName = 'ProtocolCards';
