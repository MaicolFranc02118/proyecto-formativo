// backend/src/features/auth/auth.repository.js

// Importamos el pool de conexiones a la base de datos desde config/db.js
import { pool } from "../../config/db.js";

// Este repositorio se encarga de consultar la información de autenticación del usuario
export const authRepository = {
    // Busca un usuario por correo electrónico y devuelve solo los campos necesarios
    // para validar el inicio de sesión
    async findByEmail(userEmail) {
        // Definimos la consulta SQL
        const query = `
            SELECT id, user_email, password, is_active
            FROM users
            WHERE user_email = $1
            LIMIT 1;
        `;

        // Ejecutamos la consulta usando el pool de PostgreSQL
        // $1 se reemplaza por el valor de userEmail
        const result = await pool.query(query, [userEmail]);

        // Retornamos la primera fila encontrada (si existe)
        return result.rows[0];
    }
}
