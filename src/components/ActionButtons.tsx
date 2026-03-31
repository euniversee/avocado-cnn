import React from 'react';

interface ActionButtonsProps {
  onPowerToggle: () => void;
  onReset: () => void;
  onRead: () => void;
  powered: boolean;
  powerActiveToggle: boolean;
  resetActiveToggle: boolean;
  readActiveToggle: boolean;
  reading: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onPowerToggle,
  onReset,
  onRead,
  powered,
  powerActiveToggle,
  resetActiveToggle,
  readActiveToggle,
}) => {
  return (
    <div className="col-btns">
      <div className="btn-wrap">
        <div className="btn-lbl">Power</div>
        <div
          className={`hw-btn ${powered ? 'on' : ''} ${powerActiveToggle ? 'active' : ''}`}
          onClick={onPowerToggle}
        >
          <span className="btn-icon">⏻</span>
          <span className="btn-txt">ON/OFF</span>
        </div>
      </div>
      <div className="btn-wrap">
        <div className="btn-lbl">Reset</div>
        <div
          className={`hw-btn ${resetActiveToggle ? 'active' : ''}`}
          onClick={onReset}
        >
          <span className="btn-icon">↺</span>
          <span className="btn-txt">RESET</span>
        </div>
      </div>
      <div className="btn-wrap">
        <div className="btn-lbl">Scan</div>
        <div
          className={`hw-btn ${readActiveToggle ? 'active' : ''}`}
          onClick={onRead}
        >
          <span className="btn-icon">◈</span>
          <span className="btn-txt">READ</span>
        </div>
      </div>
    </div>
  );
};
