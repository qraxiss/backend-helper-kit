import { BaseError } from './errors';
import { AxiosError } from 'axios';
export declare function status500(err: BaseError | Error | AxiosError, req: any, res: any, next: any): any;
