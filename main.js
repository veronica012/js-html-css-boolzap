$('.fa-microphone').click(function(){
    var testo_utente = $('#scrivi_messaggio').val();
    console.log(testo_utente);
    // $('.container-chat').append('<div class="messaggio risposta">' + testo_utente + '</div>');

    var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
    nuovo_messaggio.text(testo_utente);
    $('.container-chat').append(nuovo_messaggio);
    //alternativamente creare un template in html (css display: none)

});
