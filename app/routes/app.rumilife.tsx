import {
  Bar,
  BarChart,
  Label,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ToTalSale = {
  month: string;
  volume: string;
  revenue: string;
  order: string;
};

const totalSales: ToTalSale[] = [
  {
    month: "2025-12",
    volume: "323935",
    revenue: "2747961.99",
    order: "100827",
  },
  { month: "2025-11", volume: "187949", revenue: "1601501.1", order: "62690" },
  { month: "2025-10", volume: "164827", revenue: "1376331.96", order: "54112" },
  { month: "2025-09", volume: "163781", revenue: "1399657.08", order: "54666" },
  { month: "2025-08", volume: "192361", revenue: "1666268.56", order: "67025" },
  { month: "2025-07", volume: "175160", revenue: "1603061.44", order: "64248" },
  { month: "2025-06", volume: "149499", revenue: "1380003.54", order: "55508" },
  { month: "2025-05", volume: "164373", revenue: "1443978.44", order: "59485" },
  { month: "2025-04", volume: "155191", revenue: "1351058.06", order: "54536" },
  { month: "2025-03", volume: "152291", revenue: "1358794.45", order: "53636" },
  { month: "2025-02", volume: "132651", revenue: "1402772.07", order: "47356" },
  { month: "2025-01", volume: "143275", revenue: "1435969.8", order: "51500" },
];

export default function RumilifePage() {
  function sumTotal(key: keyof ToTalSale) {
    return totalSales
      .reduce((acc, cur) => {
        const value = cur[key];
        return acc + (value ? parseFloat(value) : 0);
      }, 0)
      .toFixed(2);
  }

  return (
    <s-page heading="Rumilife">
      <s-section>
        <s-grid gridTemplateColumns="repeat(4, 1fr)">
          <s-date-field defaultView="2025-01" defaultValue="2025-01-01" />
          <s-date-field defaultView="2025-12" defaultValue="2025-12-31" />
        </s-grid>
      </s-section>

      {/* total layout */}
      <s-section>
        <s-grid
          gridTemplateColumns="repeat(4, 1fr)"
          gap="small"
          justifyContent="center"
        >
          <s-section heading="Sales Volume">{sumTotal("volume")}</s-section>
          <s-section heading="Sales Revenue">$ {sumTotal("revenue")}</s-section>
          <s-section heading="Order Volume">{sumTotal("order")}</s-section>
        </s-grid>
      </s-section>

      {/* charts */}
      <s-grid
        gridTemplateColumns="repeat(4, 1fr)"
        gap="small"
        justifyContent="center"
        padding="none none small none"
      >
        <s-grid-item gridColumn="span 2">
          <s-section heading="Sales Volume">
            <LineChart
              style={{
                width: "100%",
                aspectRatio: 1.618,
                margin: "auto",
              }}
              responsive
              data={totalSales}
            >
              <XAxis dataKey="month" style={{ fontSize: "0.6rem" }} />
              <YAxis width="auto" style={{ fontSize: "0.6rem" }} />
              <Tooltip />
              <Line type="monotone" dataKey="volume" stroke="#13ACF0" />
            </LineChart>
          </s-section>
        </s-grid-item>
        <s-grid-item gridColumn="span 2">
          <s-section heading="Sales Revenue">
            <BarChart
              style={{ width: "100%", aspectRatio: 1.618, margin: "auto" }}
              responsive
              data={totalSales}
            >
              <XAxis dataKey="month" style={{ fontSize: "0.6rem" }} />

              <YAxis width="auto" style={{ fontSize: "0.6rem" }} />
              <Bar
                type="monotone"
                dataKey="revenue"
                stroke="#13ACF0"
                fill="#13ACF0"
              />
              {/* <Bar type="monotone" dataKey="revenue" stroke="#29f013" fill="#29f013" /> */}
              <Tooltip />
              <Label />
            </BarChart>
          </s-section>
        </s-grid-item>
      </s-grid>

      {/* table content */}
      <s-section heading="">
        <s-table>
          <s-table-header-row>
            <s-table-header listSlot="primary">Month</s-table-header>
            <s-table-header format="numeric">Sales Volume</s-table-header>
            <s-table-header>Sales Revuenue</s-table-header>
            <s-table-header>Order Number</s-table-header>
          </s-table-header-row>
          <s-table-body>
            {/* table row */}
            {totalSales.map((sale) => (
              <s-table-row
                key={sale.month}
                clickDelegate="mountain-view-checkbox"
              >
                <s-table-cell>{sale.month}</s-table-cell>
                <s-table-cell>{sale.volume}</s-table-cell>
                <s-table-cell>$ {sale.revenue}</s-table-cell>
                <s-table-cell>{sale.order}</s-table-cell>
              </s-table-row>
            ))}
          </s-table-body>
        </s-table>
      </s-section>
    </s-page>
  );
}
