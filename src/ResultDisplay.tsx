interface Props {
  resultText: string;
  playerWins: number;
  computerWins: number;
}

export default function ResultDisplay({
  resultText,
  playerWins,
  computerWins,
}: Props) {
  return (
    <div className="mt-4 space-y-2">
      <p>{resultText}</p>
      <p className="text-lg">Spielstand: Du {playerWins} – {computerWins} Computer</p>
    </div>
  );
}
