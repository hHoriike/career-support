import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./Search.module.scss";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className={styles.searchBar}>
      <input title="検索" />
      <button type="button" title="検索">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
