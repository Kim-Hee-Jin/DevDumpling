package com.example.dummy.repository;

import com.example.dummy.entity.CardTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface CardTransactionRepository extends JpaRepository<CardTransaction, Long> {
    List<CardTransaction> findByUserId(Long userId);
    List<CardTransaction> findByCardId(String cardId);
    List<CardTransaction> findByUserIdAndTransactionDateBetween(
        Long userId, LocalDate startDate, LocalDate endDate);
    List<CardTransaction> findByCardIdAndTransactionDateBetween(
        String cardId, LocalDate startDate, LocalDate endDate);
} 