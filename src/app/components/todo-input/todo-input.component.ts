import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  newTodo: String = "";
  @Output() emitNewTodos: EventEmitter<String> = new EventEmitter();

  onInput(e: Event): void {
    this.newTodo = (<HTMLInputElement>e.target).value
  }
  addNewTodo(newTodo: String): void {
    this.emitNewTodos.emit(newTodo);
    this.clear();
  }
  clear(): void {
    this.newTodo = "";
  }

}
