import { Router } from "express";
import { login, signup } from "./apiJWTAuthentication/apiUser";

export const apiRoutes: Router = Router();


apiRoutes.route( '/signup' ).post( signup );
apiRoutes.route( '/login' ).post( login );