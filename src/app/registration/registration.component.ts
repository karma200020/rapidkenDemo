import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));
  name = new FormControl();
  about = new FormControl();
  position = new FormControl();
  doj = new FormControl([Validators.required]);
  signUpReqObj;
  success = 'Added data to record successfully!';


  constructor(
              fb: FormBuilder,
              private snackBar: MatSnackBar
             ) {
    this.registerForm = fb.group({
      name: this.name,
      position:this.position,
      about: this.about,
      doj: this.doj
    });
  }

  ngOnInit(): void {
  }

  register(){
    if(this.registerForm.valid){
      this.signUpReqObj = {};
      this.signUpReqObj.name = this.name.value;
      this.signUpReqObj.position = this.position.value;
      this.signUpReqObj.about = this.about.value;
      this.signUpReqObj.doj = this.doj.value;

      if(localStorage.getItem('data')){
        let stored = JSON.parse(localStorage.getItem('data'));
        stored.push(this.signUpReqObj);
        localStorage.setItem('data', JSON.stringify(stored));
      } else {
        let stored = [];
        stored.push(this.signUpReqObj);
        localStorage.setItem('data', JSON.stringify(stored));
      }
      this.openSnackBar(this.success);
    }

  }

  openSnackBar(message: string, ): void {
    this.snackBar.open(message, '', {
      duration: 2000,
    });
  }



}
