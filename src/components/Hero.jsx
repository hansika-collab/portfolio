import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import ActionButtons from './ActionButtons';
import MatrixGridCanvas from './MatrixGridCanvas';
import { 
  Terminal, 
  Code2, 
  Cpu, 
  Layers, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles, 
  ChevronRight,
  Database,
  Binary
} from 'lucide-react';

/**
 * Hero Intro Screen
 * Features:
 * - HTML5 Matrix-dot grid canvas in background
 * - Animated blinking radar pill
 * - High-impact Cyber-Emerald typography with lime accents
 * - KSIT Student bio with tech pills
 * - Primary & secondary glowing cyber buttons
 * - Interactive developer terminal card
 */
const Hero = () => {
  const [activeTab, setActiveTab] = useState('profile.ts');

  const techBadges = [
    { name: 'React', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'AI / Backend' },
    { name: 'Next.js', category: 'Full Stack' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'PyTorch / AI', category: 'Machine Learning' },
    { name: 'Git & Linux', category: 'DevOps' },
  ];

  const codeSnippet = `// student_developer.config.ts
export const hansikaProfile = {
  name: "A D HANSIKA",
  institution: "K S Institute of Technology",
  year: "2nd Year Engineering",
  major: "Computer Science & Engineering",
  coreSkills: ["React", "Tailwind CSS", "TypeScript", "Python", "AI/ML"],
  status: "🟢 Open for Summer & Fall Internships",
  mission: "Building scalable, beautiful, and intelligent web systems"
};`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0d1117]">
      {/* Background Interactive Matrix Dot Grid Canvas */}
      <MatrixGridCanvas />

      {/* Ambient Cyber Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Top Status Radar Pill */}
        <div className="mb-6 sm:mb-8 animate-fadeIn">
          <StatusBadge />
        </div>

        {/* Hero Central Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Terminal Command Header */}
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-[#8b949e] px-3 py-1 rounded-md bg-[#161b22]/70 border border-carbon-600/50">
            <Terminal className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-emerald-400">hansika@ksit:~$</span>
            <span className="text-[#f0f6fc]">whoami --status</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#f0f6fc] leading-[1.1] sm:leading-[1.12]">
            Hey, I am{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-400 bg-clip-text text-transparent font-black drop-shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                [A D HANSIKA]
              </span>
              {/* Subtle underline cyber bracket */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-500 rounded-full opacity-80" />
            </span>
            <br />
            <span className="text-[#e6edf3] font-bold block mt-2 text-3xl sm:text-5xl md:text-6xl">
              Building the Future of Tech.
            </span>
          </h1>

          {/* Student Bio */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#94a3b8] leading-relaxed pt-2">
            <span className="inline-block px-2.5 py-0.5 rounded font-mono text-xs sm:text-sm font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-500/30 mr-1.5 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              [K S INSTITUTE OF TECHNOLOGY, 2ND YEAR]
            </span>{' '}
            passionate about{' '}
            <strong className="text-white font-semibold underline decoration-emerald-400/50 underline-offset-4">
              web development
            </strong>
            ,{' '}
            <strong className="text-white font-semibold underline decoration-lime-400/50 underline-offset-4">
              AI
            </strong>
            , and{' '}
            <strong className="text-emerald-300 font-semibold">
              building real-world projects
            </strong>
            .
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center pt-4 sm:pt-6">
            <ActionButtons />
          </div>

          {/* Social Links & Quick Terminal Triggers */}
          <div className="flex items-center justify-center gap-4 pt-3 text-carbon-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#161b22]/70 border border-carbon-600/40 text-[#8b949e] hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#161b22]/70 border border-carbon-600/40 text-[#8b949e] hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@hansika.dev"
              className="p-2.5 rounded-xl bg-[#161b22]/70 border border-carbon-600/40 text-[#8b949e] hover:text-emerald-400 hover:border-emerald-500/40 hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            <span className="h-4 w-[1px] bg-carbon-600/60" />
            <span className="font-mono text-xs text-[#8b949e]">
              Bangalore, India // UTC+05:30
            </span>
          </div>
        </div>

        {/* Interactive Developer Code Card / Preview Window */}
        <div className="w-full max-w-3xl mt-12 sm:mt-16 rounded-2xl bg-[#161b22]/85 border border-emerald-500/25 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.1)] overflow-hidden">
          {/* Card Top Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117]/90 border-b border-carbon-600/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
              </div>
              <span className="font-mono text-xs text-[#8b949e] ml-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                portfolio-v2 // hansika.dev
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] font-mono text-lime-400 bg-lime-950/40 px-2 py-0.5 rounded border border-lime-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
                LIVE WORKSPACE
              </span>
            </div>
          </div>

          {/* Interactive Code Content */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm text-[#c9d1d9] overflow-x-auto leading-relaxed bg-[#0d1117]/60">
            <pre className="text-left font-mono">
              <code>
                <span className="text-[#8b949e]">{`// student_developer.config.ts\n`}</span>
                <span className="text-emerald-400">export const </span>
                <span className="text-lime-300">hansikaProfile </span>
                <span className="text-emerald-400">= </span>
                <span className="text-[#f0f6fc]">{`{\n`}</span>
                <span className="text-emerald-400">  name: </span>
                <span className="text-lime-300">"A D HANSIKA"</span>
                <span className="text-[#8b949e]">,</span>
                <span className="text-emerald-400">  institution: </span>
                <span className="text-emerald-200">"K S Institute of Technology"</span>
                <span className="text-[#8b949e]">,</span>
                <span className="text-emerald-400">  academicYear: </span>
                <span className="text-lime-300">"2nd Year Engineering"</span>
                <span className="text-[#8b949e]">,</span>
                <span className="text-emerald-400">  focusAreas: </span>
                <span className="text-[#c9d1d9]">{`[`}</span>
                <span className="text-emerald-300">"Full Stack Web"</span>
                <span className="text-[#8b949e]">, </span>
                <span className="text-lime-300">"AI / Machine Learning"</span>
                <span className="text-[#8b949e]">, </span>
                <span className="text-emerald-300">"Real-World Systems"</span>
                <span className="text-[#c9d1d9]">{`]`}</span>
                <span className="text-[#8b949e]">,</span>
                <span className="text-emerald-400">  internshipStatus: </span>
                <span className="text-lime-400 font-semibold">"🟢 OPEN_FOR_INTERNSHIPS"</span>
                <span className="text-[#8b949e]">,</span>
                <span className="text-emerald-400">  motto: </span>
                <span className="text-[#c9d1d9]">"Transforming complex algorithms into intuitive human experiences"</span>
                <span className="text-[#f0f6fc]">{`\n};`}</span>
              </code>
            </pre>
          </div>

          {/* Tech Stack Chips Bar */}
          <div className="px-4 py-3 bg-[#161b22]/95 border-t border-carbon-600/40 flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs text-[#8b949e] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              Core Arsenal:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((tech) => (
                <span
                  key={tech.name}
                  className="px-2.5 py-0.5 rounded font-mono text-[11px] bg-[#0d1117] text-emerald-300 border border-emerald-500/20 hover:border-lime-400/50 hover:text-lime-300 transition-colors"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

