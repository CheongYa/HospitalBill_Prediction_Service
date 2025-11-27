function Page4Result({ selectedSymptom, selectedAge, departments, goHome, onBack }) {
  const openNaverMap = (keyword) => {
    const url = "https://map.naver.com/p/search/" + encodeURIComponent(keyword);
    window.open(url, "_blank");
  };

  return (
    <div className="card">
      <h2>결과</h2>
      <div className="subtitle">갈 가능성이 높은 진료과</div>

      <div className="tag-list">
        {departments.map((d, idx) => (
          <div key={idx} className="tag">{d}</div>
        ))}
      </div>

      {/* 병원 찾기 */}
      <button
        className="btn btn-primary"
        style={{ marginBottom: "16px" }}
        onClick={() => openNaverMap(`${departments[0]} 병원`)}
      >
        근처 병원 찾기
      </button>

      {/* 정보 섹션 */}
      <div className="section-title">자주 사용되는 검사</div>
      <div className="info-box">
        기본 진찰 – 보험 적용 30%<br />
        흉부 X-ray – 보험 적용 20%<br />
        감염 검사 – 일부 보험 적용
      </div>

      <div className="section-title">보건소 기본 검사</div>
      <div className="info-box">
        혈압·혈당·체성분 등 무료 검사 가능
        <br />
        <button
          className="small-btn"
          onClick={() => openNaverMap("보건소")}
        >
          근처 보건소 찾기
        </button>
      </div>

      <div className="section-title">지역 건강센터 프로그램</div>
      <div className="info-box">
        운동, 만성질환 관리, 체력 측정 등 무료 서비스 제공
        <br />
        <button
          className="small-btn"
          onClick={() =>
            window.open(
              "c",
              "_blank"
            )
          }
        >
          근처 건강센터 찾기
        </button>
      </div>

      <div className="btn-row">
        <button className="btn btn-outline" onClick={onBack}>뒤로가기</button>
        <button className="btn btn-outline" onClick={goHome}>처음</button>
      </div>
    </div>
  );
}

export default Page4Result;
