import { DatabaseError, NotFoundError, CreateError } from './errors'

function acknowledged() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            if (args[0]?.acknowledged === false) {
                throw new DatabaseError(`Something went wrong with database!`)
            }
            return originalMethod.apply(this, args)
        }
        return descriptor
    }
}

function getModelName(filename: string): string {
    return filename
        .split(/(\\|\/)/g)
        .pop()
        ?.replace('.ts', '') as string
}

type inputType = { result: any; name?: string; text?: string }

export class ErrorHelper {
    public modelName: string

    constructor(modelName: string) {
        var name = modelName
        this.modelName = getModelName(name)
    }

    notFound(text: string) {
        return new NotFoundError(text)
    }

    createError(data: inputType) {
        if (!data.result) {
            throw new CreateError(data.text || `Error creating ${data.name || this.modelName}`)
        }
    }

    @acknowledged()
    updateError(data: inputType) {
        if (data.result.matchedCount === 0) {
            throw this.notFound(data.text || data.name || this.modelName)
        }
    }

    getError(data: inputType) {
        if (!data.result) {
            throw this.notFound(data.text || data.name || this.modelName)
        }
    }

    @acknowledged()
    getAllError(data: inputType) {
        if (data.result.length === 0) {
            throw this.notFound(data.text || data.name || this.modelName)
        }
    }

    @acknowledged()
    deleteError(data: inputType) {
        if (data.result.deletedCount === 0) {
            throw this.notFound(data.text || data.name || this.modelName)
        }
    }
}
