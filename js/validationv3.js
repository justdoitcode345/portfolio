      //message form tooltips
$('#sendmail #name').tooltipster({
        content: 'Вы не ввели имя',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#sendmail #email').tooltipster({
        content: 'Вы не ввели email',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#sendmail #messagetext').tooltipster(
{
        content: 'Ваш вопрос',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#sendmail #code').tooltipster({
        content: 'Вы не ввели код',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'right',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    //myworks form tooltips
$('#project-add #add-project-name').tooltipster({
        content: 'Введите название',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
        });
$('#project-add #filename').tooltipster({
        content: 'Вы не выбрали изображение',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#project-add #add-project-url').tooltipster({
        content: 'Ссылка на проект',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#project-add #add-project-desc').tooltipster({
        content: 'Описание проекта',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
    //authorization form
$('#auth-form #login').tooltipster({
        content: 'Введите логин',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
    });
$('#auth-form #password').tooltipster({
        content: 'Введите пароль',
        animation: 'fade',
        trigger: 'custom',
        onlyOne: false,
        position: 'left',
        offsetX: '-4',
        theme: 'tooltips-styles'
});

// блок валидации
var Validation = (function() {

    var _setUpListeners = function() {
            $('form').on('keydown', '.controlred', _removeError);
            $('form').on('reset', _clearForm);
            $('form').on('change', '#fileupload', _removeErrorUpload);
        },

        _validateForm = function(form) {



            var elements = form.find('input, textarea').not('#reset')
                .not('[type="submit"]')
                .not('[type="hidden"]')
                .not('[type="file"]'),
                valid = true;

            $.each(elements, function(index, val) {
                var element = $(val),
                    val = element.val();
                    
                if (val.length < 1) {
                    element.addClass('controlred');
                    _createTooltip(element);
                    valid = false;
                }

            });
            return valid;

        },

        _removeError = function() {
           element.removeClass('controlred');
            element.tooltipster('hide');
        },

        _clearForm = function(form) {
            var form = $('form');
            form.find('input, textarea').tooltipster('hide');
            form.find('.controlred').removeClass('controlred');
        },

        
        _removeErrorUpload = function() {
            var filename = $('#filename');
            filename.removeClass('controlred');
            filename.tooltipster('hide');
        },

        _createTooltip = function(element) {
            
            element.tooltipster('show');
            
        };

    return {
        init: _setUpListeners,
        validateForm: _validateForm,
    }

})();

//вызовы валидации для каждой формы

var ContactForm = (function() {

    var _setUpListeners = function() {
            $('#sendmail').on('submit', _submitForm);
        },

        _submitForm = function(ev) {
            ev.preventDefault();
            $('#sendmail').on('submit', Validation.validateForm($('#sendmail')));

            }
     
    return {
        init: _setUpListeners
    }

})();

var AddProjectForm = (function() {

    var _setUpListeners = function() {
            $('#project-add').on('submit', _submitForm);
        },

        _submitForm = function(ev) {
            
            ev.preventDefault();
            

            $('#project-add').on('submit', Validation.validateForm($('#project-add')));
            // if (!Validation.validateForm($('#project-add'))) 
            //         document.getElementById('errorblock').style.display = "block";

                
            }
     
    return {
        init: _setUpListeners
    }

})();




var LoginForm = (function() {
 var _setUpListeners = function() {
            $('#auth-form').on('submit', _submitForm);
        },

        _submitForm = function(ev) {
            ev.preventDefault();
            $('#auth-form').on('submit', Validation.validateForm($('#auth-form')));

            }
     
    return {
        init: _setUpListeners
    }

})();

var UploadFix = (function() {
    // Setting up listening if user has chose a file
    var _setUpListeners = function() {
            $('#fileupload').on('change', _showPlaceholder);
        },

        
        _showPlaceholder = function(ev) {
            ev.preventDefault();

            var realVal = $(this).val(),
                lastIndex = realVal.lastIndexOf('\\') + 1;

            if (lastIndex !== -1) {
                realVal = realVal.substr(lastIndex);
                $('#filename').val(realVal);
            }
        }

    return {
        init: _setUpListeners
    }

})();

var Projects = (function() {
    var _after = $('.project-item:nth-child(3n+1)'),

        _fixMargin = function() {
            _after.css("margin-left", "0");
        },

        _fixFloat = function() {
            _after.css("clear", "both");
        }

    return {
        init: _fixMargin
    }

})();


//fixes for placeholder in ie

var FixPlaceholders = (function() {
    var _fixPlaceholders = function() {
        $('input, textarea').placeholder();
    }

    return {
        init: function() {
            _fixPlaceholders();
        }
    }
})();

$(document).ready(function() {

    if ($.find('#uploadfile').length > 0) {
        UploadFix.init();
    }

    if ($.find('.project-item').length > 0) {
        Projects.init();
    }

    if ($.find('form').length > 0) {
        Validation.init();
        FixPlaceholders.init();
    }

    if ($.find('#sendmail').length > 0) {
        ContactForm.init();
    }

    if ($.find('#project-add').length > 0) {
        AddProjectForm.init();
    }

    if ($.find('#auth-form').length > 0) {
        LoginForm.init();
    }


});