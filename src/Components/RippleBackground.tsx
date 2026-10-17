"use client";

import { useEffect, useRef } from "react";

const ANGLE_RAD = (-52 * Math.PI) / 180;
const DIR_X = Math.cos(ANGLE_RAD);
const DIR_Y = Math.sin(ANGLE_RAD);
const GLOW_RADIUS = 180;
const REPULSION_RADIUS = 160;
const REPULSION_ACCEL = 1600;
const MAX_DPR = 2;
const MAX_DT_SECONDS = 0.05;
const FADE_IN_SECONDS = 0.8;
const FADE_OUT_SECONDS = 1.2;
const MOBILE_QUERY = "(max-width: 767px)";
const TOUCH_QUERY = "(hover: none), (pointer: coarse)";
const MOTION_QUERY = "(prefers-reduced-motion: reduce)";

interface Comet {
  x: number;
  y: number;
  z: number;
  length: number;
  thickness: number;
  speed: number;
  maxOpacity: number;
  age: number;
  life: number;
  repulseX: number;
  repulseY: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function randomLife(): number {
  return 3.5 + Math.random() * 3.5;
}

function targetCount(width: number, height: number, mobile: boolean): number {
  const base = Math.round(clamp((width * height) / 32000, 10, 26));
  return mobile ? Math.max(6, Math.round(base * 0.5)) : base;
}

function spawnX(width: number, length: number, mobile: boolean): number {
  const spread = mobile ? width * 0.5 : width;
  return -length + Math.random() * (spread + length);
}

function spawnComet(
  width: number,
  height: number,
  mobile: boolean,
  scatter: boolean,
): Comet {
  const z = Math.random() ** 1.6;
  const length = 40 + z * 140;
  const life = randomLife();

  return {
    x: scatter
      ? Math.random() * (width + length) - length
      : spawnX(width, length, mobile),
    y: scatter ? Math.random() * height : height + 12 + Math.random() * 48,
    z,
    length,
    thickness: 1 + z * 3.2,
    speed: 60 + z * 260,
    maxOpacity: 0.12 + z * 0.55,
    age: scatter ? life * 0.5 : Math.random() * life,
    life,
    repulseX: 0,
    repulseY: 0,
  };
}

function respawn(
  comet: Comet,
  width: number,
  height: number,
  mobile: boolean,
): void {
  comet.x = spawnX(width, comet.length, mobile);
  comet.y = height + 12 + Math.random() * 48;
  comet.age = 0;
  comet.life = randomLife();
  comet.repulseX = 0;
  comet.repulseY = 0;
}

function lifeAlpha(comet: Comet): number {
  const fadeIn = clamp(comet.age / FADE_IN_SECONDS, 0, 1);
  const fadeOut = clamp((comet.life - comet.age) / FADE_OUT_SECONDS, 0, 1);
  return fadeIn * fadeOut;
}

function isOffscreen(comet: Comet, width: number): boolean {
  const margin = comet.length + 80;
  return comet.x - margin > width || comet.y + margin < 0;
}

export default function RippleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const motionQuery = window.matchMedia(MOTION_QUERY);
    const touchQuery = window.matchMedia(TOUCH_QUERY);
    const mobileQuery = window.matchMedia(MOBILE_QUERY);

    const pointer = { x: 0, y: 0, active: false };
    const comets: Comet[] = [];

    let width = 0;
    let height = 0;
    let mobile = mobileQuery.matches;
    let touchMode = touchQuery.matches;
    let reducedMotion = motionQuery.matches;
    let rafId = 0;
    let lastTime = 0;

    const stopLoop = () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const drawComet = (comet: Comet) => {
      const alpha = reducedMotion
        ? comet.maxOpacity
        : comet.maxOpacity * lifeAlpha(comet);
      if (alpha <= 0.002) return;

      const tailX = comet.x - DIR_X * comet.length;
      const tailY = comet.y - DIR_Y * comet.length;
      const gradient = ctx.createLinearGradient(comet.x, comet.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(239, 68, 68, ${alpha.toFixed(4)})`);
      gradient.addColorStop(1, "rgba(239, 68, 68, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = comet.thickness;
      ctx.lineCap = "round";
      if (comet.z > 0.6) {
        ctx.shadowColor = "rgba(239, 68, 68, 0.5)";
        ctx.shadowBlur = 12;
      }
      ctx.beginPath();
      ctx.moveTo(comet.x, comet.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      if (comet.z > 0.6) {
        ctx.shadowBlur = 0;
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const comet of comets) drawComet(comet);

      if (!reducedMotion && !touchMode && pointer.active) {
        const glow = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          GLOW_RADIUS,
        );
        glow.addColorStop(0, "rgba(239, 68, 68, 0.10)");
        glow.addColorStop(1, "rgba(239, 68, 68, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(
          pointer.x - GLOW_RADIUS,
          pointer.y - GLOW_RADIUS,
          GLOW_RADIUS * 2,
          GLOW_RADIUS * 2,
        );
      }
    };

    const update = (dt: number) => {
      for (const comet of comets) {
        if (!touchMode && pointer.active) {
          const dx = comet.x - pointer.x;
          const dy = comet.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < REPULSION_RADIUS && distance > 1) {
            const force = (1 - distance / REPULSION_RADIUS) * REPULSION_ACCEL;
            comet.repulseX += (dx / distance) * force * dt;
            comet.repulseY += (dy / distance) * force * dt;
          }
        }

        const decay = Math.pow(0.93, dt * 60);
        comet.repulseX *= decay;
        comet.repulseY *= decay;

        comet.x += (DIR_X * comet.speed + comet.repulseX) * dt;
        comet.y += (DIR_Y * comet.speed + comet.repulseY) * dt;
        comet.age += dt;

        if (comet.age >= comet.life || isOffscreen(comet, width)) {
          respawn(comet, width, height, mobile);
        }
      }
    };

    const frame = (now: number) => {
      rafId = requestAnimationFrame(frame);
      const dt =
        lastTime === 0
          ? 0
          : Math.min((now - lastTime) / 1000, MAX_DT_SECONDS);
      lastTime = now;
      update(dt);
      render();
    };

    const startLoop = () => {
      if (rafId !== 0 || reducedMotion || document.hidden) return;
      lastTime = 0;
      rafId = requestAnimationFrame(frame);
    };

    const syncCount = () => {
      const target = targetCount(width, height, mobile);
      while (comets.length > target) comets.pop();
      while (comets.length < target) {
        comets.push(spawnComet(width, height, mobile, reducedMotion));
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      mobile = mobileQuery.matches;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      syncCount();
      if (reducedMotion) render();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) {
        pointer.active = false;
        return;
      }
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const handlePointerOut = () => {
      pointer.active = false;
    };

    const handleVisibility = () => {
      if (document.hidden) stopLoop();
      else startLoop();
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;
      stopLoop();
      if (reducedMotion) render();
      else startLoop();
    };

    const handleTouchChange = (event: MediaQueryListEvent) => {
      touchMode = event.matches;
    };

    const handleMobileChange = (event: MediaQueryListEvent) => {
      mobile = event.matches;
      syncCount();
    };

    let dprQuery: MediaQueryList | null = null;

    const handleDprChange = () => {
      resize();
      watchDpr();
    };

    const watchDpr = () => {
      dprQuery?.removeEventListener("change", handleDprChange);
      dprQuery = window.matchMedia(
        `(resolution: ${window.devicePixelRatio || 1}dppx)`,
      );
      dprQuery.addEventListener("change", handleDprChange);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("pointerleave", handlePointerOut);
    window.addEventListener("blur", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibility);
    motionQuery.addEventListener("change", handleMotionChange);
    touchQuery.addEventListener("change", handleTouchChange);
    mobileQuery.addEventListener("change", handleMobileChange);
    watchDpr();

    resize();
    startLoop();

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      dprQuery?.removeEventListener("change", handleDprChange);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerOut);
      window.removeEventListener("blur", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibility);
      motionQuery.removeEventListener("change", handleMotionChange);
      touchQuery.removeEventListener("change", handleTouchChange);
      mobileQuery.removeEventListener("change", handleMobileChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="background-fade-in absolute inset-0 h-full w-full -z-10 overflow-hidden bg-[#171717]"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  );
}
