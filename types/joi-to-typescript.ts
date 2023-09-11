import { convertFromDirectory } from 'joi-to-typescript'

export function convert() {
    convertFromDirectory({
        schemaDirectory: './logic/validators/returns',
        typeOutputDirectory: './logic/types/returns'
    })

    convertFromDirectory({
        schemaDirectory: './logic/validators/params',
        typeOutputDirectory: './logic/types/params'
    })
}
