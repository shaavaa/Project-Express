import express from "express"
import { LPBalok, LPBola, LPKubus, LPTabung, VolumeBalok, VolumeBola, VolumeKubus, VolumeTabung } from "../controller/bangunRuang"
const app = express()

app.use(express.json())

app.post(`/Tabung/Volume`, VolumeTabung)
app.post(`/Tabung/LuasPermukaan`, LPTabung)
app.post(`/Kubus/Volume`, VolumeKubus)
app.post(`/Kubus/LuasPermukaan`, LPKubus)
app.post(`/Balok/Volume`, VolumeBalok)
app.post(`/Balok/LuasPermukaan`, LPBalok)
app.post(`/Bola/Volume`, VolumeBola)
app.post(`/Bola/LuasPermukaan`, LPBola)