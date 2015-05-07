var Popup = (function() {
    var _popup = $('#popup1'),

        _setUpListeners = function() {
            $('#popuprun').on('click', _popupShow);
        },

        _popupShow = function(e) {
            e.preventDefault();
            
            _popup.bPopup({
                onClose: function() {
                var _errored = $('.tooltipstered');
                _errored.tooltipster('hide');
                _errored.removeClass('controlred');
                }
            });
        }

    return {
        init: _setUpListeners
    }

})();

$(document).ready(function() {
    if ($.find('#popup1').length > 0) {
        Popup.init();
    }
});