// Função de clicar no ícone adicionar, pega o valor do input e adiciona-lo na UL do html

$("i").on('click', function enviar() {
    if ( $("#item").val() == "" || $("#item").val().length > 19){
        $("input").focus()
    }else{
        $("ul").append('<li><span></span> ' + $("#item").val() + '</li>');
        $("#item").val("");

        // Esse for adiciona cor a cada item par

        for(var i = 0; i < $('li').length; i++){

            var selecItem = $('li')[i]
        
            if(i % 2 == 0 ){

                selecItem.style.backgroundColor = "#e7e7e7"

            }
        }
    }
});

// Enviar o valor do input ao apertar a tecla Enter (13)

$(document).keypress(function (e) { 
    if(e.which == 13){
        $("i").click()
    }
});

// Função de aparecer o ícone de lixo 

$(document).on('mouseenter','li', function () { 

    $(this).fadeIn('slow', function () {

        $('span', this).addClass("fas fa-trash lixeiraEstilo");

    })


});

$(document).on('mouseleave','li', function () { 

        $('span', this).removeClass("fas fa-trash lixeiraEstilo");

});

//Função para remover o Li, quando clicar no ícone de lixo

$(document).on('click','span',  function () {

    $(this).parent('li').fadeOut('slow', function(){

        $(this).parent('li').remove();

    });

})

// Função de adicionar estilo riscado ao clicar sobre o objetivo, quando clicar sobre ele 

var itemObjetivo = $('li')

$(document).on('click','li', function () {

    if(itemObjetivo){
        $(this).addClass('riscarObjetivo')
    }else{
        $(this).removeClass('riscarObjetivo')
    }

    itemObjetivo = !itemObjetivo //Nega o item, alterando o valor do mesmo

})