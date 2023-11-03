import { returnFormatter } from './return-formatter'

import { Request, Response, NextFunction } from 'express'

export function formatter(model: any) {
    return function (target: any, name: string, descriptor: any) {
        const originalFunction = descriptor.value

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            const status = await originalFunction.call(this, req, res, next)

            if (res) {
                if (!status || status.continue !== false) {
                    res.json(
                        returnFormatter(
                            await model[name]({
                                query: req?.query,
                                body: req?.body,
                                user: (req as any)?.session?.user
                            } as any)
                        )
                    )
                } else if (status.next === true) {
                    next()
                }
            }
        }
        return descriptor
    }
}

export function wsFormatter(websockets: any) {
    return function (target: any, name: string, descriptor: any) {
        const originalFunction = descriptor.value

        descriptor.value = async function (ws: WebSocket, req: Request) {
            await originalFunction.call(this, ws, req)
            const id = (req as any).session!.user!.id!
            if (ws) {
                websockets[id] = ws
                ws.send(
                    JSON.stringify(
                        returnFormatter({
                            status: 'connected'
                        })
                    )
                )
            }
        }
        return descriptor
    }
}
