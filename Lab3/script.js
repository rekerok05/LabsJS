const arrStudent = [];
const inputs = {
    text: {
        "name": "Имя",
        "surname": "Фамилия",
        "score": "Средний балл",
        "age": "Возраст"
    },
}
let countSt = 0;

/// Инпуты
function takeInputsText() {
    $.each(inputs.text, function(index, value) {
        $('.inputs').append(`<label><input type="text" id="${index}" placeholder="${value}" class="mainInputsText">${value}</label>`);
    })
    $('label').wrap('<p></p>');
}

function takeInputsRadio() {

}

function takeInputs() {
    takeInputsText();
    takeInputsRadio();
}
// takeInputs();
////////////////////////////


// Основные кнопки
$('#addStudent').bind('click', function() {
    let arrInfo = [];
    $('.mainInputText').each(function() {
        let tmp = $(this).val();
        if (tmp === '') {
            arrInfo.push('-');
        } else {
            arrInfo.push(tmp);
        }
    })
    $('.mainInputText').val('');
    countSt++;
    renderString(arrInfo);
    let studentItem = {};
    let tmp = 0;
    $.each(inputs, function(index,value){
        //console.log(inputs[index]);
        $.each(inputs[index], function(index2,value2){
            studentItem[inputs[index[index2]]] = arrInfo[tmp];
            tmp++;
        })
    })
    console.log(studentItem);
});

$('#countingScore').bind('click', function() {});
/////////////////////////////////

/// Фан
function randomColor() {
    var colorR = Math.floor((Math.random() * 256));
    var colorG = Math.floor((Math.random() * 256));
    var colorB = Math.floor((Math.random() * 256));
    return ("rgb(" + colorR + "," + colorG + "," + colorB + ")");
};

$('.mainButton').bind('click', function() {
    $(this).css("background-color", randomColor())
});
////////////////////////////////

/// Таблица

function takeHeadTable(){
    $('#myTable').append('<tr id="tHeader"></tr>');
    $.each(inputs, function(index, value){
        $.each(value, function(index2, value2){
            $('#tHeader').append(`<th>${index2}</th>`)
        })
    })
}

function renderString(arrInfo){
    $('#myTable').append(`<tr class="tStudent" id="st${countSt}"></tr>`);
    $.each(arrInfo, function(index, value){
        $(`#st${countSt}`).append(`<td>${value}</td>`);
    })
    $(`#st${countSt}`).append(`<button class="btn_action" id="delete">delete</>`);
}

function takeTable(){
    $('.table').append('<table id="myTable"></table>')
    takeHeadTable();
}
takeTable();
