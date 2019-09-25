import uuid from 'uuid';
import { hashPassword } from '../help/help';

export const userDb = [{
    firstName: 'glodie',
    lastName: 'hamuli',
    password: '123456789',
    email: 'daniel@gmail.com',
    gender: 'man',
    jobRole: 'IT manager',
    departement: 'Technic',
    address: 'goma',
}];
export const create = (data) => {
    const newUser = {
        id: userDb.length + 1,
        firstName: data.firstName,
        lastName: data.lastName,
        password: hashPassword(data.password),
        email: data.email,
        gender: data.gender,
        jobRole: data.jobRole,
        departement: data.departement,
        address: data.address,
    };

    userDb.push(newUser);
    return newUser;
};


export const findOneMail = (email) => userDb.find((emails) => emails.email === email);
export const findByPassword = (password) => userDb.find((reflect) => reflect.password === password);