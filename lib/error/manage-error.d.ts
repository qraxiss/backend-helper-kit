import { NotFoundError } from './errors';
type inputType = {
    result: any;
    name?: string;
    text?: string;
};
export declare class ErrorHelper {
    modelName: string;
    constructor(modelName: string);
    notFound(text: string): NotFoundError;
    createError(data: inputType): void;
    updateError(data: inputType): void;
    getError(data: inputType): void;
    getAllError(data: inputType): void;
    deleteError(data: inputType): void;
}
export {};
