// app/components/R/Charts/REchartsFunnel.tsx
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface FunnelChartProps {
  data: { name: string; value: number }[];
  title: string;
  width?: string;
  height?: string;
}

export default function REchartsFunnel({
  data,
  title,
  width = "100%",
  height = "230px",
}: FunnelChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        show: false,
      },
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        top: "10%",
        containLabel: true,
      },
      series: [
        {
          name: title,
          type: "funnel",
          left: "10%",
          top: "10%",
          right: "10%",
          bottom: "10%",
          label: {
            show: true,
            position: "inside",
            formatter: "{b}\n{c}",
            fontSize: 10,
            color: "#000000",
          },
          labelLine: {
            show: false,
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#13ACF0" },
              { offset: 1, color: "#5ECDF7" },
            ]),
          },
          emphasis: {
            label: {
              formatter: "{b}\n{c}",
            },
          },
          data: data.map((item) => ({
            name: item.name,
            value: item.value,
          })),
        },
      ],
    };

    chart.setOption(option);

    const handleResize = () => {
      chart.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [data, title]);

  return (
    <div className="echarts-funnel-container">
      <div ref={chartRef} style={{ width: width, height: height }} />
    </div>
  );
}