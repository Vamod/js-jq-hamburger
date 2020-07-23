//faccio apparire il menu con .show

// $('.header-right > a > .fa-bars').click(function(){
//     $('.hamburger-menu').show('fast');
// });
//
// //faccio scomparire il menu con .hide
// $('.close').click(function(){
//     $('.hamburger-menu').hide('fast');
// });

// 2a soluzione
//aggiungo la classe active ad hamburger-menu con addClass
$('.header-right > a >.fa-bars').click(function(){
    $('.hamburger-menu').addClass('active');
});

//rimuovo la classe active ad hamburger-menu con removeClass
$('.close').click(function(){
    $('.hamburger-menu').removeClass('active');
});

// // 3a soluzione con fadeIn e fadeOut
// $('.header-right > a > .fa-bars').click(function(){
//     $('.hamburger-menu').fadeIn(200);
// });
//
// $('.close').click(function(){
//     $('.hamburger-menu').fadeOut(200);
// });
