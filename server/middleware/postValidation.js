import { check } from 'express-validator';

export default [
  check('title')
    .exists({ checkFalsy: true })
    .withMessage(' article title  is required')
    .isLength({ min: 2 })
    .withMessage('must be at least 2 characters long'),
  check('article')
    .exists({ checkFalsy: true })
    .withMessage('article post is required')
    .isLength({ min: 2 })
    .withMessage('must be at least 2 characters long')
    .isLength({ max: 50 })
    .withMessage('must be at least 50 characters long')
];
