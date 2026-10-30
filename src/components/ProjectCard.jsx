import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';

/**
 * ProjectCard
 * Implements interactive 3D perspective tilt physics:
 * - Calculates tilt angle (rotateX, rotateY) based on mouse cursor position
 * - Lifts smoothly (translateY(-6px)) on hover
 * - Displays a dynamic cursor-following glass shine/glare reflection
 * - Casts soft neon emerald glow (shadow-[0_0_30px_rgba(16,185,129,0.3)])
 * - Renders tech badges, 2-sentence description, and action buttons ('Live Demo' and 'GitHub Code')
 */
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate subtle 3D tilt angles (max +/- 10 degrees)
    const rotateX = ((mouseY - centerY) / centerY) * -9;
    const rotateY = ((mouseX - centerX) / centerX) * 9;

    setTilt({ x: rotateX, y: rotateY });

    // Cursor-following shine coordinates in percentage
    const shineX = (mouseX / rect.width) * 100;
    const shineY = (mouseY / rect.height) * 100;
    setShine({ x: shineX, y: shineY, opacity: 0.18 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setShine({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      style={{ perspective: '1100px' }}
      className="w-full flex"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out, box-shadow 0.4s ease-out, border-color 0.4s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`relative w-full rounded-2xl bg-[#161b22]/85 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 flex flex-col justify-between overflow-hidden group ${
          isHovered
            ? 'border-emerald-400/60 shadow-[0_0_35px_rgba(16,185,129,0.25),0_20px_40px_rgba(0,0,0,0.7)]'
            : 'shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
        }`}
      >
        {/* Sleek Cursor-Following Glass Shine Effect */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: shine.opacity,
            background: `radial-gradient(circle 320px at ${shine.x}% ${shine.y}%, rgba(16, 185, 129, 0.4), rgba(163, 230, 53, 0.15) 30%, transparent 70%)`,
          }}
        />

        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-emerald-400 transition-colors" />

        {/* Card Header: Monospace Tag, Category & Icon */}
        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="font-mono text-xs text-lime-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              // 0{index + 1}. {project.categoryTag}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
              {project.statusBadge}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#f0f6fc] group-hover:text-emerald-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span className="text-xs font-mono text-emerald-500/60 group-hover:text-lime-400 group-hover:translate-x-1 transition-all">
              &gt;_
            </span>
          </h3>

          {/* 2-Sentence Project Description */}
          <p className="text-sm text-[#94a3b8] leading-relaxed mt-3 mb-5 font-sans">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md font-mono text-xs bg-[#0d1117] text-emerald-300 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Clickable Action Buttons: 'Live Demo' & 'GitHub Code' */}
        <div
          className="relative z-10 pt-4 border-t border-carbon-600/40 flex items-center gap-3"
          style={{ transform: 'translateZ(25px)' }}
        >
          {/* Live Demo Primary Button */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-mono text-xs font-bold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 transition-all duration-200 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* GitHub Code Outline Button */}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-mono text-xs font-semibold text-emerald-300 bg-[#0d1117]/80 hover:bg-emerald-950/40 border border-emerald-500/35 hover:border-lime-400 hover:text-lime-300 transition-all duration-200 active:scale-95"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

