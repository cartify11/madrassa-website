import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { ArrowRight, Code2, Sparkles, Terminal, Layers } from 'lucide-react';

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-100/50 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Identity Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
          <Terminal className="w-3.5 h-3.5 text-emerald-700" />
          <span>Muhammad Talha • Developer & Product Builder</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
          Building Digital Products &amp; Software Systems for Real-World Operations
        </h1>

        {/* Concise Introduction of What Talha Builds */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
          I design and engineer modern websites, web applications, e-commerce platforms, business management systems, mobile applications, automation workflows, and AI-powered solutions.
        </p>

        {/* Natural Transition to Madrasa SaaS */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-10 text-left sm:text-center">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
            <span className="text-emerald-700 font-bold block sm:inline">Featured Institutional Project: </span>
            One of my major products is a complete <strong>Madrasa Management System</strong> designed to digitize academic, administrative, and financial operations from one secure platform.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#madrasa-saas"
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-md shadow-emerald-900/15 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Madrasa SaaS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={SAAS_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <span>Register Your Madrasa</span>
          </a>
        </div>
      </div>
    </section>
  );
}
