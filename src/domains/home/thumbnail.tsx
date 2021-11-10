import React from "react";
import Link from "next/link";
import styles from "./Home.module.scss";
import ArticleInfo from "./ArticleInfo";
import { formatDate } from "features/utils/date";
import LikeButton from "features/button/like";

type Props = {
  article: ArticleInfo;
};

const ArticleThumbnail = (props: Props) => {
  const { article } = props;
  return (
    <div className={styles.ArticleThumbnail}>
      <div className={styles.ImgWrap}>
        <img src={article.imgsrc} alt={"no image"} />
      </div>
      <div className={styles.ThumbnailBody}>
        <div className={styles.titleWrap}>
          <h2>
            <Link href="/article/1">
              <a>{article.title}</a>
            </Link>
          </h2>
          <LikeButton likes={article.likes} />
        </div>
        <div>{article.target}</div>
        <div>{formatDate(article.updateDatetime)}</div>
        <hr />
        <div className={styles.tagsWrap}>
          {article.tags.map((tag) => (
            <Link href={`/?keyword=tag:${tag}`} key={tag}>
              <a>{tag}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
