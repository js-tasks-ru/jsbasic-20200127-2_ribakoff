/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  friends.map(item => {
    let li = document.createElement('li');
    li.innerHTML = item.firstName + ' ' + item.lastName;
    ul.append(li);
  });
  return ul;
}
