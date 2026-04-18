// app/app.rumilife/AvgOrderValueChart.tsx
import { REchartsLine } from "@/components/R";

const avgOrderData = [
  { date: "2025-01", value: 44.75 },
  { date: "2025-02", value: 46.15 },
  { date: "2025-03", value: 43.8 },
  { date: "2025-04", value: 45.6 },
  { date: "2025-05", value: 47.4 },
  { date: "2025-06", value: 48.25 },
  { date: "2025-07", value: 49.1 },
  { date: "2025-08", value: 47.85 },
  { date: "2025-09", value: 46.7 },
  { date: "2025-10", value: 48.55 },
  { date: "2025-11", value: 51.15 },
  { date: "2025-12", value: 52.8 },
];

export default function AvgOrderValueChart() {
  return (
    <div className="chart-wrapper">
      <h3>平均订单金额随时间变化</h3>
      <REchartsLine data={avgOrderData} title="平均订单金额" unit="US$" />
    </div>
  );
}
