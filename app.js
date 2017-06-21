$(document).ready(function(){
	var limit = 4;
	$('.form-group .checkbox input').on('change', function(evt) {
		if($('.check input[type="checkbox"]:checked').length >= limit) {
			this.checked = false;
			console.log('foi')
		}
	});

	var membros = 0;
	var total = 0;

	$('.btnNext').click(function(){
		$('.nav-pills > .active').next('li').find('a').trigger('click');
		$("html, body").animate({ scrollTop: 400 }, 600);
	});
	$('.btnPrev').click(function(){
		$('.nav-pills > .active').prev('li').find('a').trigger('click');
		$("html, body").animate({ scrollTop: 400 }, 600);
	});
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper;
	var id;
	var x = 0; //initlal text box count

	$(".adc").click(function(e){ //on add input button click
		e.preventDefault();
		id = $(this).attr('id'); // $(this) refers to button that was clicked
		switch (id) {
			case '1':
			wrapper = "#docentes";
			break;
			case '2':
			wrapper = "#tecnicos";
			break;
			case '3':
			wrapper = "#voluntarios";
			break;
			case '4':
			wrapper = "#utfpr";
			break;
			case '5':
			wrapper = "#outras";
			break;
			case '6':
			wrapper = "#prorec";
			break;
			case '7':
			wrapper = "#fapibex";
			break;
			case '8':
			wrapper = "#fapibis";
			break;
			case '9':
			wrapper = "#pet";
			break;
			default:
			break;
		}
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append("<div><div class='form-group'><label>NOME COMPLETO</label><input type='text' class='form-control'></div><div class='form-group'><label>CPF</label><input type='text' class='form-control'></div><div class='form-group'><label>CARGA HORÁRIA SEMANAL</label><input type='time' class='form-control'></div><div class='form-group'><label>E-MAIL</label><input type='text' class='form-control'></div><div class='form-group'><label>FUNÇÃO</label><input type='text' class='form-control'></div><button class='btn btn-danger bnt-sm remove_field'>Remover</button><hr></div>"); //add input box
		}
		else{
			alert("Limite de membros atingido!");
		}
	});

	$(document).on('click', '.remove_field', function(e){ //user click on remove text
		e.preventDefault();
		$(this).parent('div').remove();
		x--;
	});

	$("#inputPassword").keyup(function(event){
		console.log("OLA");
		if(event.keyCode == 13){
			$("#login-ok").click();
		}
	});
});

(function ($) {
	$(function () {

		var addFormGroup = function (event) {
			event.preventDefault();

			var $formGroup = $(this).closest('.form-group');
			var $multipleFormGroup = $formGroup.closest('.multiple-form-group');
			var $formGroupClone = $formGroup.clone();

			$(this)
			.toggleClass('btn-success btn-add btn-danger btn-remove')
			.html('–');

			$formGroupClone.find('input').val('');
			$formGroupClone.find('.concept').text('Phone');
			$formGroupClone.insertAfter($formGroup);

			var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
			if ($multipleFormGroup.data('max') <= countFormGroup($multipleFormGroup)) {
				$lastFormGroupLast.find('.btn-add').attr('disabled', true);
			}
		};

		var removeFormGroup = function (event) {
			event.preventDefault();

			var $formGroup = $(this).closest('.form-group');
			var $multipleFormGroup = $formGroup.closest('.multiple-form-group');

			var $lastFormGroupLast = $multipleFormGroup.find('.form-group:last');
			if ($multipleFormGroup.data('max') >= countFormGroup($multipleFormGroup)) {
				$lastFormGroupLast.find('.btn-add').attr('disabled', false);
			}

			$formGroup.remove();
		};

		var selectFormGroup = function (event) {
			event.preventDefault();

			var $selectGroup = $(this).closest('.input-group-select');
			var param = $(this).attr("href").replace("#","");
			var concept = $(this).text();

			$selectGroup.find('.concept').text(concept);
			$selectGroup.find('.input-group-select-val').val(param);

		}

		var countFormGroup = function ($form) {
			return $form.find('.form-group').length;
		};

		$(document).on('click', '.btn-add', addFormGroup);
		$(document).on('click', '.btn-remove', removeFormGroup);
		$(document).on('click', '.dropdown-menu a', selectFormGroup);

	});
})(jQuery);
