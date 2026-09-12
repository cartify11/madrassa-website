import React from 'react';
import { Shield, BookOpen, Calculator, GraduationCap, UserCheck, Home, KeyRound } from 'lucide-react';

export default function Portals() {
  const portals = [
    {
      title: 'Madrasa Admin',
      role: 'Principal / Head Office',
      icon: Shield,
      description: 'Total administrative oversight of students, teachers, branches, fee policies, reports, and madrasa profile.'
    },
    {
      title: 'Teacher Portal',
      role: 'Asaatidha / Instructors',
      icon: BookOpen,
      description: 'Class registers, daily attendance entry, Sabaq/Sabqi progress, exam marks entry, and timetable visibility.'
    },
    {
      title: 'Accountant Portal',
      role: 'Bursar / Cashier',
      icon: Calculator,
      description: 'Fee collection desk, fee voucher creation, concession allocations, discount logs, and cash reconciliation.'
    },
    {
      title: 'Student Portal',
      role: 'Talaba (Students)',
      icon: GraduationCap,
      description: 'Personal class timetable, examination date sheets, term report cards, attendance status, and fee clearance.'
    },
    {
      title: 'Parent Portal',
      role: 'Walideen (Guardians)',
      icon: UserCheck,
      description: 'Multi-child monitoring, real-time attendance alerts, quarterly marks cards, fee vouchers, and notices.'
    },
    {
      title: 'Hostel Warden',
      role: 'Dar-ul-Iqama Supervisor',
      icon: Home,
      description: 'Hostel building and room allocations, resident student rosters, leave requests, and residential welfare oversight.'
    }
  ];

  return (
    <section id="portals" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Role-Based Access</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Dedicated Portal for Every Role
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Each stakeholder logs into an interface tailored strictly to their responsibilities with zero cross-role data spillover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {portals.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-emerald-300 hover:bg-white transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                    {p.role}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{p.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* Central Admin Clarification */}
        <div className="max-w-3xl mx-auto bg-slate-900 text-slate-200 rounded-2xl p-5 sm:p-6 flex items-start gap-4 border border-slate-800 shadow-md">
          <KeyRound className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white block mb-0.5">Central Admin Architecture Note:</strong>
            Central Admin is strictly reserved for platform ownership and SaaS management (tenant verification and plan governance). Normal users and madrasa staff log in through their dedicated tenant portals.
          </div>
        </div>
      </div>
    </section>
  );
}
