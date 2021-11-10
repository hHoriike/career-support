import React from "react";
import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.Footer}>
      <h1>静岡仕事図鑑</h1>
      <div className={styles.copyright} >Copyright© 2021 SBS Information Systems Co.,Ltd. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
