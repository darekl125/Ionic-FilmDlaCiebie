import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { CustomValidators } from './custom-validators';
import { NavController } from 'ionic-angular';
import { FilterPage } from '../filter/filter.page';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {



  credentials = {
    email: '',
    password: ''
  }
  
  public frmSignup: FormGroup;

  constructor(
    
    private fb: FormBuilder,
    public navCtrl: NavController
  ) {
    
    this.frmSignup = this.createSignupForm();
   }

//   ngOnInit() {
//   }

// }

abort(){
this.navCtrl.push(FilterPage)
}

createSignupForm(): FormGroup {
  return this.fb.group(
    {
      email: [
        null,
        Validators.compose([Validators.email, Validators.required])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          // check whether the entered password has a number
          CustomValidators.patternValidator(/\d/, {
            hasNumber: true
          }),
          // check whether the entered password has upper case letter
          CustomValidators.patternValidator(/[A-Z]/, {
            hasCapitalCase: true
          }),
          // check whether the entered password has a lower case letter
          // CustomValidators.patternValidator(/[a-z]/, {
          //   hasSmallCase: true
          // }),
          // check whether the entered password has a special character
          // CustomValidators.patternValidator(
          //   /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          //   {
          //     hasSpecialCharacters: true
          //   }
          // ),
          Validators.minLength(6)
        ])
      ],
      confirmPassword: [null, Validators.compose([Validators.required])]
    },
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
    }
  );
  }}