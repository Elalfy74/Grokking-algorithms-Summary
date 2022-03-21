# Algorithms

## Binary Search

[Code implementation](/implementation/binary_search.js)

    • Binary search is only working on sorted arrays.
    • Binary search is a lot faster than simple search.
    • O(log n) is faster than O(n), but it gets a lot faster once the list of
        items you’re searching through grows.
    • Algorithm speed isn’t measured in seconds.
    • Algorithm times are measured in terms of growth of an algorithm.
    • Algorithm times are written in Big O notation.

## Selection Sort

[Code implementation](/implementation/selection_sort.js)

    • Selection sort is a neat algorithm, but it’s not very fast O(n^2).
    • Quicksort is a faster sorting algorithm that only takes O(n log n) time.

## QuickSort

[Code implementation](/implementation/quick_sort.js)

    • If you’re implementing quicksort, choose a random element as the
        pivot. he average runtime of quicksort is O(n log n)!
    • The constant in Big O notation can matter sometimes. hat’s why
        quicksort is faster than merge sort.
    • The constant almost never matters for simple search versus binary
        search, because O(log n) is so much faster than O(n) when your list gets big.

## Breadth-first search

    • Breadth-irst search tells you if there’s a path from A to B.
    • If there’s a path, breadth-irst search will ind the shortest path.
    • If you have a problem like “ind the shortest X,” try modeling your
        problem as a graph, and use breadth-irst search to solve.
    • A directed graph has arrows, and the relationship follows the
        direction of the arrow (rama -> adit means “rama owes adit money”).
    • Undirected graphs don’t have arrows, and the relationship goes both
        ways (ross - rachel means “ross dated rachel and rachel dated ross”).
    • Queues are FIFO (First In, First Out).
    • Stacks are LIFO (Last In, First Out).
    • You need to check people in the order they were added to the search
        list, so the search list needs to be a queue. Otherwise, you won’t get
        the shortest path.
    • Once you check someone, make sure you don’t check them again.
        Otherwise, you might end up in an ininite loop.

## Dijkstra’s algorithm

    • Breadth-irst search is used to calculate the shortest path for
        an unweighted graph.
    • Dijkstra’s algorithm is used to calculate the shortest path for
    a weighted graph.
    • Dijkstra’s algorithm works when all the weights are positive.
    • If you have negative weights, use the Bellman-Ford algorithm.

# Data Structure

|        | Hash Table(Average) | Hash Table(worst) | Arrays | Linked Lists |
| ------ | ------------------- | ----------------- | ------ | ------------ |
| Search | O(1)                | O(n)              | O(1)   | O(n)         |
| Insert | O(1)                | O(n)              | O(n)   | O(1)         |
| Delete | O(1)                | O(n)              | O(n)   | O(1)         |

## Arrays and linked lists

    • Your computer’s memory is like a giant set of drawers.
    • When you want to store multiple elements, use an array or a list.
    • With an array, all your elements are stored right next to each other.
    • With a list, elements are strewn all over, and one element stores
        the address of the next one.
    • Arrays allow fast reads.
    • Linked lists allow fast inserts and deletes.
    • All elements in the array should be the same type (all ints,
        all doubles, and so on).
    • Facebook uses an array of linked lists

## Stack

    • All function calls go onto the call stack.
    • The call stack can get very large, which takes up a lot of memory

## Hash Tables

    Most programming languages you use should provide an implementation for
    you. Hash tables are a powerful data structure because they’re so fast and
    they let you model data in a diferent way. You might soon ind that
    you’re using them all the time:

        • You can make a hash table by combining a hash function
        • Collisions are bad. You need a hash function that
            minimizes collisions.with an array.
        • Hash tables have really fast search, insert, and delete
        • Hash tables are good for modeling relationships from one
            item to another item.
        • Once your load factor is greater than .07, it’s time to resize
            your hash table.
        • Hash tables are used for caching data.
        • Hash tables are great for catching duplicates.

# Solving skils & Techniques

## Recursion

    • Recursion is when a function calls itself.
    • Every recursive function has two cases: the base case
        and the recursive case.
    • All function calls go onto the call stack.
    • The call stack can get very large, which takes up a lot of memory

## Divide and Conquer

    • D&C uses recursion.
    • D&C works by breaking a problem down into smaller and smaller
        pieces. If you’re using D&C on a list, the base case is probably an
        empty array or an array with one element.
