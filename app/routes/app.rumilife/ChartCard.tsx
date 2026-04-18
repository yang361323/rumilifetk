// components/ChartCard.tsx
import styles from './styles.module.css';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ChartCard({ title, children }: ChartCardProps) {
  return (
    <div className={styles.chartCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      {children}
    </div>
  );
}