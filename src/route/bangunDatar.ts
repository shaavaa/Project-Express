import express from "express"
import { LuasPersegi, LuasPersegiPanjang, LuasSegitiga, kelilingLingkaran, kelilingPersegi, kelilingPersegiPanjang, luasLingkaran } from "../controller/bangunDatar"
const app = express()

/** allow read a body */
/** Fungsi use digunakan untuk menerapkan sebuah fungsi pada object express.
 * Fungsi tersebut akan otomatis dijalankan.
 */
app.use(express.json())

app.post(`/lingkaran/luas`, luasLingkaran)
app.post(`/lingkaran/keliling`, kelilingLingkaran)
app.post(`/persegi/luas`, LuasPersegi)
app.post(`/persegi/keliling`, kelilingPersegi)
app.post(`/persegipanjang/luas`, LuasPersegiPanjang)
app.post(`/persegipanjang/keliling`, kelilingPersegiPanjang)
app.post(`/segitiga/luas`, LuasSegitiga)

export default app