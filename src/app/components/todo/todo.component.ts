import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})


export class TodoComponent {

  @Output() emitDeleteTodo: EventEmitter<Number> = new EventEmitter();

  @Input() 
  get todo(): String { return this._todo; }
  set todo(todo: String) {
    this._todo = (todo && todo.trim()) || '<no Todo sets>';
  };

  @Input() 
  get index(): Number { return this._index; }
  set index(index: Number) {
    this._index = index || 0;
  }

  private _todo: String = '';
  private _index: Number = 0;


  deleteTodo(index: Number){
    this.emitDeleteTodo.emit(index);
  }

}
