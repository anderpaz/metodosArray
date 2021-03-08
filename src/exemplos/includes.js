/* Includes 
  Retorna true se o array, objeto possui o valor testado
*/

/* Retonar os objetos que retorna true no includes */

const people = [
  { id: 11, name: "Adamastor", age: 23, group: "editor" },
  { id: 47, name: "Joana", age: 28, group: "user" },
  { id: 85, name: "Mauricio", age: 34, group: "editor" },
  { id: 97, name: "Lalau", age: 74, group: "admin" }
];

const filteredUsers = people.filter((p) => {
  return p.name.includes("aur");
});

//console.log(JSON.stringify(filteredUsers));
