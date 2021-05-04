import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {LoginService} from './login.service';
import {Country} from '@angular-material-extensions/select-country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examples';


  formGroup!: FormGroup;
  constructor(private login:LoginService) {
  }
  ngOnInit(){
    this.InitForm();
  }
  InitForm(){
    this.formGroup = new FormGroup({
      mobile: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      country: new FormControl('',[Validators.required])
    });
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.login.login(this.formGroup.value).subscribe(result=>{
        if(result.sucess){
          console.log(result);
        }else{
          alert(result)
        }
      })
    }
  }
}
