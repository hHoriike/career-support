import React from "react";
import ArticleTemplate from "domains/article/template";
import useUser from "features/user/useUser";

type Props = {};

const Article = (props: Props) => {
  const user = useUser();
  return <ArticleTemplate user={user} />;
};

export default Article;
