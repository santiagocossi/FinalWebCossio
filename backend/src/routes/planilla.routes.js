import { Router } from 'express';
import { addPlanilla, getPlanillas } from '../controllers/planilla.controllers.js';

const router = Router();

router.post('/planilla', addPlanilla); // Crear planilla
router.get('/planilla', getPlanillas); // Listar planillas

export default router;
