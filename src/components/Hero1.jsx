import createGlobe from "cobe";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

const Hero1 = () => {
  const canvasRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cardIndexes, setCardIndexes] = useState([0, 0, 0, 0]);
  const [angle, setAngle] = useState(0);

  const cardGroups = useMemo(() => [
    [
      {
        img: "https://plus.unsplash.com/premium_photo-1675745329659-29044cb6adbb?q=80&w=870&auto=format&fit=crop",
        label: "Paris",
      },
      {
        img: "https://media.istockphoto.com/id/918407430/photo/seaplane-flying-above-exotic-iceland-in-maldives.jpg?s=612x612&w=is&k=20&c=aLH2h1I066SaXTQK2m4-W3-9eHpY_LMc38YjgTup4dM=",
        label: "Santorini",
      },
      {
        img: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=775&auto=format&fit=crop",
        label: "Venice",
      },
    ],
    [
      {
        img: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=764&auto=format&fit=crop",
        label: "Dubai",
      },
      {
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=870&auto=format&fit=crop",
        label: "Maldives",
      },
      {
        img: "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=764&auto=format&fit=crop",
        label: "Bali",
      },
    ],
    [
      {
        img: "https://images.unsplash.com/photo-1528255915607-9012fda0f838?q=80&w=765&auto=format&fit=crop",
        label: "New York",
      },
      {
        img: "https://plus.unsplash.com/premium_photo-1687984123129-1794500ac338?q=80&w=687&auto=format&fit=crop",
        label: "Rome",
      },
      {
        img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=873&auto=format&fit=crop",
        label: "Barcelona",
      },
    ],
    [
      {
        img: "https://images.unsplash.com/photo-1712611408114-93578e518108?q=80&w=869&auto=format&fit=crop",
        label: "Tokyo",
      },
      {
        img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=870&auto=format&fit=crop",
        label: "Sydney",
      },
      {
        img: "https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=687&auto=format&fit=crop",
        label: "Cape Town",
      },
    ],
  ], []);

  const cardA = cardGroups[0][cardIndexes[0]];
  const cardB = cardGroups[1][cardIndexes[1]];
  const cardC = cardGroups[2][cardIndexes[2]];
  const cardD = cardGroups[3][cardIndexes[3]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndexes((prev) => prev.map((index, i) => (index + 1) % cardGroups[i].length));
    }, 3600);

    return () => clearInterval(interval);
  }, [cardGroups]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 2);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let phi = 0;
    let theta = 0.35;
    let isPointerDown = false;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600,
      height: 600,
      phi: 0,
      theta: 0.35,
      dark: 1,
      diffuse: 1.6,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor: [0.02, 0.04, 0.12],
      glowColor: [0.94, 0.78, 0.26],
      markerColor: [0.94, 0.78, 0.26],
      backgroundColor: [0.01, 0.02, 0.06, 1],
      markers: [
        { location: [48.8566, 2.3522], size: 0.05 }, // Paris
        { location: [25.2048, 55.2708], size: 0.05 }, // Dubai
        { location: [6.5244, 3.3792], size: 0.05 }, // Lagos
        { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
        { location: [51.5074, -0.1278], size: 0.05 }, // London
      ],
      onRender: (state) => {
        if (!isPointerDown) {
          phi += 0.003;
        }
        state.phi = phi;
        state.theta = theta;
      },
    });

    const handlePointerDown = () => {
      isPointerDown = true;
      setIsDragging(true);
    };

    const handlePointerMove = (e) => {
      if (!isPointerDown) return;
      phi += e.movementX * 0.005;
      theta -= e.movementY * 0.005;
    };

    const handlePointerUp = () => {
      isPointerDown = false;
      setIsDragging(false);
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      globe.destroy();
      canvas.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <section className="snap-start min-h-screen w-full relative flex items-center bg-slate-950 overflow-hidden px-6 py-10">
      <style>{`
        .hero-water-ring {
          background-image:
            radial-gradient(circle at 30% 25%, rgba(255,255,255,0.24), transparent 24%),
            radial-gradient(circle at 70% 70%, rgba(212,175,55,0.12), transparent 18%),
            repeating-linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.08) 2px, transparent 6px, transparent 12px);
          background-size: 220% 220%;
          animation: waterFlow 9s linear infinite, ringGlow 12s ease-in-out infinite;
        }
        @keyframes waterFlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes ringGlow {
          0%, 100% { box-shadow: inset 0 0 28px rgba(255,255,255,0.14), 0 0 32px rgba(212,175,55,0.08); }
          50% { box-shadow: inset 0 0 40px rgba(255,255,255,0.22), 0 0 48px rgba(212,175,55,0.16); }
        }
      `}</style>
      <div className="max-w-7xl mx-auto w-full">
        {/* Globe */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative w-[420px] md:w-full h-[420px] sm:h-[520px] shadow-slate-950/40">
            <div className="absolute inset-10 rounded-full border border-white/10 bg-slate-950/90 overflow-hidden">
              <div className="absolute inset-0 rounded-full hero-water-ring" />
              <div className="absolute inset-6 rounded-full border border-white/15 bg-slate-950/95" />
            </div>

            {/* Floating Polaroid Cards */}
            <motion.div
              animate={{
                x: 140 * Math.cos((angle + 0) * Math.PI / 180),
                y: 140 * Math.sin((angle + 0) * Math.PI / 180),
              }}
              transition={{ duration: 0 }}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              className="w-20 h-28 md:w-24 md:h-32 bg-white rounded-2xl shadow-xl p-1"
            >
              <img src={cardA.img} alt={cardA.label} className="w-full h-full object-cover rounded" />
              <p className="text-center text-slate-900 mt-2 text-xs md:text-sm font-sans">{cardA.label}</p>
            </motion.div>
            <motion.div
              animate={{
                x: 140 * Math.cos((angle + 90) * Math.PI / 180),
                y: 140 * Math.sin((angle + 90) * Math.PI / 180),
              }}
              transition={{ duration: 0 }}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              className="w-20 h-28 md:w-24 md:h-32 bg-white rounded-2xl shadow-xl p-1"
            >
              <img src={cardB.img} alt={cardB.label} className="w-full h-full object-cover rounded" />
              <p className="text-center text-slate-900 mt-2 text-xs md:text-sm font-sans">{cardB.label}</p>
            </motion.div>
            <motion.div
              animate={{
                x: 140 * Math.cos((angle + 180) * Math.PI / 180),
                y: 140 * Math.sin((angle + 180) * Math.PI / 180),
              }}
              transition={{ duration: 0 }}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              className="w-20 h-28 md:w-24 md:h-32 bg-white rounded-2xl shadow-xl p-1"
            >
              <img src={cardC.img} alt={cardC.label} className="w-full h-full object-cover rounded" />
              <p className="text-center text-slate-900 mt-2 text-xs md:text-sm font-sans">{cardC.label}</p>
            </motion.div>
            <motion.div
              animate={{
                x: 140 * Math.cos((angle + 270) * Math.PI / 180),
                y: 140 * Math.sin((angle + 270) * Math.PI / 180),
              }}
              transition={{ duration: 0 }}
              style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              className="w-20 h-28 md:w-24 md:h-32 bg-white rounded-2xl shadow-xl p-1"
            >
              <img src={cardD.img} alt={cardD.label} className="w-full h-full object-cover rounded" />
              <p className="text-center text-slate-900 mt-2 text-xs md:text-sm font-sans">{cardD.label}</p>
            </motion.div>

            <canvas
              ref={canvasRef}
              style={{ width: "100%", height: "100%" }}
              className={`relative cursor-grab active:cursor-grabbing transition-transform duration-200 ${isDragging ? "scale-105" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero1;