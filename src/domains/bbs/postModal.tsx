import React from "react";
import styles from "./BBS.module.scss";

type Props = {
  hide: () => void;
};

const PostModal = (props: Props) => {
  const { hide } = props;
  const backRef = React.useRef<HTMLDivElement>(null);
  const onPressBack = (e: React.MouseEvent) => {
    if (e.target === backRef.current) hide();
  };
  return (
    <div ref={backRef} className={styles.PostModal} onClick={onPressBack}>
      <div className={styles.modalContent}>
        <h3>掲示板に投稿する</h3>
        <label>
          内容
          <textarea />
        </label>
        <div className={styles.addButton}>
          画像を添付
          <button type="button">タップして追加</button>
        </div>
        <button type="button" className={styles.postButton} onClick={hide}>
          投稿
        </button>
      </div>
    </div>
  );
};

const usePostModal = () => {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const Modal = () => (visible ? <PostModal hide={hide} /> : null);
  return { show, hide, Modal };
};

export default usePostModal;
