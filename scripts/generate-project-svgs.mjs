import fs from 'fs';
import path from 'path';

const outDir = '/Users/omushir/Desktop/3D website/public/projects';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Helper to create an SVG string
function saveSvg(filename, svgContent) {
  fs.writeFileSync(path.join(outDir, filename), svgContent.trim());
  console.log(`Saved ${filename}`);
}

// -------------------------------------------------------------
// PROJECT 01: E-COMMERCE WEBSITE
// -------------------------------------------------------------

// Col 1 Top: Shopping Cart & Order Summary
saveSvg('p1-cart.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140D26" />
      <stop offset="100%" stop-color="#08080E" />
    </linearGradient>
    <linearGradient id="accent1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B600A8" />
      <stop offset="100%" stop-color="#7621B0" />
    </linearGradient>
    <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#0072FF" />
    </linearGradient>
    <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="420" height="230" fill="url(#bg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(182,0,168,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Background grid pattern -->
  <path d="M0 40 H420 M0 80 H420 M0 120 H420 M0 160 H420 M0 200 H420" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  <path d="M50 0 V230 M120 0 V230 M190 0 V230 M260 0 V230 M330 0 V230 M400 0 V230" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>

  <!-- Cart Header -->
  <circle cx="40" cy="40" r="16" fill="url(#accent1)" filter="url(#glow1)"/>
  <path d="M33 36 h4 l3 10 h10 l2 -7 h-13" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  <circle cx="41" cy="49" r="2" fill="#FFFFFF"/>
  <circle cx="48" cy="49" r="2" fill="#FFFFFF"/>

  <text x="68" y="38" fill="#FFFFFF" font-family="system-ui, sans-serif" font-weight="700" font-size="14" letter-spacing="1">3D CART &amp; CHECKOUT</text>
  <text x="68" y="52" fill="#00F0FF" font-family="monospace" font-size="10">3 ITEMS IN BUNDLE · TOTAL: $349.00</text>

  <!-- Items list -->
  <g transform="translate(25, 75)">
    <rect width="370" height="42" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <rect x="8" y="7" width="28" height="28" rx="6" fill="url(#accent1)"/>
    <text x="46" y="22" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="12">NextGen VR Headset Pro</text>
    <text x="46" y="34" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="10">Qty: 1 · Color: Obsidian Black</text>
    <text x="310" y="26" fill="#00F0FF" font-family="system-ui" font-weight="700" font-size="13">$249.00</text>
  </g>

  <g transform="translate(25, 125)">
    <rect width="370" height="42" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
    <rect x="8" y="7" width="28" height="28" rx="6" fill="url(#neonCyan)"/>
    <text x="46" y="22" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="12">Haptic Cyber Controllers</text>
    <text x="46" y="34" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="10">Qty: 2 · Low Latency RF</text>
    <text x="310" y="26" fill="#00F0FF" font-family="system-ui" font-weight="700" font-size="13">$100.00</text>
  </g>

  <!-- Floating Checkout Bar -->
  <g transform="translate(25, 178)">
    <rect width="370" height="38" rx="19" fill="url(#accent1)" filter="url(#glow1)"/>
    <text x="185" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="12" text-anchor="middle" letter-spacing="1.5">⚡ ONE-CLICK 3D CHECKOUT</text>
  </g>
</svg>`);

// Col 1 Bottom: 3D Product Card & Payment
saveSvg('p1-product.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgP1b" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F0920" />
      <stop offset="50%" stop-color="#140A28" />
      <stop offset="100%" stop-color="#0A0812" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(182,0,168,0.2)" />
      <stop offset="100%" stop-color="rgba(0,240,255,0.05)" />
    </linearGradient>
    <linearGradient id="cubeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF00A0" />
      <stop offset="100%" stop-color="#7621B0" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#bgP1b)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(0,240,255,0.2)" stroke-width="1.5" rx="23"/>

  <!-- 3D Perspective Grid -->
  <g opacity="0.15">
    <line x1="210" y1="50" x2="20" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <line x1="210" y1="50" x2="100" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <line x1="210" y1="50" x2="180" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <line x1="210" y1="50" x2="240" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <line x1="210" y1="50" x2="320" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <line x1="210" y1="50" x2="400" y2="330" stroke="#00F0FF" stroke-width="1"/>
    <ellipse cx="210" cy="220" rx="160" ry="60" fill="none" stroke="#00F0FF" stroke-width="1"/>
    <ellipse cx="210" cy="270" rx="200" ry="70" fill="none" stroke="#00F0FF" stroke-width="1"/>
  </g>

  <!-- 3D Isometric Product Box -->
  <g transform="translate(210, 110)">
    <!-- Top face -->
    <polygon points="0,-45 55,-15 0,15 -55,-15" fill="#E056FD" opacity="0.9"/>
    <!-- Left face -->
    <polygon points="-55,-15 0,15 0,80 -55,50" fill="#7621B0" opacity="0.95"/>
    <!-- Right face -->
    <polygon points="0,15 55,-15 55,50 0,80" fill="#B600A8" opacity="0.85"/>

    <!-- Wireframe glow edges -->
    <polygon points="0,-45 55,-15 0,15 -55,-15" fill="none" stroke="#00F0FF" stroke-width="1.5"/>
    <line x1="0" y1="15" x2="0" y2="80" stroke="#00F0FF" stroke-width="1.5"/>
    <line x1="-55" y1="-15" x2="-55" y2="50" stroke="#00F0FF" stroke-width="1"/>
    <line x1="55" y1="-15" x2="55" y2="50" stroke="#00F0FF" stroke-width="1"/>
    <line x1="-55" y1="50" x2="0" y2="80" stroke="#00F0FF" stroke-width="1"/>
    <line x1="0" y1="80" x2="55" y2="50" stroke="#00F0FF" stroke-width="1"/>

    <!-- Floating Badge -->
    <rect x="-40" y="-70" width="80" height="20" rx="10" fill="rgba(0,240,255,0.2)" stroke="#00F0FF" stroke-width="1"/>
    <text x="0" y="-56" fill="#00F0FF" font-family="monospace" font-size="9" font-weight="700" text-anchor="middle">3D ASSET PACK</text>
  </g>

  <!-- Product Details Card -->
  <g transform="translate(30, 225)">
    <rect width="360" height="85" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)"/>
    <text x="20" y="30" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="15">Neon Sphere 3D Collection</text>
    <text x="20" y="48" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">Next.js 14 SSR · Stripe Payment Verified</text>
    
    <text x="20" y="70" fill="#00F0FF" font-family="system-ui" font-weight="800" font-size="16">$129.00</text>
    
    <rect x="230" y="20" width="110" height="42" rx="10" fill="url(#cubeGrad)"/>
    <text x="285" y="46" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="11" text-anchor="middle">BUY NOW</text>
  </g>
</svg>`);

// Col 2 Tall: Full E-Commerce 3D Dashboard
saveSvg('p1-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p1MainBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E081B" />
      <stop offset="50%" stop-color="#140924" />
      <stop offset="100%" stop-color="#07060B" />
    </linearGradient>
    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B600A8" />
      <stop offset="50%" stop-color="#7621B0" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>
    <linearGradient id="glassP1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.08)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
    </linearGradient>
    <filter id="p1Glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="10" result="b" />
      <feComposite in="SourceGraphic" in2="b" operator="over" />
    </filter>
  </defs>

  <rect width="720" height="580" fill="url(#p1MainBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(182,0,168,0.25)" stroke-width="2" rx="31"/>

  <!-- Top Navigation Bar inside dashboard -->
  <g transform="translate(35, 30)">
    <rect width="650" height="50" rx="16" fill="url(#glassP1)" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="30" cy="25" r="8" fill="#B600A8"/>
    <circle cx="50" cy="25" r="8" fill="#7621B0"/>
    <circle cx="70" cy="25" r="8" fill="#00F0FF"/>
    <text x="110" y="31" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="15" letter-spacing="1.5">NEXUS STORE // 3D COMMERCE PLATFORM</text>
    <rect x="520" y="12" width="115" height="26" rx="13" fill="url(#neonGradient)"/>
    <text x="577" y="29" fill="#FFFFFF" font-family="system-ui" font-size="10" font-weight="700" text-anchor="middle">LIVE CART (4)</text>
  </g>

  <!-- Left Stats & Metric cards -->
  <g transform="translate(35, 100)">
    <rect width="195" height="100" rx="16" fill="url(#glassP1)" stroke="rgba(182,0,168,0.2)"/>
    <text x="20" y="32" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11" font-weight="600">DAILY REVENUE</text>
    <text x="20" y="65" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">$48,290.50</text>
    <text x="20" y="85" fill="#00FF9D" font-family="system-ui" font-size="11" font-weight="700">▲ +24.8% vs yesterday</text>
  </g>

  <g transform="translate(250, 100)">
    <rect width="195" height="100" rx="16" fill="url(#glassP1)" stroke="rgba(0,240,255,0.2)"/>
    <text x="20" y="32" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11" font-weight="600">CONVERSION RATE</text>
    <text x="20" y="65" fill="#00F0FF" font-family="system-ui" font-size="24" font-weight="800">4.92%</text>
    <text x="20" y="85" fill="#00FF9D" font-family="system-ui" font-size="11" font-weight="700">▲ Next.js App Router Opt</text>
  </g>

  <g transform="translate(465, 100)">
    <rect width="220" height="100" rx="16" fill="url(#glassP1)" stroke="rgba(182,0,168,0.2)"/>
    <text x="20" y="32" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11" font-weight="600">ACTIVE SHOPPERS</text>
    <text x="20" y="65" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">1,482 LIVE</text>
    <text x="20" y="85" fill="#B600A8" font-family="system-ui" font-size="11" font-weight="700">● 3D Interactive WebGL</text>
  </g>

  <!-- Big Interactive 3D Showcase in Middle -->
  <g transform="translate(35, 220)">
    <rect width="650" height="320" rx="20" fill="rgba(20,12,35,0.6)" stroke="rgba(255,255,255,0.1)"/>
    
    <!-- 3D Grid Waves -->
    <path d="M40 280 Q 180 200, 320 250 T 620 180" fill="none" stroke="rgba(0,240,255,0.4)" stroke-width="2"/>
    <path d="M40 290 Q 180 220, 320 270 T 620 200" fill="none" stroke="rgba(182,0,168,0.4)" stroke-width="2"/>

    <!-- Central 3D Product Float -->
    <g transform="translate(325, 130)">
      <circle cx="0" cy="0" r="70" fill="none" stroke="#00F0FF" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.6"/>
      <circle cx="0" cy="0" r="95" fill="none" stroke="#B600A8" stroke-width="1.5" stroke-dasharray="10,6" opacity="0.4"/>
      
      <!-- 3D Cube Render -->
      <polygon points="0,-40 45,-15 0,10 -45,-15" fill="#00F0FF" opacity="0.8"/>
      <polygon points="-45,-15 0,10 0,60 -45,35" fill="#7621B0" opacity="0.95"/>
      <polygon points="0,10 45,-15 45,35 0,60" fill="#B600A8" opacity="0.85"/>

      <!-- Floating Tooltip -->
      <g transform="translate(60, -35)">
        <rect width="130" height="50" rx="10" fill="#18011F" stroke="#00F0FF" stroke-width="1"/>
        <text x="12" y="22" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">3D Interactive Mode</text>
        <text x="12" y="38" fill="#00FF9D" font-family="monospace" font-size="10">60 FPS · Zero Lag</text>
      </g>
    </g>

    <text x="35" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="16">REAL-TIME ORDER STREAM &amp; 3D CATALOG</text>
    <text x="35" y="65" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="11">React.js · Next.js Server Components · Tailwind CSS · REST API</text>

    <!-- Mini Product Row at bottom of container -->
    <g transform="translate(35, 235)">
      <rect width="180" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <rect x="12" y="10" width="40" height="40" rx="8" fill="#7621B0"/>
      <text x="62" y="28" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">Cyber Sneaker V2</text>
      <text x="62" y="44" fill="#00F0FF" font-family="system-ui" font-size="11" font-weight="700">$189 · In Stock</text>
    </g>
    <g transform="translate(230, 235)">
      <rect width="180" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <rect x="12" y="10" width="40" height="40" rx="8" fill="#B600A8"/>
      <text x="62" y="28" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">Smart Hologram Watch</text>
      <text x="62" y="44" fill="#00F0FF" font-family="system-ui" font-size="11" font-weight="700">$299 · In Stock</text>
    </g>
    <g transform="translate(425, 235)">
      <rect width="190" height="60" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)"/>
      <rect x="12" y="10" width="40" height="40" rx="8" fill="#00F0FF"/>
      <text x="62" y="28" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="600">Spatial Audio Pods</text>
      <text x="62" y="44" fill="#00F0FF" font-family="system-ui" font-size="11" font-weight="700">$149 · In Stock</text>
    </g>
  </g>
</svg>`);

// -------------------------------------------------------------
// PROJECT 02: SMART WATER CONSERVATION AND LEAK REPORTING
// -------------------------------------------------------------

// Col 1 Top: Smart Water Flow Meter
saveSvg('p2-meter.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="waterBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05192D" />
      <stop offset="100%" stop-color="#020B14" />
    </linearGradient>
    <linearGradient id="cyanArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#0072FF" />
    </linearGradient>
  </defs>

  <rect width="420" height="230" fill="url(#waterBg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(0,240,255,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Water Meter Gauge -->
  <g transform="translate(90, 115)">
    <circle cx="0" cy="0" r="65" fill="rgba(0,240,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
    <path d="M -50 35 A 65 65 0 1 1 50 35" fill="none" stroke="url(#cyanArc)" stroke-width="8" stroke-linecap="round"/>
    
    <!-- Meter Needle -->
    <line x1="0" y1="0" x2="25" y2="-40" stroke="#00F0FF" stroke-width="3" stroke-linecap="round"/>
    <circle cx="0" cy="0" r="7" fill="#00F0FF"/>

    <text x="0" y="20" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" text-anchor="middle">3.4</text>
    <text x="0" y="34" fill="#00F0FF" font-family="monospace" font-size="9" text-anchor="middle">L/SEC</text>
  </g>

  <!-- Right text stats -->
  <g transform="translate(195, 45)">
    <text x="0" y="20" fill="#00F0FF" font-family="monospace" font-size="11" letter-spacing="1">IOT SENSOR #WTR-89</text>
    <text x="0" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">FLOW RATE OPTIMAL</text>
    
    <rect x="0" y="65" width="195" height="40" rx="10" fill="rgba(0,255,157,0.1)" stroke="rgba(0,255,157,0.3)"/>
    <text x="12" y="88" fill="#00FF9D" font-family="system-ui" font-size="11" font-weight="600">PRESSURE: 48.2 PSI (NORMAL)</text>

    <rect x="0" y="115" width="195" height="40" rx="10" fill="rgba(0,240,255,0.06)" stroke="rgba(0,240,255,0.15)"/>
    <text x="12" y="138" fill="#FFFFFF" font-family="system-ui" font-size="11">TURBIDITY: 0.8 NTU · PURITY 99%</text>
  </g>
</svg>`);

// Col 1 Bottom: Leak Alert Radar & Pipe Network
saveSvg('p2-leak.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="p2bBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#041220" />
      <stop offset="100%" stop-color="#01080F" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#p2bBg)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(0,240,255,0.25)" stroke-width="1.5" rx="23"/>

  <text x="30" y="40" fill="#00F0FF" font-family="monospace" font-size="11" letter-spacing="1">ACOUSTIC LEAK DETECTION</text>
  <text x="30" y="65" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">PIPELINE NETWORK SCAN</text>

  <!-- 3D Pipeline Graph -->
  <g transform="translate(40, 90)">
    <!-- Pipeline segments -->
    <path d="M20 70 H 120 V 160 H 220 V 60 H 320" fill="none" stroke="rgba(0,240,255,0.2)" stroke-width="8"/>
    <path d="M20 70 H 120 V 160 H 180" fill="none" stroke="#00F0FF" stroke-width="8"/>

    <!-- Sensor Nodes -->
    <circle cx="20" cy="70" r="8" fill="#00FF9D"/>
    <circle cx="120" cy="70" r="8" fill="#00FF9D"/>
    <circle cx="120" cy="160" r="8" fill="#00FF9D"/>

    <!-- LEAK ALERT NODE -->
    <circle cx="180" cy="160" r="16" fill="rgba(255,50,50,0.2)"/>
    <circle cx="180" cy="160" r="10" fill="#FF3366"/>
    <circle cx="180" cy="160" r="4" fill="#FFFFFF"/>
    
    <text x="205" y="155" fill="#FF3366" font-family="monospace" font-weight="700" font-size="11">LEAK DETECTED</text>
    <text x="205" y="170" fill="rgba(255,255,255,0.7)" font-family="system-ui" font-size="10">SECTOR 4B · PRESSURE DROP</text>

    <!-- Normal node -->
    <circle cx="220" cy="60" r="8" fill="#00FF9D"/>
    <circle cx="320" cy="60" r="8" fill="#00FF9D"/>
  </g>

  <!-- Incident Response Action Bar -->
  <g transform="translate(30, 270)">
    <rect width="360" height="42" rx="12" fill="rgba(255,51,102,0.15)" stroke="rgba(255,51,102,0.4)"/>
    <text x="180" y="26" fill="#FF3366" font-family="system-ui" font-weight="700" font-size="12" text-anchor="middle">AUTOMATED SHUTOFF VALVE TRIGGERED</text>
  </g>
</svg>`);

// Col 2 Tall: Smart Water City Dashboard
saveSvg('p2-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p2TallBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#021224" />
      <stop offset="50%" stop-color="#031C38" />
      <stop offset="100%" stop-color="#010811" />
    </linearGradient>
    <linearGradient id="p2BlueGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F0FF" />
      <stop offset="100%" stop-color="#0066FF" />
    </linearGradient>
  </defs>

  <rect width="720" height="580" fill="url(#p2TallBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(0,240,255,0.25)" stroke-width="2" rx="31"/>

  <!-- Header -->
  <g transform="translate(35, 30)">
    <rect width="650" height="52" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(0,240,255,0.2)"/>
    <circle cx="30" cy="26" r="10" fill="#00F0FF"/>
    <text x="55" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" letter-spacing="1">SMART WATER IoT COMMAND CENTER</text>
    <text x="490" y="32" fill="#00FF9D" font-family="monospace" font-size="11">GIS MAPPING ACTIVE</text>
  </g>

  <!-- 3 Metric Cards -->
  <g transform="translate(35, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(0,240,255,0.04)" stroke="rgba(0,240,255,0.15)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">WATER CONSERVED</text>
    <text x="20" y="60" fill="#00F0FF" font-family="system-ui" font-size="24" font-weight="800">1.2M L</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">▲ This Month Target: 100%</text>
  </g>

  <g transform="translate(250, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(0,240,255,0.04)" stroke="rgba(0,240,255,0.15)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">ACTIVE SENSORS</text>
    <text x="20" y="60" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">2,410 / 2,412</text>
    <text x="20" y="78" fill="#00F0FF" font-family="system-ui" font-size="10">● 99.8% Telemetry Uptime</text>
  </g>

  <g transform="translate(465, 100)">
    <rect width="220" height="90" rx="16" fill="rgba(0,240,255,0.04)" stroke="rgba(0,240,255,0.15)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">AVG RESPONSE TIME</text>
    <text x="20" y="60" fill="#00FF9D" font-family="system-ui" font-size="24" font-weight="800">4.2 MINS</text>
    <text x="20" y="78" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">Automated Dispatch</text>
  </g>

  <!-- Big City Map / Hydraulic Simulation Canvas -->
  <g transform="translate(35, 210)">
    <rect width="650" height="330" rx="20" fill="rgba(3,15,30,0.8)" stroke="rgba(0,240,255,0.15)"/>
    
    <!-- Topographic rings -->
    <ellipse cx="325" cy="165" rx="280" ry="120" fill="none" stroke="rgba(0,240,255,0.08)" stroke-width="1"/>
    <ellipse cx="325" cy="165" rx="200" ry="85" fill="none" stroke="rgba(0,240,255,0.12)" stroke-width="1"/>
    <ellipse cx="325" cy="165" rx="110" ry="45" fill="none" stroke="rgba(0,240,255,0.2)" stroke-width="1"/>

    <!-- Smart City Pipeline Mesh -->
    <path d="M100 120 L 220 80 L 325 150 L 460 100 L 580 140" fill="none" stroke="#00F0FF" stroke-width="3"/>
    <path d="M220 80 L 250 240 L 325 150 L 410 260 L 460 100" fill="none" stroke="rgba(0,102,255,0.6)" stroke-width="2"/>

    <!-- Pumping Station Node -->
    <circle cx="325" cy="150" r="14" fill="#00F0FF"/>
    <text x="325" y="180" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="12" text-anchor="middle">CENTRAL RESERVOIR</text>

    <!-- Sector Pins -->
    <circle cx="100" cy="120" r="8" fill="#00FF9D"/>
    <circle cx="220" cy="80" r="8" fill="#00FF9D"/>
    <circle cx="460" cy="100" r="8" fill="#00FF9D"/>
    <circle cx="580" cy="140" r="8" fill="#00FF9D"/>
    <circle cx="250" cy="240" r="8" fill="#00FF9D"/>
    
    <!-- Reported Incident Pin -->
    <g transform="translate(410, 260)">
      <circle cx="0" cy="0" r="12" fill="rgba(255,50,50,0.3)"/>
      <circle cx="0" cy="0" r="7" fill="#FF3366"/>
      <rect x="-40" y="-30" width="80" height="20" rx="6" fill="#1A050D" stroke="#FF3366"/>
      <text x="0" y="-17" fill="#FF3366" font-family="monospace" font-size="8" font-weight="700" text-anchor="middle">LEAK REPORT</text>
    </g>

    <!-- Bottom Status Bar -->
    <g transform="translate(30, 280)">
      <rect width="590" height="34" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
      <text x="20" y="22" fill="#FFFFFF" font-family="monospace" font-size="11">MOBILE REPORTING APP · CITIZEN ENGAGEMENT · REAL-TIME ANALYTICS</text>
    </g>
  </g>
</svg>`);

// -------------------------------------------------------------
// PROJECT 03: RESTAURANT BILL GENERATOR
// -------------------------------------------------------------

// Col 1 Top: POS Digital Receipt & QR
saveSvg('p3-receipt.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="restoBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1408" />
      <stop offset="100%" stop-color="#0C0804" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFAA00" />
      <stop offset="100%" stop-color="#FF6A00" />
    </linearGradient>
  </defs>

  <rect width="420" height="230" fill="url(#restoBg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(255,170,0,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Receipt Graphic -->
  <g transform="translate(30, 25)">
    <rect width="180" height="180" rx="10" fill="#FFFFFF"/>
    
    <!-- Receipt Header -->
    <text x="90" y="24" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">THE BISTRO DELIGHT</text>
    <text x="90" y="36" fill="#666666" font-family="monospace" font-size="8" text-anchor="middle">TABLE #04 · INVOICE #892</text>
    <line x1="15" y1="44" x2="165" y2="44" stroke="#CCCCCC" stroke-dasharray="3,3"/>
    
    <!-- Items -->
    <text x="15" y="60" fill="#333333" font-family="monospace" font-size="8">1x Truffle Risotto</text>
    <text x="140" y="60" fill="#333333" font-family="monospace" font-size="8">$24.00</text>

    <text x="15" y="76" fill="#333333" font-family="monospace" font-size="8">2x Sparkling Mocktail</text>
    <text x="140" y="76" fill="#333333" font-family="monospace" font-size="8">$16.00</text>

    <text x="15" y="92" fill="#333333" font-family="monospace" font-size="8">1x Lava Chocolate Cake</text>
    <text x="140" y="92" fill="#333333" font-family="monospace" font-size="8">$12.00</text>

    <line x1="15" y1="102" x2="165" y2="102" stroke="#CCCCCC"/>

    <text x="15" y="118" fill="#333333" font-family="monospace" font-size="8">TAX (GST 5%)</text>
    <text x="145" y="118" fill="#333333" font-family="monospace" font-size="8">$2.60</text>

    <text x="15" y="136" fill="#000000" font-family="monospace" font-weight="700" font-size="10">TOTAL DUE</text>
    <text x="135" y="136" fill="#000000" font-family="monospace" font-weight="700" font-size="10">$54.60</text>

    <!-- Barcode -->
    <rect x="25" y="148" width="130" height="18" fill="#EEEEEE"/>
    <line x1="35" y1="148" x2="35" y2="166" stroke="#000000" stroke-width="2"/>
    <line x1="42" y1="148" x2="42" y2="166" stroke="#000000" stroke-width="3"/>
    <line x1="50" y1="148" x2="50" y2="166" stroke="#000000" stroke-width="1"/>
    <line x1="60" y1="148" x2="60" y2="166" stroke="#000000" stroke-width="4"/>
    <line x1="75" y1="148" x2="75" y2="166" stroke="#000000" stroke-width="2"/>
    <line x1="90" y1="148" x2="90" y2="166" stroke="#000000" stroke-width="3"/>
    <line x1="105" y1="148" x2="105" y2="166" stroke="#000000" stroke-width="2"/>
    <line x1="120" y1="148" x2="120" y2="166" stroke="#000000" stroke-width="4"/>
  </g>

  <!-- Right Side Summary -->
  <g transform="translate(230, 45)">
    <text x="0" y="20" fill="#FFAA00" font-family="monospace" font-size="11" letter-spacing="1">INSTANT INVOICING</text>
    <text x="0" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">AUTOMATED TAX</text>
    <text x="0" y="65" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">Fast split-billing calculation</text>
    
    <rect x="0" y="90" width="160" height="40" rx="20" fill="url(#goldGrad)"/>
    <text x="80" y="115" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">PRINT INVOICE</text>
  </g>
</svg>`);

// Col 1 Bottom: Food Menu & Tax Calculator
saveSvg('p3-menu.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="p3bBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180F05" />
      <stop offset="100%" stop-color="#0A0602" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#p3bBg)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(255,170,0,0.25)" stroke-width="1.5" rx="23"/>

  <text x="30" y="40" fill="#FFAA00" font-family="monospace" font-size="11" letter-spacing="1">INTERACTIVE FOOD CATALOG</text>
  <text x="30" y="65" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">LIVE ORDER CALCULATION</text>

  <!-- Menu Item cards -->
  <g transform="translate(30, 90)">
    <rect width="360" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,170,0,0.2)"/>
    <circle cx="30" cy="26" r="14" fill="#FFAA00"/>
    <text x="30" y="31" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="14" text-anchor="middle">🍕</text>
    <text x="56" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="13">Artisan Woodfired Pizza</text>
    <text x="56" y="40" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="10">Italian herbs, buffalo mozzarella</text>
    <text x="300" y="32" fill="#FFAA00" font-family="system-ui" font-weight="700" font-size="14">$18.50</text>
  </g>

  <g transform="translate(30, 155)">
    <rect width="360" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,170,0,0.2)"/>
    <circle cx="30" cy="26" r="14" fill="#FF8800"/>
    <text x="30" y="31" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="14" text-anchor="middle">🍔</text>
    <text x="56" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="13">Double Wagyu Smash Burger</text>
    <text x="56" y="40" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-size="10">Brioche bun, smoked cheddar</text>
    <text x="300" y="32" fill="#FFAA00" font-family="system-ui" font-weight="700" font-size="14">$15.00</text>
  </g>

  <!-- Dynamic JS Tax Summary -->
  <g transform="translate(30, 230)">
    <rect width="360" height="80" rx="14" fill="rgba(255,170,0,0.08)" stroke="rgba(255,170,0,0.25)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="11">SUBTOTAL: $33.50 · GST (5%): $1.68</text>
    <text x="20" y="58" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="18">FINAL AMOUNT: $35.18</text>
  </g>
</svg>`);

// Col 2 Tall: Full Restaurant POS Station Dashboard
saveSvg('p3-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p3TallBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140C04" />
      <stop offset="50%" stop-color="#241508" />
      <stop offset="100%" stop-color="#080502" />
    </linearGradient>
    <linearGradient id="p3GoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#FFAA00" />
      <stop offset="100%" stop-color="#FF5500" />
    </linearGradient>
  </defs>

  <rect width="720" height="580" fill="url(#p3TallBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(255,170,0,0.25)" stroke-width="2" rx="31"/>

  <!-- Top POS Bar -->
  <g transform="translate(35, 30)">
    <rect width="650" height="52" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,170,0,0.2)"/>
    <text x="25" y="33" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" letter-spacing="1">SMART RESTAURANT POS &amp; BILLING TERMINAL</text>
    <rect x="520" y="12" width="110" height="28" rx="14" fill="url(#p3GoldGrad)"/>
    <text x="575" y="30" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">NEW ORDER +</text>
  </g>

  <!-- Left: Floor Table Grid (3D perspective) -->
  <g transform="translate(35, 105)">
    <rect width="400" height="435" rx="20" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)"/>
    <text x="25" y="35" fill="#FFAA00" font-family="monospace" font-size="11">LIVE FLOOR MANAGEMENT (12 TABLES)</text>

    <!-- Table Nodes -->
    <!-- Table 1 Occupied -->
    <g transform="translate(30, 60)">
      <rect width="105" height="100" rx="14" fill="rgba(255,170,0,0.12)" stroke="#FFAA00" stroke-width="1.5"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 01</text>
      <text x="52" y="52" fill="#FFAA00" font-family="monospace" font-size="11" text-anchor="middle">$82.40</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="#FFAA00"/>
      <text x="52" y="81" fill="#0C0C0C" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">OCCUPIED</text>
    </g>

    <!-- Table 2 Free -->
    <g transform="translate(150, 60)">
      <rect width="105" height="100" rx="14" fill="rgba(0,255,157,0.05)" stroke="rgba(0,255,157,0.3)"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 02</text>
      <text x="52" y="52" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="11" text-anchor="middle">$0.00</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="rgba(0,255,157,0.2)"/>
      <text x="52" y="81" fill="#00FF9D" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">AVAILABLE</text>
    </g>

    <!-- Table 3 Billing -->
    <g transform="translate(270, 60)">
      <rect width="105" height="100" rx="14" fill="rgba(0,240,255,0.08)" stroke="#00F0FF" stroke-width="1.5"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 03</text>
      <text x="52" y="52" fill="#00F0FF" font-family="monospace" font-size="11" text-anchor="middle">$145.00</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="#00F0FF"/>
      <text x="52" y="81" fill="#0C0C0C" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">BILL READY</text>
    </g>

    <!-- Row 2 Tables -->
    <g transform="translate(30, 180)">
      <rect width="105" height="100" rx="14" fill="rgba(255,170,0,0.12)" stroke="#FFAA00"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 04</text>
      <text x="52" y="52" fill="#FFAA00" font-family="monospace" font-size="11" text-anchor="middle">$54.60</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="#FFAA00"/>
      <text x="52" y="81" fill="#0C0C0C" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">OCCUPIED</text>
    </g>

    <g transform="translate(150, 180)">
      <rect width="105" height="100" rx="14" fill="rgba(255,170,0,0.12)" stroke="#FFAA00"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 05</text>
      <text x="52" y="52" fill="#FFAA00" font-family="monospace" font-size="11" text-anchor="middle">$110.20</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="#FFAA00"/>
      <text x="52" y="81" fill="#0C0C0C" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">OCCUPIED</text>
    </g>

    <g transform="translate(270, 180)">
      <rect width="105" height="100" rx="14" fill="rgba(0,255,157,0.05)" stroke="rgba(0,255,157,0.3)"/>
      <text x="52" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13" text-anchor="middle">TABLE 06</text>
      <text x="52" y="52" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="11" text-anchor="middle">$0.00</text>
      <rect x="18" y="68" width="70" height="18" rx="9" fill="rgba(0,255,157,0.2)"/>
      <text x="52" y="81" fill="#00FF9D" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">AVAILABLE</text>
    </g>

    <!-- Bottom summary banner -->
    <g transform="translate(25, 360)">
      <rect width="350" height="50" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
      <text x="20" y="25" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="12">TODAY'S TURNOVER</text>
      <text x="20" y="40" fill="#FFAA00" font-family="system-ui" font-weight="800" font-size="14">$3,480.00 (42 INVOICES)</text>
    </g>
  </g>

  <!-- Right: Digital Receipt / Checkout column -->
  <g transform="translate(450, 105)">
    <rect width="235" height="435" rx="20" fill="rgba(255,255,255,0.04)" stroke="rgba(255,170,0,0.3)"/>
    <text x="20" y="35" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="14">CURRENT BILL SLIP</text>
    <text x="20" y="52" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="10">TABLE 04 · KITCHEN #12</text>
    
    <line x1="20" y1="65" x2="215" y2="65" stroke="rgba(255,255,255,0.1)"/>
    
    <text x="20" y="90" fill="#FFFFFF" font-family="system-ui" font-size="11">Truffle Risotto x1</text>
    <text x="180" y="90" fill="#FFAA00" font-family="system-ui" font-size="11">$24.00</text>

    <text x="20" y="115" fill="#FFFFFF" font-family="system-ui" font-size="11">Mocktails x2</text>
    <text x="180" y="115" fill="#FFAA00" font-family="system-ui" font-size="11">$16.00</text>

    <text x="20" y="140" fill="#FFFFFF" font-family="system-ui" font-size="11">Lava Cake x1</text>
    <text x="180" y="140" fill="#FFAA00" font-family="system-ui" font-size="11">$12.00</text>

    <line x1="20" y1="165" x2="215" y2="165" stroke="rgba(255,255,255,0.1)"/>

    <text x="20" y="195" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="11">Subtotal</text>
    <text x="180" y="195" fill="#FFFFFF" font-family="system-ui" font-size="11">$52.00</text>

    <text x="20" y="215" fill="rgba(255,255,255,0.6)" font-family="system-ui" font-size="11">GST (5%)</text>
    <text x="180" y="215" fill="#FFFFFF" font-family="system-ui" font-size="11">$2.60</text>

    <line x1="20" y1="230" x2="215" y2="230" stroke="rgba(255,255,255,0.2)"/>

    <text x="20" y="260" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16">TOTAL</text>
    <text x="160" y="260" fill="#FFAA00" font-family="system-ui" font-weight="800" font-size="16">$54.60</text>

    <!-- Payment Buttons -->
    <rect x="20" y="300" width="195" height="42" rx="12" fill="url(#p3GoldGrad)"/>
    <text x="117" y="326" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="12" text-anchor="middle">COMPLETE PAYMENT</text>

    <rect x="20" y="355" width="195" height="38" rx="12" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)"/>
    <text x="117" y="379" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="11" text-anchor="middle">SPLIT BILL / CASH</text>
  </g>
</svg>`);

// -------------------------------------------------------------
// PROJECT 04: HOTEL RECEIPT GENERATOR
// -------------------------------------------------------------

// Col 1 Top: Guest Check-In & Room Card
saveSvg('p4-checkin.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="hotelBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1B1710" />
      <stop offset="100%" stop-color="#0E0B07" />
    </linearGradient>
    <linearGradient id="champagne" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2C08D" />
      <stop offset="100%" stop-color="#AA8855" />
    </linearGradient>
  </defs>

  <rect width="420" height="230" fill="url(#hotelBg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(226,192,141,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Keycard graphic -->
  <g transform="translate(35, 40)">
    <rect width="140" height="150" rx="14" fill="url(#champagne)"/>
    <circle cx="70" cy="50" r="18" fill="#1B1710"/>
    <text x="70" y="55" fill="#E2C08D" font-family="system-ui" font-weight="800" font-size="16" text-anchor="middle">★</text>
    <text x="70" y="95" fill="#1B1710" font-family="system-ui" font-weight="800" font-size="13" text-anchor="middle">SUITE 508</text>
    <text x="70" y="110" fill="#3D301F" font-family="monospace" font-size="9" text-anchor="middle">NFC RFID ACTIVE</text>
    <line x1="20" y1="130" x2="120" y2="130" stroke="#1B1710" stroke-width="2"/>
  </g>

  <!-- Reservation info -->
  <g transform="translate(200, 45)">
    <text x="0" y="20" fill="#E2C08D" font-family="monospace" font-size="10" letter-spacing="1.5">ROYAL HORIZON RESORT</text>
    <text x="0" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">GUEST CHECK-IN</text>
    <text x="0" y="65" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">Stay: 3 Nights · 2 Guests</text>

    <rect x="0" y="85" width="185" height="45" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(226,192,141,0.2)"/>
    <text x="12" y="105" fill="#E2C08D" font-family="system-ui" font-size="11" font-weight="600">DELUXE OCEAN VIEW</text>
    <text x="12" y="120" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="9">$320.00 / NIGHT</text>
  </g>
</svg>`);

// Col 1 Bottom: Itemized Folio & Charges
saveSvg('p4-receipt.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="p4bBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#18130B" />
      <stop offset="100%" stop-color="#0B0905" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#p4bBg)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(226,192,141,0.25)" stroke-width="1.5" rx="23"/>

  <text x="30" y="40" fill="#E2C08D" font-family="monospace" font-size="11" letter-spacing="1">GUEST FOLIO INVOICE</text>
  <text x="30" y="65" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">BREAKDOWN OF CHARGES</text>

  <!-- Items list -->
  <g transform="translate(30, 95)">
    <rect width="360" height="42" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
    <text x="15" y="26" fill="#FFFFFF" font-family="system-ui" font-size="12">Room Charges (3 Nights @ $320)</text>
    <text x="290" y="26" fill="#E2C08D" font-family="system-ui" font-weight="700" font-size="12">$960.00</text>
  </g>

  <g transform="translate(30, 145)">
    <rect width="360" height="42" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
    <text x="15" y="26" fill="#FFFFFF" font-family="system-ui" font-size="12">Spa &amp; Wellness Club Access</text>
    <text x="290" y="26" fill="#E2C08D" font-family="system-ui" font-weight="700" font-size="12">$140.00</text>
  </g>

  <g transform="translate(30, 195)">
    <rect width="360" height="42" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
    <text x="15" y="26" fill="#FFFFFF" font-family="system-ui" font-size="12">Airport Limousine Transfer</text>
    <text x="290" y="26" fill="#E2C08D" font-family="system-ui" font-weight="700" font-size="12">$75.00</text>
  </g>

  <!-- Total voucher -->
  <g transform="translate(30, 255)">
    <rect width="360" height="60" rx="14" fill="rgba(226,192,141,0.1)" stroke="rgba(226,192,141,0.3)"/>
    <text x="20" y="26" fill="rgba(255,255,255,0.6)" font-family="monospace" font-size="10">OCCUPANCY TAX (12%): $141.00</text>
    <text x="20" y="47" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="17">NET TOTAL: $1,316.00</text>
  </g>
</svg>`);

// Col 2 Tall: Hotel Management 3D Dashboard
saveSvg('p4-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p4TallBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#141009" />
      <stop offset="50%" stop-color="#241B0F" />
      <stop offset="100%" stop-color="#090704" />
    </linearGradient>
    <linearGradient id="p4Champagne" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E2C08D" />
      <stop offset="100%" stop-color="#C29B5F" />
    </linearGradient>
  </defs>

  <rect width="720" height="580" fill="url(#p4TallBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(226,192,141,0.25)" stroke-width="2" rx="31"/>

  <!-- Top bar -->
  <g transform="translate(35, 30)">
    <rect width="650" height="52" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(226,192,141,0.2)"/>
    <text x="25" y="33" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" letter-spacing="1">HOTEL MANAGEMENT &amp; GUEST BILLING SUITE</text>
    <rect x="500" y="12" width="130" height="28" rx="14" fill="url(#p4Champagne)"/>
    <text x="565" y="30" fill="#141009" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">EXPRESS CHECKOUT</text>
  </g>

  <!-- Occupancy & Revenue Stats -->
  <g transform="translate(35, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(226,192,141,0.05)" stroke="rgba(226,192,141,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">SUITE OCCUPANCY</text>
    <text x="20" y="60" fill="#E2C08D" font-family="system-ui" font-size="24" font-weight="800">94.2%</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">▲ Peak Season Velocity</text>
  </g>

  <g transform="translate(250, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(226,192,141,0.05)" stroke="rgba(226,192,141,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">TOTAL REVPAR</text>
    <text x="20" y="60" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">$284.50</text>
    <text x="20" y="78" fill="#E2C08D" font-family="system-ui" font-size="10">+18% Above Forecast</text>
  </g>

  <g transform="translate(465, 100)">
    <rect width="220" height="90" rx="16" fill="rgba(226,192,141,0.05)" stroke="rgba(226,192,141,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">INVOICES GENERATED</text>
    <text x="20" y="60" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">128 TODAY</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">● All Paid via Card/Wire</text>
  </g>

  <!-- Central Suite Grid & Room Timeline -->
  <g transform="translate(35, 210)">
    <rect width="650" height="330" rx="20" fill="rgba(20,15,9,0.7)" stroke="rgba(226,192,141,0.15)"/>
    <text x="30" y="35" fill="#E2C08D" font-family="monospace" font-size="11">FLOOR MAP &amp; LIVE FOLIO STATUS</text>

    <!-- Rooms Matrix -->
    <g transform="translate(30, 60)">
      <!-- Penthouse -->
      <rect width="180" height="110" rx="14" fill="rgba(226,192,141,0.1)" stroke="#E2C08D"/>
      <text x="18" y="28" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">Penthouse 801</text>
      <text x="18" y="46" fill="#E2C08D" font-family="monospace" font-size="11">GUEST: Mr. Harrison</text>
      <text x="18" y="64" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">Balance: $2,840.00</text>
      <rect x="18" y="76" width="90" height="20" rx="10" fill="#E2C08D"/>
      <text x="63" y="90" fill="#141009" font-family="system-ui" font-weight="800" font-size="9" text-anchor="middle">RECEIPT READY</text>
    </g>

    <g transform="translate(230, 60)">
      <rect width="180" height="110" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
      <text x="18" y="28" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">Executive Suite 508</text>
      <text x="18" y="46" fill="#E2C08D" font-family="monospace" font-size="11">GUEST: Dr. Vance</text>
      <text x="18" y="64" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">Balance: $1,316.00</text>
      <rect x="18" y="76" width="90" height="20" rx="10" fill="#00FF9D"/>
      <text x="63" y="90" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="9" text-anchor="middle">INVOICE PAID</text>
    </g>

    <g transform="translate(430, 60)">
      <rect width="190" height="110" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
      <text x="18" y="28" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">Ocean View 304</text>
      <text x="18" y="46" fill="rgba(255,255,255,0.4)" font-family="monospace" font-size="11">GUEST: Vacant Clean</text>
      <text x="18" y="64" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">Turnover Completed</text>
      <rect x="18" y="76" width="90" height="20" rx="10" fill="rgba(255,255,255,0.1)"/>
      <text x="63" y="90" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="9" text-anchor="middle">READY TO BOOK</text>
    </g>

    <!-- Bottom summary row -->
    <g transform="translate(30, 200)">
      <rect width="590" height="100" rx="16" fill="rgba(0,0,0,0.3)" stroke="rgba(226,192,141,0.1)"/>
      <text x="25" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">AUTOMATED PDF &amp; THERMAL RECEIPT ENGINE</text>
      <text x="25" y="52" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">HTML5 Canvas rendering · LocalStorage session caching · Instant Print / Email integration</text>
      
      <rect x="25" y="65" width="130" height="24" rx="6" fill="url(#p4Champagne)"/>
      <text x="90" y="81" fill="#141009" font-family="system-ui" font-weight="800" font-size="10" text-anchor="middle">EXPORT AUDIT PDF</text>
    </g>
  </g>
</svg>`);

// -------------------------------------------------------------
// PROJECT 05: MULTISECTOR LEAVE MANAGEMENT SYSTEM
// -------------------------------------------------------------

// Col 1 Top: Leave Application & Quota Balance
saveSvg('p5-apply.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="leaveBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#140E28" />
      <stop offset="100%" stop-color="#080414" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9D4EDD" />
      <stop offset="100%" stop-color="#6A00F4" />
    </linearGradient>
  </defs>

  <rect width="420" height="230" fill="url(#leaveBg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(157,78,221,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Leave Form Card -->
  <g transform="translate(30, 25)">
    <text x="0" y="20" fill="#9D4EDD" font-family="monospace" font-size="10" letter-spacing="1">EMPLOYEE PORTAL</text>
    <text x="0" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">SUBMIT LEAVE REQUEST</text>

    <!-- Quotas -->
    <g transform="translate(0, 65)">
      <rect width="110" height="60" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(157,78,221,0.2)"/>
      <text x="12" y="24" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="9">PAID LEAVES</text>
      <text x="12" y="48" fill="#9D4EDD" font-family="system-ui" font-weight="800" font-size="18">14 DAYS</text>

      <rect x="125" y="0" width="110" height="60" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(0,255,157,0.2)"/>
      <text x="137" y="24" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="9">CASUAL</text>
      <text x="137" y="48" fill="#00FF9D" font-family="system-ui" font-weight="800" font-size="18">06 DAYS</text>

      <rect x="250" y="0" width="110" height="60" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(0,240,255,0.2)"/>
      <text x="262" y="24" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="9">SICK LEAVES</text>
      <text x="262" y="48" fill="#00F0FF" font-family="system-ui" font-weight="800" font-size="18">08 DAYS</text>
    </g>

    <!-- Action button -->
    <g transform="translate(0, 140)">
      <rect width="360" height="38" rx="12" fill="url(#purpleGrad)"/>
      <text x="180" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="12" text-anchor="middle">APPLY NEW LEAVE</text>
    </g>
  </g>
</svg>`);

// Col 1 Bottom: Multi-Tier Approval Workflow
saveSvg('p5-approval.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="p5bBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#110B24" />
      <stop offset="100%" stop-color="#06030F" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#p5bBg)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(157,78,221,0.25)" stroke-width="1.5" rx="23"/>

  <text x="30" y="40" fill="#9D4EDD" font-family="monospace" font-size="11" letter-spacing="1">HIERARCHICAL APPROVAL CHAIN</text>
  <text x="30" y="65" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">WORKFLOW STAGES</text>

  <!-- Flowchart nodes -->
  <g transform="translate(30, 95)">
    <!-- Stage 1 -->
    <rect width="360" height="55" rx="12" fill="rgba(0,255,157,0.06)" stroke="#00FF9D"/>
    <circle cx="30" cy="27" r="14" fill="#00FF9D"/>
    <text x="30" y="32" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="12" text-anchor="middle">✓</text>
    <text x="60" y="25" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">Stage 1: Team Lead Review</text>
    <text x="60" y="42" fill="#00FF9D" font-family="system-ui" font-size="10">APPROVED · 14 Oct 09:30 AM</text>
  </g>

  <g transform="translate(30, 165)">
    <!-- Stage 2 -->
    <rect width="360" height="55" rx="12" fill="rgba(157,78,221,0.12)" stroke="#9D4EDD"/>
    <circle cx="30" cy="27" r="14" fill="#9D4EDD"/>
    <text x="30" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="12" text-anchor="middle">⏳</text>
    <text x="60" y="25" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">Stage 2: HR Department</text>
    <text x="60" y="42" fill="#9D4EDD" font-family="system-ui" font-size="10">PENDING AUDIT &amp; COVERAGE CHECK</text>
  </g>

  <g transform="translate(30, 235)">
    <!-- Stage 3 -->
    <rect width="360" height="55" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"/>
    <circle cx="30" cy="27" r="14" fill="rgba(255,255,255,0.1)"/>
    <text x="30" y="32" fill="rgba(255,255,255,0.4)" font-family="system-ui" font-weight="800" font-size="12" text-anchor="middle">3</text>
    <text x="60" y="25" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-weight="700" font-size="13">Stage 3: Director Final Sign-off</text>
    <text x="60" y="42" fill="rgba(255,255,255,0.3)" font-family="system-ui" font-size="10">AWAITING STAGE 2 CONFIRMATION</text>
  </g>
</svg>`);

// Col 2 Tall: Enterprise HR Leave 3D Dashboard
saveSvg('p5-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p5TallBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F0920" />
      <stop offset="50%" stop-color="#1B1038" />
      <stop offset="100%" stop-color="#07040E" />
    </linearGradient>
    <linearGradient id="p5PurpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#9D4EDD" />
      <stop offset="100%" stop-color="#00F0FF" />
    </linearGradient>
  </defs>

  <rect width="720" height="580" fill="url(#p5TallBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(157,78,221,0.25)" stroke-width="2" rx="31"/>

  <!-- Header -->
  <g transform="translate(35, 30)">
    <rect width="650" height="52" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(157,78,221,0.2)"/>
    <text x="25" y="33" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" letter-spacing="1">MULTI-SECTOR ENTERPRISE HR &amp; LEAVE SYSTEM</text>
    <rect x="520" y="12" width="115" height="28" rx="14" fill="url(#p5PurpleGrad)"/>
    <text x="577" y="30" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">HR ADMIN</text>
  </g>

  <!-- 3 Stats cards -->
  <g transform="translate(35, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(157,78,221,0.05)" stroke="rgba(157,78,221,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">ON LEAVE TODAY</text>
    <text x="20" y="60" fill="#9D4EDD" font-family="system-ui" font-size="24" font-weight="800">18 / 420</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">95.7% Workforce Active</text>
  </g>

  <g transform="translate(250, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(157,78,221,0.05)" stroke="rgba(157,78,221,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">PENDING REQUESTS</text>
    <text x="20" y="60" fill="#00F0FF" font-family="system-ui" font-size="24" font-weight="800">07 IN QUEUE</text>
    <text x="20" y="78" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">Avg Resolution: 2 hrs</text>
  </g>

  <g transform="translate(465, 100)">
    <rect width="220" height="90" rx="16" fill="rgba(157,78,221,0.05)" stroke="rgba(157,78,221,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">DEPARTMENT SECTORS</text>
    <text x="20" y="60" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">08 SECTORS</text>
    <text x="20" y="78" fill="#9D4EDD" font-family="system-ui" font-size="10">● Engineering, Finance, Ops</text>
  </g>

  <!-- Big Interactive Monthly Calendar & Heatmap -->
  <g transform="translate(35, 210)">
    <rect width="650" height="330" rx="20" fill="rgba(15,10,30,0.8)" stroke="rgba(157,78,221,0.15)"/>
    <text x="30" y="35" fill="#9D4EDD" font-family="monospace" font-size="11">ORGANIZATIONAL ATTENDANCE MATRIX</text>

    <!-- Calendar Days Grid (5 cols x 4 rows) -->
    <g transform="translate(30, 60)">
      <!-- Render 20 mini calendar blocks -->
      <rect x="0" y="0" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="12" y="26" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Mon 14</text>
      <text x="65" y="26" fill="#00FF9D" font-family="monospace" font-size="9">98% PRES</text>

      <rect x="120" y="0" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="132" y="26" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Tue 15</text>
      <text x="185" y="26" fill="#00FF9D" font-family="monospace" font-size="9">96% PRES</text>

      <rect x="240" y="0" width="105" height="45" rx="8" fill="rgba(157,78,221,0.15)" stroke="#9D4EDD"/>
      <text x="252" y="26" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Wed 16</text>
      <text x="305" y="26" fill="#9D4EDD" font-family="monospace" font-size="9">4 ON LV</text>

      <rect x="360" y="0" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="372" y="26" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Thu 17</text>
      <text x="425" y="26" fill="#00FF9D" font-family="monospace" font-size="9">97% PRES</text>

      <rect x="480" y="0" width="105" height="45" rx="8" fill="rgba(0,240,255,0.08)" stroke="#00F0FF"/>
      <text x="492" y="26" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Fri 18</text>
      <text x="545" y="26" fill="#00F0FF" font-family="monospace" font-size="9">WFH 80%</text>

      <!-- Row 2 -->
      <rect x="0" y="60" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="12" y="86" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Mon 21</text>
      <text x="65" y="86" fill="#00FF9D" font-family="monospace" font-size="9">99% PRES</text>

      <rect x="120" y="60" width="105" height="45" rx="8" fill="rgba(157,78,221,0.15)" stroke="#9D4EDD"/>
      <text x="132" y="86" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Tue 22</text>
      <text x="185" y="86" fill="#9D4EDD" font-family="monospace" font-size="9">6 ON LV</text>

      <rect x="240" y="60" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="252" y="86" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Wed 23</text>
      <text x="305" y="86" fill="#00FF9D" font-family="monospace" font-size="9">98% PRES</text>

      <rect x="360" y="60" width="105" height="45" rx="8" fill="rgba(0,255,157,0.08)" stroke="#00FF9D"/>
      <text x="372" y="86" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Thu 24</text>
      <text x="425" y="86" fill="#00FF9D" font-family="monospace" font-size="9">96% PRES</text>

      <rect x="480" y="60" width="105" height="45" rx="8" fill="rgba(0,240,255,0.08)" stroke="#00F0FF"/>
      <text x="492" y="86" fill="#FFFFFF" font-family="system-ui" font-size="11" font-weight="700">Fri 25</text>
      <text x="545" y="86" fill="#00F0FF" font-family="monospace" font-size="9">WFH 85%</text>
    </g>

    <!-- Bottom Department Filter Banner -->
    <g transform="translate(30, 200)">
      <rect width="590" height="100" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
      <text x="25" y="32" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="13">ROLE-BASED PERMISSION &amp; MULTI-TENANT ARCHITECTURE</text>
      <text x="25" y="52" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">Automated balance deduction · Google/Outlook Calendar Sync · Android/iOS Mobile App Ready</text>
      <rect x="25" y="65" width="130" height="24" rx="6" fill="url(#p5PurpleGrad)"/>
      <text x="90" y="81" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="10" text-anchor="middle">SYNC ATTENDANCE</text>
    </g>
  </g>
</svg>`);

// -------------------------------------------------------------
// PROJECT 06: SMART CAMPUS PROJECT
// -------------------------------------------------------------

// Col 1 Top: Smart Classroom & IoT Beacon
saveSvg('p6-classroom.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 230" width="100%" height="100%">
  <defs>
    <linearGradient id="campusBg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B1A28" />
      <stop offset="100%" stop-color="#040C14" />
    </linearGradient>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
  </defs>

  <rect width="420" height="230" fill="url(#campusBg1)" rx="24"/>
  <rect x="1" y="1" width="418" height="228" fill="none" stroke="rgba(20,184,166,0.3)" stroke-width="1.5" rx="23"/>

  <!-- Classroom Beacon graphic -->
  <g transform="translate(35, 45)">
    <circle cx="55" cy="55" r="45" fill="rgba(20,184,166,0.1)" stroke="#14B8A6" stroke-width="2"/>
    <circle cx="55" cy="55" r="30" fill="rgba(59,130,246,0.2)"/>
    <text x="55" y="62" fill="#14B8A6" font-family="system-ui" font-size="24" text-anchor="middle">📡</text>
    <text x="55" y="120" fill="#FFFFFF" font-family="monospace" font-size="9" text-anchor="middle">RFID BEACON #C4</text>
  </g>

  <!-- Right text info -->
  <g transform="translate(170, 45)">
    <text x="0" y="20" fill="#14B8A6" font-family="monospace" font-size="10" letter-spacing="1">SMART LECTURE HALL 201</text>
    <text x="0" y="45" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">RFID ATTENDANCE</text>
    
    <rect x="0" y="65" width="215" height="40" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(20,184,166,0.2)"/>
    <text x="12" y="88" fill="#00FF9D" font-family="system-ui" font-size="11" font-weight="600">62/65 STUDENTS CHECKED IN</text>

    <rect x="0" y="115" width="215" height="40" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(59,130,246,0.2)"/>
    <text x="12" y="138" fill="#3B82F6" font-family="system-ui" font-size="11">AC 24°C · PROJECTOR 4K ACTIVE</text>
  </g>
</svg>`);

// Col 1 Bottom: Campus Facility IoT Controller
saveSvg('p6-iot.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="100%" height="100%">
  <defs>
    <linearGradient id="p6bBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081420" />
      <stop offset="100%" stop-color="#02080E" />
    </linearGradient>
  </defs>

  <rect width="420" height="340" fill="url(#p6bBg)" rx="24"/>
  <rect x="1" y="1" width="418" height="338" fill="none" stroke="rgba(20,184,166,0.25)" stroke-width="1.5" rx="23"/>

  <text x="30" y="40" fill="#14B8A6" font-family="monospace" font-size="11" letter-spacing="1">FACILITY AUTOMATION</text>
  <text x="30" y="65" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="18">CAMPUS ENERGY &amp; ACCESS</text>

  <!-- Controls list -->
  <g transform="translate(30, 95)">
    <rect width="360" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(20,184,166,0.2)"/>
    <circle cx="28" cy="26" r="12" fill="#14B8A6"/>
    <text x="28" y="30" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">⚡</text>
    <text x="55" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="13">Solar Energy Grid (Library Wing)</text>
    <text x="55" y="40" fill="#00FF9D" font-family="system-ui" font-size="10">Generating 45 kW · Battery 92%</text>
  </g>

  <g transform="translate(30, 160)">
    <rect width="360" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(59,130,246,0.2)"/>
    <circle cx="28" cy="26" r="12" fill="#3B82F6"/>
    <text x="28" y="30" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">🚪</text>
    <text x="55" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="13">Automated Access Gate (North Gate)</text>
    <text x="55" y="40" fill="#3B82F6" font-family="system-ui" font-size="10">RFID &amp; Face Recognition Online</text>
  </g>

  <g transform="translate(30, 225)">
    <rect width="360" height="52" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(20,184,166,0.2)"/>
    <circle cx="28" cy="26" r="12" fill="#00FF9D"/>
    <text x="28" y="30" fill="#0C0C0C" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">💡</text>
    <text x="55" y="24" fill="#FFFFFF" font-family="system-ui" font-weight="600" font-size="13">Smart Lighting (Main Auditorium)</text>
    <text x="55" y="40" fill="#00FF9D" font-family="system-ui" font-size="10">Occupancy Auto-dimming Active</text>
  </g>
</svg>`);

// Col 2 Tall: Smart University 3D Interactive Map & Student Portal
saveSvg('p6-dashboard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 580" width="100%" height="100%">
  <defs>
    <linearGradient id="p6TallBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06121D" />
      <stop offset="50%" stop-color="#0D2236" />
      <stop offset="100%" stop-color="#02080F" />
    </linearGradient>
    <linearGradient id="p6TealBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14B8A6" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
  </defs>

  <rect width="720" height="580" fill="url(#p6TallBg)" rx="32"/>
  <rect x="1" y="1" width="718" height="578" fill="none" stroke="rgba(20,184,166,0.25)" stroke-width="2" rx="31"/>

  <!-- Top Navigation -->
  <g transform="translate(35, 30)">
    <rect width="650" height="52" rx="16" fill="rgba(255,255,255,0.03)" stroke="rgba(20,184,166,0.2)"/>
    <text x="25" y="33" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="16" letter-spacing="1">SMART CAMPUS OS // DIGITAL UNIVERSITY</text>
    <rect x="510" y="12" width="125" height="28" rx="14" fill="url(#p6TealBlue)"/>
    <text x="572" y="30" fill="#FFFFFF" font-family="system-ui" font-weight="800" font-size="11" text-anchor="middle">STUDENT PORTAL</text>
  </g>

  <!-- 3 Top Stats -->
  <g transform="translate(35, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(20,184,166,0.05)" stroke="rgba(20,184,166,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">ENROLLED STUDENTS</text>
    <text x="20" y="60" fill="#14B8A6" font-family="system-ui" font-size="24" font-weight="800">8,950</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">● 92% Campus Attendance</text>
  </g>

  <g transform="translate(250, 100)">
    <rect width="195" height="90" rx="16" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">CONNECTED IOT LABS</text>
    <text x="20" y="60" fill="#3B82F6" font-family="system-ui" font-size="24" font-weight="800">42 LABS</text>
    <text x="20" y="78" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10">100% Automated Access</text>
  </g>

  <g transform="translate(465, 100)">
    <rect width="220" height="90" rx="16" fill="rgba(20,184,166,0.05)" stroke="rgba(20,184,166,0.2)"/>
    <text x="20" y="30" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="10" font-weight="600">LIVE NOTIFICATIONS</text>
    <text x="20" y="60" fill="#FFFFFF" font-family="system-ui" font-size="24" font-weight="800">NO DELAYS</text>
    <text x="20" y="78" fill="#00FF9D" font-family="system-ui" font-size="10">Timetables Synchronized</text>
  </g>

  <!-- Big Interactive 3D Isometric Campus Map -->
  <g transform="translate(35, 210)">
    <rect width="650" height="330" rx="20" fill="rgba(6,18,30,0.8)" stroke="rgba(20,184,166,0.15)"/>
    <text x="30" y="35" fill="#14B8A6" font-family="monospace" font-size="11">ISOMETRIC CAMPUS DIGITAL TWIN</text>

    <!-- Isometric building blocks -->
    <!-- Engineering Block -->
    <g transform="translate(180, 140)">
      <polygon points="0,-40 60,-10 0,20 -60,-10" fill="#14B8A6" opacity="0.8"/>
      <polygon points="-60,-10 0,20 0,70 -60,40" fill="#0F766E"/>
      <polygon points="0,20 60,-10 60,40 0,70" fill="#115E59"/>
      <text x="0" y="-48" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="11" text-anchor="middle">CSE &amp; AI BLOCK</text>
      <circle cx="0" cy="0" r="5" fill="#00FF9D"/>
    </g>

    <!-- Central Library -->
    <g transform="translate(340, 100)">
      <polygon points="0,-35 50,-10 0,15 -50,-10" fill="#3B82F6" opacity="0.8"/>
      <polygon points="-50,-10 0,15 0,60 -50,35" fill="#1D4ED8"/>
      <polygon points="0,15 50,-10 50,35 0,60" fill="#1E40AF"/>
      <text x="0" y="-42" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="11" text-anchor="middle">CENTRAL LIBRARY</text>
      <circle cx="0" cy="0" r="5" fill="#00F0FF"/>
    </g>

    <!-- Student Center & Hostel -->
    <g transform="translate(480, 160)">
      <polygon points="0,-30 45,-10 0,10 -45,-10" fill="#6366F1" opacity="0.8"/>
      <polygon points="-45,-10 0,10 0,50 -45,30" fill="#4338CA"/>
      <polygon points="0,10 45,-10 45,30 0,50" fill="#3730A3"/>
      <text x="0" y="-36" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="11" text-anchor="middle">SMART AUDITORIUM</text>
      <circle cx="0" cy="0" r="5" fill="#A855F7"/>
    </g>

    <!-- Connecting Campus Pathway Grid -->
    <path d="M120 220 L 180 180 L 340 140 L 480 200 L 580 240" fill="none" stroke="rgba(20,184,166,0.4)" stroke-width="3" stroke-dasharray="6,4"/>

    <!-- Bottom summary row -->
    <g transform="translate(30, 240)">
      <rect width="590" height="70" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)"/>
      <text x="25" y="28" fill="#FFFFFF" font-family="system-ui" font-weight="700" font-size="12">FEATURES IMPLEMENTED</text>
      <text x="25" y="48" fill="rgba(255,255,255,0.5)" font-family="system-ui" font-size="11">Automated Lecture Attendance · Campus Navigation · IoT Smart Classroom Management · Digital IDs</text>
    </g>
  </g>
</svg>`);

console.log('All 18 Project 3D SVGs successfully generated!');

