
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
export const findOne = (ArticleId)=> postDb.find((OnePost)=> OnePost.ArticleId.toString() === ArticleId);

export const update = (ArticleId, data)=> {
  const index = parseInt(ArticleId);

  console.log(ArticleId);


  postDb[index - 1].title = data.title;

  postDb[index - 1].article = data.article;
  return postDb[index - 1];
};
export const moveout = (ArticleId)=> {
  const oneId = findOne(ArticleId);
  const index = postDb.indexOf(oneId);

  postDb.splice(index, 1);
  return {};
};
export const viewSpecifics = (article)=> {
  // eslint-disable-next-line max-len
  article.comments = commentDb.filter((comment)=> parseInt(comment.ArticleId) === parseInt(article.ArticleId));
  return article;
};

export const getAll = ()=> postDb;


