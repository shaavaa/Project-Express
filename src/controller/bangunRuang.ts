import { Request, Response } from "express";

const VolumeTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = phi * r * r * t
        return response.status(200)
        .json({
            status: true,
            r,
            t, 
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPTabung = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const t: number = Number(request.body.t)
        const volume = 2 * phi * r * (r+t)
        return response.status(200)
        .json({
            status: true,
            r,
            t, 
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const VolumeKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const volume = s*s*s
        return response.status(200)
        .json({
            status: true,
            s, 
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPKubus = (request: Request, response: Response) => {
    try {
        const s: number = Number(request.body.s)
        const lp = 6*(s*s)
        return response.status(200)
        .json({
            status: true,
            s, 
            lp
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const VolumeBalok = (request: Request, response: Response) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const volume = p*l*t
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t, 
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPBalok = (request: Request, response: Response) => {
    try {
        const p : number = Number(request.body.p)
        const l : number = Number(request.body.l)
        const t : number = Number(request.body.t)
        const lp = 2*((p*l)+(l*t)+(p*t))
        return response.status(200)
        .json({
            status: true,
            p,
            l,
            t, 
            lp
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const LPBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const lp = 4*phi*r*r
        return response.status(200)
        .json({
            status: true,
            r, 
            lp
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

const VolumeBola = (request: Request, response: Response) => {
    try {
        const phi = Math.PI
        const r : number = Number(request.body.r)
        const volume = 4/3*phi*r*r*r
        return response.status(200)
        .json({
            status: true,
            r, 
            volume
        })
    } catch (error) {
        return response.status(500)
        .json({
            status: false,
            message: error
        })
    }
}

export{VolumeTabung, LPTabung, VolumeKubus, LPKubus, VolumeBalok, LPBalok, VolumeBola, LPBola}