export function filter(object: any, projection: string[]) {
    const result = { ...object }

    for (let i in projection) {
        var key = projection[i]
        if (key in result) {
            delete result[key]
        }
    }

    return result
}
