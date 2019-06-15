import { Injectable } from '@angular/core';
import Excel from 'exceljs/dist/exceljs.js';
import FileSaver from 'file-saver';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Injectable()
export class ExportFilesService {

   exportJsonToExcel (columns:object, data:any[], sheetName:string, filename:string) {
          
      const workbook = new Excel.Workbook();
      workbook.addWorksheet(sheetName);
      const worksheet = workbook.getWorksheet(sheetName);
      worksheet.columns = columns;
      worksheet.addRows(data);
      workbook.xlsx.writeBuffer()
         .then((buffer:any) =>  {
            FileSaver.saveAs(new Blob([buffer]), `${filename}_${Date.now()}.xlsx`)
         })
         .catch((err:any )=> console.log('Error writing excel export', err));
   }

   exportToPdf(elemId:string, filename:string) {
      const exportAsService = new ExportAsService();
      const exportAsConfig: ExportAsConfig = {
         type: 'pdf',
         elementId: elemId,
         options: {
           orientation: 'landscape',
           margins: {
             top: '20'
           }
         }
       }
       // download the file using old school javascript method
       exportAsService.save(exportAsConfig, `${filename}_${Date.now()}`);
       // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
       /*this.exportAsService.get(exportAsConfig).subscribe(content => {
         console.log(content);
       });*/
   }
}
