/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.
*/

//Function
const isPalindrome = (num) => {
    let numString = String(num)
    let reverse = ''
    for (let i = numString.length-1; i >= 0; i--) {
        reverse+=numString[i]  
    }
    if (numString==reverse){
        console.log(`${num} is a palindrome`)
        return true
    }
    console.log(`${num} is NOT a palindrome`)
    return false
}

//Test

isPalindrome(231);
isPalindrome(93739);
