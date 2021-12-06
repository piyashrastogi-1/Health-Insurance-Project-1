import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-corona-plans',
  templateUrl: './corona-plans.component.html',
  styleUrls: ['./corona-plans.component.css']
})
export class CoronaPlansComponent implements OnInit {
  coronaplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.coronaplans=this.PlanService.getCoronaPlans();
    this.coronaplans.subscribe(val=>console.log(val))
  }

}
