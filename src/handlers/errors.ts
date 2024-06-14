import {NextFunction, Request, Response} from "express"

export const errorHandler = (err: Error, request: Request, response: Response, next: NextFunction) => {
    response.status(500).send({errors: [{message: "Something went wrong"}]})
}