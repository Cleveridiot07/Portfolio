import React from 'react';
import CustomCursor from '../assets/Cursor';
import '../index.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div lang="en" className="relative">
      {/* Animated Background */}

      {/* Custom Cursor */}
      <div className="fixed inset-0 bg-black pointer-events-none">
        <CustomCursor />
      </div>

      {/* Main Content */}
      <div className="relative z-10 font-sans">{children}</div>
    </div>
  );
};

export default Layout;
