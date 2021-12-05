import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-health-insurance-claim',
  templateUrl: './health-insurance-claim.component.html',
  styleUrls: ['./health-insurance-claim.component.css']
})
export class HealthInsuranceClaimComponent implements OnInit {
  myForm5:FormGroup;

  constructor(public fb :FormBuilder) { }

  ngOnInit(): void {
    this.myForm5=this.fb.group({})
  }

}