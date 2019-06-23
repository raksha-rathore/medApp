import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from '../common/service/student/student.service';
import { ExportFilesService } from '../common/service/exportFile/export.service';
import { SidemenuService } from '../common/service/sidemenu/sidemenu.service';
import { DataService } from '../common/service/data/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './student.page.html',
})
export class StudentsPage {

  message:string;

  constructor(private service: StudentService, private exportService: ExportFilesService, private sidemenu: SidemenuService,
    private dataservice: DataService) {
    const data = this.service.getAllStudents();
    console.log('data ==>', data);
    this.options.source.load(data);
  }

  ngOnInit() {
    this.dataservice.currentMessage.subscribe(message => this.message = message);
  }

  newMessage() {
    this.dataservice.changeMessage("Hello from Sibling");
  }

  private options = {
    id: "students_table",
    source:  new LocalDataSource(),
    settings: {
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
      },
      action: {
        title: 'Action'
      },
    }
  }
};

  private downloadOptions = {
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
  export() {
    const sheetColumns = this.service.getParsedColumnsForSheet(this.options.settings.columns);
    const sheetRows = this.service.getAllStudents();
    this.exportService.exportJsonToExcel(sheetColumns, sheetRows, 'students', 'students');
  }
}
