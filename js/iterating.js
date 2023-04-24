(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['John', 'Jacob', 'Jingleheimer', 'Schmidt']
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log('')
    console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('')
    console.log(names[0], names[1], names[2], names[3])
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('')
    for (let i=0; i < names.length; i++) {
        console.log(names[i])
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('')
    names.forEach(function (names) {
        console.log(names);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log('')
    function first(){
        return names[0]
    }
    function second() {
        return names[1]
    }
    function last() {
        return names[names.length -1]
    }

    console.log(first())
    console.log(second());
    console.log(last());

})();