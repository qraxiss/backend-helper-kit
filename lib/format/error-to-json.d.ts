import { BaseError } from '../error/errors';
export declare function toJson(err: BaseError | Error): {
    detail?: string;
    message: string;
    name: string;
    status?: number;
};
