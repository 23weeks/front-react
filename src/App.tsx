import React, {useState} from "react";
import styled from "styled-components";
import Sidebar from "./components/SideBar.tsx";

// 차트 타입 관리용 상태 추가
const AppContainer = styled.div`
  display: flex;
`;

const ChartContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f5f5f5;
  height: 100vh;
`;

const App = () => {
  const [chartType, setChartType] = useState<string>("Line Chart");

  const handleChartChange = (type: string) => {
    setChartType(type);
  };

  return (
    <AppContainer>
      <Sidebar />
      <ChartContainer>
        <h2>{chartType}</h2>
        {/* 차트 렌더링은 여기에 추가 */}
      </ChartContainer>
    </AppContainer>
  );
};

export default App;