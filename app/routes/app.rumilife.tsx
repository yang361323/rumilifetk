import { useState } from "react";

const totalSales = [
    { month: "2025-12", volume: "323935", revenue: "2747961.99" },
    { month: "2025-11", volume: "187949", revenue: "1601501.1" },
    { month: "2025-10", volume: "164827", revenue: "1376331.96" },
    { month: "2025-09", volume: "163781", revenue: "1399657.08" },
    { month: "2025-08", volume: "192361", revenue: "1666268.56" },
    { month: "2025-07", volume: "175160", revenue: "1603061.44" },
    { month: "2025-06", volume: "149499", revenue: "1380003.54" },
    { month: "2025-05", volume: "164373", revenue: "1443978.44" },
    { month: "2025-04", volume: "155191", revenue: "1351058.06" },
    { month: "2025-03", volume: "152291", revenue: "1358794.45" },
    { month: "2025-02", volume: "132651", revenue: "1402772.07" },
    { month: "2025-01", volume: "143275", revenue: "1435969.8" },
];

export default function RumilifePage() {

  function sumVolume() {
    return totalSales.reduce((acc, cur) => acc + parseInt(cur.volume), 0).toFixed(2);
  }
  function sumRevenue() {
    return totalSales.reduce((acc, cur) => acc + parseFloat(cur.revenue), 0).toFixed(2);
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
            <s-section heading="Sales Volume">{sumVolume()}</s-section>
            <s-section heading="Sales Revenue">{sumRevenue()}</s-section>
        </s-grid>
      </s-section>

      {/* charts */}
      {/* <s-grid gridTemplateColumns="repeat(2, 1fr)" gap="small" justifyContent="center">
        <s-section heading="Sales Volume">
        </s-section>
        <s-section>

        </s-section>
      </s-grid> */}

      {/* table content */}
      <s-section heading="">
        <s-table>
          <s-table-header-row>
            <s-table-header listSlot="primary">Month</s-table-header>
            <s-table-header format="numeric">Sales Volume</s-table-header>
            <s-table-header>Sales Revuenue</s-table-header>
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
                <s-table-cell>{sale.revenue}</s-table-cell>
              </s-table-row>
            ))}
          </s-table-body>
        </s-table>
      </s-section>
    </s-page>
  );
}
