const API_URL = "http://localhost:400/api/acess";

export async function hasPermission(PermissionCode){

const token = sessionStorage.getItem("token");

const response = await fetch (`${API_URL}/check/${PermissionCode}`, {
    headers: {
        Autorization: `Bearer ${token}`,
    },
});
if (!response) {
    throw new Error ("Error verificacion permisos");
}

return response.json();

}
