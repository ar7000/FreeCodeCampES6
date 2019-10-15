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

- Learned use of spread operator to copy one array to another:

    ```
    const arr1 = ["x", "y", "z"];
    const arr2 = [...arr1];

    ```

    Differs from simply sayying arr2 = arr1 in that it will unpack the array into arr2 so it can be used independently of arr1, rather than just looking up the arr1 variable.

- Learned how to use destructuring assignment to pass and the value of an object's specific key to a new variable.
    - Takes key name of existing object and the variable name to which it is to be assigned, then the name of the existing object itself in order to look up the value. Example:

    ```

    const albums = {a: "The White Album", b: "The Black Album"};

    const {b:betterAlbum} = albums;

    //Logging betterAlbum will now output "The Black Album";

    ```

    - Can also use to access nested objects:

    ```

    const shoppingList = {
        fresh:
            {
            dairy: "milk",
            vegetables: "carrots",
            obviously:"pizza"
            },
        
        tins:
            {
            soup: "tomato",
            fruit: "pears",
            vegetables:"peas"
            },
    }

    const {fresh:{dairy:dairyOnly}} = shoppingList;

    //Logging dairyOnly will now output "milk";

    ```

- Learned to use destructuring to pass an array index's value to new variables, e.g the following will swap around the values of a and b:

    ```
    let a = 8, b = 6;
    
    (() => {

    [a,b] = [b,a];

    })();
    ```

    - Also works with rest operator. Following would mean newArr was equal to [3,4,5,6,7,8,9,10].

    ```
    const source = [1,2,3,4,5,6,7,8,9,10];

    function removeFirstTwo(list) {
        "use strict";
        
        const [,,...arr] = list;
        
        return arr;
    }

    const newArr = removeFirstTwo(source);
    ```