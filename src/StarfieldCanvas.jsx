import { useEffect, useRef } from "react";

export default function StarfieldCanvas({ density = 170 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const stars = [];
    const rand = (min, max) => min + Math.random() * (max - min);
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    function resize() {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      stars.length = 0;
      const count = Math.floor((w * h) / 11000) + density;

      for (let i = 0; i < count; i++) {
        stars.push({
          x: rand(0, w),
          y: rand(0, h),
          r: rand(0.6, 1.8),
          a: rand(0.2, 0.95),
          vx: rand(-0.03, 0.03),
          vy: rand(0.08, 0.22), // “moving through space”
          tw: rand(0.003, 0.012),
          ph: rand(0, Math.PI * 2),
        });
      }
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);

      // Subtle neutral “space dust” (NOT red)
      const g = ctx.createRadialGradient(
        w * 0.55,
        h * 0.35,
        0,
        w * 0.55,
        h * 0.35,
        Math.max(w, h) * 0.9
      );
      g.addColorStop(0, "rgba(255,255,255,0.035)");
      g.addColorStop(0.4, "rgba(255,255,255,0.015)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.y > h + 10) s.y = -10;
        if (s.x < -10) s.x = w + 10;
        if (s.x > w + 10) s.x = -10;

        const twinkle = 0.6 + 0.4 * Math.sin(s.ph + t * s.tw);
        const alpha = clamp(s.a * twinkle, 0, 1);

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // very subtle glow for big stars (still neutral)
        if (s.r > 1.45) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${alpha * 0.06})`;
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame((nt) => draw(nt));
    }

    window.addEventListener("resize", resize);
    resize();
    rafRef.current = requestAnimationFrame((nt) => draw(nt));

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      aria-hidden="true"
    />
  );
}
