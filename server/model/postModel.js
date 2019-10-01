
import { commentDb } from './commentModel';

export const postDb = [];

export const create = (data)=> {
  const newpost = {
    articleId: postDb.length + 1,
    createdOn: new Date().toLocaleString(),
    title: data.title,
    article: data.article,
    authorId: data.authorId,
  };

  postDb.push(newpost);
  return newpost;
};

// eslint-disable-next-line max-len
export const findOne = (ArticleId)=> postDb.find((OnePost)=> OnePost.articleId.toString() === ArticleId);

export const update = (articleId, data)=> {
  const index = parseInt(articleId);

  postDb[index - 1].title = data.title;

  postDb[index - 1].article = data.article;
  return postDb[index - 1];
};
export const moveout = (articleId)=> {
  const oneId = findOne(articleId);
  const index = postDb.indexOf(oneId);

  postDb.splice(index, 1);
  return {};
};
export const viewSpecifics = (article)=> {
  // eslint-disable-next-line max-len
  article.comments = commentDb.filter((comment)=> parseInt(comment.articleId) === parseInt(article.articleId));
  return article;
};

export const getAll = ()=> postDb;


