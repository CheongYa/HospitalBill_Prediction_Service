import React, { useState } from "react";
import Page1Start from "./components/Page1Start";
import Page2Symptom from "./components/Page2Symptom";
import Page3Age from "./components/Page3Age";
import Page4Result from "./components/Page4Result";
import "./App.css";

function App() {
  const [page, setPage] = useState(1);
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  // 증상 + 나이대에 따라 진료과 추천 (로직 원하는대로 변경 가능)
  const getDepartments = (symptom) => {
    switch (symptom) {
      case "두통": return ["신경과", "내과"];
      case "코막힘/콧물": return ["이비인후과"];
      case "기침/목아픔": return ["호흡기내과", "이비인후과"];
      case "복통":
      case "소화불량":
        return ["소화기내과", "내과"];
      default:
        return ["내과"];
    }
  };

  return (
    <div className="app-container">
      {page === 1 && (
        <Page1Start
          onNext={() => setPage(2)}
        />
      )}

      {page === 2 && (
        <Page2Symptom
          selectedSymptom={selectedSymptom}
          setSelectedSymptom={setSelectedSymptom}
          onNext={() => setPage(3)}
          onBack={() => setPage(1)}
        />
      )}

      {page === 3 && (
        <Page3Age
          selectedAge={selectedAge}
          setSelectedAge={setSelectedAge}
          onNext={() => setPage(4)}
          onBack={() => setPage(2)}
        />
      )}

      {page === 4 && (
        <Page4Result
          selectedSymptom={selectedSymptom}
          selectedAge={selectedAge}
          departments={getDepartments(selectedSymptom)}
          goHome={() => {
            setPage(1);
            setSelectedSymptom(null);
            setSelectedAge(null);
          }}
          onBack={() => setPage(3)}
        />
      )}
    </div>
  );
}

export default App;
