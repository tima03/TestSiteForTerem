$(document).ready(function () {
  $('#myForm').on('submit', function (event) {
    event.preventDefault(); // Отменяем перезагрузку страницы

    // Собираем данные из формы
    var formData = {
      dropdown1: $('#dropdown1').val(),
      dropdown2: $('#dropdown2').val(),
      dropdown3: $('#dropdown3').val(),
      dropdown4: $('#dropdown4').val(),
      dropdown5: $('#dropdown5').val(),
      input1: $('#input1').val(),
      input2: $('#input2').val()
    };

    // Выводим JSON-структуру под формой
    $('#jsonOutput').html('<pre>' + JSON.stringify(formData, null, 2) + '</pre>');

    // Отправляем асинхронный GET-запрос
    $.ajax({
      url: 'handler.php', // Абстрактный обработчик
      type: 'GET',
      data: formData,
      success: function (response) {
        alert('Ответ сервера: ' + response);
      },
      error: function () {
        alert('Произошла ошибка при отправке данных.');
      }
    });

  });
});