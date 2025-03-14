import React, {useState} from "react";
import Sidebar from "./components/SideBar.tsx";

const App = () => {
    const [selectedChart, setSelectedChart] = useState<string>("Line Chart");  // 선택된 차트의 상태를 관리

    const handleChartSelect = (chartName: string) => {
      setSelectedChart(chartName);  // 차트 선택 시 상태 업데이트
    };
  
    return (
      <div style={{ display: "flex" }}>
        <Sidebar onChartSelect={handleChartSelect} />
        <div style={{ marginLeft: "250px", padding: "20px" }}>
          <h1>Selected Chart: {selectedChart || "None"}</h1>  {/* 선택된 차트 이름 표시 */}
        </div>
      </div>
    );
};

export default App;