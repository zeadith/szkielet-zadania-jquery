//dodaj button, ktory po jego kliknieciu zmieni kolor czcionki dla wszystkich akapitow w tekscie 
//na czerwony, na zielony, na niebieski, na czerwony
//itd

var colours = ['red', 'green', 'blue'];
var howManyClicks = 0; //deklaruje poza funkcja

//zmieniam kolor calego tekstu
var myButton = document.getElementById('mybutton1');
myButton.addEventListener('click', function (e){
    //klikamy przycisk nie po raz pierwszy
    $('p').css({ color: colours[howManyClicks %3]}); //zawijam numer indeksu, zeby bylo 0, 1, 2
    howManyClicks++
    //jquery $ wzial wszystkie elementy p, zrobił z nich kolekcje i całej kolekcji nadał kolor czerwony
    //if (khowManyClicks%3 === 0 ){
    //    howManyClicks = 0;
    //}
});




//zmieniam kolory poszczegolnych paragrafow:
var myButton = document.getElementById('mybutton2');

myButton.addEventListener('click', function (e){
    //klikamy przycisk nie po raz pierwszy
    $('p').each(function (){
        $(this).css({ color: colours[howManyClicks %3]}); //zawijam numer indeksu, zeby bylo 0, 1, 2
        howManyClicks++
        //jquery $ wzial wszystkie elementy p, zrobił z nich kolekcje i całej kolekcji nadał kolor czerwony
        //if (khowManyClicks%3 === 0 ){
        //    howManyClicks = 0;
        //}
       });
    howManyClicks++
});


//po kliknieciu w przycisk dodaj html do dokument
var myButton = document.getElementById('mybutton3');
myButton.addEventListener('click', function (e){
    var newDiv = $('<div>\
        <div style="float: left; margin-right: 5px;">Jak</div>\
        <div style="float: left; margin-right: 5px;">żyć</div>\
        <div style="float: left; margin-right: 5px;">panie</div>\
        <div style="float: left;">premierze?</div>\
        </div>'); //daje backslash przed znakiem nowej linii, lub mozna uzyc plusów '<div>' + 'tekst' + '</div>'
    newDiv.appendTo('body');
});

//po kliknieciu w przycisk dodaj html do dokumentu 1 raz
var newDiv = $('<div>\
        <div style="float: left; margin-right: 5px;">Jak</div>\
        <div style="float: left; margin-right: 5px;">żyć</div>\
        <div style="float: left; margin-right: 5px;">panie</div>\
        <div style="float: left;">premierze?</div>\
        </div>');

var myButton = document.getElementById('mybutton4');
myButton.addEventListener('click', function (e){
    newDiv.appendTo('body');
});