let num = 16;
let b = "";
while (num < 31) {
    let a = "<div class=\"content__block\"> <h1 class=\"block__label\">Уровень "+ (num + 15 - 30) +"</h1> <h1><img class=\"block__img\" src=\"https://apps4.life/wp-content/uploads/2018/11/Screenshot_" + num + ".png\" alt=\"" + num + "\" /> </h1></div>";

    b += a;
    num++;
}
document.querySelector('.content').innerHTML = b;
