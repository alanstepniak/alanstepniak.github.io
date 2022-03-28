let btn = document.getElementsByTagName('button');
let wynik = document.getElementById('dane-programisty');

$(document).ready(function () {
    $(btn).click(function () {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            statusCode: {
                200: function (data) {
                    wynik.innerText = data;
                }
            }
        })
    })
});