import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-family-plans',
  templateUrl: './family-plans.component.html',
  styleUrls: ['./family-plans.component.css']
})
export class FamilyPlansComponent implements OnInit {
  familyplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.familyplans=this.PlanService.getFamilyPlans();
    this.familyplans.subscribe(val=>console.log(val))
  }

}

