import { useState } from "react";
import Chart from "react-apexcharts";
import { IoIosArrowDown } from "react-icons/io";

const ResponsiveDonutChart = () => {
  const [options] = useState({
    series: [44, 55, 41],
    chart: {
      type: "donut",
      height: 400,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <section className="w-full h-full md:w-[40%] flex flex-col items-start gap-5 p-5">
      <div className="relative flex items-center justify-center py-2 px-6 gap-3 rounded-lg border border-[#00ADEF]">
        <div className="rounded-lg border border-[#00ADEF] h-full w-full absolute right-[6px] bottom-[6px] z-[-1]"></div>
        <h2 className={`font-medium text-[14px] text-[#00ADEF]`}>
          Create Collection
        </h2>
        <span>
          <IoIosArrowDown className="text-[#00ADEF]" />
        </span>
      </div>
      <section className="w-full h-full flex flex-col items-start gap-5 border p-3 rounded-lg shadow-sm">
        <section className="flex items-center justify-between">
          <h2>Campaigns</h2>
        </section>
        <Chart
          options={options}
          series={options.series}
          type={options.chart.type}
          height={options.chart.height}
          className="w-full h-full"
        />
      </section>
    </section>
  );
};

export default ResponsiveDonutChart;
