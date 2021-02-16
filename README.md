# Algorithms and Data Structures master class Notes:

## BIG O Notation:

### Objectives:

    - Motivate the need for something like Big O Notation
    - Describe what Big O Notation is
    - Simplify Big O Expressions
    - Define "Time Compleixty" and "Space Complexity"
    - Evalutate time complexity and space compexity  on different algoritms using Big O Notation
    - Describe what a logarithm is.

### What is the idea here?
    How will we know what is best to use? Imagine we have several solutions to a problem.  EX: One uses a loop the other uses a list
    BIG o helps us determines which solution is best based on time and space.


    Example question: 
    Write a funciton that accepts a given string and returns a reversed version of that string?

    We could use several different solutions and big o helps us decide which one is better than another. It will provide a numerical value to how it:

    Who Cares?
        Shouldn't it only matter that the code works? depends on hte project but really the yes it does because one implementation may save an hour over another:

        - Its important to have a precise vocab to talk about how aour code prefomrs
        - Usefule for disucssing trade-offs between different approaches
        - when your code slows down or crashes, identifying parts of the code that are inefficient cna help us find pain points in our applications.
        - it comes up in interviews quite a bit!
    
    - An Example:
    Suppose we want to write a funciton taht calculates the sum of all numbers from 1 up to (and including) some number n.
    (index.js - ln 1 - )
