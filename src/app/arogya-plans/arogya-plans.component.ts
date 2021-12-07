import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-arogya-plans',
  templateUrl: './arogya-plans.component.html',
  styleUrls: ['./arogya-plans.component.css']
})
export class ArogyaPlansComponent implements OnInit {
  arogyaplans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.arogyaplans=this.PlanService.getArogyaPlans();
    this.arogyaplans.subscribe(val=>console.log(val))
  }

}
