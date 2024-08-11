// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기
// --------------------------------------------------------------------------
// - [ ] Game 컴포넌트 내부에서 게임 플레이어 말을 게임의 상수로 설정합니다.
// - [ ] 게임의 상수인 플레이어를 Game 컴포넌트에서 모듈로 불러옵니다.
// - [ ] 구현할 게임의 마크업을 분석해서 하위 컴포넌트 트리를 구성합니다. (컴포넌트 추출)
// --------------------------------------------------------------------------

function Game() {
  return (
    <div className="Game">
      <div className="Board">
        <h2 className="Status">플레이어 : 🟨</h2>
        {/* <h2>승자! : 🟨</h2> */}
        {/* <h2>비겼어요... 😳</h2> */}
        <div className="Squares">
          <button className="Square" disabled>
            🟨
          </button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square" disabled>
            ⚫️
          </button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
          <button className="Square"></button>
        </div>
      </div>
      <div className="History">
        <ol>
          <li>
            <button type="button">게임 시작</button>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Game;
