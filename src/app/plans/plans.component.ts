import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:Plan[]=[];
  constructor(private PlanService:PlanListService) { }

  ngOnInit(): void {
    this.getPlans();
  }
  getPlans(){
    this.plans=this.PlanService.getPlans();
  }

}
