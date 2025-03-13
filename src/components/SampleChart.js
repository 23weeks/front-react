import React, { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./SampleChart.css"; // CSS 파일 사용

  //API REQUEST
  console.log("API_URL : ", process.env.REACT_APP_API_URL);

  fetch(`${process.env.REACT_APP_API_URL}/api/stocks`)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(err => console.error(err));

const data = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
];

const SampleChart = () => {

  return (
    <div className="chart-container">
      <h2>Sample Data</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        <Line type="monotone" dataKey="amt" stroke="#aaaaaa" />
      </LineChart>
    </div>
  );
};

export default SampleChart;
