import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 100,
    percentage: 100,
    status: "failed",
  },
  {
    name: "Feb",
    uv: 3000,
    percentage: 100,
    status: "success",
  },
  {
    name: "Mar",
    uv: 2000,
    percentage: 100,
    status: "fail",
  },
  {
    name: "Apr",
    uv: 2780,
    percentage: 100,
    status: "success",
  },
  {
    name: "May",
    uv: 1890,
    percentage: 100,
    status: "fail",
  },
  {
    name: "Jun",
    uv: 2390,
    percentage: 100,
    status: "success",
  },
  {
    name: "Jul",
    uv: 3490,
    percentage: 100,
    status: "fail",
  },
  {
    name: "Aug",
    uv: 2000,
    percentage: 100,
    status: "success",
  },
  {
    name: "Sept",
    uv: 2780,
    percentage: 100,
    status: "fail",
  },
  {
    name: "Oct",
    uv: 1890,
    percentage: 100,
    status: "success",
  },
  {
    name: "Nov",
    uv: 2390,
    percentage: 100,
    status: "fail",
  },
  {
    name: "Dec",
    uv: 3490,
    percentage: 100,
    status: "success",
  },
];

const ResponsiveChart = () => {
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

      <section className="w-full">
        <ResponsiveContainer width="98%" height="98%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 10,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="25%"
                  stopColor="rgb(14, 134, 96)"
                  stopOpacity={0.35}
                />
                <stop
                  offset="75%"
                  stopColor="rgb(0, 169, 145)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={true}
              tickLine={false}
              tickMargin={20}
              tickFormatter={function (value) {
                if (value > 999999) {
                  return value / 1000000 + "M";
                } else if (value > 999) {
                  return value / 1000 + "K";
                } else {
                  return value;
                }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#00a991"
              strokeWidth={"2px"}
              fillOpacity={1}
              fill="url(#colorUv)"
              onMouseOver={() => (tooltip = "uv")}
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </section>
  );
};

let tooltip;
const CustomTooltip = ({ active, payload }) => {
  if (!active || !tooltip) return null;
  for (const bar of payload) {
    if (bar.dataKey === tooltip) {
      return (
        <div className="flex flex-col gap-2 bg-primary p-3 rounded text-secondary font-medium text-sm">
          <div className="flex">
            <h2>{payload[0].payload.name}</h2>
          </div>
          <small>Transaction volume {bar.value.toFixed(2)} </small>
        </div>
      );
    }
  }
  return null;
};

export default ResponsiveChart;
