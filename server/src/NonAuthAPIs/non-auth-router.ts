import { Router } from "express";
import { MESSAGE } from '../../../settings/settings'
import { login, signup } from "./apiJWTAuthentication/apiLoginUser";

export const apiRoutes: Router = Router();

// apiRoutes.get( '/', ( _req, res ) => { res.send( MESSAGE ); } );

apiRoutes.route( '/signup' ).post( signup );
apiRoutes.route( '/login' ).post( login );