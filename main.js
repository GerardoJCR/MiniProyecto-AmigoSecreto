let friends = [];

function addFriend(){
    let input = document.querySelector(".input-name");
    let name = input.value.trim();

    if(name === ""){    
        alert("Please enter a name!")
        return
    }

    friends.push(name) //add
    input.value = ""
    
    updateFriendsList();    
}

function updateFriendsList(){
    let ul = document.getElementById("listFriends");
    ul.innerHTML = "";

    friends.forEach( friend => {
        let li = document.createElement("li");
        li.textContent = friend;
        ul.appendChild(li)
    })
}

function sortFriend(){
    let ul = document.getElementById("listFriends")
    if(friends.length <2){
        alert("You need at least 2 friends to draw");
        return;
    }
    if(friends.length === 0){
        alert("No friends available! Add at least one friend.")
        return;
    }
    let randomIndex = Math.floor(Math.random()* friends.length);
    let chosenFriend = friends[randomIndex];
    ul.innerHTML = "";
    document.getElementById("result").innerHTML = `<li>${chosenFriend} is the lucky one 🎉</li>`
    
}
function reset(){
    friends = [];
    document.querySelector(".input-name").value = "";
    document.getElementById("listFriends").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}