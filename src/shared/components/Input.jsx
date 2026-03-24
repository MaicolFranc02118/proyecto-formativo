export default function Input({
    label,
    type = "text",
    ...props
}){
    //Curpo de la funcion 
    return(
        //Contenedor del input que se exporta con label curpo y feedback message
          <div className="w-[320px]">
            {/* Label */ }

         {label && (

            <label 
                className="
                    block
                    text-[8px]
                    mb-1


                ">

                    {label}

            </label>

         )}   





            {/* contenedor del input */ }
            <div
                className="
                relative
                h-12
                flex
                items-center
                place-self-end

                " >

                {/* Area interactiva invisible de un input 48px */ }
                <div 
                    className="
                        absolute
                        inset-0

                    "
                onMouseDown={(e) => {
                    e.preventDefault();
                    
                    e.currentTarget.nextSibling.focus();

                }}
                >
                {/*=====================================================*/ }    


                </div>

                {/*Area visual del input*/}
                <input 
                    type={type}
                    className="
                        relative
                        w-full
                        h-12
                        rounded-md
                        border
                        border-border
                        px-4
                        text-base

                        focus:outline-none
                        focus:ring-2
                        focus:riing-focus-ring
                        focus:border-focus-border

                
                "
                    {...props}

             />
               

            </div>
              {/*Feedback message */}


          </div>

    )
};