let x = Number(prompt('Введите число x'));
let y;
let a = 2.1;
let b = 6.7;
switch (x) {
    case -3:
        alert (y = x**3 + 2 * a);
        break;
    case 4:
        alert (y = Math.log(Math.abs(Math.cos(b*x))));
        break;
    case 6:
        alert (y = x**2 * Math.E**x);
        break;
    default:
        alert('Ошибка');
};