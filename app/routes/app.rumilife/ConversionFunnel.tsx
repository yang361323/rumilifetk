// app/app.rumilife/ConversionFunnel.tsx
import { REchartsBar } from "@/components/R";

const funnelData = [
  { name: "访问", value: 678453 },
  { name: "加入购物车", value: 234276 },
  { name: "到达结账", value: 20354 },
  { name: "完成购买", value: 15197 },
];

export default function ConversionFunnel() {
  return (
    <div className="chart-wrapper">
      <h3>月均转化率细分</h3>
      <REchartsBar data={funnelData} title="转化路径" showAxis={false} showXAxis={true} />
    </div>
  );
}
