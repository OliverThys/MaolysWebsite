"use client";

import { useEffect, useRef } from "react";

type Vec2 = { x: number; y: number };

interface Particle {
  position: Vec2;
  velocity: Vec2;
  radius: number;
}

interface GridCellKey extends String {}

function getCellKey(x: number, y: number): GridCellKey {
  return `${x}:${y}` as GridCellKey;
}

export function ParticleBackground({
  density = 0.00006, // particles per pixel
  maxConnectionDistance = 140,
  speed = 45, // pixels per second
  color = "14, 165, 233", // rgb without alpha
}: {
  density?: number;
  maxConnectionDistance?: number;
  speed?: number;
  color?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // DÉSACTIVER COMPLÈTEMENT SUR MOBILE pour éviter les clignotements
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      canvas.style.display = 'none';
      return;
    }
    
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    let width = 0;
    let height = 0;

    let particles: Particle[] = [];

    // Spatial hashing grid
    let cellSize = maxConnectionDistance;
    let grid = new Map<GridCellKey, number[]>();

    const buildGrid = () => {
      grid.clear();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const cx = Math.floor(p.position.x / cellSize);
        const cy = Math.floor(p.position.y / cellSize);
        const key = getCellKey(cx, cy);
        const arr = grid.get(key);
        if (arr) arr.push(i);
        else grid.set(key, [i]);
      }
    };

    const queryNeighbors = (p: Particle) => {
      const cx = Math.floor(p.position.x / cellSize);
      const cy = Math.floor(p.position.y / cellSize);
      const neighbors: number[] = [];
      for (let gx = cx - 1; gx <= cx + 1; gx++) {
        for (let gy = cy - 1; gy <= cy + 1; gy++) {
          const arr = grid.get(getCellKey(gx, gy));
          if (arr) neighbors.push(...arr);
        }
      }
      return neighbors;
    };

    const resize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      width = vw;
      height = vh;
      canvas.width = Math.floor(vw * dpr);
      canvas.height = Math.floor(vh * dpr);
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Désactivé sur mobile (déjà géré au début)
      const targetCount = prefersReducedMotion
        ? 0
        : Math.min(220, Math.max(40, Math.floor(vw * vh * density)));

      // Initialize or adjust particle array
      if (particles.length < targetCount) {
        const toAdd = targetCount - particles.length;
        for (let i = 0; i < toAdd; i++) {
          particles.push({
            position: { x: Math.random() * width, y: Math.random() * height },
            velocity: {
              x: (Math.random() - 0.5),
              y: (Math.random() - 0.5),
            },
            radius: 1 + Math.random() * 1.5,
          });
        }
      } else if (particles.length > targetCount) {
        particles.length = targetCount;
      }

      buildGrid();
    };

    resize();
    window.addEventListener("resize", resize);

    // Pause when tab is hidden
    const onVisibility = () => {
      runningRef.current = !document.hidden;
      if (runningRef.current && rafRef.current == null) {
        lastTime = performance.now();
        rafRef.current = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    let lastTime = performance.now();

    const update = (dt: number) => {
      // Move particles
      const maxSpeed = speed; // px/s
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.position.x += p.velocity.x * maxSpeed * dt;
        p.position.y += p.velocity.y * maxSpeed * dt;

        // Wrap around
        if (p.position.x < 0) p.position.x += width;
        if (p.position.x >= width) p.position.x -= width;
        if (p.position.y < 0) p.position.y += height;
        if (p.position.y >= height) p.position.y -= height;
      }

      // Rebuild grid (fast)
      buildGrid();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Batch draw particles
      ctx.fillStyle = `rgba(${color}, 0.55)`;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.position.x, p.position.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connections using spatial hashing
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const neighbors = queryNeighbors(p);
        for (let k = 0; k < neighbors.length; k++) {
          const j = neighbors[k];
          if (j <= i) continue; // avoid duplicates
          const q = particles[j];
          const dx = p.position.x - q.position.x;
          const dy = p.position.y - q.position.y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxConnectionDistance) {
            const alpha = 0.18 * (1 - dist / maxConnectionDistance);
            ctx.strokeStyle = `rgba(${color}, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(p.position.x, p.position.y);
            ctx.lineTo(q.position.x, q.position.y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = (now: number) => {
      if (!runningRef.current) {
        rafRef.current = null;
        return;
      }
      const dt = Math.min(0.033, Math.max(0.001, (now - lastTime) / 1000)); // clamp 1ms..33ms
      lastTime = now;

      update(dt);
      draw();

      rafRef.current = requestAnimationFrame(loop);
    };

    if (!prefersReducedMotion) {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [color, density, maxConnectionDistance, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}

