module.exports = `<svg height="0" width="0">
  <defs>
    <filter id="wreckit">
      <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="5" result="noise" seed="4"/>
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
    </filter>
  </defs>
</svg>`;
