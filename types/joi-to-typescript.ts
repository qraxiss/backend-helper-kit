import { convertFromDirectory } from 'joi-to-typescript'

type directories = {
    schemaDirectory: string
    typeOutputDirectory: string
}[]

export async function convert(directories: directories) {
    return await Promise.all(
        directories.map(async (directory) => {
            return await convertFromDirectory(directory)
        })
    )
}
