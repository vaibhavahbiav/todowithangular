import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo?: ToDo;
  @Output() todoDelete: EventEmitter<ToDo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<ToDo> = new EventEmitter();
  onClick(todo?: ToDo) {
    this.todoDelete.emit(todo);
  }

  onCheckboxClick(todo?: ToDo){
    this.todoCheckbox.emit(todo)
  }
}
