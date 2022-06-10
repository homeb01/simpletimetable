var timetable = new Timetable()

let subjects = []

let btnAddSubject = document.getElementById('btnAdd')
let subjectName = document.getElementById('fname')
let subjectComboBox = document.getElementById('fsubjects')

timetable.setScope(7, 0);
timetable.addLocations(['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'])

function addSubjectEvent() {
    timetable.addEvent(
        'Matematicas', 
        'Lunes', 
        new Date(2022,01,getDatePerDayName(),07,00), 
        new Date(2022,01,getDatePerDayName(),09,00)
    )
}

function getDatePerDayName(day_name) {
    this.day_name = day_name.toLowerCase()
    switch (this.day_name) {
        case 'lunes':
            return 01
            break
        case 'martes':
            return 02
            break
        case 'miercoles':
            return 03
            break
        case 'jueves':
            return 04
            break
        case 'viernes':
            return 05
            break
    }
}

btnAdd.addEventListener('click', () => {
    if (subjectName.value != '')
        var len = subjects.push(subjectName.value)
    refreshSubjectComboBox()
})

function refreshSubjectComboBox() {
    removeOptions()
    subjects.forEach(function(subject) {
        var opt = document.createElement('option')
        opt.value = subject
        opt.innerHTML = subject
        subjectComboBox.appendChild(opt)
    })
}

function removeOptions() {
    $("#fsubjects").empty()
}

var renderer = new Timetable.Renderer(timetable);
renderer.draw('.timetable'); // any css selector