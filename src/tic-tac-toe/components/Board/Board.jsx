import './Board.module.css';
import Squares from '../Sqaures/Squares';
import Status from '../Status/Status';

function Board() {
  return (
    <div className="Board">
      <Squares />
      <Status />
    </div>
  );
}

export default Board;
