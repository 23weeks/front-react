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

const ChartOption = styled.button`
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
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 200px;

  svg {
    font-size: 40px;
    transition: opacity 0.3s; /* 아이콘 숨길 때 부드럽게 처리 */
  }

  span {
    display: none;
    font-size: 30px;
    position: absolute;
    top: 24px;
  }

  &:hover {
    background-color: #61dafb;
  }

  &:hover svg {
    opacity: 0; /* hover 시 아이콘 숨기기 */
  }

  &:hover span {
    display: block; /* hover 시 텍스트 표시 */
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Title>Chart Modes</Title>
      <ChartOption>
        <FaChartLine />
        <span>Line Chart</span>
      </ChartOption>
      <ChartOption>
        <BiLineChart />
        <span>Candle Chart</span>
      </ChartOption>
      <ChartOption>
        <FaChartBar />
        <span>Volume Chart</span>
      </ChartOption>
    </SidebarContainer>
  );
};

export default Sidebar;
