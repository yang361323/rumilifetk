// app/app.rumilife/ConversionRateChart.tsx
import { REchartsLine } from "@/components/R";

const conversionData = [
  { date: "2025-01", value: 2.37 },
  { date: "2025-02", value: 2.39 },
  { date: "2025-03", value: 2.38 },
  { date: "2025-04", value: 2.36 },
  { date: "2025-05", value: 2.32 },
  { date: "2025-06", value: 2.29 },
  { date: "2025-07", value: 2.31 },
  { date: "2025-08", value: 2.39 },
  { date: "2025-09", value: 2.42 },
  { date: "2025-10", value: 2.27 },
  { date: "2025-11", value: 2.01 },
  { date: "2025-12", value: 1.72 },
];

export default function ConversionRateChart() {
  return (
    <div className="chart-wrapper">
      <h3>转化率随时间变化</h3>
      <REchartsLine data={conversionData} title="转化率" unit="%" />
    </div>
  );
}
