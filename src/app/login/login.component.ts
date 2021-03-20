import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
credent:credent;

  ngOnInit(): void {
    this.credent = { 
      username:"",
      password:"",
      
      isrem:false,
    
    };
  }
  onSubmit(LoginForm) {
    console.log(LoginForm.value);
    alert("User Logged In");
    
  }




}
export class credent {
  username:string;
  password:string;
  isrem:boolean;

  
  
}

