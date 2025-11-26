const symptoms = [
  "두통",
  "코막힘/콧물",
  "기침/목아픔",
  "복통",
  "소화불량",
  "기타"
];

function Page2Symptom({ selectedSymptom, setSelectedSymptom, onNext, onBack }) {
  return (
    <div className="card">
      <button className="back-btn" onClick={onBack}>←</button>

      <div className="top-title">증상을 선택하세요</div>

      <div className="options-grid two-col">
        {symptoms.map((sym, idx) => (
          <button
            key={idx}
            className={`btn btn-outline ${selectedSymptom === sym ? "selected" : ""}`}
            onClick={() => setSelectedSymptom(sym)}
          >
            {sym}
          </button>
        ))}
      </div>

      <button
        className="btn btn-primary"
        disabled={!selectedSymptom}
        onClick={onNext}
      >
        다음
      </button>
    </div>
  );
}

export default Page2Symptom;
