import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import Footer from '../components/Footer'
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  );
}
