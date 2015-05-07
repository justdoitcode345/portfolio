$(document).ready(function () {

	 $('#auth-form #login').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    $('#auth-form #password').tooltipster({
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });

	$("#auth-form").validate({
	        errorPlacement: function (error, element) {
	                $(element).tooltipster('update', $(error).text());
	                $(element).tooltipster('show');
	        },
	        success: function (label, element) {
	            $(element).tooltipster('hide');
	        },
	        rules: {
	            login: "required",
	            password: "required"
	        },
	        messages: {
	            login: "введите логин",
	            password: "введите пароль"
	        },
	        submitHandler: function() { 
	            // alert("Все поля заполнены!");
	            return false;
	             }
	    });

});
