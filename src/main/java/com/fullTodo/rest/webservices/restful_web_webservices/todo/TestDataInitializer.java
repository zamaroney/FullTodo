package com.fullTodo.rest.webservices.restful_web_webservices.todo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class TestDataInitializer implements CommandLineRunner {

    private final TodoJpaRepository todoRepository;

    public TestDataInitializer(TodoJpaRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        todoRepository.save(new Todo(null, "zamaroney", "Finish project report", LocalDate.of(2025, 1, 20), false));
        todoRepository.save(new Todo(null, "zamaroney", "Buy groceries", LocalDate.of(2025, 1, 18), true));
        todoRepository.save(new Todo(null, "zamaroney", "Prepare presentation", LocalDate.of(2025, 1, 22), false));
    }
}
