export interface StageInfo {
  label: string;
  name: string;
  vc: string;
  firm: string;
  tex: string;
  use: string;
  days: string;
  status: string;
  bc: string;
  dot: string;
}

export const STAGES: StageInfo[] = [
  { label: 'Stage 1', name: 'Firm',      vc:'info', firm:'Very firm', tex:'Hard',         use:'Not ready',   days:'6–8', status:'Firm — Stage 1',       bc:'blue', dot:'blue' },
  { label: 'Stage 2', name: 'Pre-cond.', vc:'info', firm:'Firm',      tex:'Resistant',    use:'Ripening',    days:'4–5', status:'Pre-conditioned — Stage 2', bc:'blue', dot:'blue' },
  { label: 'Stage 3', name: 'Breaking',  vc:'warn', firm:'Semi-firm', tex:'Slightly soft',use:'Guacamole',   days:'2–3', status:'Breaking — Stage 3',    bc:'warn', dot:'warn' },
  { label: 'Stage 4', name: 'Firm Ripe', vc:'ok',   firm:'Soft',      tex:'Yielding',     use:'Slicing',     days:'1–2', status:'Firm Ripe — Stage 4',   bc:'ok',   dot:'' },
  { label: 'Stage 5', name: 'Ripe',      vc:'ok',   firm:'Very soft', tex:'Press easy',   use:'Guac/Spread', days:'0–1', status:'Perfect Ripe — Stage 5',bc:'ok',   dot:'' },
];
