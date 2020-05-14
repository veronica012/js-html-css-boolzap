//funzione dichiarata fuori dagli eventi
function risposta_automatica() {
    var risposta = 'ok';
    var risposta_interlocutore = $('.template .messaggio').clone();
    risposta_interlocutore.find('.testo-messaggio').text(risposta);
    $('.container-conversazione.active').append(risposta_interlocutore);
}

//Milestone1 : intercetto il click sull'icona che permette di inviare il messaggio
$('.icona-footer').click(function() {
//creo la variabile per salvare il risultato di della funzione .val
    var testo_utente = $('#scrivi_messaggio').val();
    console.log(testo_utente);
    if (testo_utente.trim() != '') {
//creare un template in html (css display: none)
        var nuovo_messaggio = $('.template .messaggio-ricevuto').clone();
        nuovo_messaggio.find('.testo-messaggio-ricevuto').text(testo_utente);
        $('.container-conversazione.active').append(nuovo_messaggio);
//dopo aver inviato il messaggio l'input torna vuoto
        testo_utente = $('.input').val(' ');

//Milestone2, 1 : ad ogni messaggio ricevuto (in verde) l'interlocutore risponde ok dopo 1 secondo
        setTimeout(risposta_automatica, 1000);
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
            nuovo_messaggio.find('.testo-messaggio-ricevuto').text(testo_utente);
            $('.container-conversazione.active').append(nuovo_messaggio);
        //dopo aver inviato il messaggio l'input torna vuoto
            testo_utente = $('.input').val(' ');
        //Milestone2, 1 : ad ogni messaggio ricevuto (in verde) l'interlocutore risponde ok dopo 1 secondo
                setTimeout(risposta_automatica, 1000);
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
    //leggo ciò che ha scritto l'utente in input
    var testo_input = $('.cerca input').val().trim().toLowerCase();
    console.log(testo_input);
    if(testo_input != '') {
        $('.lista .contatto').each(function(){
            //recupero il nome del contatto cercato
            var testo_lista = $(this).find('.nome').text().toLowerCase();
            console.log(testo_lista);
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
//alternativa
// $('.cerca .input').keyup(function(){
//stesse istruzioni del click
// });
//if testo_input.length >=3

//Milestone3 parte 1
//intercetto il click sul contatto
$('.contatto').click(function(){
    //recupero il valore data chat del contatto
    var data_contatto = $(this).data('chat');
    console.log('data-chat del contatto =' + data_contatto)
    //tolgo la classe active a tutti i container chat
    $('.container-conversazione').removeClass('active');
    //recupero il container chat che ha lo stesso data del contatto e verifico che sia uguale al contatto corrispondente
    $('.container-conversazione').each(function(){
        var data_messaggi = $(this).data('chat');
        console.log('data chat del container messaggi =' + data_messaggi)
        if(data_contatto == data_messaggi) {
            $(this).addClass('active');
            console.log(this);
        }
    });
    //recupero il nome del contatto su cui ho cliccato
    var nome_contatto = $(this).find('.nome').text();
    console.log('il nome è ' + nome_contatto);
    //inserisco il nome corrispondente alla chat nell'header
    $('.header-right .center .nome').text(nome_contatto);
    //recupero src dell'immagine del contatto
    var src_immagine = $(this).find('.img img').attr('src');
    console.log('src immagine = ' + src_immagine);
    //sostituisco l'immagine al contatto e chat corrispondente
    $('.header-right .left img').attr('src', src_immagine);

// $('.container-conversazione[data-chat= "'+ data_contatto +'"]').addClass('active');
});

//Milestone3 parte 2
//intercettare il click sull'icona del menu_dropdown
$('.container-conversazione').on('click', '#icona-menu-dropdown', function(){
//visualizzo il menu del messaggio su cui ho cliccato
    $(this).siblings('.menu-dropdown').toggle();
});
//intercettare il click su cancella messaggio
$('.container-conversazione').on('click', '#cancella', function(){
    //cancella il messaggio
    
});
