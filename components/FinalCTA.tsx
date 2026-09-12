import React from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Modern Institutional Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5">
            Ready to Digitize Your Madrasa?
          </h2>

          <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Submit your madrasa registration today. Join modern Islamic institutions transitioning toward secure, multi-role digital governance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SAAS_URLS.REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Register Your Madrasa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-slate-950" />
            </a>

            <a
              href={SAAS_URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <span>Already Have an Account? Login</span>
              <ExternalLink className="w-4 h-4 opacity-70" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
