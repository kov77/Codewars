function duplicateEncode(str) {
  let text = str.toLowerCase(); //создаём переменную для строки в нижнем регистре.

  let result = ''; //создаём переменную, в которую запишем результат выполнения цикла.

  for (var i = 0; i < text.length; i++) {
    // прохрдим циклом по всем буквам в строке.
    if (text.lastIndexOf(text[i]) === text.indexOf(text[i])) {
      // проверяем, что символы не повторяются
      result += '('; // добавляем символ '('
    } else result += ')'; // если значение повторялось, добавляем символ ')'
  }
  return result; // записываем результат в переменную result.
}
