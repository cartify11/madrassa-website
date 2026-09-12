'use client';

import React, { useState } from 'react';
import { SAAS_URLS } from '@/lib/constants';
import { Menu, X, Shield, ArrowRight, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
              <span className="font-serif text-2xl font-bold">م</span>
            </div>
            <div>
              <span className="font-bold text-slate-900 text-lg tracking-tight block">Madrasa SaaS</span>
              <span className="text-[11px] font-medium text-emerald-700 uppercase tracking-wider block">Institutional Platform</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-emerald-700 transition-colors">Features</a>
            <a href="#portals" className="hover:text-emerald-700 transition-colors">Portals</a>
            <a href="#how-it-works" className="hover:text-emerald-700 transition-colors">How It Works</a>
            <a href="#plans" className="hover:text-emerald-700 transition-colors">Plans</a>
            <a href="#about-builder" className="hover:text-emerald-700 transition-colors">About Developer</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">FAQ</a>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={SAAS_URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Login</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <a
              href={SAAS_URLS.REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-900/20 hover:shadow-md transition-all flex items-center gap-2 group"
            >
              <span>Register Your Madrasa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Features
          </a>
          <a
            href="#portals"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Portals
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            How It Works
          </a>
          <a
            href="#plans"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Plans
          </a>
          <a
            href="#about-builder"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            About Developer
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            FAQ
          </a>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={SAAS_URLS.LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              Login to Portal
            </a>
            <a
              href={SAAS_URLS.REGISTER}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm"
            >
              Register Your Madrasa
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
