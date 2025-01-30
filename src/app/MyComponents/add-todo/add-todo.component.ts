import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
  @Output() todoAdd: EventEmitter<ToDo> = new EventEmitter();
  title?: string;
  description?: string;

  onSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      description: this.description,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
