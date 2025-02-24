import { Injectable } from '@angular/core';
import { UserI} from './user-i';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  readonly API_URL: string ="https://jsonplaceholder.typicode.com/users";
  users: UserI [] | undefined; 
  
  user: UserI | undefined;
  id: number | undefined;

  constructor(private http: HttpClient) {
    //this.users = [];
    //this.user ={};
    //this.id=0;
   }
   getUsers(){
    //return this.http.get<UserI[]>(this.API_URL);
    return this.http.get<UserI[]>(this.API_URL);
   }

   getUser(id:number){
    return this.http.get<UserI>(`${this.API_URL}/${id}`);
   }

   setUser(id:number){
      this.id=id;
   }
}
