import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas
 * Renders an interactive matrix-dot grid on an HTML5 canvas.
 * Features:
 * - Ambient sine-wave undulation
 * - Mouse ripple and perspective tilt on hover/move
 * - Neon emerald (#10b981) to bright lime (#a3e635) proximity glow
 * - Dynamic filament connections near cursor
 * - High-DPI support and smooth 60fps requestAnimationFrame
 */
const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Grid and particle configuration
    const spacing = 34; // Distance between dots
    let dots = [];
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    // Mouse tracking with smooth lerp
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 170, // Interaction radius
      isActive: false,
    };

    // Initialize or resize canvas dimensions & dot grid
    const handleResize = () => {
      dpr = window.devicePixelRatio || 1;
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Rebuild dot lattice
      dots = [];
      const cols = Math.ceil(width / spacing) + 2;
      const rows = Math.ceil(height / spacing) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing - spacing / 2;
          const y = r * spacing - spacing / 2;
          dots.push({
            baseX: x,
            baseY: y,
            x: x,
            y: y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.0015 + Math.random() * 0.001,
          });
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse and touch interaction listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.isActive = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.isActive = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    let time = 0;

    // Render loop
    const render = () => {
      time += 0.02;

      // Smooth mouse coordinates (lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Clear with matte carbon tone
      ctx.clearRect(0, 0, width, height);

      // Subtle ambient cursor glow on the canvas background
      if (mouse.isActive && mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        );
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0.08)');
        gradient.addColorStop(0.5, 'rgba(132, 204, 22, 0.03)');
        gradient.addColorStop(1, 'rgba(13, 17, 23, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Calculate perspective tilt offsets from center
      const centerX = width / 2;
      const centerY = height / 2;
      const tiltFactorX = mouse.isActive ? (mouse.x - centerX) / centerX : 0;
      const tiltFactorY = mouse.isActive ? (mouse.y - centerY) / centerY : 0;

      const activeDots = [];

      // Update and draw each dot
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Ambient undulating wave
        const ambientWave = Math.sin(time + dot.phase) * 1.8;
        
        // Perspective parallax displacement
        const depthFactor = (dot.baseY / height) * 0.5 + 0.5;
        const perspectiveX = dot.baseX + tiltFactorX * 8 * depthFactor;
        const perspectiveY = dot.baseY + tiltFactorY * 8 * depthFactor + ambientWave;

        // Mouse distance calculation
        let dx = mouse.x - perspectiveX;
        let dy = mouse.y - perspectiveY;
        let dist = Math.hypot(dx, dy);

        let finalX = perspectiveX;
        let finalY = perspectiveY;
        let scale = 1.0;
        let opacity = 0.22;
        let isExcited = false;

        if (dist < mouse.radius && mouse.isActive) {
          isExcited = true;
          // Ripple displacement calculation
          const force = (1 - dist / mouse.radius);
          const ripple = Math.sin(dist * 0.08 - time * 2) * 5 * force;
          const angle = Math.atan2(dy, dx);

          finalX -= Math.cos(angle) * (force * 14 + ripple);
          finalY -= Math.sin(angle) * (force * 14 + ripple);

          // Closer dots grow and become brighter neon emerald/lime
          scale = 1.0 + force * 2.2;
          opacity = 0.35 + force * 0.65;

          activeDots.push({ x: finalX, y: finalY, force });
        }

        dot.x = finalX;
        dot.y = finalY;

        // Render dot
        ctx.beginPath();
        const baseRadius = 1.4 * scale;
        ctx.arc(finalX, finalY, baseRadius, 0, Math.PI * 2);

        if (isExcited) {
          // Dynamic gradient from Neon Emerald to Bright Lime based on proximity
          const forceRatio = 1 - dist / mouse.radius;
          if (forceRatio > 0.6) {
            ctx.fillStyle = `rgba(163, 230, 53, ${opacity})`; // Bright Lime
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 8;
          } else {
            ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`; // Crisp Neon Emerald
            ctx.shadowColor = '#10b981';
            ctx.shadowBlur = 4;
          }
        } else {
          ctx.fillStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
      }

      // Draw faint cyber filaments between neighboring dots near cursor
      if (activeDots.length > 1) {
        ctx.lineWidth = 0.7;
        for (let i = 0; i < activeDots.length; i++) {
          for (let j = i + 1; j < activeDots.length; j++) {
            const p1 = activeDots[i];
            const p2 = activeDots[j];
            const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
            if (d < 46) {
              const alpha = (1 - d / 46) * 0.35 * Math.min(p1.force, p2.force);
              ctx.strokeStyle = `rgba(52, 211, 153, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      // Reset shadow for next frame
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 block w-full h-full"
      style={{ opacity: 0.95 }}
    />
  );
};

export default MatrixGridCanvas;

