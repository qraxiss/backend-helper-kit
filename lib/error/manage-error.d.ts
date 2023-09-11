import { NotFoundError } from './errors';
export declare class ErrorHelper {
    modelName: string;
    constructor(modelName: string, filename?: string | undefined);
    notFound(name: string): NotFoundError;
    createError(result: any, name?: string): void;
    updateError(result: any, name?: string): void;
    getError(result: any, name?: string): void;
    getAllError(result: any, name?: string): void;
    deleteError(result: any, name?: string): void;
}
