// routes/dashboard.tsx
import { LinksFunction } from "react-router";
import DashboardCard from "./DashboardCard";
import SalesTrendChart from "./SalesTrendChart";
import SalesBreakdown from "./SalesBreakdown";
import ChannelSalesPie from "./ChannelSalesPie";
import AvgOrderValueChart from "./AvgOrderValueChart";
import ProductSalesRank from "./ProductSalesRank";
import VisitTrendChart from "./VisitTrendChart";
import ConversionRateChart from "./ConversionRateChart";
import ConversionFunnel from "./ConversionFunnel";
import stylesheet from "./styles.css?url";
import { RDateRangeField } from "@/components/R";

interface dashboardProps {
  date: string;
  value: number;
}

export const links: LinksFunction = () => {
  return [{rel: "stylesheet", href: stylesheet}]
}

const grossSalesTrend: dashboardProps[] = [
  { date: "2025-08", value: 1756789 },
  { date: "2025-09", value: 1645678 },
  { date: "2025-10", value: 1589012 },
  { date: "2025-11", value: 1634567 },
  { date: "2025-12", value: 1489226 },
  { date: "2026-01", value: 1245678 },
  { date: "2026-02", value: 1189234 },
  { date: "2026-03", value: 1456789 },
  { date: "2026-04", value: 1523456 },
  { date: "2026-05", value: 1678901 },
  { date: "2026-06", value: 1734567 },
  { date: "2026-07", value: 1823456 },
];

const returningCustomerTrend: dashboardProps[] = [
  { date: "2025-08", value: 5.7 },
  { date: "2025-09", value: 5.5 },
  { date: "2025-10", value: 5.4 },
  { date: "2025-11", value: 5.6 },
  { date: "2025-12", value: 5.45 },
  { date: "2026-01", value: 4.8 },
  { date: "2026-02", value: 5.1 },
  { date: "2026-03", value: 5.3 },
  { date: "2026-04", value: 5.5 },
  { date: "2026-05", value: 5.6 },
  { date: "2026-06", value: 5.8 },
  { date: "2026-07", value: 5.9 },
];

const shippedOrdersTrend: dashboardProps[] = [
  { date: "2025-08", value: 73 },
  { date: "2025-09", value: 68 },
  { date: "2025-10", value: 70 },
  { date: "2025-11", value: 81 },
  { date: "2025-12", value: 87 },
  { date: "2026-01", value: 52 },
  { date: "2026-02", value: 48 },
  { date: "2026-03", value: 61 },
  { date: "2026-04", value: 65 },
  { date: "2026-05", value: 72 },
  { date: "2026-06", value: 76 },
  { date: "2026-07", value: 79 },
];

const ordersTrend: dashboardProps[] = [
  { date: "2025-08", value: 79 },
  { date: "2025-09", value: 74 },
  { date: "2025-10", value: 76 },
  { date: "2025-11", value: 88 },
  { date: "2025-12", value: 94 },
  { date: "2026-01", value: 58 },
  { date: "2026-02", value: 54 },
  { date: "2026-03", value: 67 },
  { date: "2026-04", value: 71 },
  { date: "2026-05", value: 78 },
  { date: "2026-06", value: 82 },
  { date: "2026-07", value: 85 },
];
export default function Dashboard() {
  function sumTotal(arr: dashboardProps[]) {
    return arr.reduce((acc, cur) => acc + cur.value, 0);
  }

  return (
    <div className="dashboard">
      <RDateRangeField startDate="2025-08-01" endDate="2026-07-31" style={{marginBottom: '10px'}} />

      {/* 第一行：四个卡片 */}
      <div className="row row-1">
        <DashboardCard title="毛销售额" value={`US$ ${sumTotal(grossSalesTrend)}`} trendData={grossSalesTrend} />
        <DashboardCard title="回头客率" value="5.45%" trendData={returningCustomerTrend} unit="%" />
        <DashboardCard title="已发货订单" value={sumTotal(shippedOrdersTrend)} trendData={shippedOrdersTrend} />
        <DashboardCard title="订单" value="77" trendData={ordersTrend} />
      </div>

      {/* 第二行：左侧大图 + 右侧细分 */}
      <div className="row row-2">
        <div className="col col-2">
          <SalesTrendChart />
        </div>
        <div className="col col-1">
          <SalesBreakdown />
        </div>
      </div>

      {/* 第三行：三个等宽块 */}
      <div className="row row-3">
        <div className="col col-1">
          <ChannelSalesPie />
        </div>
        <div className="col col-1">
          <AvgOrderValueChart />
        </div>
        <div className="col col-1">
          <ProductSalesRank />
        </div>
      </div>

      {/* 第四行：三个等宽块 */}
      <div className="row row-4">
        <div className="col col-1">
          <VisitTrendChart />
        </div>
        <div className="col col-1">
          <ConversionRateChart />
        </div>
        <div className="col col-1">
          <ConversionFunnel />
        </div>
      </div>
    </div>
  );
}