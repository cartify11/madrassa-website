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
      title: 'A. Student & Academic Management',
      icon: GraduationCap,
      description: 'End-to-end lifecycle governance from admission to graduation across all educational departments.',
      items: [
        'Student admissions & bio-data management',
        'Darja / class structures and sections',
        'Academic sessions & enrollment records',
        'Timetable scheduling & slot assignments',
        'Daily student attendance tracking',
        'Examinations, grading & printable marks cards'
      ]
    },
    {
      title: 'B. Teacher & Staff Management',
      icon: Users,
      description: 'Equip ustaadhs and institutional staff with clear schedules and streamlined class responsibilities.',
      items: [
        'Detailed teacher profiles & qualifications',
        'Class and section teaching assignments',
        'Kitab & subject allocation matrix',
        'Personal timetable visibility',
        'Dedicated Teacher Portal login',
        'Daily attendance verification duties'
      ]
    },
    {
      title: 'C. Fees & Accounts Management',
      icon: Coins,
      description: 'Eliminate manual ledger errors with automated invoicing, receipts, and revenue summaries.',
      items: [
        'Custom fee structures by Darja or category',
        'Automated monthly fee invoice generation',
        'Direct payment recording & receipt vouchers',
        'Real-time outstanding dues & arrears ledger',
        'Accountant portal & cashier dashboard',
        'Financial summaries & collection reports'
      ]
    },
    {
      title: 'D. Parent & Student Experience',
      icon: HeartHandshake,
      description: 'Transparent academic visibility that builds lasting trust with guardians and empowers learners.',
      items: [
        'Student Portal with timetable & results',
        'Parent Portal with multi-child overview',
        'Daily attendance history & late records',
        'Quranic Sabaq, Sabqi & Manzil tracking',
        'Exam schedules & term evaluation cards',
        'Fee invoice statuses & payment receipts'
      ]
    },
    {
      title: 'E. Hostel Management',
      icon: Building,
      description: 'Structured residential supervision for boarding madrasas and non-local talaba.',
      items: [
        'Dedicated Hostel Warden Portal',
        'Hostel buildings, rooms & bed allocations',
        'Resident student demographic registers',
        'Curfew compliance & leave records',
        'Hostel administrative oversight',
        'Emergency guardian contact integration'
      ]
    },
    {
      title: 'F. Madrasa Administration',
      icon: Sliders,
      description: 'Centralized institutional control over branding, branch logistics, and regulatory compliance.',
      items: [
        'Institutional profile & contact settings',
        'Multi-campus / branch management',
        'Pakistan Board / Wifaq canonical master',
        'Staff user account administration',
        'Comprehensive institutional reports',
        'Subscription tier & plan overview'
      ]
    },
    {
      title: 'G. Platform Security & Isolation',
      icon: ShieldCheck,
      description: 'Engineered from the ground up for strict multi-tenant boundary defense and privacy.',
      items: [
        'Strict tenant database scope isolation',
        'Role-based authorization middleware',
        'Central Admin platform owner controls',
        'Secure password & session management',
        'Protected portal URL guards',
        'Controlled approval-based onboarding'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Feature Architecture</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Purpose-Built for Islamic Educational Institutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every feature in the system is designed to mirror the authentic day-to-day workflow of a Pakistani madrasa, from Hifz halaqas to official Wifaq board affiliation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureGroups.map((group, idx) => {
            const Icon = group.icon;
            const isFullWidthOnLarge = idx === 6;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-shadow ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">{group.description}</p>
                <ul className="space-y-2.5">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
