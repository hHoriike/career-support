import {
  faChartLine,
  faClock,
  faEdit,
  faFlag,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "features/header/header";
import SearchBar from "features/search/searchBar";
import useUser from "features/user/useUser";
import React, { useState } from "react";
import styles from "./BBS.module.scss";
import Board from "./Board";
import usePostModal from "./postModal";

export type BoardInfo = {
  id: number;
  title: string;
  view: number;
  comments: number;
};

type Props = {};

const BBSTemplate = (props: Props) => {
  const user = useUser();
  const { show, Modal } = usePostModal();
  const [index, setIndex] = useState(1);
  return (
    <div className={styles.container}>
      <Header user={user} />
      <div className={styles.divider}>
        <div className={styles.searchBox}>
          <ul>
            <li className={index === 1 ? styles.active : ""}>
              <button type="button" onClick={() => setIndex(1)}>
                <FontAwesomeIcon icon={faChartLine} />
                トレンド
              </button>
            </li>
            <li className={index === 2 ? styles.active : ""}>
              <button type="button" onClick={() => setIndex(2)}>
                <FontAwesomeIcon icon={faFlag} />
                新着
              </button>
            </li>
            <li className={index === 3 ? styles.active : ""}>
              <button type="button" onClick={() => setIndex(3)}>
                <FontAwesomeIcon icon={faClock} />
                タイムライン
              </button>
            </li>
          </ul>
          <hr />
          <div className={styles.searchArea}>
            検索
            <SearchBar />
            <label className={styles.condition}>
              <input type="checkbox" checked />
              解決済みを除く
            </label>
          </div>
        </div>
        <main className={styles.boardList}>
          <button type="button" className={styles.new} onClick={show}>
            <FontAwesomeIcon icon={faEdit} />
            掲示板に投稿する
          </button>
          {mockBoard.map((b) => (
            <Board key={b.id} board={b} />
          ))}
        </main>
      </div>
      <Modal />
    </div>
  );
};

export default BBSTemplate;

const mockBoard: BoardInfo[] = [
  {
    id: 1,
    title: "今年大学進学を目指す高３なのですが、将来保育士になりたいと考えて…",
    view: 1300,
    comments: 23,
  },
  {
    id: 2,
    title:
      "メーカーの面接で、自社の商品名について質問されたのですが、うまく答えることができませんでした。",
    view: 248,
    comments: 1,
  },
  {
    id: 3,
    title:
      "国家一般職高卒程度について。 先日人事院面接を受けてきましたが自分では手応え等分からなかったため質問させていただきます。",
    view: 13,
    comments: 0,
  },
];
