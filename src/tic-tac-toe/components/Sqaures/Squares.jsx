import { useState } from 'react';
import { PLAYER, PLAYER_COUNT, INITIAL_SQUARES } from '@/tic-tac-toe/constants';
import Square from '../Sqaure/Square';
import S from './Squares.module.css';

function Squares() {
  // 게임 상태 ----------------------------------------------------------
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // 게임 상태 업데이트
  const handlePlay = (index) => () => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }

        return square;
      });

      return nextSquares;
    });
  };

  // 게임 파생된 상태 -----------------------------------------------------

  // 게임 순서
  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;
  console.log(gameIndex);

  // 첫 번째 플레이어의 턴
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;

  // 현재 플레이어
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;
  console.log(currentPlayer);

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
