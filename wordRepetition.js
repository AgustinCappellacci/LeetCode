/* 
Dada una cadena de texto devolver el número de veces que se repite cada palabra.
*/

//Word normalizer
const normalize = (word) => {
    let normalizedWord = word.toLowerCase().replace(/[.!,;?]/g, "");
    return normalizedWord
}

//Function
const wordCount = (arr) => {
    let hash = new Object();
    let separatedWords = arr.split(" ");

    for (let i = 0; i < separatedWords.length; i++) {
        if (normalize(separatedWords[i]) in hash) {
            hash[normalize(separatedWords[i])]+=1;
        } else {
            hash[normalize(separatedWords[i])] = 1;
        }   
    }
    return hash;
}

//Test

const texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat tellus, nec mattis nisi. Donec eu auctor urna. Curabitur ac nisl ac enim suscipit facilisis a nec massa. Suspendisse elit mauris, consequat nec rhoncus quis, tristique vel libero. Nunc tempor, justo sed fringilla posuere, massa eros porttitor urna, sit amet laoreet dui ex pretium purus. Integer in neque at turpis efficitur pulvinar. Fusce leo lacus, ultrices ac libero eget, tincidunt tempus ex. Praesent enim felis, ultrices lacinia efficitur et, bibendum quis nisl. Morbi ac libero at sem accumsan cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque dapibus vulputate erat, ac interdum lacus efficitur vel. Cras maximus, urna sit amet tincidunt porta, lacus dolor aliquet ipsum, a placerat mauris enim et risus.";
console.log(wordCount(texto));