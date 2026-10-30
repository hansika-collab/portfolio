import React, { useState } from 'react';
import { 
  Code2, 
  Wrench, 
  BrainCircuit, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Database, 
  Layers, 
  GitBranch, 
  Network, 
  Box,
  Binary
} from 'lucide-react';

/**
 * TechStackSkills Component
 * Displays categorized student skills with:
 * - 3 clean categories: 'Languages', 'Frameworks & Tools', 'Core CS Concepts'
 * - Official/semi-official tech icons & SVG glyphs
 * - Interactive hover physics: scale-105, emerald border glow, and floating comfort level tooltip
 */
const TechStackSkills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill data organized into 3 distinct categories
  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: Code2,
      subtitle: 'Core programming syntax & paradigms',
      skills: [
        { name: 'C++', level: 'Proficient', type: 'proficient', iconType: 'cpp' },
        { name: 'Python', level: 'Proficient', type: 'proficient', iconType: 'python' },
        { name: 'JavaScript (ES6+)', level: 'Proficient', type: 'proficient', iconType: 'js' },
        { name: 'Java', level: 'Familiar', type: 'familiar', iconType: 'java' },
        { name: 'TypeScript', level: 'Familiar', type: 'familiar', iconType: 'ts' },
        { name: 'C Programming', level: 'Proficient', type: 'proficient', iconType: 'c' },
        { name: 'SQL', level: 'Proficient', type: 'proficient', iconType: 'sql' },
      ],
    },
    {
      id: 'frameworks-tools',
      title: 'Frameworks & Tools',
      icon: Wrench,
      subtitle: 'Modern web engines & developer tooling',
      skills: [
        { name: 'React', level: 'Proficient', type: 'proficient', iconType: 'react' },
        { name: 'Tailwind CSS', level: 'Proficient', type: 'proficient', iconType: 'tailwind' },
        { name: 'Node.js', level: 'Familiar', type: 'familiar', iconType: 'node' },
        { name: 'Git & GitHub', level: 'Proficient', type: 'proficient', iconType: 'git' },
        { name: 'Next.js', level: 'Currently Learning', type: 'learning', iconType: 'next' },
        { name: 'FastAPI', level: 'Familiar', type: 'familiar', iconType: 'fastapi' },
        { name: 'Vite', level: 'Proficient', type: 'proficient', iconType: 'vite' },
        { name: 'Docker', level: 'Currently Learning', type: 'learning', iconType: 'docker' },
      ],
    },
    {
      id: 'core-cs',
      title: 'Core CS Concepts',
      icon: BrainCircuit,
      subtitle: 'Engineering foundations @ KSIT Bangalore',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Proficient', type: 'proficient', iconType: 'dsa' },
        { name: 'OOP (Object Oriented)', level: 'Proficient', type: 'proficient', iconType: 'oop' },
        { name: 'DBMS & Relational Data', level: 'Familiar', type: 'familiar', iconType: 'dbms' },
        { name: 'Operating Systems', level: 'Familiar', type: 'familiar', iconType: 'os' },
        { name: 'Computer Networks', level: 'Currently Learning', type: 'learning', iconType: 'cn' },
        { name: 'System Design Basics', level: 'Currently Learning', type: 'learning', iconType: 'sd' },
      ],
    },
  ];

  // Helper for comfort level tag colors and indicators
  const getBadgeMeta = (type) => {
    switch (type) {
      case 'proficient':
        return {
          indicator: '🟢',
          label: 'Proficient',
          badgeClass: 'text-emerald-300 bg-emerald-950/90 border-emerald-500/50',
          dotColor: 'bg-emerald-400',
        };
      case 'familiar':
        return {
          indicator: '⚡',
          label: 'Familiar',
          badgeClass: 'text-lime-300 bg-lime-950/90 border-lime-500/50',
          dotColor: 'bg-lime-400',
        };
      case 'learning':
      default:
        return {
          indicator: '🚀',
          label: 'Currently Learning',
          badgeClass: 'text-teal-300 bg-teal-950/90 border-teal-500/50',
          dotColor: 'bg-teal-400',
        };
    }
  };

  // Helper to render authentic tech icons or glyphs
  const renderTechIcon = (iconType) => {
    switch (iconType) {
      case 'cpp':
        return (
          <span className="font-mono font-bold text-[11px] text-blue-400 px-1 rounded bg-[#0d1117] border border-blue-500/30">
            C++
          </span>
        );
      case 'python':
        return (
          <svg className="w-4 h-4 text-[#3776ab]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.803v.826H3.9S0 5.79 0 11.902c0 6.113 3.4 5.922 3.4 5.922h2.029v-2.85c0-3.268 2.8-3.076 2.8-3.076h5.787c2.68 0 2.6-2.583 2.6-2.583V3.414S17.065 0 11.914 0zm-1.68 1.83a1.01 1.01 0 11.002 2.02 1.01 1.01 0 01-.002-2.02zm1.852 22.17c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.803v-.826h8.109s3.9.444 3.9-5.668c0-6.113-3.4-5.922-3.4-5.922h-2.029v2.85c0 3.268-2.8 3.076-2.8 3.076H9.982c-2.68 0-2.6 2.583-2.6 2.583v5.908s-.472 3.414 4.679 3.414zm1.68-1.83a1.01 1.01 0 11-.002-2.02 1.01 1.01 0 01.002 2.02z" />
          </svg>
        );
      case 'js':
        return (
          <span className="font-mono font-bold text-[11px] text-yellow-400 px-1 rounded bg-[#0d1117] border border-yellow-500/30">
            JS
          </span>
        );
      case 'java':
        return (
          <span className="font-mono font-bold text-[11px] text-orange-400 px-1 rounded bg-[#0d1117] border border-orange-500/30">
            JAVA
          </span>
        );
      case 'ts':
        return (
          <span className="font-mono font-bold text-[11px] text-blue-400 px-1 rounded bg-[#0d1117] border border-blue-500/30">
            TS
          </span>
        );
      case 'c':
        return (
          <span className="font-mono font-bold text-[11px] text-emerald-400 px-1 rounded bg-[#0d1117] border border-emerald-500/30">
            C
          </span>
        );
      case 'sql':
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 'react':
        return (
          <svg className="w-4 h-4 text-[#61dafb] animate-spin" style={{ animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-4 h-4 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
          </svg>
        );
      case 'node':
        return (
          <span className="font-mono font-bold text-[11px] text-green-400 px-1 rounded bg-[#0d1117] border border-green-500/30">
            Node
          </span>
        );
      case 'git':
        return <GitBranch className="w-4 h-4 text-[#f05032]" />;
      case 'next':
        return (
          <span className="font-mono font-bold text-[11px] text-white px-1 rounded bg-[#0d1117] border border-white/30">
            N
          </span>
        );
      case 'fastapi':
        return (
          <span className="font-mono font-bold text-[11px] text-teal-400 px-1 rounded bg-[#0d1117] border border-teal-500/30">
            API
          </span>
        );
      case 'vite':
        return (
          <span className="font-mono font-bold text-[11px] text-purple-400 px-1 rounded bg-[#0d1117] border border-purple-500/30">
            ⚡
          </span>
        );
      case 'docker':
        return <Box className="w-4 h-4 text-blue-400" />;
      case 'dsa':
        return <Binary className="w-4 h-4 text-emerald-400" />;
      case 'oop':
        return <Layers className="w-4 h-4 text-lime-400" />;
      case 'dbms':
        return <Database className="w-4 h-4 text-teal-400" />;
      case 'os':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'cn':
        return <Network className="w-4 h-4 text-lime-400" />;
      case 'sd':
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="relative z-10 w-full pt-6 pb-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-lime-400 font-semibold tracking-wider">
              // 03. ARSENAL & PROFICIENCIES
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f0f6fc] font-mono tracking-tight flex items-center gap-3">
            <Cpu className="w-8 h-8 text-emerald-400" />
            <span>Tech Stack & Skills</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2 max-w-xl font-sans">
            Curated toolkit and technical competencies acquired through hands-on full-stack development and computer science coursework.
          </p>
        </div>

        {/* Legend / Comfort Level Indicators */}
        <div className="flex items-center flex-wrap gap-2.5 p-2 rounded-2xl bg-[#161b22]/90 border border-emerald-500/25 backdrop-blur-md text-xs font-mono">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-lime-950/60 text-lime-300 border border-lime-500/30">
            <span className="w-2 h-2 rounded-full bg-lime-400" />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-950/60 text-teal-300 border border-teal-500/30">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Categorized Glass Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {skillCategories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.id}
              className="relative rounded-2xl bg-[#161b22]/80 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-emerald-500/40 transition-all duration-300 group"
            >
              {/* Subtle top edge accent */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent group-hover:via-emerald-400 transition-colors" />

              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-[#0d1117] border border-emerald-500/30 text-emerald-400 group-hover:text-lime-300 transition-colors">
                    <CategoryIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-mono text-[#f0f6fc] group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#8b949e] font-mono mb-6">
                  {category.subtitle}
                </p>

                {/* Skill Badges Flow */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const badgeMeta = getBadgeMeta(skill.type);
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative group/pill"
                      >
                        {/* Interactive Pill Badge */}
                        <div
                          className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0d1117]/90 border font-mono text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none ${
                            isHovered
                              ? 'scale-105 -translate-y-0.5 border-emerald-400 text-white shadow-[0_0_18px_rgba(16,185,129,0.35)]'
                              : 'border-carbon-600/60 text-[#c9d1d9] hover:border-emerald-500/40 hover:text-emerald-300'
                          }`}
                        >
                          {/* Tech Logo / Glyph */}
                          <div className="flex items-center justify-center">
                            {renderTechIcon(skill.iconType)}
                          </div>

                          {/* Skill Name */}
                          <span>{skill.name}</span>

                          {/* Subtle Status Pip */}
                          <span className={`w-1.5 h-1.5 rounded-full ${badgeMeta.dotColor}`} />
                        </div>

                        {/* Interactive Floating Tooltip */}
                        {isHovered && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 pointer-events-none animate-fadeIn">
                            <div className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold whitespace-nowrap shadow-[0_4px_15px_rgba(0,0,0,0.6)] border backdrop-blur-md flex items-center gap-1.5 ${badgeMeta.badgeClass}`}>
                              <span>{badgeMeta.indicator}</span>
                              <span>{badgeMeta.label}</span>
                            </div>
                            {/* Downward Caret Arrow */}
                            <div className="w-2 h-2 bg-[#0d1117] border-r border-b border-emerald-500/40 transform rotate-45 mx-auto -mt-1" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-4 border-t border-carbon-600/30 flex items-center justify-between text-[11px] font-mono text-[#8b949e]">
                <span>{category.skills.length} Tech Items</span>
                <span className="text-emerald-400/80 group-hover:text-lime-300 transition-colors">
                  VERIFIED // 2ND YEAR
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStackSkills;

