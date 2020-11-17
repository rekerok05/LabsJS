const arrStudents = [];
const arrKeys = ["name", "surname", "score", "age"];
let IDTR = 0;

const createElementCell = function(cell ,text) {
    // cell - какая ячейка будет созаваться
    // text - текст, который будет находится в этой ячейке
    let tmp = document.createElement(cell);
    tmp.appendChild(document.createTextNode(text));
    return tmp;
}

const createTr = function name(cells, fill) {
    // cells - какие ячейки будут создавваться в ряду
    // fill - массив, из которого берутся данные для заполнения
    let tr = document.createElement("tr");
    tr.id = IDTR;
    IDTR++;
    for (let i = 0; i < arrKeys.length; i++) {
        let tmp = createElementCell(cells, fill[i]);
        // tmp - временняая ячейка, которую потом засовые в строку
        if(cells == "td") {
            tmp.classList.add(arrKeys[i]);
        }
        tr.appendChild(tmp);
    }
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

const addStudent = function() {
    let arrInfoOneStudent = [];
    // arrInfoOneStudent - в этот массив будут запихиваться
    // поля инпут
    for (let i = 0; i < arrKeys.length; i++) {
        arrInfoOneStudent.push(document.getElementById(arrKeys[i]).value);
    }
    let studentItem = {};
    for (let i = 0; i < arrKeys.length; i++){
        studentItem["arrKeys[i]"] = arrInfoOneStudent[i];
    }
    renderString(arrInfoOneStudent);
    arrStudents.push(studentItem);
}

const clearInput = function() {
    for (let i = 0; i < arrKeys.length; i++) {
        document.getElementById(arrKeys[i]).value = "";
    }
}

const renderString = function(arrInfoOneStudent) {    
    const myTable = document.getElementById('myTable');
    let tr = createTr("td", arrInfoOneStudent);
    myTable.appendChild(tr);
    clearInput();
}

const calculationOfScores = function() {
    const scorelFields = document.querySelectorAll(".score");
    console.log(scorelFields);
    let sum = 0;
    for (let i = 0; i < scorelFields.length; i++) {
        sum += Number(scorelFields[i].textContent)
    };
    let score = sum / scorelFields.length;
    alert(score)
}