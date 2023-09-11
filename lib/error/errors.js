"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateError = exports.ItemExistsError = exports.DatabaseError = exports.FileNotFoundError = exports.FileCorruptedError = exports.TokenExpiredError = exports.TokenInvalidError = exports.NotFoundError = exports.ValidationError = exports.ForbiddenError = exports.SessionError = exports.CastError = exports.FileExtensionError = exports.BadRequestError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message, status, detail) {
        super(message);
        this.status = status;
        this.detail = detail;
    }
    get name() {
        return this.constructor.name;
    }
}
exports.BaseError = BaseError;
class BadRequestError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'Bad Request');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.BadRequestError = BadRequestError;
class FileExtensionError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'This file extension is not valid, please try again with something else.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.FileExtensionError = FileExtensionError;
class CastError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'Parameters are not valid, please try again with something else.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.CastError = CastError;
class SessionError extends BaseError {
    constructor(message = '') {
        super(message, 400, "We can't find your session, please make sure everything is okay.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.SessionError = SessionError;
class ForbiddenError extends BaseError {
    constructor(message = '') {
        super(message, 403, "You can't access here.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.ForbiddenError = ForbiddenError;
class ValidationError extends BaseError {
    constructor(message = '') {
        super(message, 400, "We can't validate your data, please make sure everything is okay.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.ValidationError = ValidationError;
class NotFoundError extends BaseError {
    constructor(message = '') {
        super(message, 404, "We can't find something, please make sure everything is okay.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.NotFoundError = NotFoundError;
class TokenInvalidError extends BaseError {
    constructor(message = '') {
        super(message, 401, "We can't decode your token, are you trying to hack us? Don't push it so much.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.TokenInvalidError = TokenInvalidError;
class TokenExpiredError extends BaseError {
    constructor(message = '') {
        super(message, 401, 'Your token is expired, please login again.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.TokenExpiredError = TokenExpiredError;
class FileCorruptedError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'File is corrupted or not available for use, please try with something else.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.FileCorruptedError = FileCorruptedError;
class FileNotFoundError extends BaseError {
    constructor(message = '') {
        super(message, 400, "File doesn't exist or not available for use, please try again later.");
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.FileNotFoundError = FileNotFoundError;
class DatabaseError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'Something went wrong with the database, please try again later.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.DatabaseError = DatabaseError;
class ItemExistsError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'Item already exists, please try again with something else.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.ItemExistsError = ItemExistsError;
class CreateError extends BaseError {
    constructor(message = '') {
        super(message, 400, 'Error creating item, please try again later.');
    }
    serializeErrors() {
        return [{ status: this.status, detail: this.detail, message: this.message }];
    }
}
exports.CreateError = CreateError;
//# sourceMappingURL=errors.js.map