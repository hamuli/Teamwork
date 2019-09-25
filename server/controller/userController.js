import { findOneMail, findByPassword, create } from '../model/userModel';
import { hashPassword, comparePasswords, authenticateUser } from '../help/help';

const Auth = {
    create(req, res) {
        const { email } = req.body;
        let verifyEmail = findOneMail(email);

        if (verifyEmail) {
            return res.status(401).send({
                status: 401,
                error: 'email already taken',
            });
        }
        let creates = create(req.body);
        // const email = (creates.email);
        const token = authenticateUser(email, creates.id);

        return res.header('auth-token', token).status(201).send({
            status: 201,
            message: 'User created successfully',
            data: ({ creates, token }),
        });
    },
    connect(req, res) {
        let { email, password } = req.body;
        let verifyEmail = findOneMail(email);

        if (!verifyEmail) {
            return res.status(401).send({
                status: 401,
                error: 'wrong Email',
            });
        }
        let compare = comparePasswords(req.body.password, verifyEmail.password);

        if (!compare) {
            return res.status(401).send({
                status: 401,
                error: ' Wrong Password ):',
            });
        }
        let creates = create(req.body);


        const token = authenticateUser(email, creates.id);

        return res.header('auth-token', token).status(201).send({
            status: 201,
            message: 'User is successfully logged in',
            data: ({ token }),
        });
    },
};

export default Auth;