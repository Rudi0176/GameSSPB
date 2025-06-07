export type Difficulty = 'leicht' | 'mittel' | 'schwer';

export default function GameModeSelector({ onSelect }: { onSelect: (d: Difficulty) => void }) {
  return (
    <div className="space-y-4">
      <p className="text-lg">Wähle eine Schwierigkeitsstufe:</p>
      <div className="flex flex-col gap-2 items-center">
        <button className="btn" onClick={() => onSelect('leicht')}>Leicht 🟢</button>
        <button className="btn" onClick={() => onSelect('mittel')}>Mittel 🟡</button>
        <button className="btn" onClick={() => onSelect('schwer')}>Schwer 🔴</button>
      </div>
    </div>
  );
}
