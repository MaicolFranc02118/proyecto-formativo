import { Input, Button } from "@/shared";

export default function UserRegisterForm() {

    
          const handleNameChange = (e) => {
            console.log("Nombre:" + e.target.value)

          }
            const handlEmailBlur = (e) => {
            console.log("Email:" + e.target.value)

          }
    return (
        <div>


            <h1 className=" text-text-primary text-2xl mb-6">
              Registro de usuario 
            </h1>
            <form className="grid grid-cols-1 items-center gap-6 ">
              {/**Inputs */}
              <div className="grid grid-cols-2 my-0 mx-auto gap-6">
                 <Input
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    onChange={handleNameChange}

                  
                    />

                     <Input
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    /> 
                    
                    <Input
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    /> 
                    
                    <Input
                    label="Nombre"
                    placeholder="Ingrese su nombre"
                    />

                <Input
                    label="Telefono"
                    placeholder="Ingrese su telefono"
                    type="tel"
                   />

                <Input
                    label="Correo"
                    placeholder="Ingrese su correo"
                    type="email"
                    onBlur={handlEmailBlur}

                   />

                <Input
                    label="Contraseña"
                    placeholder="Ingrese su contraseña"
                    type="password"
                   />

                <Input
                    label="Edad"
                    placeholder="Ingrese su edad"
                    type="number"
                   />

                    {/* Actions */}
                <div className="flex items-end  justify-end gap-12">
                    <Button
                        variant="secondary"
                        size="sm"
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        size="md"
                    >
                        Guardar
                    </Button>
                </div>

              </div>
               


            </form>
        </div>
    );
}