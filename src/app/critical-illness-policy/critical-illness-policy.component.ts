import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-critical-illness-policy',
  templateUrl: './critical-illness-policy.component.html',
  styleUrls: ['./critical-illness-policy.component.css']
})
export class CriticalIllnessPolicyComponent implements OnInit {
  myForm8:FormGroup;


  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm8=this.fb.group({});
  }

}

