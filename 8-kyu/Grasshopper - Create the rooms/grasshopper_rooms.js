/*
Escape the room
You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).
*/

//Solution:

const rooms = {
  firstRoom: {
    name: 'Saw I',
    description: 'Easy level',
    completed: true,
  },
  secondRoom: {
    name: 'Saw II',
    description: 'Medium level',
    completed: false,
  },
  thirdRoom: {
    name: 'Saw III',
    description: 'Hardcore level',
    completed: false,
  },
}
