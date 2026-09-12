import React from 'react';
import { DEVELOPER_INFO, SAAS_URLS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Developer */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-serif font-bold text-xl">
                م
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Madrasa SaaS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 max-w-md">
              A comprehensive multi-tenant management system engineered by{' '}
              <strong className="text-emerald-400">{DEVELOPER_INFO.name}</strong> ({DEVELOPER_INFO.title}) to unify academic, administrative, financial, and institutional governance for modern Islamic educational institutions.
            </p>
            <div className="text-xs text-slate-500">
              Independent Marketing Website • All registration and portal authentication is served by the production SaaS application.
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#portals" className="hover:text-emerald-400 transition-colors">Role Portals</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How Onboarding Works</a></li>
              <li><a href="#plans" className="hover:text-emerald-400 transition-colors">Subscription Plans</a></li>
              <li><a href="#about-builder" className="hover:text-emerald-400 transition-colors">Developer Profile</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Direct SaaS Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Platform Access</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={SAAS_URLS.REGISTER}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Register Your Madrasa
                </a>
              </li>
              <li>
                <a
                  href={SAAS_URLS.LOGIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Login to Portal
                </a>
              </li>
              <li>
                <span className="text-slate-600 block pt-2 text-[11px]">
                  Production Application:
                  <br />
                  <code className="text-emerald-500/80 font-mono">web-production-6fe8a.up.railway.app</code>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {currentYear} Madrasa SaaS. Designed & Engineered by {DEVELOPER_INFO.name}. All rights reserved.
          </div>
          <div className="text-slate-500">
            Dedicated Multi-Tenant Islamic Institutional Software
          </div>
        </div>
      </div>
    </footer>
  );
}
