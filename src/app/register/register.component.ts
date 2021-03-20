import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  contact:contact;

  ngOnInit(): void {
    this.contact = { 
      username:"",
      password:"",
      isrem:true,
      email:"",
      city:"",
      mobileno:"",
    };
    
  }
onSubmit(contactForm)
{
  console.log(contactForm.value);
  alert("success");
}
 

 


}
export class contact {
  username:string;
  password:string;
  
  isrem:boolean;
  email:string;
  city:string;
  mobileno:string;
  
}

