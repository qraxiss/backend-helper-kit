import JWT from 'jsonwebtoken';
export declare function decode(token: string, key: string): JWT.JwtPayload;
