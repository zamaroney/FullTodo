package com.fullTodo.rest.webservices.restful_web_webservices.todo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class todoHardCodedService {
    private static List<Todo> todos = new ArrayList<>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "zamaroney", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "zamaroney", "Learn About Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "zamaroney", "Learn About Springboot in depth", new Date(), false));
    }

    public List<Todo> finddAll() {
        return todos;
    }

    public Todo deletedById(long id) {
        Todo todo = findById(id);
        if (todo == null) return null;
        if(todos.remove(todo)){
            return todo;
        }
        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
