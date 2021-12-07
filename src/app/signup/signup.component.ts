import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserService} from '../services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;
    firebaseErrorMessage: string;

    constructor(private authService: UserService, private router: Router, private afAuth: AngularFireAuth) {
        this.firebaseErrorMessage = '';
    }

    ngOnInit(): void {
        this.signupForm = new FormGroup({
            'name': new FormControl('',Validators.required),
            'phone':new FormControl('',Validators.required),
            'dob':new FormControl('',Validators.required),
            'gender':new FormControl('',Validators.required),
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', Validators.required)
        });
    }

    signup() {
        // if (this.signupForm.invalid)                            // if there's an error in the form, don't submit it
        //     return;

        this.authService.signupUser(this.signupForm.value).then((result) => {
            if (result == null)                                 // null is success, false means there was an error
                this.router.navigate(['/home']);
            else if (result.isValid == false)
                this.firebaseErrorMessage = result.message;
        }).catch(() => {

        });
    }
}
