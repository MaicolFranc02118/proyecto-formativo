import { DataTable } from "@/shared/"
import { userColumns } from "../table/usersColumns.jsx"
import { users } from "../data/users.js"
import { Button } from "@/shared"
// fix 1: eliminado Link (no se usa) y fix 2: espacio eliminado en "react-router-dom"
import { useNavigate } from "react-router-dom"


export default function ListUserPage() {
  // fix 3: hook inicializado correctamente
  const navigate = useNavigate()

  return (
    <div className="p-6">
      {/* fix 4: h1 movido arriba de los botones */}
      <h1 className="text-xl font-semibold mb-4">
        Usuarios
      </h1>

      <div className="flex  justify-end gap-2 mb-4">
        <Button
          variant="primary"
          size="md"
          onClick={() => navigate("")}
        >
          Reportar usuario
        </Button>
         <Button
          variant="primary"
          size="md"
          onClick={() => navigate("/dashboard/createUser")}
        >
          Crear usuario
        </Button>
      </div>

      <DataTable data={users} columns={userColumns} />
    </div>
  )
}