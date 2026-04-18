// app/components/R/Echarts/REchartsPie.tsx
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface PieChartProps {
  data: { name: string; value: number; color?: string }[];
  title: string;
}

export default function REchartsPie({ data, title }: PieChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      // legend: {
      //   show: false,
      // },
      series: [
        {
          name: title,
          type: "pie",
          radius: ["75%", "100%"],
          center: ["25%", "50%"],
          avoidLabelOverlap: false,
          emphasis: {
            label: {
              show: true,
            },
          },
          data: data.map((item) => ({
            name: item.name,
            value: item.value,
            itemStyle: {
              color: item.color || "#13ACF0"
            }
          })),
          labelLine: {
            show: false,
          },
          label: {
            show: true,
            position: "center",
            formatter: () => {
              const total = data.reduce((acc, cur) => acc + cur.value, 0);
              return `US$${total}`;
            },
            fontSize: 16,
            fontWeight: "bold",
            color: "#000000",
          },
        },
      ],
      legend: {
        orient: "vertical",
        right: "0%",
        top: "20%",
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
          fontSize: 12,
          color: "#000000",
        },
        formatter: (name: string) => {
          const item = data.find((d) => d.name === name);
          if (!item) return name;
          // const total = data.reduce((sum, d) => sum + d.value, 0);
          // const percent = ((item.value / total) * 100).toFixed(1);
          return `${name}  US$${item.value}`;
        },
      },
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [data, title]);

  return (
    <div className="echarts-pie-container">
      <div ref={chartRef} style={{ width: "100%", height: "200px" }} />
    </div>
  );
}
