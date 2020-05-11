//Milestone1 : intercetto il click sull'icona che permette di inviare il messaggio
$('.fa-microphone').click(function(){

    //creo la variabile per salvare il risultato di della funzione .val
    var testo_utente = $('#scrivi_messaggio').val();
    console.log(testo_utente);
//attraverso la funzione append creo un nuovo elemento all'interno dell'html che contiene il testo scritto dall'utente in input
// $('.container-chat').append('<div class="messaggio-ricevuto">' + testo_utente + '</div>');

//alternativamente creare un template in html (css display: none)
    var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
    nuovo_messaggio.text(testo_utente);
    $('.container-chat').append(nuovo_messaggio);

//Milestone2, 1 : ad ogni messaggio ricevuto (in verde) l'interlocutore risponde ok dopo 1 secondo

    var risposta = 'ok';
//     setTimeout(myFunction, 2000);
//
// function myFunction() {
//     var risposta_interlocutore = $('.template .messaggio').clone();
//     risposta_interlocutore.text(risposta);
//     $('.container-chat').append(risposta_interlocutore);
// }

var clock = setTimeout(function(){
    var risposta_interlocutore = $('.template .messaggio').clone();
    risposta_interlocutore.text(risposta);
    $('.container-chat').append(risposta_interlocutore);
}, 1000)

});
