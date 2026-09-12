import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { AlertCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Explore Platform',
      description: 'Review features, role portals, and student capacity tiers.'
    },
    {
      num: '02',
      title: 'Submit Application',
      description: 'Complete the registration form with your madrasa details and Wifaq board.'
    },
    {
      num: '03',
      title: 'Pending Review',
      description: 'Application enters Pending state while Central Admin vets the submission.'
    },
    {
      num: '04',
      title: 'Admin Approval',
      description: 'Authenticity is verified. Unverified registrations are cleanly rejected.'
    },
    {
      num: '05',
      title: 'Login & Access',
      description: 'Approved admin receives invitation to set password and log in via /login.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Onboarding Lifecycle</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            How Madrasa Onboarding Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A verified 5-stage lifecycle ensuring safety, institutional legitimacy, and zero unauthorized tenant access.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xl font-black text-emerald-700/40 block mb-2 font-mono">{step.num}</span>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Warning Callout */}
        <div className="max-w-3xl mx-auto bg-amber-50/90 border border-amber-200 rounded-xl p-5 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <strong>Important Safety Notice:</strong> Submitting a registration does <strong>not</strong> immediately activate the Madrasa portal. All requests remain strictly <strong>Pending</strong> until approved by Central Admin.
          </div>
        </div>
      </div>
    </section>
  );
}
