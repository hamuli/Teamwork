import {
  create, findOne, edit, moveout, getAll, viewSpecifics,
} from '../model/postModel';

require('dotenv').config();

const post = {
  create(req, res) {
    req.body.authorId = req.userData.id.toString();
    const newPost = create(req.body);

    return res.status(200).send({ status: 200, message: 'post created', data: (newPost) });
  },
  edit(req, res) {
    const getId = findOne(req.params.id);

    if (!getId) {
      return res.status(404).send({ status: 400, error: 'not found' });
    }

    if (req.userData.id === findOne.authorId.toString()) {
      const edits = edit(req.params.id, req.body);

      return res.status(200).send({ status: 200, message: 'post deleted' });
    }
    return res.status(200).send({ status: 200, error: 'you can not delete this post' });
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
    const findOneId = findOne(parseInt(req.params.id));

    if (!findOneId) {
      return res.status(404).send({ status: 404, error: 'not found' });
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


