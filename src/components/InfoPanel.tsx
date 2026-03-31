import React from 'react';
import type { StageInfo } from '../types';

interface InfoPanelProps {
  stageInfo: StageInfo | null;
  stageIdx: number; // 0 to 4
  scanTime: string;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ stageInfo, stageIdx, scanTime }) => {
  const getSegClass = (i: number) => {
    if (stageIdx === -1) return '';
    if (i < stageIdx) return 'pas';
    if (i === stageIdx) return 'act';
    return '';
  };

  const getValClass = () => {
    return stageInfo ? stageInfo.vc : 'muted';
  };

  const bannerClass = stageInfo ? stageInfo.bc : 'neutral';
  const dotClass = stageInfo ? stageInfo.dot : 'neutral';

  return (
    <div className="col-info">
      <div className="panel-title">Ripeness Analysis</div>

      <div className="stage-block">
        <div className="stage-header">
          <div className="stage-key">Ripeness Level</div>
          <div className="stage-val">{stageInfo ? `${stageInfo.label} — ${stageInfo.name}` : '—'}</div>
        </div>
        <div className="stage-track">
          {[0, 1, 2, 3, 4].map(i => (
            <div key={i} className={`stage-seg ${getSegClass(i)}`}></div>
          ))}
        </div>
        <div className="stage-names">
          <div className="sn">Firm</div>
          <div className="sn">Pre</div>
          <div className="sn">Breaking</div>
          <div className="sn">F.Ripe</div>
          <div className="sn">Ripe</div>
        </div>
      </div>

      <div className="info-grid">
        <div className="info-cell">
          <div className="cell-key">Firmness</div>
          <div className={`cell-val ${getValClass()}`}>{stageInfo?.firm || '—'}</div>
        </div>
        <div className="info-cell">
          <div className="cell-key">Texture</div>
          <div className={`cell-val ${getValClass()}`}>{stageInfo?.tex || '—'}</div>
        </div>
        <div className="info-cell">
          <div className="cell-key">Use for</div>
          <div className={`cell-val ${getValClass()}`} style={{ fontSize: '9px' }}>{stageInfo?.use || '—'}</div>
        </div>
        <div className="info-cell">
          <div className="cell-key">Days left</div>
          <div className={`cell-val ${getValClass()}`}>{stageInfo?.days || '—'}</div>
        </div>
      </div>

      <div className={`status-banner ${bannerClass}`}>
        <div className={`banner-dot ${dotClass}`}></div>
        <div className={`banner-txt ${dotClass}`}>
          {stageInfo ? stageInfo.status : 'Awaiting scan'}
        </div>
        <div className="banner-time">{scanTime}</div>
      </div>
    </div>
  );
};
