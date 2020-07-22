//faccio apparire il menu con .show

// $('.header-right .fa-bars').click(function(){
//     $('.hamburger-menu').show('fast');
// });
//
// //faccio scomparire il menu con .hide
// $('.close').click(function(){
//     $('.hamburger-menu').hide('fast');
// });

// 2a soluzione
//aggiungo la classe active ad hamburger-menu con addClass
$('.header-right .fa-bars').click(function(){
    $('.hamburger-menu').addClass('active');
});

//rimuovo la classe active ad hamburger-menu con removeClass
$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});
