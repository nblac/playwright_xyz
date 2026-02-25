# Project Description

This project is an end-to-end test automation framework built with
Playwright using TypeScript.

The framework is initialized from the standard Playwright base project
template and extended with a structured architecture designed to ensure:

-   **Reliability** -- deterministic test execution with proper
    isolation and fixture management
-   **Maintainability** -- clear separation of concerns and reusable
    abstractions
-   **Scalability** -- modular structure supporting growth in features,
    test coverage, and contributors

------------------------------------------------------------------------

## Architecture & Design Principles

The project follows the **Page Object Model (POM)** design pattern.

Each page or significant UI component is encapsulated in a dedicated
Page Object that:

-   Centralizes selectors and UI interactions
-   Exposes business-level methods instead of low-level actions
-   Reduces duplication across test cases
-   Improves readability and long-term maintainability

This approach enables clean, expressive test scenarios while minimizing
coupling between tests and UI implementation details.

------------------------------------------------------------------------

## Project Structure

The test suite is organized around two primary functional domains:

### 1. Customer Functionalities

Covers end-user workflows such as:

-   Account interactions
-   Transactions
-   UI validations specific to customer-facing features

### 2. Bank Manager Functionalities

Covers administrative workflows such as:

-   Customer management
-   Account management
-   Operational controls

------------------------------------------------------------------------

## Test Categorization Strategy

Within each functional domain, tests are logically grouped into:

### UI Validation Tests

-   Visual and structural validation
-   Element visibility and state assertions
-   Form validations
-   Error messaging verification

### Functional Tests

-   Business workflow validation
-   End-to-end transactional flows
-   Data integrity verification
-   Cross-page behavior validation

------------------------------------------------------------------------

## Goals of the Framework

-   Provide a clean and extensible automation baseline
-   Support parallel execution and CI/CD integration
-   Promote consistent coding standards through TypeScript typing
-   Enable straightforward addition of new functional modules

------------------------------------------------------------------------

## Summary

This project delivers a structured, domain-driven Playwright test
automation framework that leverages TypeScript and the Page Object Model
to produce reliable, maintainable, and scalable end-to-end tests across
both Customer and Bank Manager functional areas.
