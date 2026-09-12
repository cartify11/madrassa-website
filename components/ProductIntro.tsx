import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { ShieldCheck, Building2, Users, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProductIntro() {
  return (
    <section id="madrasa-saas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Madrasa SaaS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Complete Madrasa Management — One Secure Platform
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A specialized multi-tenant platform built for Islamic educational institutions. It unifies daily Quranic Sabaq tracking, traditional Dars-e-Nizami academics, automated fee billing, hostel boarding, and official Wifaq board affiliations.
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
            <Building2 className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Multi-Tenant Isolation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Strict database scoping ensures every madrasa operates in absolute data privacy.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
            <Users className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">6 Dedicated Portals</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Custom dashboards for Admin, Teacher, Accountant, Student, Parent, and Warden.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
            <Layers className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Pakistan Board Master</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Integrated with 15 canonical Wifaq and DGRE/ITMP recognized educational boards.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mb-3" />
            <h3 className="font-bold text-slate-900 text-base mb-1.5">Governed Onboarding</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every applicant is vetted by Central Admin before institutional portal activation.
            </p>
          </div>
        </div>

        {/* Direct Action Link */}
        <div className="text-center">
          <a
            href={SAAS_URLS.REGISTER}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            <span>Ready to bring your institution online? Submit a registration application</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
