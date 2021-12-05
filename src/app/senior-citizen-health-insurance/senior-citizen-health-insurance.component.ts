import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-senior-citizen-health-insurance',
  templateUrl: './senior-citizen-health-insurance.component.html',
  styleUrls: ['./senior-citizen-health-insurance.component.css']
})
export class SeniorCitizenHealthInsuranceComponent implements OnInit {
  myform6:FormGroup;

  constructor(public fb :FormBuilder) { }

  ngOnInit(): void {
    this.myform6=this.fb.group({})
  }

}
