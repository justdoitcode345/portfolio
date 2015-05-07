// 
//fix for fake upload placeholder
// 
var UploadFix = (function() {
    // Setting up listening if user has chose a file
    var _setUpListeners = function() {
            $('#fileupload').on('change', _showPlaceholder);
        },

        // adding a placeholder text
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
//вызов функций
$(document).ready(function() {	
    if ($.find('#uploadfile').length > 0) {
        UploadFix.init();
    }
});

jQuery('input[placeholder], textarea[placeholder]').placeholder();