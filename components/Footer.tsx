import React from 'react';
import { DEVELOPER_INFO, SAAS_URLS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Builder */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-serif font-bold text-lg">
                م
              </div>
              <span className="font-bold text-white text-base tracking-tight">Madrasa SaaS</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-3 max-w-md">
              A comprehensive institutional management system engineered by{' '}
              <strong className="text-emerald-400">{DEVELOPER_INFO.name}</strong> ({DEVELOPER_INFO.title}) to unify academic, administrative, and financial governance.
            </p>
            <div className="text-[11px] text-slate-500">
              Standalone Public Website • Application &amp; Authentication served via production SaaS.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">Sections</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Muhammad Talha</a></li>
              <li><a href="#madrasa-saas" className="hover:text-emerald-400 transition-colors">Madrasa SaaS</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Core Features</a></li>
              <li><a href="#preview" className="hover:text-emerald-400 transition-colors">Platform Visuals</a></li>
              <li><a href="#portals" className="hover:text-emerald-400 transition-colors">Role Portals</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">Onboarding Process</a></li>
              <li><a href="#plans" className="hover:text-emerald-400 transition-colors">SaaS Plans</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Platform Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">SaaS Access</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                <span className="text-slate-600 block pt-2 text-[11px] font-mono">
                  web-production-6fe8a.up.railway.app
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {currentYear} Madrasa SaaS. Developed by {DEVELOPER_INFO.name}. All rights reserved.
          </div>
          <div className="text-slate-500">
            Dedicated Multi-Tenant Islamic Institutional SaaS
          </div>
        </div>
      </div>
    </footer>
  );
}
