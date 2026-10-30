import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

/**
 * StatusBadge
 * Animated blinking radar pill: '🟢 Student Developer // Open for Internships'
 * Features:
 * - Ping radar animation with dual concentric pulsating waves
 * - Monospace cyber styling with neon emerald and lime accents
 * - Soft backdrop blur and subtle border glow
 */
const StatusBadge = () => {
  return (
    <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161b22]/90 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:border-emerald-400/60 transition-all duration-300 group cursor-default">
      {/* Radar Indicator with Dual Pulses */}
      <div className="relative flex items-center justify-center w-3 h-3">
        {/* Outer Pulsing Wave */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        {/* Secondary Lime Resonance Wave */}
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-lime-400/30 scale-125 animate-pulse" />
        {/* Core Solid Radar Beacon */}
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#10b981]" />
      </div>

      {/* Pill Text Content */}
      <span className="font-mono text-xs sm:text-sm font-medium tracking-wide text-emerald-300/90 group-hover:text-emerald-200 transition-colors">
        Student Developer <span className="text-lime-400 font-semibold">//</span> Open for Internships
      </span>

      {/* Subtle Terminal Accent */}
      <span className="hidden sm:inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/70 text-lime-300 border border-emerald-500/20 group-hover:border-lime-400/40 transition-colors">
        SYS.READY
      </span>
    </div>
  );
};

export default StatusBadge;

