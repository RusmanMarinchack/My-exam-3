$(function(){

$('.wrapper__slider').slick({
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
    ]
});

let typed = new Typed('.typed', {
    strings: ['Мечты о далекой Камчатке - близко.', 'Камчатке близко.', 'КАМЧАТКА'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

// forma-btm ======
$('.nav__btn').click(function() {
    $('.h-application').addClass('h-application-active');
    if($('.h-application').hasClass('h-application-active')){
        $('.h-application__btn').click(function(){
            $('.h-application').removeClass('h-application-active');
        })
    }

})

// =================== menu burger

$('.h-burger').click(function(){
    $('.n-menu').toggleClass('n-menu-active');
    $('.h-burger__span').toggleClass('span-active');
    $('.nav__btn').toggleClass('nav__btn-active');
})

$('.n-menu__link').click(function(e){
    // console.log(e.target);
    if($('.n-menu').hasClass('n-menu-active')){
        console.log(1);
        $('.h-burger__span').removeClass('span-active');
        $('.n-menu-active').removeClass('n-menu-active');
        $('.nav__btn').removeClass('nav__btn-active');
    }
})

// scroll menu =========

let nav = $('.nav')
$(document).bind('mousewheel', function(event){
    if(event.originalEvent.wheelDelta < 0){
        nav.css('top', '-70px')
    } if (event.originalEvent.wheelDelta > 0){
        nav.css('top', '0px')
    }
})

$(document).scroll(function(event) {
    let Y = window.scrollY;
    if(Y > 50){
        nav.addClass('nav-active')
    } else if(Y < 50){
        nav.removeClass('nav-active')
    } 

    // console.log(window.innerHeight);
    
    let height = window.document.body.scrollHeight - window.innerHeight;
    // console.log(height);
    let percent = (window.scrollY / height) * 100;
    // console.log(percent);
    let a = $('.nav__scroll-indicator').css('width', percent + '%');
    // // console.log(a);
})

// anchor  =========
$('.scroll-anchor').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr("href")).offset().top - 75 + "px"
    }, {
        duration: 500,
        easing: "swing"
    })
    return false
})

// paratynka ==========
let paratynka = $('.paratynka');
 $('.paratynka-btn').click(function() {
     paratynka.addClass('p-active');
     if(paratynka.hasClass('p-active')){
         $('.btn').click(function() {
            paratynka.removeClass('p-active')
         })
     } 
    if(paratynka.hasClass('p-active')){
        $('.b-img__btn').click(function () {
           paratynka.removeClass('p-active')
        })
    }
 })

// accardion =========

$(document).ready(function() {
    $('.item__triger').click(function() {
        $(this).next('.item__content').slideToggle();
        $(this).toggleClass('triger-active');

    })
})

// tabs =============
$('.tab__name').click(function (e) {
    e.preventDefault();

    $('.tab__name').removeClass('name-active')
    $(this).addClass('name-active');

    $('.t-body').removeClass('body-active')
    $($(this).attr('href')).addClass('body-active');
});

// form ====
$(function() {
    $('.btn-one').click(function(e){
        // e.preventDefault()
    
        let name = $('.name-input-one').val()
        if(name == ""){
            $('.name-input-one').focus()
            $('.name-input-one').addClass('error-active');
            return false;
        }

        let nummber = $('.number-input-one').val()
        if(nummber == ""){
            $('.number-input-one').focus()
            $('.number-input-one').addClass('error-active');
            return false;
        }
        let radio = $('.input__radio-one');
        radio.each(function(e){
        if(e.radio != "checked"){
            $('.input__radio-one').addClass('error-active');
            return false;
        }
    })

        let date = $('.date__input-one').val()
        if(date == ""){
            $('.date__input-one').focus()
            $('.date__input-one').addClass('error-active');
            return false;
            // alert(10)
        }

        let comment = $('.coment__input-one').val()
        if(comment == ""){
            $('.coment__input-one').focus()
            $('.coment__input-one').addClass('error-active');
            return false;
            // alert(10)
        }
        const dataString = 'name='+ name + '&email=' + email;
        $.ajax({
            method: 'POST',
            url: "https://www.google.com.ua/?hl=ru",
            data: dataString,
            success: function(){
                $('.form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Submitted!</h2>")
                .append("<p>We will be in touch soon.</p>")
                .hide()
                .fadeIn(1500, function() {
                  $('#message').append("<img id='checkmark' src='images/check.png' />");
                });
            }
        })
        return false
    })


    $('.btn-two').click(function(e){
        // e.preventDefault()
    
        let name = $('.name-input-two').val()
        if(name == ""){
            $('.name-input-two').focus()
            $('.name-input-two').addClass('error-active');
            return false;
            // alert(10)
        }

        let nummber = $('.number-input-two').val()
        if(nummber == ""){
            $('.number-input-two').focus()
            $('.number-input-two').addClass('error-active');
            return false;
        }
        let radio = $('.input__radio-two');
        radio.each(function(e){
        if(e.radio != "checked"){
            $('.input__radio-two').addClass('error-active');
            return false;
        }
    })

        let date = $('.date__input-two').val()
        if(date == ""){
            $('.date__input-two').focus()
            $('.date__input-two').addClass('error-active');
            return false;
        }

        let comment = $('.coment__input-two').val()
        if(comment == ""){
            $('.coment__input-two').focus()
            $('.coment__input-two').addClass('error-active');
            return false;
        }
    })
})
$(function(){
    $('.c-form__btn').click(function(){
        let mail = $('.c-form__input').val();
        if(mail == ""){
            $('.c-form__input').focus();
            $('.c-form__input').addClass('error-active');
            return false;
        }
    })
})


let logo = $('.nav__logo');

let logoOne = '<svg class="nav__icon"><use xlink:href="./img/svg/sprite.svg#logo"></use></svg>';
let logoTwo = '<img src="./img/svg/logo2.svg" alt="logo" class="nav__icon">';

logo.bind('click', function(){
    if(localStorage.getItem('logo') === '1'){
        localStorage.removeItem('logo');
    } else {
        localStorage.setItem('logo', '1');
    }
    addClassLogo()
})

function addClassLogo(){
    try{
        if(localStorage.getItem('logo') === '1'){
            logo.html(logoTwo);
    } else {
        logo.removeClass('logo-two');
        logo.html(logoOne);
    }
} catch (err){}
}
addClassLogo()

})

