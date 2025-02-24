import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-dos',
  imports: [UserListComponent,UserDetailsComponent],
  templateUrl: './dos.component.html',
  styleUrl: './dos.component.css'
})
export class DosComponent {

}
