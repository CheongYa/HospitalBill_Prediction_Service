function Page1Start({ onNext }) {
  return (
    <div className="card">
      <h1>간단 설문으로<br/>보험 적용 여부를 확인하세요</h1>
      <div className="center">
        <div className="stethoscope">🩺</div>
      </div>
      <button className="btn btn-primary" onClick={onNext}>시작하기</button>
    </div>
  );
}

export default Page1Start;
