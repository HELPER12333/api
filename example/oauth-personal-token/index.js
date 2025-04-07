require('dotenv').config();

const headers = {
  Authorization: 'Bearer ' + process.env.lip_D4UiF4a6I0nxj5rgn3HN
,
};

fetch('https://lichess.org/api/account', { headers })
  .then(res => res.json())
  .then(console.log);
