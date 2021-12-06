import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import {map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { User } from 'firebase';



@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userCollection:AngularFirestoreCollection<User>;
    private users:Observable<User[]>;

    userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

    constructor(private router: Router, private afAuth: AngularFireAuth,public db: AngularFirestore) {
        this.userLoggedIn = false;
        this.userCollection = db.collection<User> ('users');


        this.afAuth.auth.onAuthStateChanged((user) => {              // set up a subscription to always know the login status of the user
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
    }

    loginUser(email: string, password: string): Promise<any> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Auth Service: loginUser: success');
                this.router.navigate(['/home']);
            })
            .catch(error => {
                console.log('Auth Service: login error...');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
            });
    }

    signupUser(user: any): Promise<any> {
        return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                let emailLower = user.email.toLowerCase();
                result.user.sendEmailVerification();
                this.userCollection.doc(result.user.uid).set(user); 
                                    // immediately send the user a verification email
            })
            .catch(error => {
                console.log('Auth Service: signup error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
            });
    }
}
