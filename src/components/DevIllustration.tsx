// Ilustração original: desenvolvedor no computador, com etiquetas de tecnologia flutuando.
const tag = (x: number, y: number, label: string, delay: string, dur: string) => (
  <g className="bob" style={{ animationDelay: delay, animationDuration: dur }}>
    <rect x={x} y={y + 6} width="94" height="42" rx="10" fill="#0E0C1E" />
    <rect x={x} y={y} width="94" height="42" rx="10" fill="#1B1830" stroke="rgba(167,139,250,.4)" />
    <text x={x + 47} y={y + 28} textAnchor="middle" fontSize="20" fontWeight="700" fill="#E4E4E7" fontFamily="'Inter Variable', system-ui, sans-serif">{label}</text>
  </g>
)

export default function DevIllustration({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 480" className={className} role="img" aria-label="Ilustração de um desenvolvedor trabalhando em um computador">
      <defs>
        <radialGradient id="dev-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity=".32" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dev-plat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity=".28" />
          <stop offset="100%" stopColor="#5B21B6" stopOpacity=".08" />
        </linearGradient>
      </defs>

      <circle cx="300" cy="240" r="250" fill="url(#dev-glow)" />
      <ellipse cx="300" cy="412" rx="236" ry="62" fill="url(#dev-plat)" stroke="rgba(167,139,250,.25)" />

      {/* mesa: pernas e gaveta */}
      <rect x="322" y="306" width="8" height="98" fill="#3B1B7A" />
      <rect x="520" y="306" width="8" height="98" fill="#3B1B7A" />
      <rect x="468" y="306" width="52" height="46" rx="4" fill="#5B21B6" />
      <rect x="486" y="326" width="16" height="4" rx="2" fill="#A78BFA" />

      {/* cadeira */}
      <rect x="216" y="262" width="11" height="78" rx="5.5" fill="#A855F7" />
      <rect x="256" y="346" width="8" height="46" fill="#3B1B7A" />
      <path d="M222 394h78" stroke="#3B1B7A" strokeWidth="7" strokeLinecap="round" />
      <circle cx="226" cy="403" r="5" fill="#1E1B3A" />
      <circle cx="296" cy="403" r="5" fill="#1E1B3A" />
      <rect x="222" y="334" width="80" height="13" rx="6.5" fill="#9333EA" />

      {/* pessoa */}
      <path d="M240 340h52M292 340l2 44" stroke="#3B3A5A" strokeWidth="17" strokeLinecap="round" fill="none" />
      <ellipse cx="304" cy="392" rx="16" ry="7" fill="#A78BFA" />
      <path d="M226 336V272q0-22 20-24l16 4q12 12 8 40l2 44z" fill="#C4B5FD" />
      <rect x="246" y="238" width="12" height="16" rx="5" fill="#A8704A" />
      <circle cx="253" cy="226" r="19" fill="#A8704A" />
      <circle cx="271" cy="230" r="3.5" fill="#A8704A" />
      <path d="M233 226q-3-24 20-24 24 1 20 24-9-10-21-9-11 2-19 9z" fill="#1E1B3A" />

      {/* tampo da mesa, teclado e mouse */}
      <rect x="296" y="290" width="246" height="16" rx="5" fill="#7C3AED" />
      <rect x="318" y="284" width="56" height="7" rx="3" fill="#4C1D95" />
      <ellipse cx="396" cy="288" rx="9" ry="4.5" fill="#4C1D95" />

      {/* braço sobre o teclado */}
      <path d="M256 270 284 294 336 285" stroke="#C4B5FD" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="340" cy="284" r="7" fill="#A8704A" />

      {/* monitor */}
      <rect x="424" y="224" width="12" height="66" fill="#4C1D95" />
      <ellipse cx="430" cy="290" rx="32" ry="6" fill="#6D28D9" />
      <g transform="translate(372 110) skewY(11.9)">
        <rect width="114" height="100" rx="7" fill="#2E2A52" stroke="rgba(167,139,250,.5)" />
        <rect x="6" y="6" width="102" height="88" rx="4" fill="#12102A" />
        <g fill="#A78BFA">
          <rect x="14" y="16" width="34" height="5" rx="2.5" />
          <rect x="22" y="28" width="52" height="5" rx="2.5" fill="#8B5CF6" />
          <rect x="22" y="40" width="28" height="5" rx="2.5" fill="#E4E4E7" opacity=".7" />
          <rect x="56" y="40" width="30" height="5" rx="2.5" />
          <rect x="22" y="52" width="60" height="5" rx="2.5" fill="#8B5CF6" />
          <rect x="14" y="64" width="22" height="5" rx="2.5" fill="#E4E4E7" opacity=".7" />
        </g>
        <rect className="blink" x="42" y="64" width="3" height="6" fill="#C4B5FD" />
      </g>

      {/* planta */}
      <path d="M500 290l4-20h18l4 20z" fill="#D8B4FE" />
      <ellipse cx="500" cy="256" rx="8" ry="18" transform="rotate(-28 500 256)" fill="#8B5CF6" />
      <ellipse cx="521" cy="252" rx="8" ry="20" transform="rotate(24 521 252)" fill="#A78BFA" />
      <ellipse cx="511" cy="248" rx="6" ry="18" fill="#C4B5FD" />

      {/* etiquetas flutuantes */}
      {tag(36, 92, 'CSS', '0s', '4.2s')}
      {tag(62, 148, 'HTML', '.6s', '4.8s')}
      {tag(36, 204, 'C++', '1.2s', '4.5s')}
      <g className="bob" style={{ animationDelay: '.3s', animationDuration: '5s' }}>
        <path d="M262 100l8 20 14-20z" fill="#A78BFA" />
        <rect x="250" y="44" width="68" height="58" rx="16" fill="#A78BFA" />
        <text x="284" y="82" textAnchor="middle" fontSize="24" fontWeight="700" fill="#2E1065" fontFamily="'Inter Variable', system-ui, sans-serif">{'</>'}</text>
      </g>
    </svg>
  )
}
