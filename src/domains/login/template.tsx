import React from "react";
import Link from "next/link";
import styles from "./Login.module.scss";
import Header from "features/header/header";

type Props = {};

const LoginTemplate = (props: Props) => {
  const login = () => {
    localStorage.setItem("id", "1");
  };

  return (
    <div className={styles.container}>
      <Header showNav={false} />
      <main>
        <h1>ログイン</h1>
        <div className={styles.card}>
          <div className={styles.oAuth}>
            <label>
              <span>Googleでログイン</span>
              <Link href="/">
                <button
                  className={styles.google}
                  type="button"
                  title="Googleでログイン"
                  onClick={login}
                ></button>
              </Link>
            </label>
          </div>
          <hr />
          または
          <div className={styles.mailAddress}>
            <label>
              <span>メールアドレス</span>
              <input type="email" />
            </label>
            <label>
              <span>パスワード</span>
              <input type="password" />
            </label>
            <Link href="/">
              <button type="button" onClick={login}>
                ログイン
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginTemplate;
