var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "../images/john.png"
    },
    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "../images/jane.png"
    }
]

var curId = 0;
function toggle(){
    curId = (curId + 1) % 2;
    document.getElementById("user-img").src = users[curId].image;
    document.getElementById("user-name").innerText = users[curId].name;
    document.getElementById("user-gender").innerText = users[curId].gender;
}