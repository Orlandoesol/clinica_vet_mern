import { Router } from "express";
import { create } from "../controllers/auth.controller.js";

const router = Router();

router.post('/create', create);

router.post('/login', (req, res) => {
    res.send('login');
});

export default router;