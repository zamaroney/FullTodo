import { Component } from '@angular/core';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  imports: [
    NgForOf,
    DatePipe,
    NgIf,
  ],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent {

  todos: Todo[] | undefined

  message: string | undefined

  //   new Todo(1, 'learn to dance', false, new Date()),
  //   new Todo(2, 'Become Angular God', false, new Date()),
  //   new Todo(3, 'Visit Ireland', true, new Date()),
  //
  //   // {id : 1, description : 'learn to dance'},
  //   // {id : 2, description : 'Become Angular God'},
  //   // {id : 3, description : 'Visit Ireland'},
  // ]

  // todo = {
  //   id : 1,
  //   description: 'learn to dance'
  // }

  constructor(
    private todoService:TodoDataService,
    private router: Router,
  ) { }

  deleteTodo(id:number) {
    console.log(`Delete Todo ${id}`);
    this.todoService.deleteTodo('zamaroney', id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} Deleted!`;
        this.refreshTodos()
      }
    )
  }

  updateTodo(id:number) {
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos',id])
  }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('zamaroney').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  addTodo() {
    this.router.navigate(['todos',-1])
  }
}
