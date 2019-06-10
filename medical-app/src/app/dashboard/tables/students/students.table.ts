import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { StudentService } from '../../../common/service/student/student.service';

@Component({
  selector: 'med-app-table',
  templateUrl: '../../../common/templates/table/table.component.html',
})
export class StudentTable {

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

  source: LocalDataSource = new LocalDataSource();
  parsedClassList() {
    const allClasses = this.service.getAllClasses();
    return allClasses.map((cl)=> ({value: cl, title: cl}));
  }

  constructor(private service: StudentService) {
    const data = this.service.getAllStudents();
    this.source.load(data);
  }
}
