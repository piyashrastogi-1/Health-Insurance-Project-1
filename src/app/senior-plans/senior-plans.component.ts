import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-senior-plans',
  templateUrl: './senior-plans.component.html',
  styleUrls: ['./senior-plans.component.css']
})
export class SeniorPlansComponent implements OnInit {
  seniorplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.seniorplans=this.PlanService.getSeniorPlans();
    this.seniorplans.subscribe(val=>console.log(val))
  }

}

