import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { ShieldCheck, ArrowRight, CheckCircle2, Building2, Users, Layers, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-100/60 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Identity Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span>Crafted by Muhammad Talha • Developer & Product Builder</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] mb-6">
            Complete Madrasa Management{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800">
              One Secure Platform
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10">
            A specialized institutional SaaS engineered to streamline admissions, academics, fee collection, attendance, examination, hostel logistics, and parent communication from one unified, multi-tenant portal.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={SAAS_URLS.REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-900/15 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Register Your Madrasa</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-xl shadow-xs transition-all flex items-center justify-center"
            >
              Explore Features
            </a>
          </div>

          {/* Existing User Login Prompt */}
          <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-slate-50/80 px-4 py-2 rounded-lg border border-slate-200/60">
            <span>Already registered your institution?</span>
            <a
              href={SAAS_URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-700 hover:text-emerald-800 underline flex items-center gap-1"
            >
              <span>Login to Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Multi-Tenant</div>
              <div className="text-xs text-slate-500">Strict Data Isolation</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">6 Dedicated Portals</div>
              <div className="text-xs text-slate-500">Role-Based Workflows</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Pakistan Board Master</div>
              <div className="text-xs text-slate-500">15 Wifaq Affiliations</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-slate-900 text-sm">Approval Governed</div>
              <div className="text-xs text-slate-500">Verified Onboarding</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
