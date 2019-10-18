let myCourse={
    name: "JavaScript-beginner",
    price:12.83,
    description:"This is a JavaScript course that will teach us about so many things."

}

console.log(`There is a new course avilable. Tha name of the course is : ${myCourse.name}. 
It costs ${myCourse.price}€. The coruse says--> : ${myCourse.description}`)

let myTodo={
    day: "Monday", 
    meeting: 0,
    meetDone: 0,
}

function addMeeting(todo, meet=0){
    todo.meeting= todo.meeting+meet;
}
function meetDone(todo, meet=0){
    todo.meeting=todo.meeting-meet;
}
function resetDay(todo){
    todo.meeting=0;
}
function getSummary(todo){
    let meetLeft = todo.meeting-todo.meetDone;
    return (`You have ${meetLeft} meetings left today!`);
}

addMeeting(myTodo, 5);
addMeeting(myTodo, 9);
meetDone(myTodo, 10);

console.log(getSummary(myTodo))