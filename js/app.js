'use strict';
Grade.prototype.allst = [];
var table = document.querySelector('#gradeTable');

function Grade(stname, course) {
    this.stname = stname;
    this.studentGrade = Math.floor(Math.random() * (100 - 0))
    this.course = course;

    Grade.prototype.allst.push(this);
};

if(localStorage.getItem('grades')){
    Grade.prototype.allst=JSON.parse(localStorage.getItem('grades'));
    tableHead();
    tablebody();
}
var form = document.querySelector('.stform');
form.addEventListener('submit', submitor);
function submitor(e) {
    e.preventDefault();
    new Grade(e.target.studentName.value, e.target.course.value);
    table.innerHTML = '';
    tableHead();
    tablebody();
    localStorage.setItem('grades',JSON.stringify(Grade.prototype.allst))
};

function tableHead() {
    var headrow = document.createElement('tr');
    table.appendChild(headrow);

    var studentName = document.createElement('th')
    headrow.appendChild(studentName)
    studentName.textContent = 'Student Name';

    var studentgrade = document.createElement('th')
    headrow.appendChild(studentgrade)
    studentgrade.textContent = 'Student Grade';

    var course = document.createElement('th')
    headrow.appendChild(course)
    course.textContent = 'Course';
    
};

function tablebody() {
    for (var i = 0; i < Grade.prototype.allst.length; i++) {
        var newstu = document.createElement('tr');
        table.appendChild(newstu);

        var studentName = document.createElement('td')
        newstu.appendChild(studentName)
        studentName.textContent = Grade.prototype.allst[i].stname;

        var studentgrade = document.createElement('td')
        newstu.appendChild(studentgrade)
    studentgrade.textContent = Grade.prototype.allst[i].studentGrade;

    var course = document.createElement('td')
    newstu.appendChild(course)
    course.textContent = Grade.prototype.allst[i].course;
    }
}
