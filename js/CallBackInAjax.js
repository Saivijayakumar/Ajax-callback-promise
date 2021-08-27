let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//ajax call
function makeAJAXCall(methodType, url, callBack, async = true, data = null) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log("State Change Called... Ready State: "+xhr.readyState+" Status: "+xhr.status);

        if (xhr.readyState === 4) {
            console.log("State Change Called... Ready State: " + xhr.readyState + " Status: " + xhr.status);
            if (xhr.status === 200 || xhr.status === 201) {
                callBack(xhr.responseText);
            }
            else if (xhr.status >= 400) {
                console.log("Handle 400 client error or 500 server error");
            }
        }
    }
    xhr.open(methodType, url, async);
    if (data) {
        console.log(JSON.stringify(data));
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(data));
    }
    else {
        xhr.send();
    }
    console.log(methodType + " request send to the server");
}
//getting data form json
const getURL = "http://localhost:3000/employees";
function getUserDetails(data) {
    console.log("Get User Data: " + data);
}
makeAJAXCall("GET", getURL, getUserDetails);

//delete operation 
const deleteURL = "http://localhost:3000/employees/4";
function userDeleted(data) {
    console.log("User Deleted: " + data);
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);

//post call
const postURL = "http://localhost:3000/employees";
const empData = { "name": "Luckas", "salary": "93000" };
function userAdded(data) {
    console.log("User added : " + data);
}
makeAJAXCall("POST", postURL, userAdded, true, empData);