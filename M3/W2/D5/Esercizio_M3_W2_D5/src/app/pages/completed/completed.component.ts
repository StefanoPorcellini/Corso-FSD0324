import { Component } from '@angular/core';
import { iTodo } from '../../models/todo';
import { iUser } from '../../models/user';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  compleatedTodos:iTodo[] = []

  allUsers:iUser[] = []

  constructor(private todoSvc:TodoService, private userSvc:UserService){}

  ngOnInit(){
   this.compleatedTodos = this.todoSvc.filterCompleteTodo()
   this.allUsers = this.userSvc.userArray
  }

  getUserById(userId:number){
  return this.userSvc.getUserId(userId)  }


}
