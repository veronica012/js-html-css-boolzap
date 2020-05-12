//funzione dichiarata fuori dagli eventi
function risposta_automatica() {
    var risposta = 'ok';
    var risposta_interlocutore = $('.template .messaggio').clone();
    risposta_interlocutore.text(risposta);
    $('.container-chat').append(risposta_interlocutore);
}

//Milestone1 : intercetto il click sull'icona che permette di inviare il messaggio
$('.icona-footer').click(function() {
//creo la variabile per salvare il risultato di della funzione .val
    var testo_utente = $('#scrivi_messaggio').val();
    console.log(testo_utente);
    if (testo_utente.trim() != '') {
//creare un template in html (css display: none)
        var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
        nuovo_messaggio.text(testo_utente);
        $('.container-chat').append(nuovo_messaggio);
//dopo aver inviato il messaggio l'input torna vuoto
        testo_utente = $('.input').val(' ');

//Milestone2, 1 : ad ogni messaggio ricevuto (in verde) l'interlocutore risponde ok dopo 1 secondo
        setTimeout(myFunction, 1000);
}
    });
//Inviare il messaggio premendo sul tasto inviato
$('.footer .input').keyup(function(event){
    if(event.which == 13) {
        var testo_utente = $('#scrivi_messaggio').val();
        console.log(testo_utente);

        if (testo_utente.trim() != '') {
        // creare un template in html (css display: none)
            var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
            nuovo_messaggio.text(testo_utente);
            $('.container-chat').append(nuovo_messaggio);
        //dopo aver inviato il messaggio l'input torna vuoto
            testo_utente = $('.input').val(' ');
        //Milestone2, 1 : ad ogni messaggio ricevuto (in verde) l'interlocutore risponde ok dopo 1 secondo
                setTimeout(myFunction, 1000);
        }
    }
});

$('.footer .input').focus(function(){
    $('.icona-footer i').toggleClass('fa-microphone fa-paper-plane');
});
$('.footer .input').blur(function(){
    $('.icona-footer i').toggleClass('fa-paper-plane fa-microphone')

});

//altra versione Milestone1
//attraverso la funzione append creo un nuovo elemento all'interno dell'html che contiene il testo scritto dall'utente in input
// $('.container-chat').append('<div class="messaggio-ricevuto">' + testo_utente + '</div>');
//altra versione Milestone 2
// var clock = setTimeout(function(){
//     var risposta_interlocutore = $('.template .messaggio').clone();
//     risposta_interlocutore.text(risposta);
//     $('.container-chat').append(risposta_interlocutore);
// }, 1000)
//Milestone2 : senza template
// var clock = setTimeout(function(){
//     $('.container-chat').append('<div class="messaggio">' + risposta + '</div>')
// }, 1000)

//Milestone 2, 2
//intercetto il click sull'icona
$('.cerca i').click(function() {
    var testo_input = $('.cerca input').val().trim().toLowerCase();
    console.log(testo_input);
    if(testo_input != '') {
        $('.lista .contatto').each(function(){
            var testo_lista = $(this).find('.nome').text().toLowerCase();
            if(testo_lista.includes(testo_input)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    } else {
        //se l'utente digita solo spazi mostri l'intera lista dei contatti
        $('.lista .contatto').show();
    }
});

// $('.cerca i').click(function(){
//     $('.fa-search').removeClass('fa-search').addClass('fa-times')
// });
