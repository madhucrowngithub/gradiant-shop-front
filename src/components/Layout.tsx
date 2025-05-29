
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import WhatsAppWidget from './WhatsAppWidget';

const Layout = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
