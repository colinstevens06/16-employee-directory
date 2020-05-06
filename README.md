# ReactJS Employee Directory

## Overview

I created a employee directory with React. I broke up my application's UI into components, managed component state, and can respond to user events.

## User Story

* As a user, I want to be able to view my entire employee directory at once so that I have quick access to their information.

## Business Context

An employee or manager would benefit greatly from being able to view non-sensitive data about other employees. It would be particularly helpful to be able to filter employees by name.

## JS Logic

Depending on which filter or sort button the user selects, a different trigger term is sent to my algorithm. Because I'm using state to manipulate the information shown on the screen, the information seemlessly switches back and forth between the desired information. The user can filter by department, or sort by name or salary.

I set first and last names as separate items in my JSON so that I could sort the users by last name.

## Design

I designed this from scratch using React Components. I wanted it to be a simple layout, nestling the sort items in the same row as my header giving the user maximum access to the employee information.

For the cards, I wanted to use a high-contrast color for the background and used white as the text color for readability.