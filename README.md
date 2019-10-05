Revisiting ES6 via FreeCodeCamp resources and copying passed code to Git repo as I go through each task. Documenting below anything new I learn, or anything I am reminded of that I may have forgotten.

- Re-learned use of arrow functions as a more efficient alternative to classic functions.
    - By design arrow functions are anonymous, but could be applied to a variable. Example:

    ```
    const arrowFunction = (a,b) => {return a + b};
    console.log arrowFunction(1,2);
    //outputs 3
    ```

- Learned use of map() and filter(), also the correct method of stringing together, as in the following example which takes all positive integers from an array (arr) and squares them before mapping to a new array named 'squaredIntegers':

    ```
    const squaredIntegers = arr.filter(a => a > 0 && Number.isInteger(a)).map(a => a * a);
    ```