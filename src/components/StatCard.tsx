type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

function StatCard({ title, value, description }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h3 className="text-3xl font-bold mt-3">{value}</h3>
      <p className="text-sm text-slate-500 mt-2">{description}</p>
    </div>
  );
}

export default StatCard;