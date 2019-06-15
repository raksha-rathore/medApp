import { Injectable } from '@angular/core';
import { StudentDataService } from './student.data.service';

@Injectable()
export class StudentService extends StudentDataService {
    getAllStudents() {
        const data = [];
        let studentClass = 6;
        let age = 11;
        let NamesList = ['Raju', 'Mohan', 'Rani', 'Gowtham', 'Ravi'];
        let index = 0;
        for (let i=0; i<100; i++){
          if (index >4) 
          {
            index =0;
            age = 11;
            studentClass = 6;
          }
          let studentObj = {
            class: studentClass,
            age: age,
            name: NamesList[index]+'_'+i
          }
          data.push(studentObj);
          index++;
          age++;
          studentClass++;
        }
        return data;
    }
    getAllClasses() {
      return ['6','7','8','9','10'];
    }
    getParsedColumnsForSheet(columns:any) {
      const sheetColumns =[];
      for (let [key, value] of Object.entries(columns)) {
        sheetColumns.push({header: value['title'], key: key, width:(key==="name" ? 20: 8)})
      }
      return sheetColumns;
    }
}
