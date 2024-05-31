import { Component } from '@angular/core';
import { iTodo } from '../../models/todo';
import { iUser } from '../../models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  allUsers:iUser[] = []

  constructor(private todoSvc:TodoService, private userSvc:UserService){}

  ngOnInit(){
   this.allUsers = this.userSvc.userArray
   }

   filterTodoByUserId(userId:number){
    return this.todoSvc.filterTodoByUserId(userId)
   }
  }
