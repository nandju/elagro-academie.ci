"use client";

import { useEffect, useState, useRef } from "react";

type PageWrapperProps = {
  children: React.ReactNode;
  minDisplay?: number;
};

export default function PageWrapper({
  children,
  minDisplay = 600,
}: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(6);
  const [fadeOut, setFadeOut] = useState(false);
  const startTs = useRef<number | null>(null);
  const finished = useRef(false);

  useEffect(() => {
    let raf: number | null = null;

    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts;
      const elapsed = ts - (startTs.current ?? ts);
      const target = Math.min(90, 6 + Math.floor(elapsed / 25));
      setProgress((p) => Math.max(p, target));
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onLoad = () => {
      finished.current = true;
      setProgress(100);

      const elapsedSinceStart = startTs.current ? Date.now() - startTs.current : 0;
      const wait = Math.max(0, minDisplay - elapsedSinceStart);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 420);
      }, wait);
    };

    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
      return () => window.removeEventListener("load", onLoad);
    }
  }, [minDisplay]);

  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!finished.current) {
        setProgress(100);
        setFadeOut(true);
        setTimeout(() => setIsLoading(false), 420);
      }
    }, 10000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          aria-hidden={false}
          role="status"
          className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-400 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Gradient background - African sunset/earth tones */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #FFF5E6 0%, #FFE8C5 50%, #E0AB6C 100%)",
            }}
          />

          {/* Animated field rows background */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: `${i * 16}%`,
                  height: "2px",
                  background: "#001A3B",
                  transform: "perspective(500px) rotateX(60deg)",
                  animation: `fieldRow ${3 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Floating elements (seeds, leaves, grains) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Seeds */}
            {[...Array(12)].map((_, i) => (
              <div
                key={`seed-${i}`}
                style={{
                  position: "absolute",
                  width: i % 3 === 0 ? "8px" : "6px",
                  height: i % 3 === 0 ? "10px" : "8px",
                  background: i % 2 === 0 ? "#E0AB6C" : "#001A3B",
                  borderRadius: i % 2 === 0 ? "50% 50% 0 0" : "50%",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float${(i % 3) + 1} ${4 + Math.random() * 3}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: 0.6,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              />
            ))}
          </div>

          {/* Sun rays effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={`ray-${i}`}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: "2px",
                  height: "40%",
                  background: "linear-gradient(180deg, rgba(224,171,108,0.3) 0%, transparent 100%)",
                  transformOrigin: "top center",
                  transform: `rotate(${i * 45}deg)`,
                  animation: "sunRay 4s ease-in-out infinite",
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8 px-6">
            {/* Main logo container with agricultural theme */}
            <div className="relative" style={{ width: 160, height: 160 }}>
              {/* Outer ripple effect - wheat circle */}
              <div
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "9999px",
                  border: "3px solid rgba(224,171,108,0.4)",
                  animation: "ripple 2s ease-out infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -12,
                  borderRadius: "9999px",
                  border: "3px solid rgba(224,171,108,0.2)",
                  animation: "ripple 2s ease-out infinite 0.5s",
                }}
              />

              {/* Rotating wheat stalks effect */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "9999px",
                  background: "conic-gradient(from 0deg, #E0AB6C, #001A3B, #E0AB6C)",
                  animation: "rotate 4s linear infinite",
                  padding: "5px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #FFF5E6 0%, #FFE8C5 100%)",
                  }}
                />
              </div>

              {/* Logo container */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  animation: "pulse 2s ease-in-out infinite",
                }}
              >
                <div
                  className="flex items-center justify-center rounded-full bg-white"
                  style={{
                    width: 110,
                    height: 110,
                    boxShadow: "0 8px 32px rgba(224,171,108,0.5), inset 0 2px 8px rgba(255,255,255,0.9)",
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001A3B] to-[#003366] flex items-center justify-center overflow-hidden relative">
                    <img
                      src="/assets/images/logo.png"
                      alt="Logo ELAGRO ACADEMY"
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                          e.currentTarget.parentElement.innerHTML = '<span class="text-2xl font-bold text-white">EA</span>';
                        }
                      }}
                    />
                    {/* Golden shimmer effect */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(135deg, transparent 30%, rgba(224,171,108,0.4) 50%, transparent 70%)",
                        animation: "shimmer 2.5s linear infinite",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative wheat stalks around logo */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={`wheat-${i}`}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "3px",
                    height: "25px",
                    background: "#E0AB6C",
                    transformOrigin: "bottom center",
                    transform: `translate(-50%, -80px) rotate(${i * 45}deg)`,
                    borderRadius: "2px 2px 0 0",
                    opacity: 0.6,
                    animation: "sway 2s ease-in-out infinite",
                    animationDelay: `${i * 0.125}s`,
                  }}
                >
                  {/* Wheat grain */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "6px",
                      height: "8px",
                      background: "#E0AB6C",
                      borderRadius: "50% 50% 40% 40%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Message with agricultural theme */}
            <div className="text-center max-w-md">
              <p className="text-lg font-bold text-[#001A3B] mb-2" style={{ textShadow: "0 2px 4px rgba(255,255,255,0.8)" }}>
                Préparation de votre formation...
              </p>
              <p className="text-sm text-gray-700 font-medium">
                Agriculture & Élevage Moderne en Afrique
              </p>
            </div>

            {/* Progress container */}
            <div className="relative w-80">
              {/* Progress percentage display - Golden sun */}
              <div
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                style={{
                  width: 85,
                  height: 85,
                  animation: "bounce 2s ease-in-out infinite",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #E0AB6C, #D4A05E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 8px 24px rgba(224,171,108,0.6), inset 0 2px 8px rgba(255,255,255,0.4)",
                    border: "4px solid #FFFFFF",
                  }}
                >
                  <span className="text-2xl font-bold text-white" style={{ textShadow: "0 2px 6px rgba(0,26,59,0.3)" }}>
                    {progress}%
                  </span>
                </div>
                {/* Sun shine */}
                <div
                  style={{
                    position: "absolute",
                    top: "18%",
                    left: "22%",
                    width: "35%",
                    height: "35%",
                    borderRadius: "9999px",
                    background: "radial-gradient(circle, rgba(255,255,255,0.9) 0%, transparent 70%)",
                  }}
                />
              </div>

              {/* Furrow progress bar container */}
              <div
                className="relative overflow-hidden rounded-full"
                style={{
                  height: 26,
                  background: "linear-gradient(90deg, rgba(0,26,59,0.1) 0%, rgba(224,171,108,0.1) 100%)",
                  border: "3px solid rgba(224,171,108,0.4)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.08)",
                }}
              >
                {/* Animated soil fill */}
                <div
                  className="absolute inset-0 transition-all duration-300 ease-out"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #001A3B 0%, #E0AB6C 100%)",
                    boxShadow: "2px 0 12px rgba(224,171,108,0.8)",
                  }}
                >
                  {/* Plowed field pattern */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(255,255,255,0.2) 15px, rgba(255,255,255,0.2) 30px)`,
                      animation: "field-slide 1.5s linear infinite",
                    }}
                  />
                </div>

                {/* Golden shimmer overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(90deg, transparent 0%, rgba(224,171,108,0.6) 50%, transparent 100%)",
                    animation: "shimmer-bar 2.5s linear infinite",
                  }}
                />
              </div>

              {/* Growing plant indicator */}
              <div className="absolute -top-4 left-1/4 flex flex-col items-center" style={{ animation: "grow 3s ease-in-out infinite" }}>
                <div className="w-1 h-6 bg-green-600 rounded-t"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="absolute -top-4 right-1/3 flex flex-col items-center" style={{ animation: "grow 3s ease-in-out infinite 1s" }}>
                <div className="w-1 h-6 bg-green-600 rounded-t"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            {/* Footer text */}
            <p className="text-xs text-[#001A3B] opacity-70 font-medium">
              Cultivons ensemble l'avenir de l'agriculture africaine
            </p>
          </div>
        </div>
      )}

      <div style={{ visibility: isLoading ? "hidden" : "visible", transition: "visibility 0s linear 0s" }}>
        {children}
      </div>

      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -12px); }
        }
        @keyframes field-slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(30px); }
        }
        @keyframes fieldRow {
          0%, 100% { opacity: 0.3; transform: perspective(500px) rotateX(60deg) translateY(0); }
          50% { opacity: 0.6; transform: perspective(500px) rotateX(60deg) translateY(-5px); }
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(25px, -35px) rotate(120deg); }
          66% { transform: translate(-20px, -20px) rotate(240deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-30px, -25px) rotate(-120deg); }
          66% { transform: translate(20px, -40px) rotate(-240deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -45px) rotate(180deg); }
        }
        @keyframes sway {
          0%, 100% { transform: translate(-50%, -80px) rotate(var(--rotate)) rotate(-5deg); }
          50% { transform: translate(-50%, -80px) rotate(var(--rotate)) rotate(5deg); }
        }
        @keyframes sunRay {
          0%, 100% { opacity: 0.2; transform: rotate(var(--angle)) scaleY(0.8); }
          50% { opacity: 0.5; transform: rotate(var(--angle)) scaleY(1.2); }
        }
        @keyframes grow {
          0%, 100% { transform: translateY(0) scaleY(1); opacity: 0.7; }
          50% { transform: translateY(-8px) scaleY(1.3); opacity: 1; }
        }
      `}</style>
    </>
  );
}