$(document).ready(function(){
	$("#inputPassword").keyup(function(event){
		if(event.keyCode == 13){
			$("#login-ok").click();
		}
	});

	var limit = 4;
	$('.form-group .checkbox input').on('change', function(evt) {
		if($('.check input[type="checkbox"]:checked').length >= limit) {
			this.checked = false;
		}
	});

	$('.btnNext').click(function(){
		$('.nav-pills > .active').next('li').find('a').trigger('click');
		$("html, body").animate({ scrollTop: 400 }, 600);
	});
	$('.btnPrev').click(function(){
		$('.nav-pills > .active').prev('li').find('a').trigger('click');
		$("html, body").animate({ scrollTop: 400 }, 600);
	});

	var max_fields = 10; //max
	var wrapper;
	var id;
	var x = 0;

	$(".adc").click(function(e){
		e.preventDefault();
		id = $(this).attr('id');
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
		if(x < max_fields){
			x++;
			$(wrapper).append("<div><div class='form-group'><label>NOME COMPLETO</label><input type='text' class='form-control'></div><div class='form-group'><label>CPF</label><input type='text' class='form-control'></div><div class='form-group'><label>CARGA HORÁRIA SEMANAL</label><input type='time' class='form-control'></div><div class='form-group'><label>E-MAIL</label><input type='text' class='form-control'></div><div class='form-group'><label>FUNÇÃO</label><input type='text' class='form-control'></div><div class='clearfix'><button class='btn btn-danger bnt-sm remove_field pull-right'>Remover</button></div><hr></div>"); //add input box
		}
		else{
			alert("Limite de membros atingido!");
		}
	});

	$(document).on('click', '.remove_field', function(e){
		e.preventDefault();
		var pi = $(this).parent('div')
		pi.parent('div').remove();
		pi.remove();
		x--;
	});

	var y = 0;

	$(".prc").click(function(e){
		e.preventDefault();
		if(y < max_fields){
			y++;
			$('#parceria').append("<div class='parc'><div class='row'><div class='col-lg-6'><label>NOME DA ORGANIZAÇÃO</label><div class='row'><div class='col-xs-12'><div class='form-group'><input type='text' class='form-control'/></div></div></div></div><div class='col-lg-6'><label>CONTRAPARTIDA OFERECIDA</label><div class='row'><div class='col-xs-10'><div class='form-group'><input type='text' class='form-control'/></div></div><div class='col-xs-2'><div class='form-group'><div class='btn btn-danger remove_parc'><span class='glyphicon glyphicon-remove'></span></div></div></div></div></div></div><hr/></div>"); //add input box
		}
		else{
			alert("Limite de parcerias atingido!");
		}
	});

	$(document).on('click', '.remove_parc', function(e){
		e.preventDefault();
		$(this).closest('.parc').remove();
		y--;
	});
});
