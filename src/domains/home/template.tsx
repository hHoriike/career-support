import Header from "features/header/header";
import UserInfo from "features/user/UserInfo";
import React from "react";
import ArticleInfo, { isArticleInfo } from "./ArticleInfo";
import styles from "./Home.module.scss";
import Promotion from "./promotion";
import ArticleThumbnail from "./thumbnail";

type Props = {
  user: UserInfo | undefined;
  keyword?: string;
};

const HomeTemplate = (props: Props) => {
  const { user, keyword } = props;
  return (
    <div className={styles.container}>
      <Header user={user}></Header>
      <div className={styles.searchBar}>
        <label>
          <span>記事を検索</span>
          <div className={styles.searcher}>
            <input type="text" defaultValue={keyword} />
            <button type="button">検索</button>
          </div>
        </label>
      </div>
      <div className={styles.ArticleList}>
        {mockArticles.map((Article, i) =>
          isArticleInfo(Article) ? (
            <ArticleThumbnail key={Article.id} article={Article} />
          ) : (
            <Article key={`pr${i}`} />
          )
        )}
        {[...Array(5)].map((_, i) => (
          <div key={i} className={styles.EmptyThumbnail}></div>
        ))}
      </div>
    </div>
  );
};

export default HomeTemplate;

const mockArticles: (ArticleInfo | React.ComponentType)[] = [
  {
    id: 1,
    title: "納得できるものをつくり、ただただ誠実に伝える",
    target: "Webマーケティング",
    imgsrc: "https://picsum.photos/200/300",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["モノづくり", "職人"],
    isRecruiting: false,
  },
  {
    id: 2,
    title: "好きなものだけに囲まれていたい作り手と街と営むお店",
    target: "生活用品店の店長候補、食料品店のスタッフ",
    imgsrc: "https://picsum.photos/200/301",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["好きなものを仕事に", "モノづくり"],
    isRecruiting: false,
  },
  () => <Promotion />,
  {
    id: 3,
    title: "タイトルタイトルタイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/302",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
  {
    id: 4,
    title: "タイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/303",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
  {
    id: 5,
    title: "タイトルタイトルタイトルタイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/304",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
  {
    id: 6,
    title: "タイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/305",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
  {
    id: 7,
    title: "タイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/306",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
  {
    id: 8,
    title: "タイトル",
    target: "あぶすと",
    imgsrc: "https://picsum.photos/200/307",
    likes: 10,
    updateDatetime: new Date(),
    tags: ["タグ1", "タグ2"],
    isRecruiting: false,
  },
];
