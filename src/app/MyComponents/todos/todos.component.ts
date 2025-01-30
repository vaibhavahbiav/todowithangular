import { Component } from '@angular/core';
import { ToDo } from '../../ToDo';
import { CommonModule, NgFor } from '@angular/common';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";
@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItemComponent, AddTodoComponent, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: ToDo[];
  localItem: string;
  constructor() {
    this.localItem = localStorage.getItem("todos") as any;
    this.localItem != "" || this.localItem != null || typeof this.localItem != "undefined" ? this.todos = JSON.parse(this.localItem): this.todos = [];
  }

  deleteTodo(todo: ToDo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  addTodo(todo: ToDo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  
  toggleTodo(todo: ToDo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
