import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Madrasa SaaS — Complete Institutional Management System | Built by Muhammad Talha',
  description: 'Enterprise multi-tenant management software for Islamic educational institutions. Unifying admissions, academics, fee accounting, attendance, exams, hostel, and role-based portals.',
  keywords: [
    'Madrasa Management System',
    'Madrasa Software',
    'Islamic School Management',
    'Hifz Attendance System',
    'Wifaq ul Madaris',
    'Multi-tenant Madrasa SaaS',
    'Muhammad Talha Developer'
  ],
  authors: [{ name: 'Muhammad Talha' }],
  creator: 'Muhammad Talha',
  openGraph: {
    title: 'Madrasa SaaS — Complete Institutional Management System',
    description: 'Purpose-built multi-tenant management system for madrasas and Islamic institutions.',
    url: 'https://madrasasaas.com',
    siteName: 'Madrasa SaaS',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
