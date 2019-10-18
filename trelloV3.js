let myTodo={
    day: "Monday", 
    meeting: 0,
    meetDone: 0,
    addMeeting: function(num){
        this.meeting= this.meeting+num;
    }, 
    meetDone: function(num){
        this.meetDone=this.meetDone+num;
    }, 
    getSummary: function(){
        return `You have completed ${this.meetDone} meetings today.`;

    },
}

myTodo.addMeeting(5);
myTodo.meetDone(2);

console.log(myTodo.getSummary());
