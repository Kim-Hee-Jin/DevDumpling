package com.example.dummy.repository;

import com.example.dummy.entity.InvestmentTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface InvestmentTransactionRepository extends JpaRepository<InvestmentTransaction, Long> {
    List<InvestmentTransaction> findByUserId(Long userId);
    List<InvestmentTransaction> findByAccountNumber(String accountNumber);
    List<InvestmentTransaction> findByAccountNumberAndTransactionDateBetween(String accountNumber, LocalDate startDate, LocalDate endDate);
} 