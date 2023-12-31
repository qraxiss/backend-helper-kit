import { ObjectSchema } from 'joi'

import { CastError } from '../error/errors'

export function validate(params: object, validator: ObjectSchema) {
    let { value, error } = validator.validate(params)
    if (error) throw new CastError(error.message)
    return value
}
