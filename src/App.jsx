import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import CampusJourney from './components/CampusJourney';
import { 
  GraduationCap, 
  ExternalLink, 
  Github, 
  Mail, 
  Cpu, 
  Zap,
  BookOpen
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#f0f6fc] font-sans selection:bg-emerald-500/30 selection:text-emerald-300 relative">
      {/* Floating Frosted-Glass Top Navigation Bar */}
      <Navbar />

      {/* Opening Hero Intro Screen */}
      <Hero />

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
        
        {/* DIRECTLY BELOW INTRO: Featured Projects Showcase with 3D Physics */}
        <FeaturedProjects />

        {/* DIRECTLY BELOW PROJECTS: Interactive Tech Stack & Skills */}
        <TechStackSkills />

        {/* DIRECTLY BELOW SKILLS: Education & Campus Journey (Interactive Timeline & Badges) */}
        <CampusJourney />

        {/* Section: About */}
        <section id="about" className="pt-16 border-t border-emerald-500/15 scroll-mt-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-lime-400 font-semibold">// 05. PHILOSOPHY</span>
            <span className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-mono flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            Engineering Philosophy & Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                Currently pursuing my <strong className="text-emerald-300">B.E in Artificial Intelligence & Machine Learning at K S Institute of Technology</strong>, I believe in writing code that solves tangible student and community problems.
              </p>
              <p>
                Whether designing high-throughput API microservices, optimizing client-side React rendering performance, or fine-tuning neural network vision pipelines, I prioritize clean architecture, strict typing, and accessible user experiences.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#161b22] border border-emerald-500/20 flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-lime-400" />
                  <div>
                    <div className="text-xs font-mono text-[#8b949e]">ACADEMIC TRACK</div>
                    <div className="text-sm font-semibold text-white">B.E - AIML (2nd Year)</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-[#161b22] border border-emerald-500/20 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs font-mono text-[#8b949e]">AVAILABILITY</div>
                    <div className="text-sm font-semibold text-white">Summer & Fall 2025 Internships</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stat Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#161b22]/70 border border-carbon-600/50 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <span className="text-3xl font-black font-mono text-emerald-400">2nd</span>
                <p className="text-xs font-mono text-[#8b949e] mt-1">Year at KSIT</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#161b22]/70 border border-carbon-600/50 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <span className="text-3xl font-black font-mono text-lime-400">10+</span>
                <p className="text-xs font-mono text-[#8b949e] mt-1">Projects Built</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#161b22]/70 border border-carbon-600/50 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <span className="text-3xl font-black font-mono text-emerald-400">100%</span>
                <p className="text-xs font-mono text-[#8b949e] mt-1">Clean Git Commits</p>
              </div>
              <div className="p-5 rounded-2xl bg-[#161b22]/70 border border-carbon-600/50 backdrop-blur-sm hover:border-emerald-500/40 transition-colors">
                <span className="text-3xl font-black font-mono text-lime-400">&lt;10ms</span>
                <p className="text-xs font-mono text-[#8b949e] mt-1">Frontend Latency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="pt-16 border-t border-emerald-500/15 scroll-mt-24">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-lime-400 font-semibold">// 06. CONTACT</span>
            <span className="h-[1px] w-12 bg-emerald-500/30" />
          </div>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-emerald-500/30 text-center max-w-3xl mx-auto shadow-[0_0_35px_rgba(16,185,129,0.1)]">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-4">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-[#94a3b8] text-base sm:text-lg mb-8 max-w-xl mx-auto">
              I am actively seeking student internships and collaborative engineering opportunities for 2025. Whether you have an open role or just want to discuss tech, my inbox is open!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contact@hansika.dev"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-mono text-sm font-bold text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-[#0d1117]" />
                <span>Send Email // contact@hansika.dev</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-emerald-300 bg-[#0d1117] border border-emerald-500/40 hover:border-lime-400 hover:text-lime-300 transition-all hover:-translate-y-0.5"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-emerald-500/15 py-8 text-center font-mono text-xs text-[#8b949e] bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>A D HANSIKA © {new Date().getFullYear()} // KSIT Bangalore (AIML)</span>
          </div>
          <div className="text-emerald-500/70">
            Cyber-Emerald Dark Mode • Built with React & Tailwind CSS
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
