import { useState } from 'react';
import Game from './Game';
import GameModeSelector, { type Difficulty } from './GameModeSelector';

export default function App() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Schere, Stein, Papier, Brunnen</h1>
        {difficulty ? (
          <Game difficulty={difficulty} onReset={() => setDifficulty(null)} />
        ) : (
          <GameModeSelector onSelect={setDifficulty} />
        )}
      </div>
    </div>
  );
}
