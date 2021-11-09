import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { PLANS } from './mock-planList';

@Injectable({
  providedIn: 'root'
})
export class PlanListService {

  constructor() { }

  getPlans():Plan[]{
    return PLANS;
  }
}
