export interface JWTPayload {
	uid: string,
    firstName: string,
    lastName: string,
	email: string,
	isAdmin: boolean,
	tokenLife: number,
}

export const defaultJWTPayload : JWTPayload = {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    isAdmin: false,
    tokenLife: 0,
}