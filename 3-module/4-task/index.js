/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];
  users.map(user => names.push(user.name));
  return names;
}
