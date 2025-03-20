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

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  flex: 1;
`;

const RownumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const RownumSelector = styled.div`
  display: flex;
  flex-drection: column;
  align-items: flex-end;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 5px;
`;

const Select = styled.select`
  font-size: 16px;
  font-weight: 700;
  padding: 5px;
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
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [rownum, setRownum] = useState(10);
    

    const toggleSidebar = () => {
      setSidebarVisible((prev) => !prev);
    }

    const handleChartSelect = (chartName: string) => {
      setSelectedChart(chartName);  // 차트 선택 시 상태 업데이트
    };
  
    const handleRownumChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRownum(Number(event.target.value));
    }

    useEffect(() => {
      //API 호출
      //console.log("API_URL : ", process.env.REACT_APP_API_URL);

      //fetch(`${process.env.REACT_APP_API_URL}/api/stocks`, {
      fetch(`http://localhost:8080/api/local/stocks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          symbol: 'AAPL',
          rownum: rownum
        }),
      })
        .then((res) => {
          if(!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          setChartData(data);
        })
        .catch((err) => {
          if(err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            console.log("Fetch Error:", err);
          }
        });
    },[rownum]);

    return (
      <Container>
        <Sidebar 
          selectedChart={selectedChart}
          onChartSelect={handleChartSelect}
          isSidebarVisible={isSidebarVisible}
          toggleSidebar={toggleSidebar}
        />
        <MainContent>
          <TitleContainer>
            <Title>Selected Chart: {selectedChart}</Title>
          </TitleContainer>

          <RownumContainer>
            <RownumSelector>
              <Label htmlFor="rownum">ROWNUM : </Label>
              <Select id="rownum" value={rownum} onChange={handleRownumChange}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </Select>
            </RownumSelector>
          </RownumContainer>

          <ChartArea>
            <ChartComponent chartType={selectedChart} data={chartData}></ChartComponent>
          </ChartArea>
        </MainContent>
      </Container>
    );
};

export default App;