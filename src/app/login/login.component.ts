import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  data="Your Perfect Banking Partner"
  inputplaceholder="Account Number"
  
  acno='' //or acno:any
  passw=''
  

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0},
    1002:{acno:1002,username:"ashi",password:"abc123",balance:0},
    1003:{acno:1003,username:"amaan",password:"abc123",balance:0},
    1004:{acno:1004,username:"gopi",password:"abc123",balance:0}

  }
 
  constructor(){}
  ngOnInit(): void{}
  login(){
    //alert('login clicked')
    var acnum=this.acno //these steps are optional, if skipped u need to use instance variable like this.acno,this.passw and this.userDetails
    var pass=this.passw
    var userDetails1=this.userDetails
    if(acnum in userDetails1){
      if(pass==userDetails1[acnum]['password']){ //acnum is a direct variable and password is a direct keyword, so need '' or ""
        alert("Login Successfully")
        
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('Acno incorrect or U are not yet registered')
    }
  }
  acnoChange(event:any){
    this.acno=event.target.value
    //console.log(this.acno);
    
  }
  passChange(event:any){
  this.passw=event.target.value
  //console.log(this.passw);
  
  }
}
