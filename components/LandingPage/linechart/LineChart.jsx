import React from "react";
import Chart from "chart.js";
import styles from './chart.module.scss'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "January", Total: 1200 , Order: 10},
  { name: "February", Total: 2100 , Order: 15 },
  { name: "March", Total: 800 , Order: 30 },
  { name: "April", Total: 1600 , Order: 25 },
  { name: "May", Total: 900 , Order: 60},
  { name: "June", Total: 1700 , Order: 55 },
];


const LineChart = ({ aspect, title }) => {
  return (
    <div className={styles.lineChart}>
      <div className="chart">
      <div className={styles.title}>{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="order" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          {/* <YAxis/> */}
          <CartesianGrid strokeDasharray="3 3" className={styles.chartGrid} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
          <Area
            type="monotone"
            dataKey="Order"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#order)"
          />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </div> 
  );
};

export default LineChart;