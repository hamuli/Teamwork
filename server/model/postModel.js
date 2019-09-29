export const postDb = [];

export const create = (data)=> {
  const newpost = {
    ArticleId: postDb.length + 1,
    created_on: new Date().toLocaleString(),
    title: data.title,
    article: data.article,
    authorId: data.authorId,
  };

  postDb.push(newpost);
  return newpost;
};

export const findOne = (ArticleId)=> postDb.find((OnePost)=> OnePost.ArticleId.toString() === ArticleId);

export const update = (ArticleId, data)=> {
  const index = parseInt(ArticleId);
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

export const getAll = ()=> postDb;


