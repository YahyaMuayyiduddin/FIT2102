// const z = 1 //Global scope
// let w = 1 //Block scope
// "hello" == "hello" //Type conversion
// "hello" === "hello"

// // Ternary
// // if                           else
// (true) ? console.log("true") : console.log("false")

function recSumTo(n){
    // if(n===0){
    //     return 0;
    // }
    // return n + recSumTo(n-1);
    return (n===0) ? 0 : n + recSumTo(n-1)
    

}
console.log(recSumTo(10));


/**
 * Sum up to a specified number, ignoring values.
 *
 * /Hint/: This should be recursive
 *
 * @param f Function that returns true if we should keep the value, false otherwise
 * @param n Number to sum to (inclusive)
 * @returns the sum
 */

const isDivisibleByThreeOrFive = (n) => {
    return n % 5 === 0 || n % 3 ===0
}

const selectiveSummer = f => n => {
    const summer_aux = function(n){
        if(n === 0){
            return 0
        }
        else{
            if(f(n)){
                return n + summer_aux(n-1)
            }
            else{
                return summer_aux(n-1)
            }
        }
        
    }

    return summer_aux(n);
};

const summer = selectiveSummer(isDivisibleByThreeOrFive);
console.log(summer(10));