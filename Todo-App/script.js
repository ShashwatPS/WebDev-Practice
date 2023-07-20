function deleteDone(id){
    console.log("done delete");
    var childElement = document.getElementById(id);
    var parentElement = document.getElementById("mainArea");
    parentElement.removeChild(childElement);       
}

function deleteTodo(id){
    console.log(id);
    fetch("http://localhost:3000/todos/"+id, {   
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function(){
        deleteDone(id);
    });
}

function todosCallback(data) {
    console.log(data);
    var parentElement = document.getElementById("mainArea");
    for(let i=0;i<data.length;i++){
        var childElement = document.createElement("div");
        childElement.setAttribute("id",data[i].id.toString());
        
        var grandChildElement1 = document.createElement("span");
        grandChildElement1.innerHTML = data[i].title;

        var grandChildElement2 = document.createElement("span");
        grandChildElement2.innerHTML = data[i].description;

        var grandChildElement3 = document.createElement("button");
        grandChildElement3.innerHTML = "DELETE";
        grandChildElement3.setAttribute("onclick","deleteTodo("+data[i].id+")");

        childElement.appendChild(grandChildElement1);
        childElement.appendChild(grandChildElement2);
        childElement.appendChild(grandChildElement3);

        parentElement.appendChild(childElement);
    }
}

function getDataCallback(resp) {
    resp.json().then(todosCallback);
}

function getData() {
    fetch("http://localhost:3000/todos", {
        method: "GET",
    }).then(getDataCallback)
}

getData();

function parsedResponse(data) {
    console.log(data);
    var parentElement = document.getElementById("mainArea");
    var childElement = document.createElement("div");
    childElement.setAttribute("id",data.id.toString());

    var grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = data.title;

    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = data.description;

    var grandChildElement3 = document.createElement("button");
    grandChildElement3.innerHTML = "DELETE";
    grandChildElement3.setAttribute("onclick","deleteTodo("+data.id+")");

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);
    childElement.appendChild(grandChildElement3);

    parentElement.appendChild(childElement);
}

function callback(resp) {
    resp.json().then(parsedResponse);
}

function onPress() {
    var title = document.getElementById("title1").value;
    var description = document.getElementById("description").value;

    fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            description: description
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(callback)
}