let myTodo={
    day: "Monday", 
    meeting: 0,
    meetDone: 0,
    addMeeting: function(num){
        this.meeting= this.meeting+num;
    }, 
    meetsDone: function(num1){
        this.meetDone= this.meetDone+num1;
    }, 
    getSummary: function(){
        return `You have completed ${this.meetDone} meetings today and ${this.meeting-this.meetDone} meeting left.`;

    },
}

myTodo.addMeeting(5);
myTodo.meetsDone(4);

console.log(myTodo.getSummary());
