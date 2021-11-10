import React from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import Header from "features/header/header";

type Props = {};

const RegisterTemplate = (props: Props) => {
  const onClickOAuth = () => {
    localStorage.setItem("id", "123");
  };
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>新規会員登録</h1>
        <div className={styles.card}>
          <div className={styles.oAuth}>
            <label>
              <span>Googleで始める</span>
              <Link href="/">
                <button
                  className={styles.google}
                  type="button"
                  title="Googleで始める"
                  onClick={onClickOAuth}
                ></button>
              </Link>
            </label>
          </div>
          <hr />
          または
          <div className={styles.mailAddress}>
            <label>
              <span>メールアドレスで登録</span>
              <input type="email" />
            </label>
            <button>確認メールを送信</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterTemplate;
