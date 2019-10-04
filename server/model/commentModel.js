export const commentDb = [];
export const create = (data)=> {
  const newComment = {
    id: commentDb.length + 1,
    AuthorId: data.authorId,
    ArticleId: data.articleId,
    ArticleTitle: data.articleTitle,
    comment: data.comment,
    article: data.article,
  };

  commentDb.push(newComment);
  return newComment;
};

