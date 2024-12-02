package com.example.demo.repository;

import com.example.demo.model.Day;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DayRepository extends JpaRepository<Day, Long> {
    List<Day> findByIssuer(String issuer);
}
