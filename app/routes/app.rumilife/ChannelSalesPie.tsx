// app/app.rumilife/ChannelSalesPie.tsx
import { REchartsPie } from "@/components/R";

const channelData = [
  { name: "Online Store", value: 12456789.32, color: "#13ACF0" },
  { name: "POS", value: 3245678.45, color: "#FFB347" },
  { name: "Facebook", value: 1567890.23, color: "#4CAF50" },
  { name: "Instagram", value: 897000.49, color: "#9C27B0" },
  { name: "TikTok", value: 600000.0, color: "#FF5722" },
];

export default function ChannelSalesPie() {
  return (
    <div className="chart-wrapper">
      <h3>销售渠道</h3>
      <REchartsPie data={channelData} title="销售渠道" />
    </div>
  );
}
