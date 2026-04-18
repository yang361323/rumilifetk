// app/app.rumilife/DashboardCard.tsx
import React from "react";
import { REchartsLine } from "@/components/R";

interface TrendDataItem {
  date: string;
  value: number;
}

interface DashboardCardProps {
  title: string;
  value: string;
  trendData: TrendDataItem[];
  unit?: string;
}

export default function DashboardCard({
  title,
  value,
  trendData,
  unit = "",
}: DashboardCardProps) {
  return (
    <div className="card">
      <div className="left">
        <p className="title">{title}</p>
        <p className="value">{value}</p>
      </div>
      <div className="right chart-coontainer">
        <REchartsLine data={trendData} title="销售额趋势" unit={unit} showAxis={false} height="40px" />
      </div>
    </div>
  );
}
