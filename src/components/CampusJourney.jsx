import React, { useState } from 'react';
import { 
  GraduationCap, 
  Trophy, 
  Zap, 
  Users, 
  Award, 
  Calendar, 
  Sparkles, 
  ChevronRight, 
  BookOpen, 
  CheckCircle2, 
  Compass
} from 'lucide-react';

/**
 * CampusJourney Component
 * - Interactive vertical milestone timeline connected by an illuminated emerald line with glowing nodal dots
 * - 3 Milestones: 2026 [2ND YEAR, B.E, AIML], 2025 [WON HACKATHON], 2024 [STARTED B.E IN AIML]
 * - Compact 2x2 achievement callouts grid with subtle hover highlights
 */
const CampusJourney = () => {
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      year: '2026',
      badge: 'CURRENT FOCUS',
      title: '2ND YEAR, B.E, AIML',
      institution: 'K S Institute of Technology, Bangalore',
      note: 'Deepening expertise in Deep Learning, Computer Vision, and full-stack cloud systems while building production-ready student applications.',
      tags: ['Neural Networks', 'Full-Stack Web', 'DBMS & OS'],
      statusColor: 'emerald',
    },
    {
      year: '2025',
      badge: '1ST PLACE VICTORY',
      title: 'WON HACKATHON',
      institution: 'Annual University TechFest',
      note: 'Led a 4-member developer team to build an edge computer-vision student safety and utility platform in a high-intensity 24-hour sprint.',
      tags: ['Team Lead', 'Edge AI', 'Rapid Prototyping'],
      statusColor: 'lime',
    },
    {
      year: '2024',
      badge: 'JOURNEY INITIATED',
      title: 'STARTED B.E IN AIML',
      institution: 'K S Institute of Technology',
      note: 'Commenced Bachelor of Engineering in Artificial Intelligence & Machine Learning, establishing solid foundations in C++, algorithms, and Linux.',
      tags: ['C++ & OOP', 'Discrete Math', 'Algorithms'],
      statusColor: 'emerald',
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '1st Place - University Hackathon',
      subtitle: 'Built winning AI platform in 24-hr team sprint',
      tag: 'CHAMPION',
      accent: 'border-emerald-500/30 group-hover:border-emerald-400',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      subtitle: 'Consistent DSA problem solving in C++ & Python',
      tag: 'DSA PROFICIENT',
      accent: 'border-lime-500/30 group-hover:border-lime-400',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'Coordinating student coding bootcamps & workshops',
      tag: 'CAMPUS LEAD',
      accent: 'border-emerald-500/30 group-hover:border-emerald-400',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Production web architectures & RESTful APIs',
      tag: 'CERTIFIED DEV',
      accent: 'border-teal-500/30 group-hover:border-teal-400',
    },
  ];

  return (
    <section id="campus-life" className="relative z-10 w-full pt-6 pb-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-lime-400 font-semibold tracking-wider">
              // 04. ACADEMIC & CAMPUS JOURNEY
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f0f6fc] font-mono tracking-tight flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-emerald-400" />
            <span>Education & Campus Journey</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2 max-w-xl font-sans">
            Tracking my academic timeline at KSIT Bangalore, competitive hackathon milestones, and student leadership accomplishments.
          </p>
        </div>

        {/* KSIT Student Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22]/90 border border-emerald-500/30 backdrop-blur-md text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>K S INSTITUTE OF TECHNOLOGY // DEPT OF AIML</span>
        </div>
      </div>

      {/* Main Grid: Vertical Timeline (Left) + 2x2 Achievement Badges (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        {/* LEFT COLUMN: Vertical Illuminated Timeline (7 cols) */}
        <div className="lg:col-span-7 relative">
          {/* Illuminated Emerald Vertical Line */}
          <div className="absolute left-[21px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-emerald-400 via-lime-400 to-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.6)]" />

          <div className="space-y-6">
            {milestones.map((milestone, idx) => {
              const isActive = activeMilestone === idx;
              return (
                <div
                  key={milestone.year}
                  onMouseEnter={() => setActiveMilestone(idx)}
                  className="relative flex items-start gap-4 sm:gap-6 group cursor-default"
                >
                  {/* Glowing Nodal Dot on the Line */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#0d1117] border border-emerald-500/40 group-hover:border-emerald-300 shadow-[0_0_18px_rgba(16,185,129,0.3)] transition-all duration-300 group-hover:scale-110">
                    {/* Pulsing ring */}
                    <span className="absolute inset-0 rounded-2xl bg-emerald-400/20 group-hover:animate-ping opacity-60" />
                    
                    {/* Inner nodal center */}
                    <span className="font-mono text-xs sm:text-sm font-bold text-emerald-300 group-hover:text-lime-300 transition-colors">
                      '{milestone.year.slice(2)}
                    </span>
                  </div>

                  {/* Milestone Card */}
                  <div className="flex-1 rounded-2xl bg-[#161b22]/85 backdrop-blur-xl border border-emerald-500/20 p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:border-emerald-400/60 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-white px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30">
                          {milestone.year}
                        </span>
                        <span className="font-mono text-[11px] text-lime-400 font-semibold">
                          // {milestone.badge}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#8b949e]">
                        {milestone.institution}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold font-mono text-[#f0f6fc] group-hover:text-emerald-300 transition-colors mb-2">
                      {milestone.title}
                    </h3>

                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 font-sans">
                      {milestone.note}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-carbon-600/30">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0d1117] text-emerald-400/90 border border-carbon-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: 2x2 Achievement Badges Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
          <div className="p-6 rounded-2xl bg-[#161b22]/85 backdrop-blur-xl border border-emerald-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold font-mono text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-lime-400" />
                <span>Achievement Accolades</span>
              </h3>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/30">
                PROVEN IMPACT
              </span>
            </div>
            <p className="text-xs text-[#8b949e] font-sans mb-5">
              Key competitive highlights, technical problem-solving metrics, and leadership contributions on campus.
            </p>

            {/* Compact 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className={`group relative p-4 rounded-xl bg-[#0d1117]/90 border ${item.accent} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950/80 text-lime-300 border border-emerald-500/20">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-[#f0f6fc] group-hover:text-emerald-300 transition-colors leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-[#8b949e] font-sans mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Academic Snapshot Box */}
          <div className="p-5 rounded-2xl bg-[#0d1117]/80 border border-carbon-600/50 flex items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <div className="text-[#8b949e] text-[11px]">DEGREE PROGRAM</div>
                <div className="text-white font-bold">B.E in AI & Machine Learning</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[#8b949e] text-[11px]">GRADUATION</div>
              <div className="text-emerald-400 font-bold">Class of 2028</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampusJourney;

