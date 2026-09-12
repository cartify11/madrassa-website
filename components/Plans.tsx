import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { Check, ArrowRight } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Starter Plan',
      code: 'starter',
      price: 'PKR 10,000',
      period: '/ month',
      limit: 'Up to 200 Students',
      description: 'Ideal for local neighbourhood madrasas, Hifz centers, and single-campus maktabs.',
      features: [
        'Hifz & Nazra Quran tracking',
        'Academic admissions & registers',
        'Attendance & timetable schedules',
        'Fee vouchers & dues tracking',
        'Teacher & Madrasa Admin portals',
        'Standard Pakistan Board affiliation'
      ],
      highlighted: false
    },
    {
      name: 'Standard Plan',
      code: 'standard',
      price: 'PKR 15,000',
      period: '/ month',
      limit: 'Up to 500 Students',
      description: 'Tailored for established madrasas offering primary through Dars-e-Nizami secondary classes.',
      features: [
        'All Starter features included',
        'Student & Parent portal access',
        'Accountant & finance cashier desk',
        'Examination & marks card generator',
        'Multi-section class allocations',
        'Advanced monthly fee reconciliation'
      ],
      highlighted: true
    },
    {
      name: 'Premium Complete Plan',
      code: 'premium',
      price: 'PKR 25,000',
      period: '/ month',
      limit: 'Up to 1,000 Students',
      description: 'Comprehensive institutional suite for large multi-department and residential Jamias.',
      features: [
        'All Standard features included',
        'Complete Hostel Management & Warden Portal',
        'Multi-campus / branch support',
        'Custom institutional report exports',
        'Priority technical support & onboarding',
        'Highest priority tenant performance'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Subscription Tiers</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Transparent, Predictable Institutional Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the tier tailored to your student population. Every plan guarantees dedicated multi-tenant isolation, automated backups, and Pakistan Board master integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all ${
                p.highlighted
                  ? 'bg-white border-2 border-emerald-600 shadow-xl shadow-emerald-950/10 relative -translate-y-1'
                  : 'bg-white border border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                  Most Popular for Jamias
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">{p.description}</p>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">{p.price}</span>
                  <span className="text-xs sm:text-sm text-slate-500 font-medium">{p.period}</span>
                </div>

                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-8">
                  {p.limit}
                </div>

                <div className="pt-6 border-t border-slate-100 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Included Capabilities:</div>
                  <ul className="space-y-3">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={SAAS_URLS.REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    p.highlighted
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>Register Your Madrasa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
