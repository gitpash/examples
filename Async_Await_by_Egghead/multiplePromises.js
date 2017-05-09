const fetch = require("node-fetch");

async function getUserInfo(params) {
  const url = `https://api.github.com${params}`;
  const response = await fetch(url);
  return response.json();
}

// this function runs consequently which cause time debt
async function showUserAndRepos(handle) {
  const user = await getUserInfo(`/users/${handle}`);
  const repos = await getUserInfo(`/users/${handle}/repos`);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("gitpash");

// lets run same thing concurrently
// just fetch two requests same time and resolve promises
async function showMeRepos(handle) {
  const userPromise = getUserInfo(`/users/${handle}`);
  const reposPromise = getUserInfo(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}
showMeRepos("gitpash")