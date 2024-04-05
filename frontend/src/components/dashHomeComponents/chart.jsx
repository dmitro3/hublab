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
    // colors: ["#039BFA", "#2D37485C", "#4ab6fb", "#c4c6cd"],
  });

  return (
    <section className="w-full flex flex-col items-start md:items-center gap-5">

    <div className>
      <h2></h2>
    </div>

      <Chart
        options={options}
        series={options.series}
        type="area"
        height={options.chart.height}
        // color={options.colors}
      />
    </section>
  );
};

export default ResponsiveChart;
