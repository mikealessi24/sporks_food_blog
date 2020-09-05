let users = [
  {
    id: 1,
    firstname: "Michael",
    lastname: "Alessi",
    username: "mikealessi24",
    password: "mike",
  },
  {
    id: 2,
    firstname: "Ally",
    lastname: "Adams",
    username: "Aadams1",
    password: "1234",
  },
  {
    id: 3,
    firstname: "Brandon",
    lastname: "Booker",
    username: "Bbook2",
    password: "hello",
  },
  {
    id: 4,
    firstname: "Charlotte",
    lastname: "Carr",
    username: "Ccarr",
    password: "1234",
  },
  {
    id: 5,
    firstname: "Donald",
    lastname: "Dawson",
    username: "Ddawson",
    password: "hello",
  },
  {
    id: 6,
    firstname: "Ellen",
    lastname: "Earn",
    username: "Eearn",
    password: "1234",
  },
];

// need to change this eventually
function getNextUserId() {
  return users[users.length - 1].id + 1;
}

module.exports = { users, getNextUserId };
