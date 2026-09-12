import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { UserCheck, ShieldCheck, MailCheck, KeyRound, LogIn, ArrowRight, AlertCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Explore Platform Features',
      description: 'Review the architecture, role portals, and subscription tiers to confirm compatibility with your madrasa.'
    },
    {
      num: '02',
      title: 'Submit Madrasa Registration',
      description: 'Click "Register Your Madrasa" to open the formal application. Provide institution details and select your Wifaq board.'
    },
    {
      num: '03',
      title: 'Application Enters Pending Review',
      description: 'Your submission is securely routed to Central Admin. The application remains Pending while credentials and data are vetted.'
    },
    {
      num: '04',
      title: 'Central Admin Approves or Rejects',
      description: 'Platform administrators review authenticity. Unverified registrations are rejected to preserve tenant safety.'
    },
    {
      num: '05',
      title: 'Invitation & Standard Login Access',
      description: 'Upon approval, your tenant is provisioned. The Madrasa Admin receives an invitation to set a password and log in via /login.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Onboarding Lifecycle</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            How Madrasa Onboarding Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We prioritize safety and institutional authenticity. Here is the verified 5-stage lifecycle from registration to active portal access.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-emerald-700/30 block mb-3 font-mono">{step.num}</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Essential Warning / Clarity Notice */}
        <div className="max-w-3xl mx-auto bg-amber-50/80 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            <span className="font-bold block mb-1">Important Safety Guarantee:</span>
            Submitting a registration does <strong>NOT</strong> immediately activate the Madrasa portal. All requests remain strictly <strong>Pending</strong> until audited by Central Admin. Once approved, the Madrasa tenant is provisioned and the admin signs in via the standard login page.
          </div>
        </div>
      </div>
    </section>
  );
}
