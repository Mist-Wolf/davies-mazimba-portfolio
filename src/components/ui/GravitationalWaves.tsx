import { useEffect, useRef } from "react";

export default function GravitationalWaves({ dark }: { dark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let mouseX = 0;
    let mouseY = 0;

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const radius = 250;

      // Brighter and more visible, yet still transparent
      const colorCenter = dark
        ? "rgba(255, 255, 255, 0.2)" // bright white for dark background
        : "rgba(0, 0, 0, 0.15)";     // darker center for light background

      const colorEdge = dark
        ? "rgba(255, 255, 255, 0)"   // fade to transparent
        : "rgba(0, 0, 0, 0.09)";

      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, radius);
      gradient.addColorStop(0, colorCenter);
      gradient.addColorStop(1, colorEdge);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, radius, 0, 2 * Math.PI);
      ctx.fill();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      draw();
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        filter: "blur(60px)", // more blur for soft, transparent effect
        opacity: 0.8,          // make it visible on both modes
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
