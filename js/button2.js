$(document).ready(function () {
  var swapped = false;

  $('.btn-success').click(function () {
    var firstBlock = $('.row:nth-child(2) .color1');  // Первый блок во втором ряду
    var secondBlock = $('.row:nth-child(2) .color2'); // Второй блок во втором ряду

    if (!swapped) {
      // Меняем блоки местами
      firstBlock.before(secondBlock);
    } else {
      // Возвращаем блоки на место
      secondBlock.before(firstBlock);
    }

    swapped = !swapped;  // Меняем флаг, чтобы отслеживать текущее состояние
  });
});
