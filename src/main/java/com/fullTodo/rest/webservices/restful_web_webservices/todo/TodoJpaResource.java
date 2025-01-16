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
public class TodoJpaResource {

    @Autowired
    private todoHardCodedService todoService;

    @Autowired
    private TodoJpaRepository repository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return repository.findByUsername(username);
        // return todoService.finddAll();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodos(
            @PathVariable String username, @PathVariable long id) {

        return repository.findById(id).get();
        // return todoService.findById(id);
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(
            @PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {

        Todo todoUpdated = todoService.save(todo);
        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> updateTodo(
            @PathVariable String username, @RequestBody Todo todo) {

        Todo createdTodo = todoService.save(todo);

        // location
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(createdTodo.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    // Delete /users/{users}/{todo}
    @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(
            @PathVariable String username, @PathVariable long id) {
        Todo todo = todoService.deletedById(id);
        if (todo != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
