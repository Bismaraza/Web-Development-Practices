let todo = [];
let req = prompt(" Please Enter Request");

while (true) {
    if (req == "quit") {
        console.log(" Quitting App");
        break;
    }

    else if (req == "list") {
        console.log("------------");
        for (let i= 0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("------------");
    }

    else if (req == "add") {
        let task = prompt(" Please Enter the task:");
        todo.push(task);
        console.log("Task Added");
    }

    else if( req == "delete"){
        let idx = Number(prompt("Enter the task index you want to delete:"));
        todo.splice(idx, 1);
        console.log("Task Deleted");
    }
    req = prompt(" Please Enter Request");

}