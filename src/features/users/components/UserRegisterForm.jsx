import { useState, useEffect } from "react";
import { getDocumentTypes } from "@/features/users/services/selectService";
import { userSchema } from "../schemas/userSchema";


import { Input, Button,DeleteCounter2, Select, Checkbox } from "@/shared";


export default function UserRegisterForm() {

    const [ documentTypes, setDocumentTypes] = useState([]);
    //Estado
    const [ formData, setFormData ] = useState({

        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",

        //Flags booleanos
        isStaff: false,
        isActive: true,
        isSuperUser: false,
    });
    const [errors, setErrors ] = useState({});

    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    },[]);

    //=======================================================================//
    //                              HANDLE GENERICO
    //=======================================================================//

    /**
     * Funcion que se ejecuta cada vez que cambia el valor de un input del
     * formulario
     * cuando el usuario escribe cambia los nuevos datos 
     */
    const handleChange = (e) => {
        //se obtiene el nombre del campo y su valor 
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            //se copian todos los valores anteriores del estado
            ...prev,

            //Se actualiza unicamnete lo que cambio 
            [name]: type === "checkbox" ? checked : value,

        }));
    }
    
    //=======================================================================//
    //                               HANDLE SUBMIT 
    //=======================================================================//

    /**
     * Funcion que se ejecuta cuando se envia al formulario 
     */

    // Función que se ejecuta cuando se envía el formulario
    const handleSubmit = (e) => {
    // Evita que el formulario recargue la página
    e.preventDefault();

    // Se valida el objeto formData usando el esquema definido con Zod
    // safeParse devuelve un objeto indicando si la validación fue exitosa o no
    const result = userSchema.safeParse(formData);

    // Si la validación falla
    if (!result.success) {
        // Objeto donde se almacenarán los errores por campo
        const fieldErrors = {};

        // Zod devuelve los errores en un arreglo llamado issues
        // Se recorren para asociar cada error a su campo correspondiente
        result.error.issues.forEach((issue) => {
            // issue.path contiene la ruta del campo que falló
            const field = issue.path[0];

            // Se guarda el mensaje de error en el objeto fieldErrors
            fieldErrors[field] = issue.message;
        });

        // Se actualiza el estado de errores para mostrarlos en el formulario
        setErrors(fieldErrors);

        // Se detiene la ejecución porque el formulario tiene errores
        return;
    }
    // Si la validación es exitosa se limpian los errores anteriores
    setErrors({});

    // result.data contiene los datos ya validados por Zod
    console.log("Usuario válido:", result.data);
};

    return (
        <div>
            <h1 className=" text-text-primary text-2xl mb-6">
              Registro de usuario 
            </h1>

            <form 
                className="grid grid-cols-1 items-center gap-6 "
                onSubmit={handleSubmit}
             >
   
              {/**Inputs */}
              <div className="grid grid-cols-2 my-0 mx-auto gap-6 ">

                    <Input
                        label="Nombre"
                        name="userName"
                        placeholder="Ingrese su nombre"
                        value={formData.userName}
                        onChange={handleChange}
                        error={errors.userName}
                    />
                    <Input   
                        label="Correo"   
                        name="userEmail"                 
                        type="email"
                        placeholder="Ingrese su correo"
                        value={formData.userEmail}
                        onChange={handleChange}
                        error={errors.userEmail}


                    />
                    <Input
                        label="Telefono"
                        name="userPhone"
                        placeholder="Ingrese su telefono"
                        type="tel"
                        value={formData.userPhone}
                        onChange={handleChange}
                        error={errors.userPhone}
                    />
                    <Select
                        label="Tipo de documento"
                        name="userDocumentType"
                        options={documentTypes}
                        value={formData.userDocumentType}
                        onChange={handleChange}
                        error={errors.userDocumentType}
                    />
                    <Input
                        label="numero de documento"
                        name="userDocumentNumber"
                        placeholder="Ingrese su numero de documento"
                        value={formData.userDocumentNumber}
                        onChange={handleChange}
                        error={errors.userDocumentNumber}
                    />
                    <Input        
                        label="Contraseña"
                        name="userPassword"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.userPassword}
                        onChange={handleChange}
                        error={errors.userPassword}
                    />

                    <Checkbox
                        id="isStaff"
                        name="isStaff"
                        label="Es administrador"
                        checked={formData.isStaff}
                        onChange={handleChange}
                    
                    />
                    <Checkbox
                        id="isActive"
                        name="isActive"
                        label="Activo "
                        checked={formData.isActive}
                        onChange={handleChange}                    
                    />

                    <Checkbox
                        id="isSuperUser"
                        name="isSuperUser"
                        label="Es super usuario"
                        checked={formData.isSuperUser}
                        onChange={handleChange}
                    
                    />
             
                    {/* Actions */}
                    <div className="flex items-end justify-end gap-12">

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