import { NotFoundError } from './errors';
export declare class ErrorHelper {
    modelName: string;
    constructor(modelName: string);
    notFound(name?: string, text?: string): NotFoundError;
    createError(result: any, name?: string, text?: string): void;
    updateError(result: any, name?: string): void;
    getError(result: any, name?: string): void;
    getAllError(result: any, name?: string): void;
    deleteError(result: any, name?: string): void;
}
