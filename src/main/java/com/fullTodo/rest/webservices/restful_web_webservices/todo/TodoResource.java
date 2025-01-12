package com.fullTodo.rest.webservices.restful_web_webservices.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
public class TodoResource {
    @Autowired
    private todoHardCodedService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos(String username) {
        return todoService.finddAll();
    }

    @GetMapping("/users/{username}/todos/{id}")
    public Todo getTodos(
            @PathVariable String username, @PathVariable long id) {
        return todoService.findById(id);
    }

    // Delete /users/{users}/{todo}
    @DeleteMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deletedById(id);
        if (todo!=null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
