// declaring the size and chessboard

let size=8;
let chessBoard="";

// outer loop for rows

for(i=0; i<=size; i++){
    for(j=0; j<=size; j++){

        if((j+i) %2 ==0){
            chessBoard +=' ';
        }
        else{
            chessBoard +="#";
        }

    }
    chessBoard += "\n";
    

}
console.log(chessBoard);

