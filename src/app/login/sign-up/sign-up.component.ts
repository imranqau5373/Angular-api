import { Component, OnInit } from '@angular/core';
import { HttpApiService } from 'src/app/shared/service/http-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  signUp: any = {
    email: "",
    password: "",
    confirmPassword: ""
  }
  constructor(private _httpService:HttpApiService) { }

  ngOnInit() {
  }

  submitForm() {
    this._httpService.post("/api/Account/Register", this.signUp).subscribe(result => {
     this.signUp = "";
    }, error => {
      console.log(error);
    });
  }
}
