import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:Observable<Plan[]>;


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }
  

  ngOnInit(): void {
    this.plans=this.PlanService.getGeneralPlans();
    this.plans.subscribe(val=>console.log(val))
  }
  getPlans(){
    
  }
  onselect(){
   if(this.afAuth.auth.currentUser){
   }
   else{
     alert('Kindly login first')
   }
  }


  

}
