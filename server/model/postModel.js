// eslint-disable-next-line import/prefer-default-export
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

export const findOne = (ArticleId)=> postDb.find((OnePost)=> OnePost.AticleId === ArticleId);
export const edit = (ArticleId, data)=> {
  const oneId = findOne(ArticleId);
  const index = postDb.indexOf(oneId);

  postDb[index].title = data.title || oneId.title;
  postDb[index].article = data.article || oneId.article;
  return postDb[index];
};
export const moveout = (ArticleId)=> {
  const oneId = findOne(ArticleId);
  const index = postDb.indexOf(oneId);

  postDb.splice(index, 1);
  // return {};
};
export const viewSpecifics = (data)=> {
  
};


console.log(viewSpecifics);
export const getAll = ()=> postDb;


