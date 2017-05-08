const fetch = require("node-fetch");

// function expression
// const showGithubUser = async function(handle) {

// async work with all function types so we can use =>
const showGithubUser = async handle => {
  const url = `https://api.github.com/users/${handle}`;
  const response = await fetch(url);
  return await response.json();
};

(async () => {
  const user = await showGithubUser("gitpash");
  console.log(user.name);
  console.log(user.location);
})();

// same with class method
// define new class
class fetchGithubUser {
  // with async method
  async fetchUserData(handle) {
    const url = `https://api.github.com/users/${handle}`;
    const response = await fetch(url);
    return await response.json();
  }
}

(async () => {
  // create instance of the class called client
  const client = new fetchGithubUser()
  const user = await client.fetchUserData("gitpash");
  console.log(user.name);
  console.log(user.location);
})();