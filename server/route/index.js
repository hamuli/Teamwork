import { Router } from 'express';
//import UserValidation from '../middleware/createValidation'
import userValid from '../middleware/userValid';
import validateAll from '../middleware/validateAll';
import validateConnection from '../middleware/connectValid';
import validationsConnection from '../middleware/connectMidd';
import postValidation from '../middleware/postAut';
import userController from '../controller/userController';
import postController from '../controller/postController';

import commentController from '../controller/commentController';

import ErrorHandler from '../middleware/errorHandler';

const router = new Router();

router.post('/auth/sign_up', userValid, validateAll, userController.create);
router.post('/auth/connect', validateConnection, validationsConnection, userController.connect);
router.post('/articles', postValidation, postController.create);
router.patch('/article/:id', postValidation, postController.edit);
router.delete('/auth/delete/:id', postValidation, postController.delete);
router.get('/feeds', postController.getAll);

router.get('/articles/:id', postController.viewSpecific);
router.post('/aricles/:id/comments', postValidation, commentController.create);
//router.use(ErrorHandler);
router.use(ErrorHandler);


export default router;
