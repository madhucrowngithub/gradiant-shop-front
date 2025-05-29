
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import WhatsAppWidget from './WhatsAppWidget';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Outlet />
      </main>
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
