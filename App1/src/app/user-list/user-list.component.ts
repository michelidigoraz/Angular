import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserI} from '../user-i';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  
  users: UserI [] = [];
  user!: UserI ;

  constructor (public userlistservice:UserListService){  }

   ngOnInit(){
    this.getUsers();
   }
   

   getUsers(){
    this.userlistservice.getUsers().subscribe({
      next: (data) => {
        this.userlistservice.users=data ;  
        console.log(this.userlistservice.users)  
        
      },
      error: (error) => {
        console.log(error);
      }

    });

   }

   getUser(id:number){

    this.setID(id);
    this.userlistservice.getUser(id).subscribe({
      next: (data) => {
        this.userlistservice.user=data ;  
        console.log(this.userlistservice.user)  
        
      },
      error: (error) => {
        console.log(error);
      }

    });
}


   setID(id:number){
    this.userlistservice.id=id;
   }
   
   limpiar(){
    this.userlistservice.user=undefined;
    this.userlistservice.id=undefined;

   }
   
}
