let num = +prompt('введите число');

let degeree = +prompt("Введите степень");

let result = 1;

for(let i = 0; i !== degeree;i++) {
    result *= num;
}
alert(result);