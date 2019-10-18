let counter=0;

function countB(stringA){
    for(i=0; i<stringA.length; i++){
    
        if(stringA[i]==="B"){
            counter++;
        }
    }
    return counter;
}
console.log(countB("BBBBBB"))

// another function count char to get character and string from function


let count=0; // counter value 0 in the begining

function countChar(stringB, char1){
        for (i=0; i<stringB.length; i++){
            if(stringB[i]===char1){
                count++;
            }

        }
        return count;


}
console.log(countChar("Tyo hanumaan ho ra tesko kaam chhaina", "a"));

