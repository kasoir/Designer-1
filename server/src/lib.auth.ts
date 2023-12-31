import { settings } from '../../settings/settings';
import * as jwt from 'jsonwebtoken';


const secret = settings.secretKey;
const tokenLifeSapn = settings.jwtTokenLifeTime;

export const generateAuthToken = ( payload: any ) => jwt.sign( payload, secret, {
	expiresIn: `${tokenLifeSapn}d`,
	algorithm: 'HS256',
} );