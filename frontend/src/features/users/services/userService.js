// ../services/userService.js
// CORRECCIÓN: eliminar duplicados y controlar boolean

const API_URL = "http://localhost:4000/api/users";

export async function createUser(userData) {
  const formData = new FormData();
  const token = sessionStorage.getItem("token");

  console.log("TOKEN", token);

  // SOLO UNA PASADA CONTROLADA
  formData.append("userName", userData.userName);
  formData.append("userEmail", userData.userEmail);
  formData.append("userPhone", userData.userPhone);
  formData.append("userDocumentType", userData.userDocumentType);
  formData.append("userDocumentNumber", userData.userDocumentNumber);
  formData.append("userPassword", userData.userPassword);

  // CLAVE: stringify correcto
  formData.append("isStaff", userData.isStaff ? "true" : "false");
  formData.append("isActive", userData.isActive ? "true" : "false");
  formData.append("isSuperUser", userData.isSuperUser ? "true" : "false");

  // archivos
  if (userData.userImage?.length) {
    userData.userImage.forEach((file) => {
      formData.append("userImage", file);
    });
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {    
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

console.log("Status:", response.status);
console.log("OK:", response.ok);
console.log("StatusText:", response.statusText);

  // if (!response.ok) {
  //   const error = await response.json();
  //   throw new Error(error.error || "Error al crear usuario");
  // }

  if (!response.ok) {
  const error = await response.json();

  console.log("ERROR BACKEND:", error);

  throw new Error(error.error || "Error al crear usuario");
}

  return response.json();
}