import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

import useInventoryHooks from "../../../Hooks/useInventoryHooks";

const StockVsDeliverdChart = () => {
  const [inventory] = useInventoryHooks([]);

  //   console.log(inventory);

  //   console.log(...inventory);
  //   const data = [
  //     {
  //       name: "Page A",
  //       uv: 4000,
  //       pv: 2400,
  //       amt: 2400,
  //     },
  //     {
  //       name: "Page B",
  //       uv: 3000,
  //       pv: 1398,
  //       amt: 2210,
  //     },
  //     {
  //       name: "Page C",
  //       uv: 2000,
  //       pv: 9800,
  //       amt: 2290,
  //     },
  //     {
  //       name: "Page D",
  //       uv: 2780,
  //       pv: 3908,
  //       amt: 2000,
  //     },
  //     {
  //       name: "Page E",
  //       uv: 1890,
  //       pv: 4800,
  //       amt: 2181,
  //     },
  //     {
  //       name: "Page F",
  //       uv: 2390,
  //       pv: 3800,
  //       amt: 2500,
  //     },
  //     {
  //       name: "Page G",
  //       uv: 3490,
  //       pv: 4300,
  //       amt: 2100,
  //     },
  //   ];

  const COLORS = ["#8FE", "#C49F", "#BB8", "#F82"];
  return (
    <div className="bg-yellow-200 py-4">
      <h1 className="text-2xl md:text-4xl font-black my-4 py-6">
        Stock vs Deliverd
      </h1>
      {/* <h2 className="text-2xl md:text-4xl font-black my-4">Inventory Items</h2> */}
      <div className="container flex  flex-wrap justify-around">
        <div className="">
          <LineChart
            width={300}
            height={300}
            data={inventory}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="StockQuantity"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="price" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div>
          <AreaChart
            width={300}
            height={300}
            data={inventory}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stackId="5"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="StockQuantity"
              stackId="5"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="DeliverdQuantiy"
              stackId="5"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default StockVsDeliverdChart;
