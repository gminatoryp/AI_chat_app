/* 
Use OOP to create message boards and users that can send messages on the
message board.

When to use dot vs bracket notation? Use brackets when the key name is stored
in a var.

In python we use __init__: instead of constructor and 'self' instead of 'this'.
*/

// const person = {
//   firstName: "Neil",
//   lastName: "M",
//   "Middle Name": "Matt",
//   age: 32,
//   0: "Zero",
//   address: {
//     city: "Irvine",
//     state: "CA",
//     format() {
//       console.log(this.city, this.state);
//       return this.city + this.state;
//     },
//   },
// };

// console.log(person["address"].format().length);

class User {
  constructor(firstName, lastName, username) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.messages = [];
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }

  sendMessage(board, title, content) {
    const msg = new Message(this, board, title, content);
    board.messages.push(msg);
    this.messages.push(msg);
    return msg;
  }
}

class Message {
  constructor(author, board, title, content) {
    this.author = author;
    this.board = board;
    this.title = title;
    this.content = content;
    this.createdAt = new Date();
  }
}

class MessageBoard {
  constructor(name, topic) {
    this.name = name;
    this.topic = topic;
    this.messages = [];
  }

  /**
   * Finds the top user based on most messages sent in THIS board.
   * @return {User} The most active user.
   */
  topUser() {
    const userMessageFrequencyTable = {
      // username1: count,
      // username2: count
    };

    let max = 0;
    let topUser = null;

    for (let i = 0; i < this.messages.length; i++) {
      const msg = this.messages[i];
      const authorUsername = msg.author.username;

      /* 
      If this username is NOT in the table, initialize count to 0
      then increment it by 1 because it's the first message by this author.
      The increment by 1 will also happen if the username IS in the table.
      */
      if (!userMessageFrequencyTable.hasOwnProperty(authorUsername)) {
        userMessageFrequencyTable[authorUsername] = 0;
      }

      let currCount = (userMessageFrequencyTable[authorUsername] += 1);

      if (currCount > max) {
        max = currCount;
        topUser = msg.author;
      }
    }

    return topUser;
  }
}

const neil = new User("Neil", "M", "NeilM");
const john = new User("John", "M", "JohnM");

const puppersMessageBoard = new MessageBoard(
  "Puppers & Doggos",
  "Woofers but no Yappers"
);

const messageBoardStonks = new MessageBoard("Stonks", "To the moon!");

john.sendMessage(
  puppersMessageBoard,
  "Dogs Need Help Too",
  "Any dogs need help?"
);

john.sendMessage(puppersMessageBoard, "Petting", "Please let me pet your dog.");
neil.sendMessage(
  puppersMessageBoard,
  "Any Shibes Around?",
  "Looking for a shibe to play with."
);

neil.sendMessage(
  messageBoardStonks,
  "Ape's Strong Together",
  "Stay strong bois, HOLD!!! We're going to the moon."
);

// console.log(john);
// console.log(puppersMessageBoard);
// console.log(neil);

console.log(puppersMessageBoard.topUser().fullName());
console.log(messageBoardStonks.topUser().fullName());
