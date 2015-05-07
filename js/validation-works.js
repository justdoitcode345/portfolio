$(document).ready(function () {
	$('#project-add #add-project-name').tooltipster({
	        animation: 'fade',
	        trigger: 'custom',
	        onlyOne: false,
	        position: 'left',
	        offsetX: '-4',
	        theme: 'tooltips-styles'
	    });
    $('#project-add #filename').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#project-add #add-project-url').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#project-add #add-project-desc').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });

var _validation =	$("#project-add").validate({
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
        image: "required",
        link: "required",
        description: "required"
    },
    messages: {
        name: "введите название",
        image: "Вы не выбрали изображение",
        link: "ссылка на проект",
        description: "описание проекта"
    },
    submitHandler: function() { 
        alert("проект добавлен");
        return false;
         }
    });
});