const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const result = document.getElementById("result")
const message = document.getElementById("message")

function add(){
    
    let addNum1 = Number(num1.value)
    let addNum2 = Number(num2.value)

    let addition = addNum1 + addNum2;
    result.value = addition
}

function sub(){
    
    let addNum1 = Number(num1.value)
    let addNum2 = Number(num2.value)

    let subtraction = addNum1 - addNum2;
    result.value = subtraction
}

function mul(){
    
    let addNum1 = Number(num1.value.trim())
    let addNum2 = Number(num2.value.trim())

    let multiplication = addNum1 * addNum2;
    result.value = multiplication
}

function div(){
    
    let addNum1 = Number(num1.value)
    let addNum2 = Number(num2.value)

    let division = addNum1 / addNum2;
    result.value = division
}

add()
sub()
mul()
div()
