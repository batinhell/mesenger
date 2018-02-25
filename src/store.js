const users =  [
  // current user
  { id: 42, name: 'Bat', surname: 'Cat' },
  { id: 1, name: 'John', surname: 'Doe' },
  { id: 2, name: 'Jane', surname: 'Doe' },
  { id: 3, name: 'Sylvia', surname: 'Lane' },
  { id: 4, name: 'Terrence', surname: 'Silva' },
  { id: 5, name: 'Pedro', surname: 'Walters' },
  { id: 6, name: 'Jeanne', surname: 'Armstrong' },
  { id: 7, name: 'Christina', surname: 'Carr' },
  { id: 8, name: 'Keith', surname: 'Tucker' },
]

const about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`

export default {
  users,
  info: [
    { userId: 1, city: 'Krasnodar', age: 28, about },
    { userId: 2, city: 'Moscow', age: 22, about },
    { userId: 3, city: 'Arkhangelsk', age: 25, about },
    { userId: 4, city: 'Sochi', age: 37, about },
    { userId: 5, city: 'Rostov on Don', age: 15, about },
    { userId: 6, city: 'Howemouth', age: 43, about },
    { userId: 7, city: 'Wisokyburgh', age: 43, about },
    { userId: 8, city: 'South Elvis', age: 43, about },
  ],
  messages: [
    { chatId: 1, user: users[0], text: 'Lorem ipsum dolor sit amen1' },
    { chatId: 1, user: users[0], text: 'Lorem ipsum dolor sit amen2' },
    { chatId: 1, user: users[0], text: 'Lorem ipsum dolor sit amen3' },
    { chatId: 4, user: users[4], text: 'Lorem ipsum dolor sit amen' },
    { chatId: 1, user: users[1], text: 'Lorem ipsum dolor sit amen' },
    { chatId: 1, user: users[1], text: 'Lorem ipsum dolor sit amen4' },
    { chatId: 4, user: users[4], text: 'Lorem ipsum dolor sit amen' },
    { chatId: 4, user: users[4], text: 'Lorem ipsum dolor sit amen' },
    { chatId: 4, user: users[0], text: 'Lorem ipsum dolor sit amen' },
    { chatId: 1, user: users[1], text: 'Lorem ipsum dolor sit amen5' },
  ]
}
