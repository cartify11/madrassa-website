import React from 'react';
import {
  GraduationCap,
  Users,
  Coins,
  HeartHandshake,
  Building,
  Sliders,
  ShieldCheck,
  Check
} from 'lucide-react';

export default function Features() {
  const featureGroups = [
    {
      title: 'A. Student & Academics',
      icon: GraduationCap,
      description: 'Full student lifecycle governance from initial admission to graduation.',
      items: [
        'Admissions & bio-data records',
        'Darja classes, sections & sessions',
        'Timetable scheduling & slot assignments',
        'Attendance & Sabaq/Sabqi progress registers',
        'Term examinations & printable marks cards'
      ]
    },
    {
      title: 'B. Teacher & Staff',
      icon: Users,
      description: 'Clear class responsibilities and timetables for all instructors.',
      items: [
        'Teacher profiles & qualifications',
        'Class and section teaching allocations',
        'Kitab & subject assignments',
        'Personal timetable visibility',
        'Daily attendance verification tools'
      ]
    },
    {
      title: 'C. Fees & Accounting',
      icon: Coins,
      description: 'Accurate billing, receipt vouchers, and revenue ledger reconciliation.',
      items: [
        'Custom fee structures by Darja',
        'Automated monthly fee invoice generation',
        'Cashier desk payment vouchers',
        'Arrears & outstanding dues tracking',
        'Income summaries & collection reports'
      ]
    },
    {
      title: 'D. Parent & Student Portal',
      icon: HeartHandshake,
      description: 'Direct academic and attendance visibility for learners and guardians.',
      items: [
        'Student Portal with schedule & grades',
        'Parent Portal with multi-child monitoring',
        'Daily attendance & absence history',
        'Quranic progress logs',
        'Fee invoice status & receipt slips'
      ]
    },
    {
      title: 'E. Hostel Management',
      icon: Building,
      description: 'Supervision for residential and boarding talaba.',
      items: [
        'Dedicated Hostel Warden Portal',
        'Building, room & bed allocations',
        'Resident student demographic rosters',
        'Curfew compliance & leave records',
        'Hostel administrative oversight'
      ]
    },
    {
      title: 'F. Madrasa Administration',
      icon: Sliders,
      description: 'Centralized control over branding, branch logistics, and affiliations.',
      items: [
        'Madrasa profile & institutional settings',
        'Multi-campus & branch management',
        '15 Pakistan Board / Wifaq affiliations',
        'Staff user access administration',
        'Comprehensive institutional reports'
      ]
    },
    {
      title: 'G. Platform Security',
      icon: ShieldCheck,
      description: 'Multi-tenant boundary defense engineered from the foundation.',
      items: [
        'Strict tenant database scope isolation',
        'Role-based authorization middleware',
        'Protected portal URL guards',
        'Secure password & session management',
        'Approval-controlled onboarding'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Feature Architecture</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Core Modules Built for Islamic Education
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every feature directly mirrors the verified workflow of a functioning madrasa, from Hifz halaqas to official board compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureGroups.map((group, idx) => {
            const Icon = group.icon;
            const isFullWidth = idx === 6;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 transition-all ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{group.title}</h3>
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">{group.description}</p>
                <ul className="space-y-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
