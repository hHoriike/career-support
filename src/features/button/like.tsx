import React from "react";
import styles from "./Button.module.scss";

type Props = {
  likes: number;
};

const LikeButton = (props: Props) => {
  const { likes } = props;
  const [pushed, setPushed] = React.useState(false);
  const toggle = () => {
    setPushed((p) => !p);
  };
  return (
    <button type="button" onClick={toggle} className={styles.LikeButton}>
      {pushed ? "♥" : "♡"} {pushed ? likes + 1 : likes}
    </button>
  );
};

export default LikeButton;
