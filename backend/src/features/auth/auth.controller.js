// backend/src/features/auth/auth.controller.js
// Controlador de autenticación: maneja el endpoint de login

// Importamos el servicio de autenticación, que contiene la lógica de validación y generación de JWT
import { authService } from "./auth.service.js";

// Definimos el controlador de autenticación
export const authController = {
    // Método login: se ejecuta cuando el cliente hace un POST a /api/auth/login
    async login (req, res) {
        try {
            // Llamamos al servicio de autenticación con los datos enviados en el body (email y password)
            const result = await authService.login(req.body);

            // Si todo sale bien, respondemos con estado 200 y un mensaje de éxito
            // Además devolvemos el token y los datos básicos del usuario
            res.status(200).json({
                message: "Login exitoso",
                ...result,
            });
        } catch (err) {
            // Si ocurre algún error (credenciales inválidas, usuario inactivo, etc.)
            // Respondemos con estado 401 y el mensaje de error
            res.status(401).json({
                error: err.message,
            });
        }
    }
}
