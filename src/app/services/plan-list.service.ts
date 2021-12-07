import { Injectable } from '@angular/core';
import { Plan } from './plan';
// import { PLANS } from './mock-planList';
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

  getGeneralPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'general'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getCoronaPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'coronavirus'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getSeniorPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'senior'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getFamilyPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'family'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getArogyaPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'arogya'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getCriticalPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'critical'))
    .snapshotChanges().pipe(map(snaps =>{
      return  snaps.map(snap => {
        return <Plan>{
          id:snap.payload.doc.id,
          ...snap.payload.doc.data()
        };
      });
    }));
  }
  getChildPlans():Observable<Plan[]>{  
    // this.plans=this.PlanService.getPlans();
    return this.afs.collection<any>('plans',ref=>ref.where('category',"==",'child'))
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
