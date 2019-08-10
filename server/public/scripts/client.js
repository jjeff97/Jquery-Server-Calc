$(document).ready(init);

function init() {
    console.log('Hey');


    $.ajax({
        type: 'GET',
        url: '/demo'
    }).then((response) =>{
        console.log(response)
    })
}

