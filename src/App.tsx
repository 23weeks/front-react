import React, {useEffect, useState} from "react";
import Sidebar from "./components/SideBar.tsx";
import ChartComponent from "./components/ChartComponent.tsx";
import { ChartData } from "./components/types.ts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh; /* 전체 화면 높이 */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ChartArea = styled.div`
  width: 100%;
  height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const App = () => {
    const [selectedChart, setSelectedChart] = useState("Line Chart");
    const [chartData, setChartData] = useState<ChartData[]>([]);    //차트 데이터 상태
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setSidebarVisible((prev) => !prev);
    }

    const handleChartSelect = (chartName: string) => {
      setSelectedChart(chartName);  // 차트 선택 시 상태 업데이트
    };
  
    useEffect(() => {
        //더미 데이터
        const fetchData = async () => {
            const dummy: ChartData[] = [
                { stock_time: "2025-03-01", symbol: "AAPL", open: 150, high: 155, low: 149, close: 153, volume: 10000 },
                { stock_time: "2025-03-02", symbol: "AAPL", open: 153, high: 157, low: 151, close: 154, volume: 12000 }
            ];
            setChartData(dummy);
        };
        fetchData();
    },[]);

    return (
      <Container>
        <Sidebar 
          selectedChart={selectedChart}
          onChartSelect={handleChartSelect}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <MainContent>
          <Title>Selected Chart: {selectedChart}</Title>
          <ChartArea>
            <ChartComponent chartType={selectedChart} data={chartData}></ChartComponent>
          </ChartArea>
        </MainContent>
      </Container>
    );
};

export default App;