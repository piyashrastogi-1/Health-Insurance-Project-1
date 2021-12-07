import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-critical-plans',
  templateUrl: './critical-plans.component.html',
  styleUrls: ['./critical-plans.component.css']
})
export class CriticalPlansComponent implements OnInit {
  criticalplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.criticalplans=this.PlanService.getCriticalPlans();
    this.criticalplans.subscribe(val=>console.log(val))
  }

}
