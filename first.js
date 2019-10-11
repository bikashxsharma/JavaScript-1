// declare size and an empty "board" string
let size=3;
let board="";

// outer loop

for (i=0; i<=size; i++){
    //inner loop
    for(j=0; j<=size; j++)
    {
       if((j+i)  %2 == 0)
       {
        board +="#";
       } 
       else{
        board +=" ";
       }      
    

    }
    board += "\n";  

}
console.log(board);