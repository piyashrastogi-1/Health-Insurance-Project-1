import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Observable<any>;

  constructor(private afs:AngularFireAuth,private firestore:AngularFirestore) {
    this.user=null;
   }

  ngOnInit(): void {
    this.afs.authState.subscribe(user=>{
      console.log('Profile:user',user);
      if(user){
        let emailLower=user.uid
        this.user=this.firestore.collection('users').doc(emailLower).valueChanges();
      }
    })
  }

}
