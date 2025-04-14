package com.example.dummy.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "card_spent")
public class CardSpent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String cardId;

    @Column(nullable = false)
    private String cardName;

    @Column(nullable = false)
    private String cardType;

    @Column(nullable = false)
    private LocalDate issueDate;

    @Column(nullable = false)
    private Long monthlyBillAmount;

    @Column(nullable = false)
    private String billingYearMonth;

    @Column(nullable = false)
    private LocalDate paymentDueDate;

    @Column(nullable = false)
    private LocalDate recentUseDate;

    @Column(nullable = false)
    private Long recentAmount;

    @Column(nullable = false)
    private String recentStore;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
} 