import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import CustomCursor from '../assets/Cursor';
import '../index.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div lang="en">
      <div className="font-sans">
        <AnimatedBackground />
        {/* <CustomCursor /> */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
