import { Component } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Todo} from '../list-todos/list-todos.component';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-todo',
  imports: [
    FormsModule,
    DatePipe,
    NgIf
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  id!: number;
  todo!:Todo

  constructor(
    private todoService:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '',false,new Date())
    if(this.id!=-1) {
      this.todoService.retrieveTodos('zamaroney', this.id).subscribe(
        data => this.todo = data
      );
    }
  }

  saveTodo() {
    if(this.id == -1) {
      this.todoService.createTodos('zamaroney', this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
    else{
      this.todoService.updateTodos('zamaroney', this.id, this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todos']);
        }
      )
    }
  }
}
