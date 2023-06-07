import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'è feneta';
  todos: Array<String> = [""];

  constructor(public users: UsersService){}

  ngOnInit(): void {
    this.users.users[0] = { nome: 'test', cognome: 'test' } 
  }

  addNewTodo(newTodo: String ){
    this.todos.push(newTodo);
    this.users.users.push({ nome: <string>newTodo, cognome: 'test' } )
  }
  deleteTodo(index: Number){
    this.todos = this.todos.filter( (t, i) => i != index)
  }
}
