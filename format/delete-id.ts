export function deleteId(target: any, name: string, descriptor: any) {
    const originalFunction = descriptor.value

    descriptor.value = async function (params: any) {
        const result = await originalFunction.call(this, params)

        if (Array.isArray(result)) {
            result.forEach((item) => {
                delete item._id
            })
        } else {
            delete result._id
        }

        return result
    }
    return descriptor
}
