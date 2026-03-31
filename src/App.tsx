import React, { useState } from 'react';
import { ActionButtons } from './components/ActionButtons';
import { ScannerZone } from './components/ScannerZone';
import { InfoPanel } from './components/InfoPanel';
import { KioskFrame } from './components/KioskFrame';
import { STAGES } from './types';

function App() {
  const [powered, setPowered] = useState(true);
  const [reading, setReading] = useState(false);
  const [stageIdx, setStageIdx] = useState(-1);
  const [scanTime, setScanTime] = useState('');

  // active toggles to simulate hardware button press
  const [powerActive, setPowerActive] = useState(false);
  const [resetActive, setResetActive] = useState(false);
  const [readActive, setReadActive] = useState(false);

  const performActiveToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(true);
    setTimeout(() => setter(false), 150);
  };

  const handlePower = () => {
    performActiveToggle(setPowerActive);
    setPowered(!powered);
  };

  const handleReset = () => {
    performActiveToggle(setResetActive);
    if (!powered) return;
    setStageIdx(-1);
    setScanTime('');
  };

  const handleRead = () => {
    performActiveToggle(setReadActive);
    if (!powered || reading) return;

    setReading(true);

    setTimeout(() => {
      setReading(false);
      const nextIdx = (stageIdx + 1) % 5;
      setStageIdx(nextIdx);
      setScanTime(new Date().toTimeString().slice(0, 8));
    }, 1800);
  };

  const currentStageInfo = stageIdx >= 0 ? STAGES[stageIdx] : null;

  return (
    <KioskFrame powered={powered}>
      <ActionButtons
        onPowerToggle={handlePower}
        onReset={handleReset}
        onRead={handleRead}
        powered={powered}
        powerActiveToggle={powerActive}
        resetActiveToggle={resetActive}
        readActiveToggle={readActive}
        reading={reading}
      />
      
      <ScannerZone 
        reading={reading} 
        stageInfo={currentStageInfo} 
      />
      
      <InfoPanel 
        stageInfo={currentStageInfo} 
        stageIdx={stageIdx} 
        scanTime={scanTime} 
      />
    </KioskFrame>
  );
}

export default App;
