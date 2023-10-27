import JWT from 'jsonwebtoken'

import { ForbiddenError } from './error/errors'

export function decode(token: string, key: string) {
    try {
        const result = JWT.verify(token, key)
        if (typeof result === 'string') {
            throw result
        }
        return result
    } catch (error: any) {
        throw new ForbiddenError(error.message)
    }
}
