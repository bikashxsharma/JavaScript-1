
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