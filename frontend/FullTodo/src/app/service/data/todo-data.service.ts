import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient,
  ) { }

  retrieveAllTodos(username:string) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }

  retrieveTodos(username:string, id:number) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)
  }

  deleteTodo(username:string, id:number) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodos(username:string, id:number, todo:Todo) {
    return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`,
      todo);
  }

  createTodos(username:string, todo:Todo) {
    return this.http.post<Todo>(`${API_URL}/users/${username}/todos`,
      todo);
  }
}
