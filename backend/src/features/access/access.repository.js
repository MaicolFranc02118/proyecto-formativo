//

import { pool } from "../../config/db.js";

export const accessRepository = {
    async isSuperUser(userId) {
        const query = `
        SELECT is_superuser
        FROM users
        WHERE id = $1;
        
        `;
        const result = await pool.query(query, [userId]);

        return result.rows[0]?.is_superuser ?? false;
    },
    async getUserPermissions(userId) {
        const query =`
        SELECT DISTINCT p.permissions_codename

        FROM permissions p

        INNER JOIN user_permissions up
            ON up.permission_id = p.permissions_id

        WHERE up.user_id = $1
        
        UNION

        SELECT DISTINCT p.permissions_codename

        FROM permissions p

        INNER JOIN group_permissions gp
            ON gp.permission_id = p.permissions_id

        INNER JOIN user_groupn ug 
            ON ug.group_id = gp.group_id
            
        WHERE ug.user_id = $1;    
        `;
        
        const reult = await pool.query(query, [userId]);

        return result.rows.map((row) => row.permission_codename);
    },
};