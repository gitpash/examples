// Remember, Luke, every async function return a Promise!

const fetch = require("node-fetch");

function showGitUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  fetch(url).then(response => response.json()).then(user => {
    console.log(user.name);
    console.log(user.location);
  });
}
showGitUser("gitpash");

// do the same thing with async/await
async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user.name);
  console.log(user.location);
}
// showGithubUser("gitpash");

// do the func just resolve Promise and check this with chaining after that
async function showGithubUser(handle) {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  const user = await response.json();
  /***/ return user;
  
  // or we can just refactor a bit
  //return await response.json()
}

showGithubUser("gitpash").then(user => {
  console.log(user.name);
  console.log(user.location);
});
