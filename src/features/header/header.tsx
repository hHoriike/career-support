import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faChalkboardTeacher,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import UserInfo from "features/user/UserInfo";
import DropdownMenu from "./dropdown";
import { useRouter } from "next/dist/client/router";

type Props = {
  showNav?: boolean;
  user?: UserInfo;
};

const Header = (props: Props) => {
  const { pathname } = useRouter();
  const { user, showNav = true } = props;
  return (
    <header className={styles.Header}>
      <Link href="/">
        <a>
          <h1>静岡仕事図鑑</h1>
        </a>
      </Link>

      {showNav ? (
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={pathname === "/" ? styles.active : ""}>
                  <FontAwesomeIcon icon={faBook} />
                  図鑑
                </a>
              </Link>
            </li>
            <li>
              <Link href="/bbs">
                <a className={pathname === "/bbs" ? styles.active : ""}>
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                  掲示板
                </a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>
                  <FontAwesomeIcon icon={faNewspaper} />
                  ニュース
                </a>
              </Link>
            </li>
          </ul>
          <div className={styles.hamburger}>
            <button type="button" title="メニュー">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>
      ) : null}
      {user ? (
        <DropdownMenu>{user.name}</DropdownMenu>
      ) : (
        <Link href="/login">ログイン</Link>
      )}
    </header>
  );
};

export default Header;
