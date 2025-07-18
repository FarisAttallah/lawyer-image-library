

import { useEffect, useState } from 'react';

export default function BrandingLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!showLoader) return;
    let loopTimeouts = [];
    setPhase(1); // Bottom icon animates in
    loopTimeouts.push(setTimeout(() => setPhase(2), 1200)); // Middle icon animates in
    loopTimeouts.push(setTimeout(() => setPhase(3), 2200)); // Top icon animates in
    loopTimeouts.push(setTimeout(() => setPhase(4), 3400)); // All fade out
    loopTimeouts.push(setTimeout(() => setPhase(0), 4000)); // Reset
    loopTimeouts.push(setTimeout(() => setShowLoader(false), 4800)); // Hide loader after one cycle
    return () => loopTimeouts.forEach(clearTimeout);
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: 'white',
      pointerEvents: 'all',
      transition: 'opacity 0.5s',
    }}>
      <div style={{
        position: 'relative',
        width: 340,
        height: 340,
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        {/* branding_bottom (slide in from right) */}
        <img
          src="/images/branding_bottom.png"
          alt="Branding Bottom"
          style={{
            position: 'absolute',
            left:
              phase === 0 ? 340 : // offscreen right
              phase >= 1 ? 150 :
              340,
            top: 160, // fixed spot
            width: 80,
            height: 80,
            opacity:
              phase === 0 ? 0 :
              phase >= 1 && phase <= 3 ? 1 :
              phase === 4 ? 0 :
              1,
            transform: 'none',
            transition:
              'left 1.1s cubic-bezier(.77,0,.18,1), opacity 1.1s',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
        {/* branding_middle (slide in from left) */}
        <img
          src="/images/branding_middle.png"
          alt="Branding Middle"
          style={{
            position: 'absolute',
            left:
              phase <= 1 ? -80 : // offscreen left
              phase >= 2 ? 85 :
              -80,
            top: 125, // fixed spot
            width: 56,
            height: 56,
            opacity:
              phase <= 1 ? 0 :
              phase >= 2 && phase <= 3 ? 1 :
              phase === 4 ? 0 :
              1,
            transform: 'none',
            transition:
              'left 1.1s cubic-bezier(.77,0,.18,1), opacity 1.1s',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        {/* branding_top (slide in from top) */}
        <img
          src="/images/branding_top.png"
          alt="Branding Top"
          style={{
            position: 'absolute',
            left: 80, // fixed spot
            top:
              phase <= 2 ? -60 : // offscreen top
              phase >= 3 ? 80 :
              -60,
            width: 32,
            height: 32,
            opacity:
              phase <= 2 ? 0 :
              phase === 3 ? 1 :
              phase === 4 ? 0 :
              1,
            transform: 'none',
            transition:
              'top 1.1s cubic-bezier(.77,0,.18,1), opacity 1.1s',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
