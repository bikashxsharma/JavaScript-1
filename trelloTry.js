let toDo =[];

toDo.unshift("Call home");
toDo.unshift("Read Blogs");

toDo.forEach(function(todo, index){
    console.log(`My to do no. ${index+1} is : ${todo}`);
})

for(i=0; i<toDo.length; i++){
    console.log(`My to do no .${i+1} is : ${toDo[i]}`);

}