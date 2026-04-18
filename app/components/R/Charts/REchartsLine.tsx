// app/components/R/Echarts/REchartsLine.tsx
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface LineChartProps {
  data: { date: string; value: number }[];
  title: string;
  unit?: string;
  showGrid?: boolean;
  showAxis?: boolean;
  width?: string;
  height?: string;
}

export default function REchartsLine({
  data,
  title,
  unit = "",
  showGrid = true,
  showAxis = true,
  width = "100%",
  height = "230px",
}: LineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);
    const option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      grid: {
        left: "1%",
        right: "1%",
        bottom: "1%",
        top: "5%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: data.map((d) => d.date),
        show: showAxis,
        boundaryGap: false,
        axisLabel: {
          fontSize: 10,
          color: "#000000",
        },
      },
      yAxis: {
        type: "value",
        // name: unit,
        show: showAxis,
        axisLabel: {
          fontSize: 10,
          color: "#000000",
        },
        splitLine: {
          lineStyle: {
            color: "#eee",
          },
        },
      },
      series: [
        {
          name: title,
          type: "line",
          smooth: true,
          showSymbol: false,
          lineStyle: {
            color: "#13ACF0",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#13ACF0" },
              { offset: 1, color: "#FFFFFF" },
            ]),
          },
          data: data.map((d) => d.value),
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
  }, [data, title, unit, showGrid, showAxis]);

  return (
    <div className="echarts-line-container">
      <div ref={chartRef} style={{ width: width, height: height }} />
    </div>
  );
}
