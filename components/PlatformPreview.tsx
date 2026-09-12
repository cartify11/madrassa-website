'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Users, CalendarCheck, Receipt, UserCheck, Image as ImageIcon } from 'lucide-react';

export default function PlatformPreview() {
  const views = [
    {
      id: 'dashboard',
      label: 'Admin Dashboard',
      icon: LayoutDashboard,
      title: 'Institutional Administration Dashboard',
      caption: 'Real-time overview of active students, class enrollments, fee recovery metrics, and pending tasks.',
      placeholderNote: 'Production Screenshot Slot: /central-admin/dashboard or /admin/dashboard'
    },
    {
      id: 'students',
      label: 'Student Directory',
      icon: Users,
      title: 'Student Lifecycle & Admissions',
      caption: 'Searchable student bio-data, Darja enrollment, guardian link, and admission profile management.',
      placeholderNote: 'Production Screenshot Slot: /admin/students'
    },
    {
      id: 'attendance',
      label: 'Daily Attendance',
      icon: CalendarCheck,
      title: 'Attendance & Quranic Sabaq Log',
      caption: 'Fast batch attendance marking for classes and daily Sabaq/Sabqi progress registers.',
      placeholderNote: 'Production Screenshot Slot: /teacher/attendance'
    },
    {
      id: 'fees',
      label: 'Fees & Accounts',
      icon: Receipt,
      title: 'Fee Billing & Voucher Management',
      caption: 'Automated invoice generation, payment receipt collection, and outstanding arrears reports.',
      placeholderNote: 'Production Screenshot Slot: /accounts/invoices'
    },
    {
      id: 'portals',
      label: 'Parent & Student Portal',
      icon: UserCheck,
      title: 'Guardian Transparency Dashboard',
      caption: 'Clean, mobile-optimized portal for parents to view multi-child attendance, grades, and fee slips.',
      placeholderNote: 'Production Screenshot Slot: /parent/dashboard'
    }
  ];

  const [activeTab, setActiveTab] = useState(views[0].id);
  const currentView = views.find(v => v.id === activeTab) || views[0];

  return (
    <section id="preview" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">See The Platform</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Designed for Simplicity and Institutional Depth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A clean, high-contrast interface engineered to keep teachers, accountants, and administrators productive with minimal training.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {views.map(view => {
            const Icon = view.icon;
            const isActive = activeTab === view.id;
            return (
              <button
                key={view.id}
                onClick={() => setActiveTab(view.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-700 text-white shadow-sm shadow-emerald-900/15'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{view.label}</span>
              </button>
            );
          })}
        </div>

        {/* Visual Showcase Card with Real-Screenshot Slot */}
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
          {/* Browser Window Header Mockup */}
          <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                https://web-production-6fe8a.up.railway.app
              </span>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 font-semibold px-2.5 py-0.5 rounded-md bg-emerald-950 border border-emerald-800">
              Live Production Interface
            </div>
          </div>

          {/* Screenshot Display Frame */}
          <div className="p-8 sm:p-12 text-center bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 min-h-[340px] flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 text-emerald-400 flex items-center justify-center mb-4 shadow-inner">
              <ImageIcon className="w-8 h-8 opacity-75" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{currentView.title}</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
              {currentView.caption}
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Prepared for Live Production Capture: {currentView.placeholderNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
