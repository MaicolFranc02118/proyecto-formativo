
import { accessService } from "../features/access/access.service.js";

export const requirePermission = (PermissionCode) =>{
    return async (req, res, next) => {
        const userid = req.user.id;

        const granted = await accessService.hasPersmission(userid, PermissionCode);

        if (!granted) {
            return res.status(403).json({
                message: "No tiene permisos para realizar esta accion"
            });
        }

        next();
    };
};