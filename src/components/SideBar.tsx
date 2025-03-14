import React from "react";
import styled from "styled-components";
import { FaChartLine, FaChartBar } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";

const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const ChartOption = styled.button<{ isSelected: boolean }>`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  margin: 15px 0;
  padding: 20px 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 5px;

  svg {
    font-size: 28px;
    margin-right: 10px;
  }

  span {
    display: block;
    font-size: 24px;
  }

  &:hover {
    background-color: #61dafb;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #61dafb;
    color: #282c34;
  `}

  &:hover span {
    display: block; /* hover 시 텍스트 표시 */
  }
`;

const Sidebar = ({
  selectedChart,
  onChartSelect,
}: {
  selectedChart: string;
  onChartSelect: (chart: string) => void;
}) => {
  return (
    <SidebarContainer>
      <Title>Chart Modes</Title>
      <ChartOption
        isSelected={selectedChart === "Line Chart"}
        onClick={() => onChartSelect("Line Chart")}
      >
        <FaChartLine />
        <span>Line Chart</span>
      </ChartOption>
      <ChartOption
        isSelected={selectedChart === "Candle Chart"}
        onClick={() => onChartSelect("Candle Chart")}
      >
        <BiLineChart />
        <span>Candle Chart</span>
      </ChartOption>
      <ChartOption
        isSelected={selectedChart === "Volume Chart"}
        onClick={() => onChartSelect("Volume Chart")}
      >
        <FaChartBar />
        <span>Volume Chart</span>
      </ChartOption>
    </SidebarContainer>
  )
};

export default Sidebar;
