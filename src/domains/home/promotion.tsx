import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";

type Props = {};

const Promotion = (props: Props) => {
  return (
    <div className={styles.MockPromotion}>
      <div>
        <label>
          <h3>あなたの悩みはなんですか？</h3>
          <input type="text" />
          <hr />
        </label>
        <ul>
          <li>
            <Link href="">
              <a>
                今年大学進学を目指す高３なのですが、将来保育士になりたいと考えて…
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                今年大学進学を目指す高３なのですが、将来保育士になりたいと考えて…
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a>
                今年大学進学を目指す高３なのですが、将来保育士になりたいと考えて…
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                今年大学進学を目指す高３なのですが、将来保育士になりたいと考えて…
              </a>
            </Link>
          </li>
        </ul>
        <div className={styles.more}>
          <Link href="/bbs">
            <a>もっと見る</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
