$(document).ready(function(){
	        //Скрыть PopUp при загрузке страницы    
	        PopUpHide();
	    });
	    //Функция отображения PopUp
	    function PopUpShow(){
	        $("#popup1").show();
	    }
	    //Функция скрытия PopUp
	    function PopUpHide(){
	        $("#popup1").hide();
	    }

	    function showclass() {
			$('#b-popup').attr('display', 'block');
			$('#b-popup-content').attr('display', 'block');

		}