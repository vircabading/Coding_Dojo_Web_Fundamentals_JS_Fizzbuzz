///////////////////////////////////////////////
// Subj:    Coding Dojo > Web Fundamentals > JS
//          FizzBuzz
// By:      Virgilio D. Cabading Jr.
//          October 15, 2021
///////////////////////////////////////////////

for (var i=1; i <= 100; i++) {                  // Count i from 1 to 100
    if ((i % 3 == 0) && (i % 5 == 0)) {         // If i is both a multiple of 3 and 5
        console.log("FizzBuzz");                //      Print FizzBuzz
    } else if (i % 3 == 0) {                    // If i is a multiple of 3 but not 5
        console.log("Fizz");                    //      Print Fizz
    } else if (i % 5 == 0) {                    // If i is a multiple of 5 but not 3
        console.log("Buzz")                     //      Print Buzz
    } else {                                    // If i is not a multiple of 3 or 5
        console.log(i);                        //      Print the number i
    }
}