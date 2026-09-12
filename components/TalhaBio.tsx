import React from 'react';
import { DEVELOPER_INFO } from '@/lib/constants';
import { Code2, Sparkles, CheckCircle, Terminal, Laptop } from 'lucide-react';

export default function TalhaBio() {
  return (
    <section id="about-builder" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Profile Avatar / Emblem */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 flex items-center justify-center text-white shadow-xl shadow-emerald-950/10 mb-4 ring-4 ring-emerald-100">
                <Terminal className="w-12 h-12 text-emerald-200" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{DEVELOPER_INFO.name}</h3>
              <p className="text-sm font-semibold text-emerald-700">{DEVELOPER_INFO.title}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                <Laptop className="w-3.5 h-3.5 text-slate-500" />
                <span>Full-Stack Architecture & AI</span>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-8">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">The Product Builder</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-4">
                Engineering Digital Infrastructure for Real-World Operations
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                {DEVELOPER_INFO.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Dedicated institutional domain architecture</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Multi-role governance with complete tenant isolation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Zero tolerance for fake stats, metrics or bloat</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Continuous enterprise reliability and optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
