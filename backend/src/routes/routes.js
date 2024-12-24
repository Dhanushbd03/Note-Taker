import express from "express";
import { registerUser, signinUser } from "../controllers/User.controller.js";
import { addNote, getNotes, deleteNote, updateNote } from "../controllers/notes.controller.js";
const router = express.Router();

router.post('/register', registerUser);
router.post('/signin', signinUser);
router.post('/add', addNote)
router.get('/notes', getNotes)
router.delete('/notes/:id', deleteNote)
router.put('/notes/:id', updateNote)

export default router;
