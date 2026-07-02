type ProgressBarProps = {
  value: number;
  max?: number;
};

function ProgressBar({ value, max = 100 }: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-slate-900 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default ProgressBar;