import {Request, Response, NextFunction} from "express"
import { getMetadataDto } from "../dtos/getMetadata.dto"
import {dataGetMetadata, dataGetSummaries, dataGetTranscripts, dataGetUsers} from "../data/testing_data"
import { getSummariesDto } from "../dtos/getSummaries.dto"
import { getTranscriptDto } from "../dtos/getTranscript.dto"


const fetchUsers = (): Promise<typeof dataGetUsers> => {
    return new Promise((resolve, reject) => {
        resolve(dataGetUsers)
    })
}

const fetchMetadata = (): Promise<typeof dataGetMetadata> => {
    return new Promise((resolve, reject) => {
        resolve(dataGetMetadata)
    })
}

const fetchSummariesData = (): Promise<typeof dataGetSummaries> => {
    return new Promise((resolve, reject) => {
        resolve(dataGetSummaries)
    })
}

const fetchTranscriptsData = (): Promise<typeof dataGetTranscripts> => {
    return new Promise((resolve, reject) => {
        resolve(dataGetTranscripts)
    })
}


export async function getUsers (request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedUsersData = await fetchUsers();
        return response.status(200).send({data: fetchedUsersData})
    } catch (err) {
        next(err)
    }
}

export async function getUserMetadata(request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedData = await fetchMetadata();
        if (request.params.id && ! isNaN(parseFloat(String(request.params.id)))) {
            const filteredData = fetchedData.filter((user) => user.user_id === Number(request.params.id))
            if (filteredData)
            return response.status(200).send(filteredData)
        } else {
            return response.status(400).send({error: "A correct ID is required"})
        }
    } catch (err) {
        next(err)
    }
}

export async function getUserTranscript(request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedData = await fetchTranscriptsData();
        if (request.params.id && ! isNaN(parseFloat(String(request.params.id)))) {
            const filteredData = fetchedData.filter((user) => user.user_id === Number(request.params.id))
            if (filteredData)
            return response.status(200).send(filteredData)
        } else {
            return response.status(400).send({error: "A correct ID is required"})
        }
    } catch (err) {
        next(err)
    }
}

export async function getUserSummary(request: Request, response: Response, next: NextFunction) {
    try {
        const fetchedData = await fetchSummariesData();
        if (request.params.id && ! isNaN(parseFloat(String(request.params.id)))) {
            const filteredData = fetchedData.filter((user) => user.user_id === Number(request.params.id))
            if (filteredData)
            return response.status(200).send(filteredData)
        } else {
            return response.status(400).send({error: "A correct ID is required"})
        }
    } catch (err) {
        next(err)
    }
}