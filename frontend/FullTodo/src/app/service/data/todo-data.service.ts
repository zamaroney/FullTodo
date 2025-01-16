import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {TODO_JPA_API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {

  constructor(
    private http: HttpClient,
  ) { }

  retrieveAllTodos(username: string | null) {
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`)
  }

  retrieveTodos(username: string | null, id: number) {
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  deleteTodo(username: string | null, id: number) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  updateTodos(username: string | null, id: number, todo: Todo) {
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`,
      todo);
  }

  createTodos(username: string | null, todo: Todo) {
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos`,
      todo);
  }
}
