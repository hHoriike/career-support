import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

type Props = {
  children: string;
};

const DropdownMenu = (props: Props) => {
  const { children } = props;
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    setOpen((p) => !p);
  };
  const onLogout = () => {
    localStorage.removeItem("id");
  };
  return (
    <div>
      <button type="button" onClick={onClick}>
        {children}
      </button>
      {open ? (
        <div className={styles.menu}>
          <h5>堀池浩輝</h5>
          <Link href="/login">
            <button type="button" onClick={onLogout}>
              ログアウト
            </button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default DropdownMenu;
