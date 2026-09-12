import React from 'react';
import { Shield, GraduationCap, BookOpen, Calculator, UserCheck, Home, KeyRound } from 'lucide-react';

export default function Portals() {
  const portals = [
    {
      title: 'Madrasa Admin',
      role: 'Principal & Head Office',
      icon: Shield,
      description: 'Total administrative oversight of students, teachers, branches, fee structures, reports, and madrasa profile.'
    },
    {
      title: 'Teacher Portal',
      role: 'Asaatidha & Instructors',
      icon: BookOpen,
      description: 'Class registers, daily attendance entry, Sabaq/Sabqi marks, exam result submission, and class timetables.'
    },
    {
      title: 'Accountant Portal',
      role: 'Bursar & Finance Office',
      icon: Calculator,
      description: 'Fee collection desk, automated voucher creation, fee concessions, discount ledgers, and revenue balances.'
    },
    {
      title: 'Student Portal',
      role: 'Talaba (Students)',
      icon: GraduationCap,
      description: 'Class schedule review, exam date sheets, term report cards, attendance status, and fee clearance.'
    },
    {
      title: 'Parent Portal',
      role: 'Walideen (Guardians)',
      icon: UserCheck,
      description: 'Multi-child monitoring, attendance alerts, quarterly grades, fee vouchers, and direct madrasa notices.'
    },
    {
      title: 'Hostel Warden',
      role: 'Dar-ul-Iqama Supervisor',
      icon: Home,
      description: 'Hostel rooms, bed occupancies, resident student rosters, leave requests, and residential welfare oversight.'
    }
  ];

  return (
    <section id="portals" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Role-Based Experience</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Dedicated Portal for Every Role
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminate cross-department confusion. Each stakeholder logs into an interface strictly tailored to their daily responsibilities with Zero data spillover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portals.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200 p-7 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600">
                    {p.role}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Central Admin Clarification Card */}
        <div className="max-w-4xl mx-auto bg-slate-900 text-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-slate-800 shadow-lg">
          <div className="w-12 h-12 rounded-xl bg-emerald-900/60 border border-emerald-700/50 text-emerald-400 flex items-center justify-center shrink-0">
            <KeyRound className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold text-base mb-1">Looking for Central Admin?</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              The Central Admin portal is strictly reserved for the SaaS platform owner to govern subscription plans, verify board master records, and approve madrasa tenant applications. It is not accessible to general users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
