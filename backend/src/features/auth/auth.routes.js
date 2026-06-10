// backend/src/features/auth/auth.routes.js
// Este archivo define las rutas de autenticación usando Express Router

// Importamos Router desde express para crear un conjunto de rutas
import { Router } from "express";

// Importamos el controlador de autenticación, que contiene la lógica de login
import { authController } from "./auth.controller.js";

// Inicializamos un nuevo router independiente
const router = Router();

// Definimos la ruta POST /api/auth/login
// Cuando el cliente envía un POST con email y password,
// se ejecuta la función login del controlador
router.post("/login", authController.login);

// Exportamos el router para que pueda ser usado en el archivo principal del servidor
// Normalmente se hace con app.use("/api/auth", router);
export default router;
