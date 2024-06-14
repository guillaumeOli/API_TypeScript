import {Request, Response, NextFunction} from "express"
import { resolveModuleName } from "typescript"
import {dataGetMetadata} from "../data/testing_data"

const fetchCallData = (): Promise<typeof dataGetMetadata> => {
    return new Promise((resolve, reject) => {
        resolve(dataGetMetadata)
    })
}

export async function getCalls (request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedCallData = await fetchCallData();
        return response.status(200).send({data: fetchedCallData})
    } catch (err) {
        next(err)
    }
}

export async function getCallById (request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedCallData = await fetchCallData();
        if (request.params.id && ! isNaN(parseFloat(String(request.params.id)))) {
            const filteredCallData = fetchedCallData.filter((call) => call.id_call === Number(request.params.id))
            return response.status(200).send({data: filteredCallData})
        } else {
            return response.status(400).send({error: "A correct ID is required"})
        }
    } catch (err) {
        next(err)
    }
}

