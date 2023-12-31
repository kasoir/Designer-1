import Cors from 'cors';
import express from 'express';
import { apiRoutes as apiRoutesNA } from './NonAuthAPIs/non-auth-router';
import createError from 'http-errors';
import { STATUS_CODES } from 'http';
import { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';
const bodyParser = require('body-parser');

export const cors = Cors( { origin: true } );

export const app = express();
app.use(bodyParser.json());

const port = 3000;
app.use( express.urlencoded( { extended: true } ) )

app.use( cors );
app.use( apiRoutesNA )

// app.use( decodeToken );

// app.use( apiRoutes );


app.use( () => {
	throw createError( STATUS_CODES.NOT_IMPLEMENTED, 'Not implemented' );
} );

app.use( ( error: HttpError, _req: Request, res: Response, _next: NextFunction ) => {
    console.error( error );

    const code = error.statusCode || 500;
    const message = code === 500 ? 'Server Error' : error.message;
  
    res.status( code ).json( {
        code,
        data: { errors: error.errors },
        message: message,
        error: error.message || message,
    });
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
