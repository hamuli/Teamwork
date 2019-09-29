
import { create } from '../model/commentModel';


const commentCreate = {
  create(req, res) {
    req.body.authorId = req.userData.id;
    req.body.articleId = req.params.id;
    const newComent = create(req.body);

    return res.status(201).send({ status: 201, message: 'comment created', data: (newComent) });
  },
};

export default commentCreate;
