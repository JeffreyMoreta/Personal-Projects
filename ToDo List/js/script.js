let list = document.getElementsByClassName("todoList")[0];
let tasks = document.querySelector("ul");

function submitListItem(){
    let task = document.getElementsByClassName("inputBar")[0];
    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task.value));
    if(task.value == ""){
        document.querySelector(".inputBar").placeholder = "Please input a task";
    }else{
        list.appendChild(listItem );
        document.querySelector(".inputBar").placeholder = "Tasks...";
        task.value = "";
    }
};

function clearComp(){
    let compItem = document.querySelectorAll(".strike");
    for(let i = 0; i < compItem.length; i++){
        compItem[i].parentNode.removeChild(compItem[i]);
    };
};

function clearList(){
    tasks.innerHTML = "";
};

//Display how many items are left
function count(){
    let numberLeft = document.querySelectorAll("li").length - document.querySelectorAll(".strike").length
    let left = document.querySelector(".itemsLeft");
    if(numberLeft > 0){
        left.innerHTML = `You have ${numberLeft} tasks left`;
    }else{
        left.innerHTML = "You have no tasks left";
    }
};

//Adds item to list
let submitBtn = document.getElementsByClassName("submit");
submitBtn[0].addEventListener("click", () =>{
    submitListItem();
    count();
});

//Removes completed items from list
let clsComp = document.querySelector(".clearComplete");
clsComp.addEventListener("click", () => {
    clearComp();
    count();
});

//Clears the entire list
let clsList = document.getElementsByClassName("clearList")[0];
clsList.addEventListener("click", () => {
    clearList();
    count();
});

//Toggles the strike css element
tasks.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("strike");
    }
    count();
})
