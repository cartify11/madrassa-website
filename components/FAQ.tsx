'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Do I receive portal access immediately after registration?',
      a: 'No. Submitting a registration does not immediately activate portal access. All registration requests are reviewed by Central Admin first to verify institutional authenticity. Once approved, you receive an invitation to set your password and access your portal.'
    },
    {
      q: 'Where do approved users login?',
      a: 'All approved users (Madrasa Admins, Teachers, Accountants, Students, Parents, and Wardens) sign in through the primary SaaS login gateway at /login. The application inspects your authenticated account and redirects you to your authorized role portal.'
    },
    {
      q: 'Can different staff members have separate portals?',
      a: 'Yes. The system enforces strict role-based access control. Teachers access attendance and grading; accountants access fee vouchers and ledgers; while administrators manage the overall institution.'
    },
    {
      q: 'Can a Madrasa select its Wifaq / Board affiliation?',
      a: 'Yes. The registration application utilizes a centrally maintained Pakistan Madrasa Board master covering 15 recognized affiliations including Wifaq-ul-Madaris Al-Arabia, Tanzeem-ul-Madaris, Rabita-ul-Madaris, Wifaq-ul-Madaris Al-Salafia, Wifaq-ul-Madaris Al-Shia, and DGRE/ITMP provincial boards.'
    },
    {
      q: 'Can the system support multiple roles?',
      a: 'Yes. Dedicated role portals are supported for Madrasa Admin, Teacher, Accountant, Student, Parent, and Hostel Warden.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">Answers &amp; Clarity</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential information regarding registration, permissions, and portal security.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-emerald-700 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3.5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
