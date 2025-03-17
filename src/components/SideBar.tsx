import React from "react";
import styled from "styled-components";
import { FaChartLine, FaChartBar } from "react-icons/fa";
import { BiLineChart } from "react-icons/bi";

const SidebarContainer = styled.div<{ $isVisible: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: #282c34;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    transform: ${({ $isVisible }) =>
      $isVisible ? "translateX(0)" : "translateX(-100%)"};
    width: 200px;
    z-index: 10;
    position: absolute;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
`;

const ChartOption = styled.button<{ $isSelected: boolean }>`
  background-color: transparent;
  border: none;
  color: white;
  margin: 10px 0;
  padding: 15px 15px;
  cursor: pointer;
  transition: background-color 0.3s, font-size 0.2s;
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

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background-color: #61dafb;
    color: #282c34;
  `}
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: transparent;
  border: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
  z-index: 20;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Sidebar = ({
  selectedChart,
  onChartSelect,
  isSidebarVisible,
  toggleSidebar
}: {
  selectedChart: string;
  onChartSelect: (chart: string) => void;
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isSidebarVisible ? "☰" : "☰"} {/*✖*/}
      </ToggleButton>
      <SidebarContainer $isVisible={isSidebarVisible}>
        <Title>Chart Modes</Title>
        <ChartOption
          $isSelected={selectedChart === "Line Chart"}
          onClick={() => onChartSelect("Line Chart")}
        >
          <FaChartLine />
          <span>Line Chart</span>
        </ChartOption>
        <ChartOption
          $isSelected={selectedChart === "Candle Chart"}
          onClick={() => onChartSelect("Candle Chart")}
        >
          <BiLineChart />
          <span>Candle Chart</span>
        </ChartOption>
        <ChartOption
          $isSelected={selectedChart === "Volume Chart"}
          onClick={() => onChartSelect("Volume Chart")}
        >
          <FaChartBar />
          <span>Volume Chart</span>
        </ChartOption>
      </SidebarContainer>
    </>
  )
};

export default Sidebar;
