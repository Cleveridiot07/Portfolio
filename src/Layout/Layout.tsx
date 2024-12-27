import React from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import '../index.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div lang="en">
      <div className="font-sans">
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
