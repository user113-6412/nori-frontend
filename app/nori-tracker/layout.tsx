import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar';
import Footer from '../components/Footer';

export default function NoriTrackerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <DashboardNavBar />
      {children}
      <Footer />
    </div>
  );
}
