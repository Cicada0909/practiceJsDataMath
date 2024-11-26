//1

let now = new Date();

let year = now.getFullYear();
let month = now.getMonth();
let day = now.getDay();
let hours = now.getHours();
let minute = now.getMinutes();

console.log(`${year}-${month}-${day} ${hours}:${minute}`);

//2

console.log(day);

if (0 == day) {
    console.log("Воскресенье");
} else if (1 == day) {
    console.log("Понедельник");
} else if (2 == day) {
    console.log("Вторник");
} else if (3 == day) {
    console.log("Среда");
} else if (4 == day) {
    console.log("Четверг");
} else if (5 == day) {
    console.log("Пятница");
} else if (6 == day) {
    console.log("Суббота");
}

//3

let specDate = new Date("2024-01-01T00:00:00");

let dataDifirenceMs =  now - specDate;

const dataCotnvertedgDay = 24 * 60 * 60 * 1000;

let dataDifirenceDay = dataDifirenceMs / dataCotnvertedgDay;

console.log("Сколько дней прошло с начала года:", Math.round(dataDifirenceDay));


