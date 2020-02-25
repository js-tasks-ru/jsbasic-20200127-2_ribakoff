/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableTr = table.querySelectorAll('tbody tr');
  for (let tr of tableTr){
    let atr = tr.lastElementChild.dataset.available;
    let gender = tr.lastElementChild.previousElementSibling.innerHTML;
    let age = +tr.firstElementChild.nextElementSibling.innerHTML;

    if (!atr) tr.setAttribute('hidden', true);

    if (atr === 'true') tr.classList.add('available');
    else tr.classList.add('unavailable');

    if (gender === 'm') tr.classList.add('male');
    else tr.classList.add('female');

    if (age < 18) tr.style.textDecoration = 'line-through';
  }
}
