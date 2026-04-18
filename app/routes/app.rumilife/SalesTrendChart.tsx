// app/app.rumilife/SalesTrendChart.tsx
import { REchartsLine } from "@/components/R";

const salesData = [
  { date: "2025-01", value: 1245678.32 },
  { date: "2025-02", value: 1189234.56 },
  { date: "2025-03", value: 1456789.23 },
  { date: "2025-04", value: 1523456.78 },
  { date: "2025-05", value: 1678901.45 },
  { date: "2025-06", value: 1734567.89 },
  { date: "2025-07", value: 1823456.12 },
  { date: "2025-08", value: 1756789.34 },
  { date: "2025-09", value: 1645678.90 },
  { date: "2025-10", value: 1589012.67 },
  { date: "2025-11", value: 1634567.23 },
  { date: "2025-12", value: 1489226.00 },
];

const total = salesData.reduce((acc, cur) => acc + cur.value, 0).toFixed(2);

export default function SalesTrendChart() {
  return (
    <div className="chart-wrapper">
      <h3 style={{ marginBottom: "0px" }}>总销售额随时间变化</h3>
      <h4 style={{ marginBottom: "0px" }}>US${total}</h4>
      <REchartsLine data={salesData} title="总销售额" unit="US$" />
    </div>
  );
}
