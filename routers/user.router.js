import express from "express";
import { addUser, deleteUserById, GetUser, GetUserById, updateUserById } from "../controllers/user.controller.js";

const router = express.Router()

router.get("/",GetUser)
router.get("/:id" , GetUserById)
router.post("/" , addUser)
router.put("/:id" , updateUserById)
router.delete("/:id" , deleteUserById)

export default router