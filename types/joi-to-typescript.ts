import { convertFromDirectory } from 'joi-to-typescript'

type directories = {
    schemaDirectory: string
    typeOutputDirectory: string
}[]

export function convert(directories: directories) {
    directories.forEach((directory) => {
        convertFromDirectory(directory)
    })
}
