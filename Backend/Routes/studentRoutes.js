import express from "express";
import { deleteStudent, getAllStudents, registerStudent, updateStudent } from "../controller/registerStudentController.js";

const router = express.Router();

router.post("/", registerStudent);
router.get("/", getAllStudents);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);

export default router;
