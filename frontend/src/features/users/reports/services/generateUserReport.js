//funete de datos de usuarios (mock o fuente centralizada)
import { users } from "../../data/users";

//utilidad para trasnformar datos de reporte 
import { buildReportDataset } from "../utils/buildReportDataset";

//servicios de exportacion 
import { generateExcelReport } from "./generateExcelReport";
import { generatePdfReport } from "./generatePdfReport";

//caso de uso: orquestador de generacion de reporte de usuarios 
//Patron: aplication service (coordinadora utilidades y servicios)
export function generateUserReport({
    format,         //"excel | pdf"
    selectedFields,     //campos selccionados por el usuario 
    scope,              //Alcance del reposte 
    documentNumber      //filtro opcional 
})  {
    //construcion del sataset (desacoplado de la ui)

    const { headers, rows } = buildReportDataset({

        users,
        selectedFields,
        scope,
        documentNumber
    });

    //Validacion: evita generar archivos vacios 
    if (!rows.length) {
        alert ("No hay datos para generar reporte.");
        return; //corte de ejecucuin 
    }

    //Generacion de timestamp para nombres unicos de archivos (YYY-MM-DD)
    //toISOString(); convierte un afecha a formato estandr utc
    const timestamp = new Date().toISOString().slice(0,10);

    //Seleccion de estrategia de exportacion segun formato
    if (format === "excel") {
        generateExcelReport({
            headers,
            rows,
            fileName: `user-report.${timestamp}.xlsx`
        });
    }
    if (format === "pdf") {
        generatePdfReport({
            headers,
            rows,
            fileName: `user-report.${timestamp}.pdf`
        });
    }

    
}

