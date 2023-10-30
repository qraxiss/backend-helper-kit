import { ws500 } from './status-500'

export function aWsHandler(target: any, name: any, descriptor: any) {
    const originalFunction = descriptor.value
    descriptor.value = async function (ws: any, req: any) {
        try {
            await originalFunction.call(this, ws, req)
        } catch (error: any) {
            ws500(error, ws, req)
        }
    }
}

export function ahandler(target: any, name: any, descriptor: any) {
    const originalFunction = descriptor.value
    descriptor.value = async function (req: any, res: any, next: any) {
        try {
            await originalFunction.call(this, req, res, next)
        } catch (error) {
            next(error)
        }
    }
    return descriptor
}

export function handler(target: any, name: any, descriptor: any) {
    const originalFunction = descriptor.value
    descriptor.value = function (req: any, res: any, next: any) {
        try {
            originalFunction.call(this, req, res, next)
        } catch (error) {
            next(error)
        }
    }
    return descriptor
}
