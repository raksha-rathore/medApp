import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from '../../common/service/student/student.service';
import { ExportFilesService } from  '../../common/service/exportFile/export.service'

@Component({
  selector: 'app-students',
  templateUrl: '../common/templates/table/table.component.html',
})
export class StudentsPage {

  settings = {
    actions: {
      add: false,
      edit:false,
      delete: false
    },
    columns: {
      name: {
        title: 'Name',
      },
      age: {
        title: 'Age'
      },
      class: {
        title: 'Class',
        filter: {
          type: 'list',
          config: {
            selectText: 'All class',
            list: this.parsedClassList(),
          },
        },
      }
    }
  };

  downloadOptions = {
    id: "students-download",
    exportOptions: [
      {
        label: 'Current Page',
        handler: () => this.export() 
      },
      {
        label:'All Pages',
        handler: () => this.export()
      }
    ]
  };

  source: LocalDataSource = new LocalDataSource();
  parsedClassList() {
    const allClasses = this.service.getAllClasses();
    return allClasses.map((cl)=> ({value: cl, title: cl}));
  }

  export(){
      const sheetColumns = this.service.getParsedColumnsForSheet(this.settings.columns);
      const sheetRows = this.service.getAllStudents();
      this.exportService.exportJsonToExcel(sheetColumns, sheetRows, 'students', 'students');
  }

  constructor(private service:StudentService,  private exportService:ExportFilesService) {
    const data = this.service.getAllStudents();
    this.source.load(data);
  }
}
