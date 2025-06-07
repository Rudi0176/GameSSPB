import { useState } from 'react';
import Game from './Game';
import GameModeSelector, { type Difficulty } from './GameModeSelector';

export default function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white text-gray-900">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-800 drop-shadow">
          Schere, Stein, Papier, Brunnen
        </h1>
        {difficulty ? (
          <Game difficulty={difficulty} onReset={() => setDifficulty(null)} />
        ) : (
          <div className="space-y-4">
            <p className="text-lg font-medium">Wähle eine Schwierigkeitsstufe:</p>
            <GameModeSelector onSelect={setDifficulty} />
          </div>
        )}
      </div>
    </div>
  );
}
