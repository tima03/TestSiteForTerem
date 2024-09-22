$(window).on('load', function () {
    $('#myModal').modal('show');
});

$(document).ready(function () {
    // Показать/скрыть блок с заголовком
    $('.btn-secondary').click(function () {
        $('#myModal').modal('hide');
    });
});