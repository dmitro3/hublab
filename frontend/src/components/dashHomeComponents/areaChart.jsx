import { useState } from "react";
import Chart from "react-apexcharts";

const ResponsiveChart = () => {
  const [options] = useState({
    series: [
      {
        name: "Participants",
        data: [31, 40, 43, 47, 42, 50, 46, 51, 47, 54, 50, 58],
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
    <section className="w-full md:w-[60%] flex flex-col items-start gap-5 border-r p-[20px]">
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
        type={options.chart.type}
        height={options.chart.height}
        className="w-full h-full border rounded-lg"
      />
    </section>
  );
};

export default ResponsiveChart;
