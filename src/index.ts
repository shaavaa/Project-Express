//** Ini adalah file utama dimana ada proses menjalankan server backend */

//** Memanggil library express */
import { log } from "console"
import express, { Request, Response } from "express"
import { validateCube } from "./middleware/validateCube"
import routeBangunDatar from "./route/bangunDatar"

//** Buat wadah untuk inisiasi express */
const app = express()

/** Mendefinisikan PORT berjalannya server */
const PORT = 8000

/** Allow to read JSON as request */
app.use(express.json())

/** Proses pertama untuk handle request */
app.get(`/serentod`, (request: Request, response: Response) => {
    /** Ini adalah proses handle request dengan url/address : http://localhost:8000/serentod 
     * Method : GET
    */
   /** Memberi response */
   return response.status(200).json({
    message : `Serentod`
   })
})

/** Read query req */
app.get(`/moklet`,(request: Request, response: Response)=>{
    /** asusmsikan data yang dikirim adalah nama dan umur */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My name is ${nama} and i'm ${umur} years old`
    return response.status(200).json(message)
})

/** Read data req from parameter */
app.get(`/telkom/:nama/:gender`,(request: Request, response: Response)=>{
    let nama: String = request.params.nama
    let gender: String = request.params.gender
    let message: String = `My name is ${nama} and i'm ${gender}`
    return response.status(200).json(message)
})

/** Read a request from body */
app.post(`/moklet`, (request: Request, response: Response)=>{
    /** Asumsikan data yang dikirim adalah panjang dan lebar */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar 

    let LuasPersegiPanjang: number = panjang*lebar
    let message = `Luas persegi panjang adalah ${LuasPersegiPanjang}`
    return response.status(200).json(message)
})

/** Buatlah sebuah request untuk mengonversi suhu celcius ke
 * fahrenheit, kelvin dan reamur menggunakan request parameter
 * exp : http://localhost:8000/celcius/80
 * 80 adalah nilai celcius-nya
 * response data ->
 * {
 * reamur:?, fahrenheit:?, reamur:?}
 */

app.post(`/celcius/:nilai`, (request: Request, response: Response)=>{
    let nilai: number = Number(request.params.nilai)

    let fahrenheit: number = nilai*9/5+32
    let reamur: number = 4/5*nilai
    let kelvin: number = nilai+273
    let message = `F = ${fahrenheit}, R = ${reamur}, K = ${kelvin}`
    return response.status(200).json(message)
})

/** Create request for count volume of long cube */
app.post(`/balok`, validateCube ,(request: Request, response: Response)=>{
    /** Read panjang, lebar, tinggi */
    let panjang : number = Number(request.body.panjang )
    let lebar : number = Number(request.body.lebar)
    let tinggi : number = Number(request.body.tinggi)

    let volume : number = panjang*lebar*tinggi
    return response.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

/** Register route of bangun datar */
app.use(routeBangunDatar)

/**Run server */
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})