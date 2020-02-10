/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let peopleFilter = '';

  data.filter( people => people.age <= age )
      .map((people, index, arr) => {
        if (index === arr.length-1) {
            peopleFilter += `${people.name}, ${people.balance}`;
            return peopleFilter;
          }
        peopleFilter += `${people.name}, ${people.balance}\n`
      })

  return peopleFilter;
}
