import { Component, OnInit } from '@angular/core';
import { HttpApiService } from 'src/app/shared/service/http-api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {

  signIn: any = {
    email: "",
    password: ""
  }
  constructor(private _httpService:HttpApiService) { }

  ngOnInit() {
  }

  submitForm() {
    this._httpService.post("/api/Account/Login", this.signIn).subscribe(result => {
      debugger;
      alert(result.userName + "  :  " + result.type +" : Token : " + result.access_token);
      localStorage.setItem('userName', result.userName);
      localStorage.setItem('userToken', result.access_token);
      localStorage.setItem('type', result.type);
    }, error => {
      console.log(error);
    });
  }
}
