import { error } from "console"
import { NextFunction, Request, Response } from "express"
import Joi from "joi"

/** Create validation schema */
let schema = Joi.object({
    panjang: Joi.number().required().min(1),
    lebar: Joi.number().required().min(1),
    tinggi: Joi.number().required().min(1)
})

/** Create a validation function */
let validateCube = (request: Request, response: Response, next: NextFunction) => {
    let {error} = schema.validate(request.body)
    if(error) {
        /** Status 400 = Bad Request */
        return response.status(400).json({
            message : error.details
        })
    }

    next()
}

export { validateCube }