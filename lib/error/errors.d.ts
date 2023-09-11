export declare abstract class BaseError extends Error {
    status: number;
    detail: string;
    protected constructor(message: string, status: number, detail: string);
    get name(): string;
    abstract serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class BadRequestError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class FileExtensionError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class CastError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class SessionError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class ForbiddenError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class ValidationError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class NotFoundError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class TokenInvalidError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class TokenExpiredError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class FileCorruptedError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class FileNotFoundError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class DatabaseError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class ItemExistsError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
export declare class CreateError extends BaseError {
    constructor(message?: string);
    serializeErrors(): {
        status: number;
        detail: string;
        message: string;
    }[];
}
