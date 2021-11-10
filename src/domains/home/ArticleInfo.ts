type ArticleInfo = {
  id: number;
  title: string;
  target: string;
  imgsrc: string | undefined;
  likes: number;
  updateDatetime: Date;
  tags: string[];
  isRecruiting: boolean;
};

export const isArticleInfo = (
  object: ArticleInfo | any
): object is ArticleInfo => {
  if (!object) return false;
  const asArticle = object as ArticleInfo;
  return (
    asArticle.id !== undefined &&
    asArticle.title !== undefined &&
    asArticle.target !== undefined &&
    asArticle.imgsrc !== undefined &&
    asArticle.likes !== undefined &&
    asArticle.updateDatetime !== undefined &&
    asArticle.tags !== undefined &&
    asArticle.isRecruiting !== undefined
  );
};

export default ArticleInfo;
