import React from 'react'
import DashboardNavBar from '../components/DashboardNavBar'

export default function NoriBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <DashboardNavBar />
      {children}
    </div>
  );
}
