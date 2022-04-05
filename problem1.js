/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

//Function 1
const sum = (numArray, target) => {
    let numbersSum;
    for (let i = 0; i < numArray.length; i++) {
        for (let j = i; j < numArray.length; j++) {
            numbersSum = numArray[i] + numArray[j]
            if (numbersSum == target){
                console.log(`El par de indices del array [${numArray}] que sumados dan como resultado ${target} son ${i} y ${j}`)
                return
            }   
        }     
    }
    console.log(`No hay un par números en el arreglo que sumados den como resultado ${target}`)
}

//Function 2 version más optimizada
const sum2 = (numArray, target) => {
    var hash = new Object();
    for (let i = 0; i < numArray.length; i++) {
        hash[numArray[i]] = i;
    }
    for (let i = 0; i < numArray.length; i++) {
        complement = target - numArray[i];
        if (hash[complement] && hash[complement] != i){
            console.log(`El par de indices del array [${numArray}] que sumados dan como resultado ${target} son ${i} y ${hash[complement]}`)
            return
        }
    }
    console.log(`No hay un par números en el arreglo que sumados den como resultado ${target}`)
}

//ejemplo
const arreglo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const target = 22

sum2(arreglo, target); 



