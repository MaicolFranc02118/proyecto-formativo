export default function Input({
    label,
    type = "text",
    ...props
}){
    //Curpo de la funcion 
    return(
        //Contenedor del input que se exporta con label curpo y feedback message
          <div className="w-">
            {/* Label */ }
            <label 
                className="
                    block
                    text-caption
                    mb-1
                    text-text-primary
                ">

                    {label}

            </label>
            {/* contenedor del input */ }
            <div>

                {/* Area interactiva invisible de un input 48px */ }

                <div className="
                    absolute
                    inset-0

                "
                onMouseDown={(e) => {
                    e.preventDefault();
                    
                    e.currentTarget.nextSibling.focus();

                }}
                >



                </div>

                {/*Area visual del input*/}
                <input 
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

               >

                </input>
               

            </div>
              {/*Feedback message */}


          </div>

    )
};