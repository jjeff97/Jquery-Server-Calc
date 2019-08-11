const userInfo ={
    num1: null,
    num2: null,
    result: null
}
let num1 = 0
let num2 = 0
let result = 0
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
    

}   

function subtractNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1-num2;
    
}   

function multiplyNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1*num2;
   
}   

function divideNumber(){
    let num1=parseInt($("#js-input-num1").val());
    let num2=parseInt($("#js-input-num2").val());
    let result = num1/num2;
    
}   



function getCalc() {

    $.ajax({
        type: 'GET',
        url: '/calc'
    }).then((response) =>{
        console.log(response)
    })
}

function postData(){
userInfo.isUser = true;

$.ajax({
    type: 'POST',
    url: '/calc',
    data: userInfo

}).then((response) => {
    console.log(response);
})
}