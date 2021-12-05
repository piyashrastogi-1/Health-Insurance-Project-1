import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-health-insurance',
  templateUrl: './child-health-insurance.component.html',
  styleUrls: ['./child-health-insurance.component.css']
})
export class ChildHealthInsuranceComponent implements OnInit {
  myForm3:FormGroup;

  constructor(public fb :FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.myForm3=this.fb.group({});
  }

}
