
import {
  create, findOne, moveout, getAll, update, viewSpecifics,
} from '../model/postModel';

require('dotenv').config();

const post = {
  create(req, res) {
    req.body.authorId = req.userData.id.toString();
    const newPost = create(req.body);

    return res.status(200).send({ status: 200, message: 'post created', data: (newPost) });
  },
  edit(req, res) {
    const findOneArticle = findOne(req.params.id);

    if (!findOneArticle) {
      return res.status(404).send({ status: 400, error: 'Article not found' });
    }
    if (req.userData.id.toString() === findOneArticle.authorId) {
      const editOneArticle = update(findOneArticle.ArticleId, req.body);

      return res.status(200).send({ status: 200, message: 'post was updated succesfully', data: { editOneArticle } });
    }
    return res.status(401).send({ status: 401, error: 'you can not edit this post' });
  },

  delete(req, res) {
    req.body.authorId = req.userData.id.toString();
    const findOneId = findOne(req.params.id);

    if (!findOneId) {
      return res.status(404).send({ status: 400, error: 'not found' });
    }
    if (req.userData.id === findOneId.authorId.toString()) {
      const mouveOutPost = moveout(req.params.id);

      return res.status(204).send({ status: 204, message: 'article successfully deleted', data: ({ mouveOutPost }) });
    }
    // eslint-disable-next-line no-lone-blocks
    { return res.status(204).send({ status: 404, error: 'you can not  delete this post ' });
    }
  },
  viewSpecific(req, res) {
    const findOneId = findOne(req.params.id);

    if (!findOneId) {
      return res.status(404).send({ status: 400, error: 'not found' });
    }
    let findOneIds = viewSpecifics(findOneId);

    return res.status(200).send({ status: 200, message: 'pass', data: (findOneIds) });
  },
  getAll(req, res) {
    const get = getAll(req.params.id);

    // eslint-disable-next-line no-dupe-keys
    return res.status(200).send({ status: 200, message: 'succes', data: (get) });
  },

};

export default post;


