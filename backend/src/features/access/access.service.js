import { accessRepository } from "./access.repository.js";  

export const accessService = {
    async hasPersmission (userId, permissionCodename) {
        const isSuperUser = await accessRepository.isSuperUser(userId);

        if (isSuperUser) {
            return true;
        }
        const permissions = await accessRepository.getUserPermissions(userId);

        return permissions.includes(permissionCodename);
    },
};