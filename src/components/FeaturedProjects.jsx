import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles, Filter, Code2, ArrowUpRight } from 'lucide-react';

/**
 * FeaturedProjects
 * - Clean, responsive 3-column grid featuring 3 student project cards
 * - Filter pill row above grid ('All', 'Web Apps', 'AI / ML', 'Mini-Projects')
 * - Cyber-Emerald styling with interactive physics cards
 */
const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterCategories = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 'todo-list',
      title: 'TaskFlow // TO DO LIST',
      categoryTag: 'PRODUCTIVITY',
      statusBadge: 'v2.1 LIVE',
      description:
        'An intuitive task management application engineered to solve student deadline chaos with real-time priority tagging, Pomodoro focus cycles, and offline-first persistence. The platform enables seamless task categorization and instant cloud state sync so students never miss critical assignment deadlines.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      categories: ['Web Apps', 'Mini-Projects'],
      demoUrl: 'https://example.com/demo/todolist',
      codeUrl: 'https://github.com/hansika/student-todo-list',
    },
    {
      id: 'mental-health',
      title: 'MindPulse // MENTAL HEALTH',
      categoryTag: 'AI & VISION',
      statusBadge: 'RESEARCH / AI',
      description:
        'An AI-powered emotional wellness companion designed to detect academic burnout and cognitive fatigue in college students using computer vision sentiment classification. The platform generates confidential wellness scorecards and suggests automated mindfulness intervals to foster balanced student mental health.',
      tags: ['Python', 'OpenCV', 'PyTorch', 'FastAPI'],
      categories: ['AI / ML', 'Web Apps'],
      demoUrl: 'https://example.com/demo/mental-health',
      codeUrl: 'https://github.com/hansika/mental-health-ai',
    },
    {
      id: 'student-portal',
      title: 'EduTrack // STUDENT PORTAL',
      categoryTag: 'CAMPUS UTILITY',
      statusBadge: 'KSIT PRODUCTION',
      description:
        'A full-stack campus management hub built specifically for students to monitor real-time class attendance percentages, internal assessment grades, and lab schedules. It eliminates manual attendance math by automatically calculating safe bunk counts and broadcasting alerts before hitting the 75% threshold.',
      tags: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
      categories: ['Web Apps', 'Mini-Projects'],
      demoUrl: 'https://example.com/demo/student-portal',
      codeUrl: 'https://github.com/hansika/student-portal-system',
    },
  ];

  // Filter project cards according to active category
  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((item) => item.categories.includes(activeFilter));

  return (
    <section id="projects" className="relative z-10 w-full pt-12 pb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-lime-400 font-semibold tracking-wider">
              // 02. PORTFOLIO SHOWCASE
            </span>
            <span className="h-[1px] w-12 bg-emerald-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#f0f6fc] font-mono tracking-tight flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-emerald-400" />
            <span>Featured Projects</span>
          </h2>
          <p className="text-[#94a3b8] text-sm sm:text-base mt-2 max-w-xl font-sans">
            Engineered with modern frontend physics, production architectures, and real-world student utility.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-[#161b22]/90 border border-emerald-500/25 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-mono text-[#8b949e]">
            <Filter className="w-3.5 h-3.5 text-lime-400" />
            <span>Filter:</span>
          </div>
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#0d1117] bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.5)] scale-105'
                    : 'text-[#c9d1d9] hover:text-emerald-300 hover:bg-emerald-500/10'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Grid Footer Telemetry Bar */}
      <div className="mt-10 p-4 rounded-xl bg-[#161b22]/50 border border-carbon-600/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#8b949e]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>DISPLAYING {filteredProjects.length} OF {projectsData.length} CORE REPOSITORIES</span>
        </div>
        <div className="text-emerald-400 hover:text-lime-300 transition-colors">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:underline"
          >
            <span>Explore all personal repositories on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

