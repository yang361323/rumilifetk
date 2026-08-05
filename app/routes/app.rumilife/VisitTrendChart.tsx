// app/app.rumilife/VisitTrendChart.tsx
import { REchartsLine } from "@/components/R";

const visitData = [
  { date: "2025-08", value: 734567 },
  { date: "2025-09", value: 678901 },
  { date: "2025-10", value: 698765 },
  { date: "2025-11", value: 812345 },
  { date: "2025-12", value: 867890 },
  { date: "2026-01", value: 523456 },
  { date: "2026-02", value: 498234 },
  { date: "2026-03", value: 612345 },
  { date: "2026-04", value: 645678 },
  { date: "2026-05", value: 723456 },
  { date: "2026-06", value: 756789 },
  { date: "2026-07", value: 789012 },
];

export default function VisitTrendChart() {
  return (
    <div className="chart-wrapper">
      <h3>访问随时间变化</h3>
      <REchartsLine data={visitData} title="访问量" unit="" />
    </div>
  );
}
