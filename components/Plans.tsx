import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { Check, ArrowRight } from 'lucide-react';

export default function Plans() {
  const plans = [
    {
      name: 'Starter Plan',
      price: 'PKR 10,000',
      period: '/ month',
      limit: 'Up to 250 Students',
      description: 'Ideal for local neighbourhood madrasas, Hifz centers, and single-campus maktabs.',
      features: [
        'Hifz & Nazra Quran tracking',
        'Student admissions & registers',
        'Attendance & timetable schedules',
        'Fee vouchers & dues ledger',
        'Teacher & Madrasa Admin portals',
        'Pakistan Board affiliation master'
      ],
      highlighted: false
    },
    {
      name: 'Standard Plan',
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
      name: 'Premium Plan',
      price: 'PKR 25,000',
      period: '/ month',
      limit: 'Up to 5,000 Students',
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Subscription Tiers</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Transparent Institutional Plans
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose the tier matching your student enrollment. Verified capabilities, multi-tenant isolation, and board integration included in all tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all bg-white ${
                p.highlighted
                  ? 'border-2 border-emerald-600 shadow-xl shadow-emerald-950/10 relative -translate-y-1'
                  : 'border border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                  Most Popular for Jamias
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">{p.description}</p>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl font-black text-slate-950 tracking-tight">{p.price}</span>
                  <span className="text-xs text-slate-500 font-medium">{p.period}</span>
                </div>

                <div className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-6">
                  {p.limit}
                </div>

                <div className="pt-5 border-t border-slate-100 mb-8">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-900 mb-3">Included Capabilities:</div>
                  <ul className="space-y-2.5">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                  className={`w-full py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    p.highlighted
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-md shadow-emerald-900/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>Register Your Madrasa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
