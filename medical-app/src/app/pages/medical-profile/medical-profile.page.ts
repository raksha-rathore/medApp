import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-profile',
  templateUrl: './medical-profile.page.html',
  styleUrls: ['./medical-profile.page.scss'],
})
export class MedicalProfilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
