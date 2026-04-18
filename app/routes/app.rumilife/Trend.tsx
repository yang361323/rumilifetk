// app/components/Trend.tsx

interface TrendProps {
  type: 'up' | 'down' | 'neutral';
  percentage: number;
}

export default function Trend({ type, percentage }: TrendProps) {
  let colorClass = 'text-gray-500';
  let icon = '−'; // 中性符号

  if (type === 'up') {
    colorClass = 'text-green-600';
    icon = '↑';
  } else if (type === 'down') {
    colorClass = 'text-red-600';
    icon = '↓';
  }

  return (
    <div className={`flex items-center text-sm font-medium ${colorClass}`}>
      <span className="mr-1">{icon}</span>
      <span>{Math.abs(percentage)}%</span>
    </div>
  );
}