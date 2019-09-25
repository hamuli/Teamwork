import { check } from 'express-validator';

export default [
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Firstname is required')
    .isLength({ min: 3 })
    .withMessage('First name should have at least 3 characters'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Lastname is required')
    .isLength({ min: 3 })
    .withMessage('lastName  should have at least 3 characters'),
    check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email address is required')
    .isEmail()
    .normalizeEmail()
    .withMessage('Invalid email address'),
    check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6, max: 15 })
    .withMessage('Password must be between 8 and 15 characters long')
    .matches('[0-9]').withMessage('must be at least  have a number'),
    check('gender')
    .exists({ checkFalsy: true })
    .withMessage('Gender is required')
    .isLength({ max: 4 }),
    check('jobRole')
    .exists({ checkFalsy: true })
    .withMessage('jobRol is required'),
    check('departement')
    .exists({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage('departement is required'),
    check('address')
    .exists({ checkFalsy: true })
    .withMessage('address is required'),
];
check('password')