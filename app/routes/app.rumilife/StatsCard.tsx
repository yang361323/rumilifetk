// components/StatsCard.tsx
import styles from './styles.module.css';

interface StatsCardProps {
  title: string;
  value: string;
  percentage: number;
  trend: 'up' | 'down' | 'neutral';
}

export default function StatsCard({ title, value, percentage, trend }: StatsCardProps) {
  return (
    <div className={styles.statsCard}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
      <div className={`${styles.trend} ${trend}`}>
        {percentage > 0 ? '+' : ''}{percentage}%
      </div>
    </div>
  );
}