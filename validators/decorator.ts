import { validate } from './validate'

import Joi from 'joi'

export function avalidator(inputTypes: any, outputTypes: any, config: any) {
    return function (target: any, name: string, descriptor: any) {
        const originalFunction = descriptor.value

        var inputValidator = (inputTypes as any)[name] || Joi.any()
        var outputValidator = (outputTypes as any)[name] || Joi.any()

        if (config.ENV === 'development') {
            descriptor.value = async function (params: any) {
                let value = validate(params, inputValidator)
                const result = await originalFunction.call(this, value)
                return validate(result, outputValidator)
            }
        } else if (config.ENV === 'production') {
            descriptor.value = async function (params: any) {
                let value = validate(params, inputValidator)
                return await originalFunction.call(this, value)
            }
        }
        return descriptor
    }
}
