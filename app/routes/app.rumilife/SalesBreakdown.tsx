// app/app.rumilife/SalesBreakdown.tsx

import React from "react";

interface SalesBreakdownItem {
  title: string;
  value: string;
  isPositive?: boolean;
}

const SalesBreakdown: React.FC = () => {
  // export default function SalesBreakdown() {
  const breakdownItems: SalesBreakdownItem[] = [
    { title: "毛销售额", value: "US$18767358.49" },
    { title: "折扣", value: "-US$846407.87" },
    { title: "退货", value: "-US$1066006.47" },
    { title: "净销售额", value: "US$16854944.15" },
    { title: "运费", value: "US$2466577.25" },
    { title: "退货费", value: "US$0.00" },
    { title: "税款", value: "US$0.00" },
    { title: "总销售额", value: "US$18767358.49" },
  ];

  return (
    <div className="card-wrapper">
      <h3>总销售额细分</h3>
      <ul className="sales-breakdown">
        {breakdownItems.map((item, i) => (
          <li key={i} className="sales-breakdown-item">
            <div className="label">{item.title}</div>
            <div className="value">{item.value}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesBreakdown;
