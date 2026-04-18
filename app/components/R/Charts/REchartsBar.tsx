// app/components/R/Charts/REchartsBar.tsx
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface BarChartProps {
  data: { name: string; value: number }[];
  title: string;
  unit?: string;
  width?: string;
  height?: string;
  showAxis?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
}

export default function REchartsBar({
  data,
  title,
  unit = "",
  width = "100%",
  height = "230px",
  showAxis = true,
  showXAxis = false,
  showYAxis = false,
}: BarChartProps) {
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
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        show: showXAxis || showAxis,
        data: data.map((d) => d.name),
        axisLabel: {
          fontSize: 10,
          color: "#000000",
          rotate: 0,
        },
      },
      yAxis: {
        type: "value",
        show: showYAxis || showAxis,
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
          type: "bar",
          barWidth: "60%",
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#13ACF0" },
              { offset: 1, color: "#5ECDF7" },
            ]),
          },
          label: {
            show: true,
            position: "top",
            fontSize: 10,
            color: "#000000",
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
  }, [data, title, unit]);

  return (
    <div className="echarts-bar-container">
      <div ref={chartRef} style={{ width: width, height: height }} />
    </div>
  );
}