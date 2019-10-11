
let changeNumber="";
for(i=0; i<100; i++){    
    changeNumber=i+1;
    if(changeNumber % 3 != 0 && changeNumber % 5 != 0){
        
        console.log(changeNumber);
    }
    else if(changeNumber % 5==0 && changeNumber %3 ==0) {

        changeNumber="FizzBuzz";
        console.log(changeNumber);

    }

    else if(changeNumber % 3 ==0){
        changeNumber="Fizz";
        console.log(changeNumber);
    }

    else if(changeNumber %5 ==0){
        changeNumber="Buzz";
        console.log(changeNumber);

    }
    

}

let first = [ 2, 3, 13, 24, 45];
n=24;

checkNumber(n){
    for(i=0;i<first.length; i++)
    if (n==first[i])
    {
        console.log("your number is in array");

    }
    else{
        console.log("you number is not in the array");

    }

}
