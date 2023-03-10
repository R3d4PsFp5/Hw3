let quantity = +prompt('Введите количество');
let znak = prompt('Введите символ отступов');
let LastSign = prompt('Введите последний символ');

let result = '';


for(let i = 0; i < quantity;i++) {
    result = result + znak;

    console.log(result + LastSign);
}



