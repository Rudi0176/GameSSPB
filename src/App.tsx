import { useState } from 'react';
import Game from './Game'; // ✅ direkt im src-Ordner
import GameModeSelector, { type Difficulty } from './GameModeSelector';

export default function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  return (
    <div className="min-h-screen p-4 text-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Schere, Stein, Papier, Brunnen</h1>
      {difficulty ? (
        <Game difficulty={difficulty} onReset={() => setDifficulty(null)} />
      ) : (
        <GameModeSelector onSelect={setDifficulty} />
      )}
    </div>
  );
}
