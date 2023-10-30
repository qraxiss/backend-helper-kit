import { BaseError } from './errors'
import { AxiosError } from 'axios'

import { returnFormatter } from '../format/return-formatter'

export function status500(err: BaseError | Error | AxiosError, req: any, res: any, next: any) {
    if (err instanceof AxiosError) {
        res.status(err.response?.status || err.response?.data?.status || 500)
        res.json({
            api_error: err.response?.data || err.response?.statusText || err.message
        })
        return next()
    }

    const json = returnFormatter(err, 'Something went wrong', 'failed')

    if (!json.error!.status) {
        json.error!.status = 500
    }

    res.status(json.error!.status)
    delete json.error!.status
    res.json(json)

    next()
}

export function ws500(err: BaseError | Error | AxiosError, ws: any, req: any) {
    if (err instanceof AxiosError) {
        ws.send(
            JSON.stringify({
                api_error: err.response?.data || err.response?.statusText || err.message
            })
        )
        return
    }

    const json = returnFormatter(err, 'Something went wrong', 'failed')

    if (!json.error!.status) {
        json.error!.status = 500
    }

    ws.send(JSON.stringify(json))
}
