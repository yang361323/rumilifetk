// components/PieChartCard.tsx
import { useState } from "react";
import { RPieChartCanvas } from "@/components/R";
import styles from "./styles.module.css";

export default function PieChartCard() {
  const [pieData] = useState([
    { label: "Online Store", value: 485, color: "#007AFF" },
  ]);

  return (
    <div className={styles.pieChartCard}>
      <h3>按销售渠道统计的总销售额</h3>
      <RPieChartCanvas data={pieData} title="销售额" />
    </div>
  );
}
