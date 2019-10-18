let grade="";
function calculateGrade(currentMark, totalMark){
    //calculating percentage
        percentageMark= ((currentMark/totalMark)*100);

    // assigning grade based on the percentage
    if(percentageMark>90){
        grade="A";
    }
    else if (percentageMark>80){
        grade="B";
    }
    else if (percentageMark>70){
        grade="C";
    }
    else if (percentageMark>60){
        grade="D";
    }
    else if (percentageMark>=50){
        grade="E";
    }
    else{
        grade="Fail";
    }
    return grade;
}

console.log(calculateGrade(700,1000))