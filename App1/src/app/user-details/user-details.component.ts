import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { UserI} from '../user-i';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{

  user!: UserI;
  number!:number;

  constructor( public userService: UserListService){  }

  ngOnInit(): void {
    if(this.number){
      this.getUser(this.number)
    }
    
  }
  
  
  getUser(id:number){

      this.userService.getUser(id).subscribe({
        next: (data) => {
          this.userService.user=data ;  
          console.log(this.userService.user)  
          
        },
        error: (error) => {
          console.log(error);
        }
  
      });
  }

  limpiar(){
    this.userService.user=undefined;
    this.userService.id=undefined;

   }
}
