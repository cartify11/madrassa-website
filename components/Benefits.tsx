import React from 'react';
import {
  FolderLock,
  Layers,
  Sparkles,
  Zap,
  TrendingUp,
  Fingerprint,
  UserCheck,
  Building2
} from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: 'Centralized Operations',
      icon: Layers,
      description: 'Consolidate admissions, exams, hostel, and fee books into one centralized cloud repository.'
    },
    {
      title: 'Less Manual Record Keeping',
      icon: Sparkles,
      description: 'Replace deteriorating paper registers with accurate, searchable digital student and staff records.'
    },
    {
      title: 'Faster Administration',
      icon: Zap,
      description: 'Generate monthly fee vouchers, class attendance sheets, and report cards in seconds.'
    },
    {
      title: 'Dedicated User Portals',
      icon: UserCheck,
      description: 'Customized interfaces for Administrators, Teachers, Accountants, Students, Parents, and Wardens.'
    },
    {
      title: 'Secure Role-Based Access',
      icon: Fingerprint,
      description: 'Granular permissions ensure users only view and execute actions permitted for their exact assignment.'
    },
    {
      title: 'Multi-Tenant Data Isolation',
      icon: FolderLock,
      description: 'Every madrasa operates in strict architectural data isolation with zero risk of cross-tenant exposure.'
    },
    {
      title: 'Better Institutional Visibility',
      icon: TrendingUp,
      description: 'Real-time oversight over fee recovery rates, daily attendance percentages, and academic benchmarks.'
    },
    {
      title: 'Scalable SaaS Architecture',
      icon: Building2,
      description: 'Effortlessly expand from a single local branch to multi-campus networks with hundreds of students.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Institutional Value</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Why Choose Madrasa SaaS
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered strictly around verified architectural principles rather than inflated claims or decorative features.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-white transition-all shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
