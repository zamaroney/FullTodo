import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient,
  ) { }

  retrieveAllTodos(username:string) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  retrieveTodos(username:string, id:number) {
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  deleteTodo(username:string, id:number) {
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  updateTodos(username:string, id:number, todo:Todo) {
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`,
      todo);
  }

  createTodos(username:string, todo:Todo) {
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`,
      todo);
  }
}
