https://cs.slides.com/colt_steele/searching-algorithms-22

What is recursion?
A process (a function in our case) that calls itself

It's EVERYWHERE!
JSON.parse / JSON.stringify
document.getElementById and DOM traversal algorithms
Object traversal
Very common with more complex algorithms
It's sometimes a cleaner alternative to iteration

How recursive functions work
Invoke the same function with a different input until you reach your base case!

Base Case
The condition when the recursion ends.
This is the most important concept to understand 

Two essential parts of a recursive function!
1. Base Case
2. Different Input

Where things go wrong
No base case
Forgetting to return or returning the wrong thing!
Stack overflow! 

HELPER METHOD RECURSION

    function outer(input){
        var outerScopedVariable = []

        function helper(helperInput){
            // modify the outerScopedVariable
            helper(helperInput--)
        }
        
        helper(input)

        return outerScopedVariable;
    }


Pure Recursion Tips
For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
To make copies of objects use Object.assign, or the spread operator