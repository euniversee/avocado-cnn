import React from 'react';

interface KioskFrameProps {
  children: React.ReactNode;
  powered: boolean;
}

export const KioskFrame: React.FC<KioskFrameProps> = ({ children, powered }) => {
  return (
    <div className="device">
      <div 
        className="screen" 
        style={{ opacity: powered ? 1 : 0.1 }}
      >
        {children}
      </div>
    </div>
  );
};
