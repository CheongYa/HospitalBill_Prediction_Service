const ages = ["50대", "60대", "70대"];

function Page3Age({ selectedAge, setSelectedAge, onNext, onBack }) {
  return (
    <div className="card">
      <button className="back-btn" onClick={onBack}>←</button>

      <div className="top-title">나이대를 선택하세요</div>

      <div className="options-grid">
        {ages.map((age, idx) => (
          <button
            key={idx}
            className={`btn btn-outline ${selectedAge === age ? "selected" : ""}`}
            onClick={() => setSelectedAge(age)}
          >
            {age}
          </button>
        ))}
      </div>

      <button
        className="btn btn-primary"
        disabled={!selectedAge}
        onClick={onNext}
      >
        결과 보기
      </button>
    </div>
  );
}

export default Page3Age;
