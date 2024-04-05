import { useState } from "react";
import Chart from "react-apexcharts";

const ResponsiveChart = () => {
  const [options] = useState({
    series: [
      {
        name: "Campaign",
        data: [31, 40, 43, 47, 42, 50, 46, 51, 47, 54, 50, 58],
      },
      {
        name: "Participants",
        data: [55, 32, 45, 32, 34, 38, 41, 36, 34, 46, 41, 34],
      },
    ],
    chart: {
      height: 400,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  });

  return (
    <section className="w-full flex flex-col items-start gap-5">
      <section className="flex items-center justify-between">
        <div className>
          <h2>
            Ongoing Campaign <span>Join Lexifay</span>
          </h2>
        </div>
        <div className></div>
      </section>

      <Chart
        options={options}
        series={options.series}
        type="area"
        height={options.chart.height}
      />
    </section>
  );
};

export default ResponsiveChart;
