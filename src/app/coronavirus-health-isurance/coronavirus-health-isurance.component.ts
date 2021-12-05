import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-coronavirus-health-isurance',
  templateUrl: './coronavirus-health-isurance.component.html',
  styleUrls: ['./coronavirus-health-isurance.component.css']
})
export class CoronavirusHealthIsuranceComponent implements OnInit {
  myForm2:FormGroup;


  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm2=this.fb.group({});
  }

}
