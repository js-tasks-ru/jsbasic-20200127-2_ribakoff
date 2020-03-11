/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let tabHead  = document.createElement('thead');
  let headTr = document.createElement('tr');
  let tabBody = document.createElement('tbody');

  let user = {};

  for (let item of items){
    let tr = document.createElement('tr');

    for (let value in item){
      let td = document.createElement('td');
      td.innerHTML = item[value];
      tr.append(td);
    }

    tabBody.append(tr);

    Object.assign(user, item);
  }

  for (let title in user){
    let td = document.createElement('td');
    td.innerHTML = title[0].toUpperCase() + title.slice(1);
    headTr.append(td);
  }
  tabHead.append(headTr);
  this.el.append(tabHead,tabBody);
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let rows = Array.from(tabBody.rows);

    if (desc){
      rows.sort((a,b) => {
        a = a.cells[column].innerHTML;
        b = b.cells[column].innerHTML;
        if (b > a) return 1;
        if (b == a) return 0;
        if (b < a) return -1;
      });
    } else {
      rows.sort((a,b) => {
        a = a.cells[column].innerHTML;
        b = b.cells[column].innerHTML;
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      });
    }

    for (row of rows){
      tabBody.append(row);
    }
  };
}
