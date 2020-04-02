/// <reference path="../typings/globals/jquery/index.d.ts" />

$('form#name').on('submit', (event) => {
    event.preventDefault();
    // Do some stuff
    
    $('form#name').hide();
    $('.tabs').show();
    $('form#payment').show();
    
});