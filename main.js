//intercetto il click sull'icona che permette di inviare il messaggio
$('.fa-microphone').click(function(){
    //creo la variabile per salvare il risultato di della funzione .val
    var testo_utente = $('#scrivi_messaggio').val();
    console.log(testo_utente);
    //attraverso la funzione append creo un nuovo elemento all'interno dell'html che contiene il testo scritto dall'utente in input
    // $('.container-chat').append('<div class="messaggio risposta">' + testo_utente + '</div>');

    var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
    nuovo_messaggio.text(testo_utente);
    $('.container-chat').append(nuovo_messaggio);
    //alternativamente creare un template in html (css display: none)

});
