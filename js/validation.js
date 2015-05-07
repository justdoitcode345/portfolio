var validation =  (function () {
	var init = function(){
				console.log('Инициализация модуля validation');
				_setUpListeners();
		},
		validateForm = function (form) {
			console.log('Проверяем форму');
			var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
			$.each(elements, function(index, val) {
				var element = $(val),
				pos = element.attr('qtip-position');

			if(val.length === 0){
				element.addClass('has-error');
				_createQtip(element, pos);
				valid = false;
			}
		}); //each
		return valid;
		},
		_setUpListners = function () { // Прослушивает все события
			$('form').on('keydown', '.has-error', _removeError); //отключаем красную обводку у элементов формы
			$('form').on('reset', _clearform); //при сбросе формы удаляем так же тултипы, обводку, сообщение от свервера
		},
		_removeError = function() { // Отключает красное форомление элементов формы
			console.log('Красная обводка у элементов форм удалена');
			$(this).removeClass('has-error');
		},
		_clearForm = function (form) { // Очищает форму
			console.log('Очищаем форму');

			var form = $(this);
			form.find('.input, .textarea').trigger('hideTooltip'); // скрываем тултипы
			form.find('.has-error').removeClass('has-error'); //удаляем красное оформление формы
			form.find('.error-mes, success-mes').text('').hide(); //очищаем и прячем сообщения с сервера
		},
		_createQtip = function(element,position) { // Создает тултипы

		},
	return {
		init: init,
		validateForm: validateForm
	}


})();

validation.init();