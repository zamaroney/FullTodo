package com.fullTodo.rest.webservices.restful_web_webservices.todo;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class todoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static Long idCounter = 0L;

    static {
        todos.add(new Todo(++idCounter, "zamaroney", "Learn to Dance", LocalDate.now(), false));
        todos.add(new Todo(++idCounter, "zamaroney", "Learn About Angular", LocalDate.now(), false));
        todos.add(new Todo(++idCounter, "zamaroney", "Learn About Springboot in depth", LocalDate.now(), false));
    }

    public List<Todo> finddAll() {
        return todos;
    }

    public Todo deletedById(Long id) {
        Todo todo = findById(id);
        if (todo == null) return null;
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(Long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo) {
        if(todo.getId() == -1 || todo.getId() == 0){
            todo.setId(++idCounter);
            todos.add(todo);
        }
        else{
            deletedById(todo.getId());
            todos.add(todo);
        }

        return todo;
    }
}
