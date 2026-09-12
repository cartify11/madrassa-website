import React from 'react';
import { BookOpen, GraduationCap, Users2, Landmark, Wallet, ShieldAlert } from 'lucide-react';

export default function Overview() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Institutional Centralization</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Complete Madrasa Management — One Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Traditional madrasas and modern Islamic academies often struggle with scattered registers, fragmented paperwork, and uncoordinated records. Madrasa SaaS unites every division into a single, cohesive digital hub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Academic & Quranic Governance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardize Nazra, Hifz-ul-Quran, Dars-e-Nizami, and contemporary subjects. Manage Darja classes, sections, daily Sabaq/Sabqi progress, exam schedules, and computerized report cards.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Structured Institutional Finance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Automate monthly tuition fee generation, concession approvals, outstanding arrears tracking, and official fee vouchers with full double-entry integrity and audit readiness.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cohesive Community Portals</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Connect administrators, teachers, accountants, hostel wardens, students, and guardians. Give each stakeholder exactly the tools and visibility they need while strictly preventing unauthorized access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
