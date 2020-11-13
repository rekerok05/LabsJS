let arrStudents = [];
let student = {
    name: null,
    surname: null,
    score: null,
    age: null,
}
let arrKey = Object.keys(student);

const createElementTh = function(arrKey) {
    for (let i = 0; i < arrKey.length; i++) {
        th = document.createElement("th");
        nameCols = document.createTextNode(arrKey[i]);
        th.appendChild(nameCols);
        tr.appendChild(th);
    }
}

const createButton = function(nameBtn) {
    const btn = document.createElement("button");
    btn.textContent = nameBtn;
    btn.classList.add("btn_action");
    return btn;
}

const addButtons = function(element) {
    const btn1 = createButton("delete");
    const btn2 = createButton("Add");
    element.appendChild(btn1);
    element.appendChild(btn2);
    return element;
}

// const createButton = function(element) {
//     const btn = document.createElement("button");
//     btn.textContent = "delete";
//     btn.classList.add("btn_delete");
//     element.appendChild(btn);
//     return element;
// }

const createElementTd = function(student) {
    for (let i = 0; i < arrKey.length; i++) {
        td = document.createElement("td");
        nameCols = document.createTextNode(student[arrKey[i]]);
        td.classList.add(arrKey[i]);
        td.appendChild(nameCols);
        tr.appendChild(td);
    }
    td = document.createElement("td");
    td.classList.add("td_button");
    const button = addButtons(td);
    console.log("button ", button);
    tr.appendChild(button);
}

const takeTable = function() {
    console.log(arrKey);
    let body = document.querySelector("body");
    let table = document.createElement("table");
    table.id = "myTable";
    tr = document.createElement("tr");
    createElementTh(arrKey);
    table.appendChild(tr);
    body.appendChild(table);
}
takeTable();

const clearInput = function(inputName) {
    document.getElementById(inputName).value = "";
}

const addStudent = function() {
    studentItem = {};
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let score = document.getElementById('score').value;
    let age = document.getElementById('age').value;
    studentItem.name = name;
    studentItem.surname = surname;
    studentItem.score = score;
    studentItem.age = age;
    arrStudents.push(studentItem);
    console.log(arrStudents);
    renderString(studentItem);
    for (let i = 0; i < arrKey.length; i++) {
        clearInput(arrKey[i]);
    }
}


const renderString = function(student) {    
    const myTable = document.getElementById('myTable');
    console.log("myTable ", myTable);
    tr = document.createElement("tr");
    createElementTd(student);
    myTable.appendChild(tr);
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