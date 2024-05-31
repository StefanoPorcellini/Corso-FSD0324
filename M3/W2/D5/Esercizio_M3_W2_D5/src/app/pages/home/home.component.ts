import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { UserService } from '../../services/user.service';
import { iTodo } from '../../models/todo';
import { iUser } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allTodos:iTodo[] = []



  constructor(private todoSvc:TodoService, private userSvc:UserService){}

  ngOnInit(){
   this.allTodos = this.todoSvc.todoArray
  }

  getUserById(userId:number){
  return this.userSvc.getUserId(userId)  }

  }


