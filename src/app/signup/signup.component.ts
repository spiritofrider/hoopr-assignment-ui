import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MustMatch } from '../helpers/must-match.validator';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }
  genders:any=['Male','Female','Non-binary'];
  months:any=['January','February','March','April','May','June','July','August','September','October','November','December'];
  signupForm: any;
  submitted:Boolean=false;


  ngOnInit(): void {
    this.signupForm = this.fb.group({
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "emailconfirm": new FormControl(null,[Validators.required,Validators.email]),
      "password": new FormControl(null,[Validators.required]),
      "username":new FormControl(null,[Validators.required]),
      "month":new FormControl(null,[Validators.required]),
      "day":new FormControl(null,[Validators.required]),
      "year":new FormControl(null,[Validators.required]),
      "gender":new FormControl(null,[Validators.required]),
      "privacy":new FormControl(true)
    },{
      validator: MustMatch('email', 'emailconfirm')}
  )
  }

  get f() { return this.signupForm.controls; }

  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
    this.authService.signup(this.signupForm.value).subscribe((res)=>{
      console.log(res);
    })
  }

}
