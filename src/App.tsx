import React, {useEffect, useState} from "react";
import Sidebar from "./components/SideBar.tsx";
import ChartComponent from "./components/ChartComponent.tsx";
import { ChartData } from "./components/types.ts";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh; /* 전체 화면 높이 */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const App = () => {
    const [selectedChart, setSelectedChart] = useState<string>("");  // 선택된 차트의 상태를 관리
    const [chartData, setChartData] = useState<ChartData[]>([]);    //차트 데이터 상태

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
        <Sidebar selectedChart={selectedChart} onChartSelect={handleChartSelect} />
        <MainContent>
          <h2>Selected Chart: {selectedChart || "none"}</h2>
          <ChartComponent chartType={selectedChart} data={chartData}/>
          </MainContent>
      </Container>
    );
};

export default App;