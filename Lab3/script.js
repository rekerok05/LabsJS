let arrStudents = [];
function renderHead(){
    $("#myTable").append('<tr id="tHeader"></tr>');
    $(".mainInputText").each(function(){
        $("#myTable>tr").append(`<th>${$(this).attr('id')}</th>`);
    })
}

function renderTable(){
    $(".table").append('<table id="myTable"></table>');
    renderHead();
}
renderTable();

$("#addStudent").click(function(){
    let studentItem ={};
    $("#myTable").append('<tr class="tStudent"></tr>');
    $(".mainInputText").each(function(){
        let info;
        if ($(this).val() == '') {
            info = "-";
        }
        else {
            info = $(this).val();
        }
        $(".tStudent:last").append(`<td>${info}</td>`)    
        studentItem[$(this).attr("id")] = info
    })
    arrStudents.push(studentItem);
    $(".tStudent:last").append(`<button id="deleteStudent">delete</button>`);
    $(".mainInputText").val('');
});

$(document).on('click','#deleteStudent',function(){
    $(this).parent().index();
    $(this).parent().remove()
    arrStudents.splice($(this).parent().index(), 1);
});

function renderSortTable(){
    for (let i = 0; i < arrStudents.length; i++) {
        $("#myTable").append('<tr class="tStudent"></tr>');
        for (key in arrStudents[i]) {
            let info;
            if (arrStudents[i][key] == "-") {
                info = "-";
            }
            else {
                info = arrStudents[i][key];
            }
            $(".tStudent:last").append(`<td>${info}</td>`)
        }
        $(".tStudent:last").append(`<button id="deleteStudent">delete</button>`);
    } 
}


$(document).on('click','#sortByName',function(){
    $(".tStudent").remove();
    for (let i = 1; i < arrStudents.length; i++) {
        for (let j = i; j > 0; j--){
            if (arrStudents[j].name < arrStudents[j - 1].name) {
                temp = arrStudents[j];
                arrStudents[j] = arrStudents[j - 1];
                arrStudents[j - 1] = temp;
            }
            else
                break; 
        }
    }
    renderSortTable();
})

$(document).on('click','#sortByScore',function(){
    $(".tStudent").remove();
    for (let i = 1; i < arrStudents.length; i++) {
        for (let j = i; j > 0; j--){
            if (Number(arrStudents[j].score) > Number(arrStudents[j - 1].score)) {
                temp = arrStudents[j];
                arrStudents[j] = arrStudents[j - 1];
                arrStudents[j - 1] = temp;
            }
            else
                break; 
        }
    }
    renderSortTable();
})