const arrStudents = [];
const arrKeys = ["name", "surname", "score", "age"];
const Buttons = ["delete"];
let countTr = 0;

// Функции связанные с генерированием таблицы
/////////////////////////////////////////////
const createElementButton = function(nameBtn) {
    const btn = document.createElement("button");
    btn.textContent = nameBtn;
    btn.classList.add("btn_action");
    btn.setAttribute("onclick", "deleteStudent(" + countTr + ")");
    return btn;
}

const createElementCell = function(cell ,text) {
    // cell - какая ячейка будет созаваться
    // text - текст, который будет находится в этой ячейке
    let tmp = document.createElement(cell);
    tmp.appendChild(document.createTextNode(text + ""));
    return tmp;
}

const createTr = function name(cells, fill) {
    // cells - какие ячейки будут создавваться в ряду
    // fill - массив, из которого берутся данные для заполнения
    let tr = document.createElement("tr");
    tr.id = countTr;
    // tr.classList.add(countTr);
    // tr.setAttribute("data-id_", countTr);
    for (let i = 0; i < fill.length; i++) {
        // tmp - временняая ячейка, которую потом засоваем в строку
        let td = createElementCell(cells, fill[i]);
        
        // если мы делаем не голову таблицы, то мы должны дать классы
        // каждой ячейке, чтоб отдельно можно было рабоатть с каждым
        // столбцом по отдельности 
        if(cells == "td") {
            td.classList.add(arrKeys[i]);
        }
        tr.appendChild(td);
    }
    //
    if(cells == "td") {
        for (let i = 0; i < Buttons.length; i++){
            let td = createElementCell(cells, "");
            td.appendChild(createElementButton(Buttons[i]));
            td.classList.add("td_button");

            tr.appendChild(td);
        }
    }
    countTr++;
    return tr;
} 

const takeHeadTable = function() {
    let body = document.querySelector("body");
    let table = document.createElement("table");
    table.id = "myTable";
    let tr = createTr("th", arrKeys);
    table.appendChild(tr);
    body.appendChild(table);
}
takeHeadTable();

const clearInput = function() {
    for (let i = 0; i < arrKeys.length; i++) {
        document.getElementById(arrKeys[i]).value = "";
    }
}

const renderString = function(arrInfoOneStudent) {    
    const myTable = document.getElementById("myTable");
    let tr = createTr("td", arrInfoOneStudent);
    myTable.appendChild(tr);
    clearInput();
}
/////////////////////////////////////////////
/////////////////////////////////////////////


// Две функции кнопок добавить и посчитать средний балл
/////////////////////////////////////////////
const addStudent = function() {
    let arrInfoOneStudent = [];
    // arrInfoOneStudent - в этот массив будут запихиваться
    // поля инпут
    for (let i = 0; i < arrKeys.length; i++) {
        arrInfoOneStudent.push(document.getElementById(arrKeys[i]).value);
    }
    let studentItem = {};
    for (let i = 0; i < arrKeys.length; i++){
        studentItem[arrKeys[i]] = arrInfoOneStudent[i];
    }
    renderString(arrInfoOneStudent);
    arrStudents.push(studentItem);
}

const calculationOfScores = function() {
    const scorelFields = document.querySelectorAll(".score");
    let sum = 0;
    for (let i = 0; i < scorelFields.length; i++) {
        sum += Number(scorelFields[i].textContent)
    };
    let score = sum / scorelFields.length;
    alert(score)
}
/////////////////////////////////////////////
/////////////////////////////////////////////

// Функции связанные с нажатием кнопок действии
/////////////////////////////////////////////
const deleteStudent = function(numberTr) {
    // alert(numberTr);
    // console.log("countTr ", countTr);
    let trDelete = document.getElementById(numberTr);
    trDelete.remove();
    countTr--;
    let allTr = document.querySelectorAll('#myTable > tr')
    let allBtn = document.querySelectorAll('.btn_action')
    arrStudents.splice(numberTr - 1, 1);
    console.log(arrStudents);
    for (let i = 0; i < allTr.length; i++) {
        allTr[i].id = i;   
        allBtn[i].setAttribute("onclick", "deleteStudent(" + (i + 1) + ")");
    }
}