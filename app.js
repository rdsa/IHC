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
	$('.nav-pills > .active').next('li').find('a').trigger('click');
	$("html, body").animate({ scrollTop: 400 }, 600);
});
$('.btnPrev').click(function(){
	$('.nav-pills > .active').prev('li').find('a').trigger('click');
	$("html, body").animate({ scrollTop: 400 }, 600);
});

$('#butt, #prox').click(function () {
	var sum = 0;

	$('.membros').each(function() {
		sum += Number($(this).val());
		membros += Number($(this).val());
	});

	var aux = total;
	console.log(sum);
	console.log(membros);
	console.log(aux);
	if (sum != 0) {
		$("#equipe-info").empty();

	}
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