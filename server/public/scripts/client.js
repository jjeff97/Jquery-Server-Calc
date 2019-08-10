const userInfo ={
    number1: null,
    number2: null,
    result: null
}

$(document).ready(init);

function init() {
    console.log('Hey');

getCalc();
$("#js-btn-add").on('click', addNumber);    
$("#js-btn-subtract").on('click', subtractNumber);
$("#js-btn-multiply").on('click', multiplyNumber);
$("#js-btn-Divide").on('click', divideNumber);    
}

function addNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1+num2;
    $('.js-container').append("The Sum: " + result);
}   

function subtractNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1-num2;
    $('.js-container').append("The Sum: " + result);
}   

function multiplyNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1*num2;
    $('.js-container').append("The Sum: " + result);
}   

function divideNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1/num2;
    $('.js-container').append("The Sum: " + result)
}   



function getCalc() {

    $.ajax({
        type: 'GET',
        url: '/calc'
    }).then((response) =>{
        console.log(response)
    })
}