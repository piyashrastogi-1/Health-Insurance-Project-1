import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-plans',
  templateUrl: './child-plans.component.html',
  styleUrls: ['./child-plans.component.css']
})
export class ChildPlansComponent implements OnInit {
  childplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.childplans=this.PlanService.getChildPlans();
    this.childplans.subscribe(val=>console.log(val))
  }

}

