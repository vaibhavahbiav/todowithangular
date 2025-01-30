import { Component } from '@angular/core';
import { TodosComponent } from "./MyComponents/todos/todos.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [TodosComponent]
})
export class AppComponent {
  title = 'Todo ';
}
