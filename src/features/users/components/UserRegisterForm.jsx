import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService";
import { Input, Button, DeleteCaunter, DeleteEffect, DeleteCounter2, Select } from "@/shared";


export default function UserRegisterForm() {

    const [ documentTypes, setDocumentTypes] = useState([]);

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);

    },[]);

        //Hadle
          const handleNameChange = (e) => {
            console.log("Nombre:" + e.target.value);

          }
            const handlEmailBlur = (e) => {
            console.log("Email:" + e.target.value);

          }
    return (
        <div>


            <h1 className=" text-text-primary text-2xl mb-6">
              Registro de usuario 
            </h1>

            <form className="grid grid-cols-1 items-center gap-6 ">
                
              {/**Inputs */}
              <div className="grid grid-cols-2 my-0 mx-auto gap-6 ">

                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        onChange={handleNameChange}

                    />
                 
                    <Input   
                        label="Correo"   
                        name="userEmail"                 
                        type="email"
                        placeholder="Ingrese su correo"

                    />

                    <Input
                        label="Telefono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        type="tel"
                    />

                    <Select
                        label="Tipo de documento"
                        name="userdocumentType"
                        options={documentTypes}
                    />

                       <Input
                        label="numero de documento"
                        name="userDocumentNamber"
                        placeholder="Ingrese su numero de documento"
                    />
                    
                    <Input        
                        label="Contraseña"
                        name="userPassword"
                        type="password"
                        placeholder="Ingrese su contraseña"
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

              {/* <DeleteCaunter/> 
              <DeleteEffect/> */}
              <DeleteCounter2/>


        </div>
    );
}