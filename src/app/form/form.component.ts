import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  steps: any;
  myForm: FormGroup;
  myForm1: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    debugger;
    this.myForm = this.fb.group({

    });
    this.myForm1 = this.fb.group({

    });
    this.steps = 1;
  }
  onclick() {
    this.steps = this.steps + 1;
  }

}
