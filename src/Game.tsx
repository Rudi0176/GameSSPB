import { useState } from 'react';
import ResultDisplay from './ResultDisplay';
import type { Difficulty } from './GameModeSelector';

const CHOICES = ['schere', 'stein', 'papier', 'brunnen'] as const;
type Choice = typeof CHOICES[number];

export default function Game({
  difficulty,
  onReset,
}: {
  difficulty: Difficulty;
  onReset: () => void;
}) {
  const [playerWins, setPlayerWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);
  const [resultText, setResultText] = useState('');

  const getComputerChoice = (playerChoice: Choice): Choice => {
    if (difficulty === 'leicht') {
      return CHOICES[Math.floor(Math.random() * CHOICES.length)];
    } else if (difficulty === 'mittel') {
      return Math.random() < 0.5
        ? playerChoice
        : CHOICES[Math.floor(Math.random() * CHOICES.length)];
    } else {
      const beats: Record<Choice, Choice[]> = {
        schere: ['papier'],
        stein: ['schere'],
        papier: ['stein', 'brunnen'],
        brunnen: ['schere', 'stein'],
      };
      for (const choice of CHOICES) {
        if (beats[choice].includes(playerChoice)) return choice;
      }
      return CHOICES[Math.floor(Math.random() * CHOICES.length)];
    }
  };

  const determineResult = (player: Choice, computer: Choice) => {
    const beats: Record<Choice, Choice[]> = {
      schere: ['papier'],
      stein: ['schere'],
      papier: ['stein', 'brunnen'],
      brunnen: ['schere', 'stein'],
    };

    if (player === computer) return 'Unentschieden';
    if (beats[player].includes(computer)) return 'Gewonnen';
    return 'Verloren';
  };

  const handleClick = (choice: Choice) => {
    const compChoice = getComputerChoice(choice);
    const result = determineResult(choice, compChoice);
    if (result === 'Gewonnen') setPlayerWins((p) => p + 1);
    else if (result === 'Verloren') setComputerWins((c) => c + 1);
    setResultText(
      `Du hast ${choice} gewählt. Computer wählte ${compChoice}. → Du hast ${result}.`
    );
  };

  const isGameOver = playerWins === 3 || computerWins === 3;
  const finalText = playerWins === 3 ? '✅ Du hast gewonnen!' : '❌ Du hast verloren!';

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <p className="text-lg">
        Schwierigkeit: <strong>{difficulty}</strong>
      </p>

      {!isGameOver && (
        <div className="flex justify-center gap-4 flex-wrap">
          {CHOICES.map((choice) => (
            <button key={choice} onClick={() => handleClick(choice)} className="text-center">
              <img src={`/${choice}.png`} alt={choice} className="w-24 h-24 mx-auto" />
              <p className="capitalize mt-2">{choice}</p>
            </button>
          ))}
        </div>
      )}

      <ResultDisplay
        resultText={resultText}
        playerWins={playerWins}
        computerWins={computerWins}
      />

      {isGameOver && (
        <div className="text-center space-y-3">
          <p className="text-xl font-bold">{finalText}</p>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Nochmal spielen
          </button>
        </div>
      )}
    </div>
  );
}
