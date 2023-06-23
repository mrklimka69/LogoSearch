myClick();

document.querySelector('.header__button').onclick = myClick;

function myClick() {
    let level = document.querySelector('.input__level').value;
    let num = 1;
    let b = "";
    while (num <= 24) {
        let a = "<img class=\"component__img\" src=\"https://braingamemaster.com/igra/LogoMania/logos/" + level + "/" + num + ".jpg\" alt=\"" + num + "\"/>"

        b += a;
        num++;
    }
    document.querySelector('.content').innerHTML = b;
}