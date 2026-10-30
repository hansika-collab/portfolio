import React, { useState } from 'react';
import { ArrowUpRight, Download, CheckCircle2, Sparkles, Terminal } from 'lucide-react';

/**
 * ActionButtons
 * - Glowing emerald primary button 'View My Projects' that lifts slightly on hover
 * - Outline secondary button 'Download Resume / CV' with cyber emerald/lime styling
 */
const ActionButtons = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e) => {
    // Simulated resume download feedback
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
      {/* Primary Glowing Emerald Action Button */}
      <a
        href="#projects"
        className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.7),0_0_15px_rgba(163,230,53,0.4)] active:translate-y-0 active:scale-[0.98] overflow-hidden"
      >
        {/* Subtle internal cyber sheen */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />

        <span className="relative z-10 flex items-center gap-2">
          <span>View My Projects</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>

      {/* Secondary Outline Cyber Button */}
      <a
        href="#resume"
        onClick={handleDownload}
        className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-emerald-300 bg-[#161b22]/70 hover:bg-emerald-950/40 border border-emerald-500/35 hover:border-lime-400 hover:text-lime-300 transition-all duration-300 transform hover:-translate-y-0.5 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] active:translate-y-0"
      >
        <span className="relative z-10 flex items-center gap-2">
          {downloaded ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-lime-400 animate-bounce" />
              <span className="text-lime-300">Resume Retrieved!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4 text-emerald-400 group-hover:text-lime-400 transition-colors" />
              <span>Download Resume / CV</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-900/50 text-emerald-300/80 border border-emerald-500/20 group-hover:border-lime-400/30">
                PDF
              </span>
            </>
          )}
        </span>
      </a>
    </div>
  );
};

export default ActionButtons;

