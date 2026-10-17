'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Receipt,
  UserCheck,
  Search,
  Filter,
  Plus,
  CheckCircle2,
  Clock,
  Printer,
  Download,
  Award,
  BookOpen,
  TrendingUp,
  Sparkles,
  GraduationCap,
  Bell,
  ChevronRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import Logo from './Logo';

export default function PlatformPreview() {
  const views = [
    {
      id: 'dashboard',
      label: 'Admin Dashboard',
      icon: LayoutDashboard,
      title: 'Institutional Administration Dashboard',
      caption: 'Real-time overview of active students, class enrollments, fee recovery metrics, and pending tasks.'
    },
    {
      id: 'students',
      label: 'Student Directory',
      icon: Users,
      title: 'Student Lifecycle & Admissions',
      caption: 'Searchable student bio-data, Darja enrollment, guardian link, and admission profile management.'
    },
    {
      id: 'attendance',
      label: 'Daily Attendance',
      icon: CalendarCheck,
      title: 'Attendance & Quranic Sabaq Log',
      caption: 'Fast batch attendance marking for classes and daily Sabaq, Sabqi & Manzil progress registers.'
    },
    {
      id: 'fees',
      label: 'Fees & Accounts',
      icon: Receipt,
      title: 'Fee Billing & Voucher Management',
      caption: 'Automated 3-part chalan generation, payment collection desk, and Zakat/concession reconciliation.'
    },
    {
      id: 'portals',
      label: 'Parent & Student Portal',
      icon: UserCheck,
      title: 'Guardian Transparency Dashboard',
      caption: 'Clean, mobile-optimized portal for parents to view real-time attendance, Sabaq progress, and result cards.'
    }
  ];

  const [activeTab, setActiveTab] = useState(views[0].id);
  const currentView = views.find(v => v.id === activeTab) || views[0];

  return (
    <section id="preview" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Live Platform Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Designed for Simplicity and Institutional Depth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience the real interface used by Mohtamims, Nazims, Asaatidha, and Accountants across Pakistani Madaris.
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
                    ? 'bg-emerald-700 text-white shadow-md shadow-emerald-900/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{view.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Showcase Window */}
        <div className="max-w-6xl mx-auto bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden ring-1 ring-slate-800/80">
          {/* Browser Window Header Mockup */}
          <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block shadow-sm" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block shadow-sm" />
              <div className="ml-3 hidden sm:flex items-center gap-2 bg-slate-950/70 px-3 py-1 rounded-md border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="text-emerald-400">🔒</span>
                <span>https://app.madrasasaas.pk</span>
                <span className="text-slate-500">/</span>
                <span className="text-emerald-300 font-semibold">{activeTab}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-medium px-2.5 py-0.5 rounded-md bg-emerald-950/80 border border-emerald-800/80">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live System Mockup
              </span>
            </div>
          </div>

          {/* Internal Application Header */}
          <div className="bg-slate-900/90 px-4 sm:px-6 py-3 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <div>
                <div className="font-bold text-white tracking-wide flex items-center gap-2">
                  <span>جامعہ دار العلوم الاسلامیہ</span>
                  <span className="text-[10px] bg-emerald-900/80 text-emerald-300 font-medium px-1.5 py-0.5 rounded border border-emerald-700/50">
                    Main Campus
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">Jamia Dar-ul-Uloom Al-Islamia • Ta&#39;leemi Saal 1447-1448H</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                <CalendarCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>14 Shawwal 1447H / 17 Oct 2026</span>
              </div>
              <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-xs">
                  MT
                </div>
                <div className="hidden sm:block text-left">
                  <div className="font-semibold text-white leading-tight">Mufti Tariq</div>
                  <div className="text-[10px] text-emerald-400">Mohtamim / Admin</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main App Content Viewport */}
          <div className="p-4 sm:p-6 lg:p-8 bg-slate-950 text-slate-100 min-h-[460px]">
            {/* View 1: DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>مرکزی ڈیش بورڈ</span>
                      <span className="text-xs text-slate-400 font-normal">| Central Executive Overview</span>
                    </h3>
                    <p className="text-xs text-slate-400">Rozana talaba hazri, darjaat ki wasooli aur tazeem ka mukammal khulasa.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm">
                      <Plus className="w-3.5 h-3.5" /> Naya Dakhla
                    </button>
                    <button className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-slate-700">
                      <Download className="w-3.5 h-3.5" /> Monthly Report
                    </button>
                  </div>
                </div>

                {/* 4 Metric Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Total Students</span>
                      <Users className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">485</div>
                    <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                      <TrendingUp className="w-3 h-3" /> +14 Naye Dakhlay
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Fee Recovery (Oct)</span>
                      <Receipt className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">Rs. 1.42M</div>
                    <div className="text-[11px] text-amber-300 flex items-center gap-1 mt-1 font-medium">
                      <span>94.6% Wasool Shuda</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Aaj Ki Hazri</span>
                      <CalendarCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">96.8%</div>
                    <div className="text-[11px] text-slate-400 mt-1">469 Hazir / 12 Rukhsat</div>
                  </div>

                  <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>Sanad Huffaz (Year)</span>
                      <Award className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div className="text-2xl font-extrabold text-white">32 Huffaz</div>
                    <div className="text-[11px] text-emerald-300 mt-1">Daur-e-Quran Mukammal</div>
                  </div>
                </div>

                {/* Split Table & Distribution */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {/* Left: Recent Admissions */}
                  <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-sm text-white flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-emerald-400" />
                        Taza Tareen Dakhlay (Recent Admissions)
                      </h4>
                      <span className="text-[11px] text-emerald-400 hover:underline cursor-pointer">Sab Dekhein &rarr;</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-slate-950/60 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                          <tr>
                            <th className="py-2 px-3">Roll #</th>
                            <th className="py-2 px-3">Talib-e-Ilm</th>
                            <th className="py-2 px-3">Darja</th>
                            <th className="py-2 px-3">Status</th>
                            <th className="py-2 px-3 text-right">Fee</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 text-slate-200">
                          <tr>
                            <td className="py-2 px-3 font-mono text-slate-400">#1042</td>
                            <td className="py-2 px-3 font-semibold text-white">Muhammad Huzaifa</td>
                            <td className="py-2 px-3 text-slate-300">Darja Hifz (Sec A)</td>
                            <td className="py-2 px-3">
                              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                                Active
                              </span>
                            </td>
                            <td className="py-2 px-3 text-right font-mono text-emerald-400">Paid</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-mono text-slate-400">#1041</td>
                            <td className="py-2 px-3 font-semibold text-white">Abdullah Farooq</td>
                            <td className="py-2 px-3 text-slate-300">Darse Nizami (Ula)</td>
                            <td className="py-2 px-3">
                              <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-[10px]">
                                Hostel
                              </span>
                            </td>
                            <td className="py-2 px-3 text-right font-mono text-emerald-400">Paid</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-3 font-mono text-slate-400">#1040</td>
                            <td className="py-2 px-3 font-semibold text-white">Abdur Rehman Tariq</td>
                            <td className="py-2 px-3 text-slate-300">Nazra Quran</td>
                            <td className="py-2 px-3">
                              <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                                Active
                              </span>
                            </td>
                            <td className="py-2 px-3 text-right font-mono text-amber-400">Pending</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right: Departmental Breakdown */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-white mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-emerald-400" />
                        Darjaat Distribution
                      </h4>
                      <div className="space-y-3 text-xs">
                        <div>
                          <div className="flex justify-between text-slate-300 mb-1">
                            <span>Darse Nizami (Aalim Course)</span>
                            <span className="font-semibold text-white">195 Talaba</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full rounded-full" style={{ width: '40%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-slate-300 mb-1">
                            <span>Hifz-ul-Quran Department</span>
                            <span className="font-semibold text-white">150 Talaba</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full rounded-full" style={{ width: '31%' }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-slate-300 mb-1">
                            <span>Nazra & Tajweed</span>
                            <span className="font-semibold text-white">140 Talaba</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-blue-500 h-full rounded-full" style={{ width: '29%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Wifaq Board Registered:</span>
                      <span className="text-emerald-400 font-semibold">100% Synced</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 2: STUDENT DIRECTORY */}
            {activeTab === 'students' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>طلبہ ڈائریکٹری و داخلہ ریکارڈ</span>
                      <span className="text-xs text-slate-400 font-normal">| Student Bio-data & Enrollment</span>
                    </h3>
                    <p className="text-xs text-slate-400">Mukammal shanakht, walid ka rabta, darja, hostel aur status.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm">
                      <Plus className="w-3.5 h-3.5" /> Naya Dakhla
                    </button>
                  </div>
                </div>

                {/* Filter Toolbar */}
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 flex-1 min-w-[200px]">
                    <Search className="w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      readOnly
                      value="Muhammad Huzaifa"
                      className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-slate-200 text-xs w-full focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-xs flex items-center gap-1.5">
                      <Filter className="w-3.5 h-3.5 text-slate-400" />
                      <span>Darja: Hifz-ul-Quran</span>
                    </div>
                    <div className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-lg text-slate-300 text-xs">
                      Status: Active
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-950/70 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Roll #</th>
                          <th className="py-2.5 px-3">Talib-e-Ilm & Walid</th>
                          <th className="py-2.5 px-3">Darja / Jamat</th>
                          <th className="py-2.5 px-3">Qiyam / Hostel</th>
                          <th className="py-2.5 px-3">Mahana Fee</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">Amal (Actions)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-200">
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-emerald-400">#1042</td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Muhammad Huzaifa</div>
                            <div className="text-[11px] text-slate-400">Walid: Tariq Mehmood (0300-1234567)</div>
                          </td>
                          <td className="py-3 px-3 text-slate-300">Darja Hifz (Sec A)</td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Day Scholar</span>
                          </td>
                          <td className="py-3 px-3 font-mono text-white">Rs. 3,500</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5">
                            <button className="px-2 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded text-[10px] font-semibold">
                              Result Card
                            </button>
                            <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px]">
                              Chalan
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-emerald-400">#1041</td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Abdullah Farooq</div>
                            <div className="text-[11px] text-slate-400">Walid: Farooq Ahmed (0321-9876543)</div>
                          </td>
                          <td className="py-3 px-3 text-slate-300">Darse Nizami (Ula)</td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                              Hostel (Room 12)
                            </span>
                          </td>
                          <td className="py-3 px-3 font-mono text-white">Rs. 7,000</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px]">
                              Active
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5">
                            <button className="px-2 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded text-[10px] font-semibold">
                              Result Card
                            </button>
                            <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px]">
                              Chalan
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-emerald-400">#1040</td>
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Abdur Rehman Tariq</div>
                            <div className="text-[11px] text-slate-400">Walid: Muhammad Asif (0333-5551234)</div>
                          </td>
                          <td className="py-3 px-3 text-slate-300">Hifz (Para 22)</td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Day Scholar</span>
                          </td>
                          <td className="py-3 px-3 font-mono text-white">Rs. 3,500</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800 text-[10px]">
                              Arrears
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right space-x-1.5">
                            <button className="px-2 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded text-[10px] font-semibold">
                              Result Card
                            </button>
                            <button className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[10px]">
                              Chalan
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="px-4 py-2.5 bg-slate-950/70 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Showing 1 to 3 of 485 Active Students</span>
                    <div className="flex items-center gap-1 font-mono">
                      <button className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">&lt;</button>
                      <button className="px-2 py-0.5 rounded bg-emerald-700 text-white font-bold">1</button>
                      <button className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">2</button>
                      <button className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">&gt;</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* View 3: ATTENDANCE & SABAQ REGISTER */}
            {activeTab === 'attendance' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>روزانہ سبق، سبقی و منزل رجسٹر</span>
                      <span className="text-xs text-slate-400 font-normal">| Daily Hifz & Class Progress</span>
                    </h3>
                    <p className="text-xs text-slate-400">Qari / Ustad sahiban ke liye fori hazri aur sabaq record karne ka aasan nizam.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> SMS to Parents Active
                    </span>
                  </div>
                </div>

                {/* Class Selector Bar */}
                <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="font-semibold text-white flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      <span>Darja: Hifz-ul-Quran (Section B)</span>
                    </div>
                    <span className="text-slate-500">|</span>
                    <div className="text-slate-300">Ustad: Qari Abdul Rehman Sahib</div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-mono">25 Hazir</span>
                    <span className="px-2 py-0.5 rounded bg-amber-900/80 text-amber-300 font-mono">1 Rukhsat</span>
                    <span className="px-2 py-0.5 rounded bg-rose-900/80 text-rose-300 font-mono">0 Ghair-Hazir</span>
                  </div>
                </div>

                {/* Sabaq Register Table */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-950/70 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Talib-e-Ilm</th>
                          <th className="py-2.5 px-3">Hazri</th>
                          <th className="py-2.5 px-3">Aaj Ka Sabaq</th>
                          <th className="py-2.5 px-3">Sabqi (Daur)</th>
                          <th className="py-2.5 px-3">Manzil</th>
                          <th className="py-2.5 px-3">Ustad Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-200">
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Muhammad Zaid</div>
                            <div className="text-[10px] font-mono text-slate-400">Roll #1021</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                              حاضر (P)
                            </span>
                          </td>
                          <td className="py-3 px-3 font-semibold text-emerald-300">
                            پارہ 18 (المؤمنون - 2 رکوع)
                          </td>
                          <td className="py-3 px-3 text-slate-300">پارہ 17 (آدھا پارہ)</td>
                          <td className="py-3 px-3 text-slate-300">پارہ 5 مکمل</td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200 border border-emerald-700/60">
                              ★ ممتاز (No Mistake)
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Hamza Khalid</div>
                            <div className="text-[10px] font-mono text-slate-400">Roll #1022</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-bold">
                              حاضر (P)
                            </span>
                          </td>
                          <td className="py-3 px-3 font-semibold text-emerald-300">
                            پارہ 12 (یوسف - 1 رکوع)
                          </td>
                          <td className="py-3 px-3 text-slate-300">پارہ 11 (1 پارہ)</td>
                          <td className="py-3 px-3 text-slate-300">پارہ 2 مکمل</td>
                          <td className="py-3 px-3">
                            <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/60 text-blue-200 border border-blue-700/60">
                              جید جداً (1 لقsuper)
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3">
                            <div className="font-semibold text-white">Usman Ali</div>
                            <div className="text-[10px] font-mono text-slate-400">Roll #1023</div>
                          </td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
                              رخصت (L)
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-500 italic">بیماری کی رخصت</td>
                          <td className="py-3 px-3 text-slate-500">-</td>
                          <td className="py-3 px-3 text-slate-500">-</td>
                          <td className="py-3 px-3 text-slate-400 text-[11px]">با اجازت رخصت</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* View 4: FEES & VOUCHERS */}
            {activeTab === 'fees' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>فیس و اکاؤنٹس مینجمنٹ</span>
                      <span className="text-xs text-slate-400 font-normal">| 3-Part Chalan & Cash Desk</span>
                    </h3>
                    <p className="text-xs text-slate-400">Bank Copy, Madrasa Copy aur Student Copy chalan ba-asani print karein.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm">
                      <Plus className="w-3.5 h-3.5" /> Issue Chalan
                    </button>
                    <button className="px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 border border-slate-700">
                      <Printer className="w-3.5 h-3.5" /> Bulk Print 3-Part
                    </button>
                  </div>
                </div>

                {/* Financial Metric Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Total Billed (Oct):</span>
                    <div className="text-base font-bold text-white font-mono mt-0.5">Rs. 1,520,000</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Wasool Shuda:</span>
                    <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">Rs. 1,435,000</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Baqaya Jaat:</span>
                    <div className="text-base font-bold text-amber-400 font-mono mt-0.5">Rs. 85,000</div>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Zakat & Imdad:</span>
                    <div className="text-base font-bold text-blue-400 font-mono mt-0.5">Rs. 450,000</div>
                  </div>
                </div>

                {/* Invoices Table */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead className="bg-slate-950/70 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Chalan #</th>
                          <th className="py-2.5 px-3">Talib-e-Ilm</th>
                          <th className="py-2.5 px-3">Darja</th>
                          <th className="py-2.5 px-3">Madad (Fee Type)</th>
                          <th className="py-2.5 px-3">Raqam</th>
                          <th className="py-2.5 px-3">Status</th>
                          <th className="py-2.5 px-3 text-right">3-Part Print</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-200">
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-slate-300">VCH-2026-891</td>
                          <td className="py-3 px-3 font-semibold text-white">Muhammad Huzaifa</td>
                          <td className="py-3 px-3 text-slate-300">Darja Hifz</td>
                          <td className="py-3 px-3 text-slate-400">Mahana Tuition + Hifz Fee</td>
                          <td className="py-3 px-3 font-mono font-semibold text-white">Rs. 3,500</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                              Paid (Bank)
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 rounded text-[10px] inline-flex items-center gap-1">
                              <Printer className="w-3 h-3" /> Print PDF
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-slate-300">VCH-2026-892</td>
                          <td className="py-3 px-3 font-semibold text-white">Abdullah Farooq</td>
                          <td className="py-3 px-3 text-slate-300">Darse Nizami</td>
                          <td className="py-3 px-3 text-slate-400">Fee + Hostel Mess Charges</td>
                          <td className="py-3 px-3 font-mono font-semibold text-white">Rs. 7,000</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] font-semibold">
                              Paid (Cash Desk)
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 rounded text-[10px] inline-flex items-center gap-1">
                              <Printer className="w-3 h-3" /> Print PDF
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-slate-800/40">
                          <td className="py-3 px-3 font-mono font-bold text-slate-300">VCH-2026-893</td>
                          <td className="py-3 px-3 font-semibold text-white">Qasim Raza (Mustahiq)</td>
                          <td className="py-3 px-3 text-slate-300">Darja Hifz</td>
                          <td className="py-3 px-3 text-slate-400">Zakat & Imdad Fund Supported</td>
                          <td className="py-3 px-3 font-mono font-semibold text-white">Rs. 3,500</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-semibold">
                              100% Maaf (Concession)
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-blue-300 border border-slate-700 rounded text-[10px] inline-flex items-center gap-1">
                              <Printer className="w-3 h-3" /> Voucher Slip
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* View 5: PARENT & STUDENT PORTAL */}
            {activeTab === 'portals' && (
              <div className="space-y-5 animate-fadeIn">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                      <span>والدین و طلبہ پورٹل</span>
                      <span className="text-xs text-slate-400 font-normal">| Guardian Transparency Portal</span>
                    </h3>
                    <p className="text-xs text-slate-400">Walideen apne mobile phone se bachon ki hazri, sabaq aur result card dekh sakte hain.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Secure Guardian Session
                    </span>
                  </div>
                </div>

                {/* Guardian Profile Strip */}
                <div className="bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-xl flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-900 text-emerald-300 font-bold flex items-center justify-center text-sm border border-emerald-700">
                      TM
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Hafiz Tariq Mehmood (Walid)</div>
                      <div className="text-xs text-slate-400">Zere Kifalat: 2 Talaba Registered</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm">
                      Muhammad Abdullah (Hifz)
                    </button>
                    <button className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg hover:bg-slate-700">
                      Fatima Tariq (Aalima)
                    </button>
                  </div>
                </div>

                {/* 3 Guardian Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Card 1: Live Attendance & Sabaq */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-300">Hazri & Daily Sabaq</span>
                      <CalendarCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white mb-1">98.2%</div>
                    <div className="text-xs text-emerald-400 mb-3 flex items-center gap-1 font-medium">
                      <Check className="w-3.5 h-3.5" /> Aaj Hazir (On Time)
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                      <div className="text-slate-400 text-[10px] uppercase font-semibold">Aaj Ka Sabaq</div>
                      <div className="text-white font-medium mt-0.5">پارہ 18 (المؤمنون 2 رکوع)</div>
                      <div className="text-emerald-400 text-[11px] mt-1 font-semibold">Ustad: ممتاز (کوئی غلطی نہیں)</div>
                    </div>
                  </div>

                  {/* Card 2: Exam Result Card */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-300">Imtihan / Result Card</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-white mb-1">485 / 500</div>
                    <div className="text-xs text-amber-300 mb-3 flex items-center gap-1 font-medium">
                      <span>★ 1st Position (97% Mumtaz)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs flex flex-col justify-between">
                      <div className="text-slate-400 text-[10px]">Shish-Mahi Imtihan 1447H</div>
                      <button className="mt-2 w-full py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 shadow-sm">
                        <Download className="w-3 h-3" /> Download Result Card PDF
                      </button>
                    </div>
                  </div>

                  {/* Card 3: Fee Status & Clearance */}
                  <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-slate-300">Fee Chalan & Receipt</span>
                      <Receipt className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl font-extrabold text-emerald-400 mb-1">Ada Shuda</div>
                    <div className="text-xs text-slate-400 mb-3">October 2026 Chalan Cleared</div>
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                      <div className="flex justify-between text-slate-400 text-[11px]">
                        <span>Receipt #</span>
                        <span className="font-mono text-white">RC-9412</span>
                      </div>
                      <div className="flex justify-between text-slate-400 text-[11px] mt-1">
                        <span>Paid Raqam:</span>
                        <span className="font-mono text-emerald-400 font-semibold">Rs. 3,500</span>
                      </div>
                      <button className="mt-2 w-full py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] font-semibold flex items-center justify-center gap-1.5 border border-slate-700">
                        <Download className="w-3 h-3" /> Download Receipt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar of Showcase Frame */}
          <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-900 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>All 5 stakeholder modules integrated in real-time</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Wifaq Compatible</span>
              <span>Multi-Madrasa Ready</span>
              <span>100% Mobile Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
