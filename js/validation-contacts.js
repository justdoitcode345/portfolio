$(document).ready(function () {
    // initialize tooltipster on text input elements
    $('#sendmail #name').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#sendmail #email').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#sendmail #messagetext').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#sendmail #code').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    
$("form").validate({
            errorPlacement: function (error, element) {
                    $(element).tooltipster('update', $(error).text());
                    $(element).tooltipster('show');
                    $(element).addClass('controlred');
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
                $(element).removeClass('controlred');
            },
            rules: {
                name: "required",
                email: {email:true, required: true},
                text: "required",
                confirmation: "required" 
            },
            messages: {
                name: "Вы не ввели имя",
                email: "Вы не ввели email",
                text: "Ваш вопрос",
                confirmation: "Вы не ввели код"
            },
            submitHandler: function(form) { 
                alert("сообщение отправлено");
                return false;
                 }
    });

    $('#buttonclear').on('click', function () {
       var _errored = $('.tooltipstered');
       _errored.tooltipster('hide');
       _errored.removeClass('controlred');
    });

});

