/** @format */

const users = [
  "john@gmail.com",
  "emma@yahoo.com",
  "rahul@outlook.com",
  "neha@gmail.com",
  "alex@hotmail.com",
];

function emails(email) {
  let time = Math.floor(Math.random() * 5);
  return new Promise((res, rej) => {
    setTimeout(function () {
      let probablity = Math.floor(Math.random() * 10);
      if (probablity <= 5) {
        res(email + " was sent");
      } else {
        rej(email + " was not sent");
      }
    }, time * 1000);
  });
}

async function sentemails(users) {
  let allResponse = users.map(function (val) {
    return emails(val)
      .then((data) => {
        return data;
      })
      .catch((data) => {
        return data;
      });
  });
  let ans = await Promise.all(allResponse);
  ans.forEach((value) => {
    console.log(value);
  });
}

sentemails(users)