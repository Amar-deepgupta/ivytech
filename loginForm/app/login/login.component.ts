// import { Component, OnInit } from '@angular/core';
// import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   valueObj: any = {};
//   flag: any = false;
//   emails: any;
//   passwords: any;
//   myform: any = FormGroup;
//   message: any = '';
//   constructor(private fb:FormBuilder) { }

//   ngOnInit(): void {
//     this.myform = this.fb.group({
//       email: ['', [this.emailValidator]],
//       password:['',[Validators.required,Validators.minLength(6)]]
//     })
    
//     console.log(this.myform)
//   }
//   submit(form: FormGroup) {
    
//   }
//   emailValidator(control:AbstractControl):{[key: string]: boolean} | null {
   
    
//     if(control.value === null ||    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(control.value).toLowerCase())) {
//       return null;
//     }
//     return {invalidEmail: true}
//   }
//   passwordValidator(control: AbstractControl): { [key: string]: boolean } | null{
//     if (control.value === null || isNaN(control.value) || control.value.minLength > 6 && control.value.maxLength < 10) {
//       console.log(isNaN(control.value));
//       return null;
//     }
//     return{invalidPassword:true}
    
//   }
//   login() {
//     localStorage.setItem("formValue", JSON.stringify(this.myform.value));
//     this.valueObj = localStorage.getItem('formValue');
//     this.emails = JSON.parse(this.valueObj).email;
//     this.passwords = JSON.parse(this.valueObj).password;
//      console.log(this.emails,this.passwords);
//     if (this.myform.invalid) {
//       alert("please enter the valid format of email/password");
//       return;
//     }
//     if (this.myform.valid) {
//       if (this.emails === 'amardeep@gmail.com' && this.passwords === "12345628") {
//         this.flag = true;
//         this.message = "Login successful"
          
//       } else {
//         this.flag = false;
//         this.message = "Please check email-id/password";
//         }
//     }
//   }
  

// }
