import express from "express"
import { deleteUser, insert, read, update } from "../Controller/controller.js"

export const router = express.Router()

router.get("/",read)

router.post("/",insert)

router.put("/update/:id",update)

router.delete("/del/:id",deleteUser)
