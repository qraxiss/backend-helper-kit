import { validate } from './validate'

export function avalidator(inputTypes: any, outputTypes: any, config: any) {
    return function (target: any, name: string, descriptor: any) {
        const originalFunction = descriptor.value

        if (config.ENV === 'development') {
            descriptor.value = async function (params: any) {
                let value = validate(params, (inputTypes as any)[name])
                const result = await originalFunction.call(this, value)
                return validate(result, (outputTypes as any)[name])
            }
        } else if (config.ENV === 'production') {
            descriptor.value = async function (params: any) {
                let value = validate(params, (inputTypes as any)[name])
                return await originalFunction.call(this, value)
            }
        }
        return descriptor
    }
}
