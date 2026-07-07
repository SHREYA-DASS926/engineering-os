type ProgressBarProps = {
  value: number;
  max?: number;
};

function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className="h-3 overflow-hidden rounded-full bg-muted">
      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;