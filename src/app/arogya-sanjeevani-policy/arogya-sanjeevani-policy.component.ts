import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-arogya-sanjeevani-policy',
  templateUrl: './arogya-sanjeevani-policy.component.html',
  styleUrls: ['./arogya-sanjeevani-policy.component.css']
})
export class ArogyaSanjeevaniPolicyComponent implements OnInit {
  myForm7:FormGroup;


  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm7=this.fb.group({});
  }

}

