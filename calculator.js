let display = [];
let display2 = [];
let op = 0;

function add(int, int2) {
    let result = int + int2;
    document.getElementById("display").innerHTML = result;
    display = [result];
    display2 = [];
    
}

function subtract(int, int2) {
    let result = int - int2;
    document.getElementById("display").innerHTML = result;
    display = [result];
    display2 = [];
}

function multiply(int, int2) {
    let result = int * int2;
    document.getElementById("display").innerHTML = result;
    display = [result];
    display2 = [];
}

function divide(int, int2) {
    let result = int / int2;
    document.getElementById("display").innerHTML = result;
    display = [result];
    display2 = [];
}

function operator(display, op, display2) {
    if (op == "+") {
        let int = parseInt(display.join(""));
        let int2 = parseInt(display2.join(""))
        add(int, int2);
        console.log("test")
    } else if (op == "-") {
        let int = parseInt(display.join(""));
        let int2 = parseInt(display2.join(""));
        subtract(int, int2)
    } else if (op == "x") {
        let int = parseInt(display.join(""));
        let int2 = parseInt(display2.join(""));
        multiply(int, int2)
    } else if (op == "/") {
        let int = parseInt(display.join(""));
        let int2 = parseInt(display2.join(""));
        divide(int, int2)
    }
} 





btnplus.addEventListener('click',() => {  
    op = "+";
    document.getElementById("display").innerHTML = display.join("") + op;
    console.log(op);
});

btnsub.addEventListener('click',() => {  
    op = "-";
    document.getElementById("display").innerHTML = display.join("") + op;
    console.log(op);
});

btnmult.addEventListener('click',() => {  
    op = "x";
    document.getElementById("display").innerHTML = display.join("") + op;
    console.log(op);
});

btndiv.addEventListener('click',() => {  
    op = "/";
    document.getElementById("display").innerHTML = display.join("") + op;
    console.log(op);
});

btn1.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(1);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(1);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn2.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(2);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(2);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn3.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(3);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(3);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn4.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(4);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(4);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn5.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(5);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(5);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn6.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(6);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(6);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn7.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(7);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(7);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn8.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(8);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(8);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btn9.addEventListener('click',() => {  
    if(op != 0) {
        display2.push(9);
        document.getElementById("display").innerHTML = display.join("") + op + display2.join("");
    } else {
        display.push(9);
        document.getElementById("display").innerHTML = display.join("");
        console.log(display.join(""));
    }
});

btnequals.addEventListener('click',() => {  
    operator(display, op, display2);
});

btnclear.addEventListener('click',() => {  
    op = 0
    display = [];
    display2 = [];
    document.getElementById("display").innerHTML = display.join("");
});








