import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-family-health-insurance',
  templateUrl: './family-health-insurance.component.html',
  styleUrls: ['./family-health-insurance.component.css']
})
export class FamilyHealthInsuranceComponent implements OnInit {
  myForm4:FormGroup;

  constructor(public fb :FormBuilder) { }

  ngOnInit(): void {
    this.myForm4=this.fb.group({})
  }

}
