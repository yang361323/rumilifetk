// components/BreakdownCard.tsx
import styles from './styles.module.css';

interface BreakdownItem {
  label: string;
  value: string;
}

interface BreakdownCardProps {
  title: string;
  items: BreakdownItem[];
}

export default function BreakdownCard({ title, items }: BreakdownCardProps) {
  return (
    <div className={styles.breakdownCard}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <ul className={styles.breakdownList}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.breakdownItem}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.value}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}