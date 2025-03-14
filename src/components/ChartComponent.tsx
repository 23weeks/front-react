import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BarChart, Bar } from "recharts";
import { ChartData } from "./types"; // API RESPONSE DATA TYPE

interface ChartComponentProps {
  chartType: string;
  data: ChartData[]; // 주식 데이터를 받을 타입을 지정
}

const ChartComponent: React.FC<ChartComponentProps> = ({ chartType, data }) => {
  switch (chartType) {
    case "Line Chart":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stock_time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="close" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      );
    case "Candle Chart":
      // 캔들차트는 복잡한 구조이므로 라이브러리를 추가하거나 별도 구현해야 할 수 있음
      return (
        <div>Candle Chart is not implemented yet</div>
      );
    case "Volume Chart":
      return (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stock_time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="volume" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
    default:
      return <div>Select a chart type</div>;
  }
};

export default ChartComponent;
