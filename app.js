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

	/*
	$('#equipe-executora input').on('change', function(evt) {
	var temp = parseInt($(this).val());



	for( i = membros; i < temp + membros ; i++ ){
	$("#equipe-info").append(
	"<label>MEMBRO " + (i + 1) + "</label>" +
	"<div class='form-group'>" +
	"<label>NOME COMPLETO</label>" +
	"<input type='text' class='form-control'>" +
	"</div>" +
	"<div class='form-group'>" +
	"<label>CPF</label>" +
	"<input type='text' class='form-control'>" +
	"</div>" +
	"<div class='form-group'>" +
	"<label>CARGA HORÁRIA SEMANAL</label>" +
	"<input type='time' class='form-control'>" +
	"</div>" +
	"<div class='form-group'>" +
	"<label>E-MAIL</label>" +
	"<input type='text' class='form-control'>" +
	"</div>" +
	"<div class='form-group'>" +
	"<label>FUNÇÃO</label>" +
	"<input type='text' class='form-control'>" +
	"</div><hr>");
};
membros += temp;
})
*/
$('.btnNext').click(function(){
	$('.nav-tabs > .active').next('li').find('a').trigger('click');
	$("html, body").animate({ scrollTop: 250 }, 600);
});

$('.btnNext').click(function () {
	var sum = 0;


	$('.membros').each(function() {
		sum += Number($(this).val());
		membros += Number($(this).val());
	});

	var aux = total;
	console.log(sum);
	console.log(membros);
	console.log(aux);
	for( i = aux; i < sum; i++ ){
		$("#equipe-info").append(
			"<label>MEMBRO " + (i + 1) + "</label>" +
			"<div class='form-group'>" +
			"<label>NOME COMPLETO</label>" +
			"<input type='text' class='form-control'>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label>CPF</label>" +
			"<input type='text' class='form-control'>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label>CARGA HORÁRIA SEMANAL</label>" +
			"<input type='time' class='form-control'>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label>E-MAIL</label>" +
			"<input type='text' class='form-control'>" +
			"</div>" +
			"<div class='form-group'>" +
			"<label>FUNÇÃO</label>" +
			"<input type='text' class='form-control'>" +
			"</div><hr>");
			total++;
		};
	});
	(function() {
		'use strict';

		function remoteModal(idModal) {
			var vm = this;
			vm.modal = $(idModal);

			if (vm.modal.length == 0) {
				return false;
			}

			if (window.location.hash == idModal) {
				openModal();
			}

			var services = {
				open: openModal,
				close: closeModal
			};

			return services;

			// method to open modal
			function openModal() {
				vm.modal.modal('show');
			}

			// method to close modal
			function closeModal() {
				vm.modal.modal('hide');
			}
		}
		Window.prototype.remoteModal = remoteModal;
	})();

	$(function() {
		window.remoteModal('#projeto-modal');
	});
});
