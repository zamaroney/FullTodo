package com.fullTodo.rest.webservices.restful_web_webservices.todo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
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

    @PutMapping("/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {

        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(
            @PathVariable String username, @RequestBody Todo todo) {

        Todo createdTodo = todoService.save(todo);

        // location
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
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
