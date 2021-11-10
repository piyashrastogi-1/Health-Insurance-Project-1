import { Component, OnInit } from '@angular/core';
import { Plan } from '../services/plan';
import { PlanListService } from '../services/plan-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';



@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans:Plan[]=[];


  constructor(private PlanService:PlanListService,public afAuth: AngularFireAuth) { }
  

  ngOnInit(): void {
    this.getPlans();
  }
  getPlans(){
    this.plans=this.PlanService.getPlans();
  }
  onselect(){
   if(this.afAuth.auth.currentUser){
     
     
   }
   else{
     alert('Kindly login first')
   }
  }


  

}
