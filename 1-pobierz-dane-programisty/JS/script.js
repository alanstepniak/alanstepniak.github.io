let btn = document.getElementsByTagName('button');
let wynik = document.getElementById('dane-programisty');

$(document).ready(function () {
    $(btn).click(function () {
        $.ajax({
            url: 'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
            success: (data) => {
                let object = JSON.parse(data);

                let name = $('<p></p>').text(`Imię: ${object.imie}`);
                let lastName = $('<p></p>').text(`Nazwisko: ${object.nazwisko}`);
                let occupation = $('<p></p>').text(`Zawód: ${object.zawod}`);
                let company = $('<p></p>').text(`Firma: ${object.firma}`);

                let container = $('#dane-programisty');

                container.append(name);
                container.append(lastName);
                container.append(occupation);
                container.append(company);
            }
        })
    })
});
