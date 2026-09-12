import React from 'react';
import {
  Layers,
  Sparkles,
  Zap,
  UserCheck,
  Fingerprint,
  FolderLock,
  TrendingUp,
  Building2
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    { title: 'Centralized Operations', icon: Layers, desc: 'Consolidate admissions, exams, hostel, and fee registers in one cloud hub.' },
    { title: 'Less Manual Paperwork', icon: Sparkles, desc: 'Replace deteriorating physical ledgers with searchable digital records.' },
    { title: 'Faster Administration', icon: Zap, desc: 'Generate monthly fee vouchers and class attendance sheets in seconds.' },
    { title: 'Dedicated User Portals', icon: UserCheck, desc: 'Customized interfaces for Administrators, Teachers, Bursars, and Parents.' },
    { title: 'Secure Role Access', icon: Fingerprint, desc: 'Granular permissions restrict visibility to authorized responsibilities only.' },
    { title: 'Multi-Tenant Isolation', icon: FolderLock, desc: 'Every madrasa operates in strict data isolation with zero leakage risk.' },
    { title: 'Institutional Visibility', icon: TrendingUp, desc: 'Instant insights into fee recovery rates, student counts, and attendance.' },
    { title: 'Scalable Architecture', icon: Building2, desc: 'Effortlessly expand from a single local branch to multi-campus networks.' }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Institutional Advantages</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Why Choose This Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered around genuine operational reliability, data safety, and institutional compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-white transition-all shadow-xs"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{b.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
