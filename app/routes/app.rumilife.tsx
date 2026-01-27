import { useState } from "react";

const totalSales = [
    { month: "2026-01", volume: "122981", revenue: "943791.01" },
    { month: "2025-12", volume: "323935", revenue: "2497961.99" },
    { month: "2025-11", volume: "187949", revenue: "1351501.1" },
    { month: "2025-10", volume: "164827", revenue: "1126331.96" },
    { month: "2025-09", volume: "163781", revenue: "1149657.08" },
    { month: "2025-08", volume: "192361", revenue: "1416268.56" },
    { month: "2025-07", volume: "175160", revenue: "1353061.44" },
    { month: "2025-06", volume: "149499", revenue: "1130003.54" },
    { month: "2025-05", volume: "164373", revenue: "1193978.44" },
    { month: "2025-04", volume: "155191", revenue: "1101058.06" },
    { month: "2025-03", volume: "152291", revenue: "1108794.45" },
    { month: "2025-02", volume: "132651", revenue: "1052772.07" },
    { month: "2025-01", volume: "20294", revenue: "142178.79" },
];

export default function RumilifePage() {

  // const [totalSalesVolume, setTotalSalesVolume] = useState(0);
  // setTotalSalesVolume(totalSales.reduce((acc, curr) => acc + parseInt(curr.volume), 0));

  return (
    <s-page heading="Rumilife">
      <s-section>
        <s-grid gridTemplateColumns="repeat(4, 1fr)">
          <s-date-field defaultView="2025-01" defaultValue="2025-01-26" />
          <s-date-field defaultView="2026-01" defaultValue="2026-01-25" />
        </s-grid>
      </s-section>

      {/* total layout */}
      <s-section>
        <s-grid
          gridTemplateColumns="repeat(4, 1fr)"
          gap="small"
          justifyContent="center"
        >
          {/* <s-box border="base" borderRadius="base" background="transparent" overflow="hidden"> */}
            <s-section heading="Sales Volume">2105300</s-section>
          {/* </s-box> */}
          {/* <s-box border="base" borderRadius="base" background="transparent" overflow="hidden"> */}
            <s-section heading="Sales Revenue">16187358.49</s-section>
          {/* </s-box> */}
        </s-grid>
      </s-section>

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
