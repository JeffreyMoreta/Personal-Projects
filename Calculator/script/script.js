let numbers = document.getElementsByClassName("number");
let operators = document.getElementsByClassName("operator");
let equal = document.getElementsByClassName("equals")[0];
let display = document.getElementsByClassName("displayInner")[0];
let equation = "";

//Reset the calculator
display.value = "";

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        display.value +=numbers[i].innerHTML
    });
};

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
        equation = display.value;
        equation += operators[i].innerHTML;
        display.value = "";
    });
};

equal.addEventListener("click", function(){
    equation += display.value;
    display.value = (eval(equation));
});
