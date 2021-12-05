import { Injectable } from '@angular/core';
import { Plan } from './plan';
import { PLANS } from './mock-planList';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanListService {
  private plansCollection:AngularFirestoreCollection<Plan>;
  private itemDoc:AngularFirestoreDocument<any>;

  constructor(private afs :AngularFirestore) { }

  getPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans')
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
}
