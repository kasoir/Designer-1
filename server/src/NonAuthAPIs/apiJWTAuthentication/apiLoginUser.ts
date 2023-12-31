import { Request, RequestHandler, Response } from 'express';
import { User } from '../../../../models/user.model';
import createHttpError = require('http-errors');
import { body, validationResult } from 'express-validator';
import { JWTPayload } from '../../../../models/jwtpayload.model'
import { settings } from '../../../../settings/settings'
import { generateAuthToken } from '../../lib.auth';
import { StatusCodes } from 'http-status-codes';
import { db } from '../../lib.pool';

export const signup: RequestHandler[] = [
    body('firstName')
        .isString()
        .exists(),
    body('lastName')
        .isString()
        .exists(),
    body('phone')
        .isString()
        .exists(),
    body('email')
        .isString()
        .exists(),
    body('password')
        .isString()
        .exists(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(StatusCodes.BAD_REQUEST).json({
                code: StatusCodes.BAD_REQUEST, data: {}, message: '',
                error: errors['errors'].map(err => (`${err.msg} => ( ${err.path} - ${err.value} )`)).join(',')
            });
            return;
        }
        try {
            const payload = req.body;
            const user = await creatUser(payload);
            res.status(200)
                .json({
                    code: 200,
                    data: { user },
                    message: 'success',
                });
        } catch (err) {
            res.status(err.status)
                .json({
                    code: err.status,
                    data: {},
                    message: '',
                    error: err.message || 'error',
                });
        }
    }
]
export const login: RequestHandler[] = [
    body('email')
        .isString()
        .exists(),
    body('password')
        .isString()
        .exists(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(StatusCodes.BAD_REQUEST).json({
                code: StatusCodes.BAD_REQUEST, data: {}, message: '',
                error: errors['errors'].map(err => (`${err.msg} => ( ${err.path} - ${err.value} )`)).join(',')
            });
            return;
        }
        try {
            const payload = req.body;
            const user = await checkVerifiedUser(payload.email, payload.password);
            const jwt = buildJWTPayloadFromUser(user);
            const jwtToken = generateAuthToken(jwt);

            res.status(200)
                .json({
                    code: 200,
                    data: { token: jwtToken },
                    message: 'success',
                });
        } catch (err) {
            res.status(err.status)
                .json({
                    code: err.status,
                    data: {},
                    message: '',
                    error: err.message || 'error',
                });
        }
    },
];

const checkVerifiedUser = async (
    email: string,
    password?: string,
): Promise<User> => {
    const user = await getUser({ email });
    if (!!password && password !== user.password) {
        throw new createHttpError.NotFound('user name/password error!');
    }
    return {
        ...user,
        password: null,
    };
};

const getUser = async (params: { email: string; }): Promise<User> => {
    const user = (await db.query<User>(`select * from public."user" where email =$1`, [params.email])).rows[0];
    return user;
}
const creatUser = async (payload: {
    firstName: string,
    lastName: string,
    phone: string,
    email: string,
    password: string,
}): Promise<User> => {
    const user = (await db.query<User>(`insert into public."user" VALUES ('',$1,$2,$3,$4,$5)`, 
    [payload.firstName, payload.lastName, payload.email, payload.password, payload.phone])).rows[0];
    return user;
}

function buildJWTPayloadFromUser(user: User): JWTPayload {
    return {
        uid: user.id || '',
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin || false,
        tokenLife: +settings.jwtTokenLifeTime,
    };
}