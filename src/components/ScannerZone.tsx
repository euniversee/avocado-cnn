import React from 'react';
import type { StageInfo } from '../types';

interface ScannerZoneProps {
  reading: boolean;
  stageInfo: StageInfo | null;
}

export const ScannerZone: React.FC<ScannerZoneProps> = ({ reading, stageInfo }) => {
  const isReady = !stageInfo && !reading;
  const isScanning = reading;
  const sDotLbl = isScanning ? 'Scanning' : (stageInfo ? 'Active' : 'Ready');
  
  const getDotColor = () => {
    if (isReady || isScanning) return '#4a9a60';
    if (!stageInfo) return '#4a9a60';
    const dotMap: Record<string, string> = { '': '#4a9a60', 'warn': '#d09030', 'blue': '#5a8acc' };
    return dotMap[stageInfo.dot] || '#4a9a60';
  };

  return (
    <div className="col-center">
      <div className="scan-label">Scan Target</div>

      <div className="avo-wrap">
        <div className="scan-beam" style={{ display: reading ? 'block' : 'none' }}></div>

        <svg className={`avo-svg ${reading ? 'scanning' : ''}`} viewBox="0 0 90 116" xmlns="http://www.w3.org/2000/svg">
          {/* Stem */}
          <rect x="41" y="2" width="8" height="14" rx="4" fill="#6b4226"/>
          {/* Outer skin */}
          <path d="M45 16 C25 16 14 38 14 62 C14 90 27 110 45 110 C63 110 76 90 76 62 C76 38 65 16 45 16 Z" fill="#3d6b2a"/>
          {/* Mid-tone skin texture */}
          <path d="M45 20 C28 20 18 40 18 63 C18 88 30 106 45 106 C60 106 72 88 72 63 C72 40 62 20 45 20 Z" fill="#4a7e33"/>
          {/* Highlight */}
          <ellipse cx="34" cy="50" rx="8" ry="14" fill="rgba(255,255,255,0.10)" transform="rotate(-15,34,50)"/>
          {/* Flesh inner */}
          <path d="M45 38 C32 38 24 50 24 64 C24 82 33 100 45 100 C57 100 66 82 66 64 C66 50 58 38 45 38 Z" fill="#c8e87a"/>
          {/* Seed */}
          <ellipse cx="45" cy="68" rx="13" ry="16" fill="#8b4513"/>
          <ellipse cx="45" cy="68" rx="10" ry="13" fill="#a0522d"/>
          {/* Seed highlight */}
          <ellipse cx="41" cy="63" rx="3" ry="4" fill="rgba(255,255,255,0.12)"/>
        </svg>
      </div>

      <div className="status-row">
        <div className="s-dot" style={{ background: getDotColor() }}></div>
        <div className="s-dot-lbl">{sDotLbl}</div>
      </div>

      <div className="instr-box">
        <div className="instr-txt">
          {isScanning ? (
            'Scanning...'
          ) : stageInfo ? (
            <>{stageInfo.label} — {stageInfo.name}</>
          ) : (
            <>Letakkan alpukat di atas <b>holder</b><br />lalu tekan <b>READ</b></>
          )}
        </div>
      </div>
    </div>
  );
};
