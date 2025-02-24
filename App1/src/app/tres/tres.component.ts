import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-tres',
  imports: [ReactiveFormsModule],
  templateUrl: './tres.component.html',
  styleUrl: './tres.component.css'
})
export class TresComponent {
  userForm: FormGroup;

  // id: FormControl; El id se genera automáticamente
  name: FormControl;
  username: FormControl;
  email: FormControl;
  street: FormControl;
  suite: FormControl;
  city: FormControl;
  zipcode: FormControl;
  lat: FormControl;
  lng: FormControl;
  phone: FormControl;
  website: FormControl;
  companyName: FormControl;
	catchPhrase: FormControl;
	bs: FormControl; 

  constructor(){
      this.name=new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]);
      this.username= new FormControl('',Validators.pattern('[a-zA-Z]*'));
      this.email =new FormControl('',Validators.email);
      this.street=new FormControl('',Validators.pattern('[a-zA-Z0-9 ]*'));
      this.suite=new FormControl('',Validators.pattern('[a-zA-Z]*'));
      this.city=new FormControl('',Validators.pattern('[a-zA-Z]*'));
      this.zipcode=new FormControl('',[Validators.pattern('[0-9]*'),Validators.maxLength(5)]);
      this.lat=new FormControl('',Validators.maxLength(5));
      this.lng=new FormControl('',Validators.maxLength(5));
      this.phone=new FormControl('',[Validators.maxLength(9),Validators.pattern('[0-9]*')]);
      this.website=new FormControl('',Validators.pattern('[a-zA-Z0-9 ]*'));
      this.companyName=new FormControl('',Validators.pattern('[a-zA-Z0-9 ]*'));
      this.catchPhrase=new FormControl('',Validators.pattern('[a-zA-Z0-9 ]*'));
      this.bs=new FormControl('',Validators.pattern('[a-zA-Z0-9 ]*'));

      this.userForm=new FormGroup ({
        name:this.name,
        username:this.username,
        email:this.email ,
        street : this.street,
        suite :this.suite,
        city : this.city,
        zipcode : this.zipcode,
        lat :this.lat,
        lng : this.lng,
        phone : this.phone,
        website : this.website,
        companyName : this.companyName,
        catchPhrase : this.catchPhrase,
        bs : this.bs
  
      });

  }

  handleSubmit(){

    console.log("Envio el form...");
    console.log(this.userForm.value);
  }

}
