import React from 'react';
import { GraduationCap, Wallet, Users2 } from 'lucide-react';

export default function Overview() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Institutional Centralization</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Unified Institutional Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Replace scattered paperwork and uncoordinated records with a single, synchronized platform built around the authentic workflow of traditional and modern madrasas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
            <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Academics &amp; Quran Progression</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Standardize Nazra, Hifz Sabaq/Sabqi/Manzil logs, Dars-e-Nizami classes, exam date sheets, and computerized evaluation report cards.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
            <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-5">
              <Wallet className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Billing &amp; Fee Accounting</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Automate monthly fee voucher generation, fee concessions, discount ledgers, cash collections, and real-time arrears tracking.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 transition-all">
            <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5">
              <Users2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Multi-Stakeholder Governance</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Grant specialized interfaces to teachers, bursars, wardens, students, and parents with strict permission boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
