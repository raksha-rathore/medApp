import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidemenuService {
  
  private messageSource = new BehaviorSubject('Default');

  constructor() { }

  changeMessage(message: string) {
    console.log('yeah m here');
    this.messageSource.next(message)
  }

  getMessage() {
    return this.messageSource.asObservable();
  }

}