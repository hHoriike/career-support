import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faComment } from "@fortawesome/free-solid-svg-icons";
import styles from "./BBS.module.scss";
import { BoardInfo } from "./template";

type Props = {
  board: BoardInfo;
};

const Board = (props: Props) => {
  const { board } = props;
  return (
    <div className={styles.Board}>
      <h4>{board.title}</h4>
      <div className={styles.about}>
        <span className={styles.author}>
          <img src={`https://picsum.photos/200/${board.id}`} alt="hoge" />
        </span>
        <span className={styles.view}>
          <FontAwesomeIcon icon={faEye} size="xs" />
          {board.view}
        </span>
        <span className={styles.comments}>
          <FontAwesomeIcon icon={faComment} size="xs" />
          {board.comments}
        </span>
      </div>
    </div>
  );
};

export default Board;
